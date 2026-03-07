'use client';
import { useEffect, useRef } from 'react';

const VERTEX = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const FRAGMENT = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform int uBlendMode;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;

#define S(a,b,t) smoothstep(a,b,t)

mat2 Rot(float a){ float s=sin(a),c=cos(a); return mat2(c,-s,s,c); }

vec2 hash(vec2 p){
  p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));
  return fract(sin(p)*43758.5453);
}

float noise(vec2 p){
  vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);
  float n=mix(
    mix(dot(-1.0+2.0*hash(i+vec2(0,0)),f-vec2(0,0)),dot(-1.0+2.0*hash(i+vec2(1,0)),f-vec2(1,0)),u.x),
    mix(dot(-1.0+2.0*hash(i+vec2(0,1)),f-vec2(0,1)),dot(-1.0+2.0*hash(i+vec2(1,1)),f-vec2(1,1)),u.x),
    u.y);
  return 0.5+0.5*n;
}

void mainImage(out vec4 o, vec2 C){
  float t = iTime * uTimeSpeed;
  vec2 uv = C / iResolution.xy;
  float ratio = iResolution.x / iResolution.y;
  vec2 tuv = uv - 0.5 + uCenterOffset;
  tuv /= max(uZoom, 0.001);
  float degree = noise(vec2(t * 0.1, tuv.x * tuv.y) * uNoiseScale);
  tuv.y *= 1.0 / ratio;
  tuv *= Rot(radians((degree - 0.5) * uRotationAmount + 180.0));
  tuv.y *= ratio;
  float ws = max(uWarpStrength, 0.001);
  float amplitude = uWarpAmplitude / ws;
  float warpTime = t * uWarpSpeed;
  tuv.x += sin(tuv.y * uWarpFrequency + warpTime) / max(amplitude, 0.001);
  tuv.y += sin(tuv.x * (uWarpFrequency * 1.5) + warpTime) / max(amplitude * 0.5, 0.001);
  float bal = uColorBalance;
  float soft = max(uBlendSoftness, 0.0);
  mat2 blendRot = Rot(radians(uBlendAngle));
  float blendCoord = (tuv * blendRot).x;
  float edge0 = -0.3 - bal - soft;
  float edge1 = 0.2 - bal + soft;
  float v0 = 0.5 - bal + soft;
  float v1 = -0.3 - bal - soft;
  vec3 layer1 = mix(uColor3, uColor2, S(edge0, edge1, blendCoord));
  vec3 layer2 = mix(uColor2, uColor1, S(edge0, edge1, blendCoord));
  float blendWeight = S(v0, v1, tuv.y);
  vec3 finalCol = mix(layer1, layer2, blendWeight);
  vec2 grainUv = uv * max(uGrainScale, 0.001);
  float grainNoise = fract(sin(dot(grainUv, vec2(12.9898, 78.233))) * 43758.5453);
  finalCol += (grainNoise - 0.5) * uGrainAmount;
  finalCol = (finalCol - 0.5) * uContrast + 0.5;
  float luma = dot(finalCol, vec3(0.2126, 0.7152, 0.0722));
  finalCol = mix(vec3(luma), finalCol, uSaturation);
  finalCol = pow(max(finalCol, 0.0), vec3(1.0 / max(uGamma, 0.001)));
  finalCol = clamp(finalCol, 0.0, 1.0);
  o = vec4(finalCol, 1.0);
}

void main(){
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  fragColor = o;
}`;

function hexToRgb(hex) {
    const h = hex.replace('#', '');
    return [
        parseInt(h.slice(0, 2), 16) / 255,
        parseInt(h.slice(2, 4), 16) / 255,
        parseInt(h.slice(4, 6), 16) / 255,
    ];
}

// Avanti colors
const C1 = '#7a5a22'; // dourado escuro — subtle warm accent
const C2 = '#1d4a6e'; // azul-claro — secondary
const C3 = '#0e2a3f'; // azul-escuro — background

export default function HeroGradient() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const canvas = document.createElement('canvas');
        canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;z-index:0;';
        container.appendChild(canvas);

        const gl = canvas.getContext('webgl2', {
            alpha: false,
            antialias: false,
            powerPreference: 'high-performance',
        });

        const fallback = () => {
            canvas.remove();
            container.style.background = `radial-gradient(120% 120% at 50% 50%, ${C1} 0%, ${C2} 55%, ${C3} 100%)`;
        };

        if (!gl) { fallback(); return; }

        const compileShader = (type, src) => {
            const s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
                console.error('Shader error:', gl.getShaderInfoLog(s));
                return null;
            }
            return s;
        };

        const vs = compileShader(gl.VERTEX_SHADER, VERTEX);
        const fs = compileShader(gl.FRAGMENT_SHADER, FRAGMENT);
        if (!vs || !fs) { fallback(); return; }

        const prog = gl.createProgram();
        gl.attachShader(prog, vs);
        gl.attachShader(prog, fs);
        gl.linkProgram(prog);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
            console.error('Program error:', gl.getProgramInfoLog(prog));
            fallback();
            return;
        }

        const vao = gl.createVertexArray();
        gl.bindVertexArray(vao);
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        const posLoc = gl.getAttribLocation(prog, 'position');
        gl.enableVertexAttribArray(posLoc);
        gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
        gl.bindVertexArray(null);

        const u = {};
        ['iTime','iResolution','uTimeSpeed','uColorBalance','uWarpStrength','uWarpFrequency',
         'uWarpSpeed','uWarpAmplitude','uBlendAngle','uBlendSoftness','uBlendMode',
         'uRotationAmount','uNoiseScale','uGrainAmount','uGrainScale','uGrainAnimated',
         'uContrast','uGamma','uSaturation','uCenterOffset','uZoom',
         'uColor1','uColor2','uColor3'].forEach(n => { u[n] = gl.getUniformLocation(prog, n); });

        gl.useProgram(prog);
        const [r1,g1,b1] = hexToRgb(C1);
        const [r2,g2,b2] = hexToRgb(C2);
        const [r3,g3,b3] = hexToRgb(C3);
        gl.uniform3f(u.uColor1, r1, g1, b1);
        gl.uniform3f(u.uColor2, r2, g2, b2);
        gl.uniform3f(u.uColor3, r3, g3, b3);
        gl.uniform1f(u.uTimeSpeed, 0.25);
        gl.uniform1f(u.uColorBalance, 0.2);
        gl.uniform1f(u.uWarpStrength, 1.2);
        gl.uniform1f(u.uWarpFrequency, 4.0);
        gl.uniform1f(u.uWarpSpeed, 1.5);
        gl.uniform1f(u.uWarpAmplitude, 60.0);
        gl.uniform1f(u.uBlendAngle, 30.0);
        gl.uniform1f(u.uBlendSoftness, 0.08);
        gl.uniform1i(u.uBlendMode, 0);
        gl.uniform1f(u.uRotationAmount, 400.0);
        gl.uniform1f(u.uNoiseScale, 2.0);
        gl.uniform1f(u.uGrainAmount, 0.06);
        gl.uniform1f(u.uGrainScale, 2.0);
        gl.uniform1f(u.uGrainAnimated, 0.0);
        gl.uniform1f(u.uContrast, 1.4);
        gl.uniform1f(u.uGamma, 1.0);
        gl.uniform1f(u.uSaturation, 1.1);
        gl.uniform2f(u.uCenterOffset, 0.0, 0.0);
        gl.uniform1f(u.uZoom, 0.9);

        const updateSize = () => {
            const rect = container.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const w = Math.max(1, Math.floor(rect.width));
            const h = Math.max(1, Math.floor(rect.height));
            canvas.width = Math.floor(w * dpr);
            canvas.height = Math.floor(h * dpr);
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.useProgram(prog);
            gl.uniform2f(u.iResolution, canvas.width, canvas.height);
        };

        const ro = new ResizeObserver(updateSize);
        ro.observe(container);
        updateSize();

        let rafId;
        const startTime = performance.now();

        const render = (now) => {
            const t = (now - startTime) * 0.001;
            gl.useProgram(prog);
            gl.uniform1f(u.iTime, t);
            gl.bindVertexArray(vao);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
            gl.bindVertexArray(null);
        };

        if (prefersReduced) {
            render(performance.now());
        } else {
            const loop = (now) => {
                render(now);
                rafId = requestAnimationFrame(loop);
            };
            rafId = requestAnimationFrame(loop);

            const onVisibility = () => {
                if (document.hidden) {
                    cancelAnimationFrame(rafId);
                } else {
                    rafId = requestAnimationFrame(loop);
                }
            };
            document.addEventListener('visibilitychange', onVisibility);
        }

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            ro.disconnect();
            if (container.contains(canvas)) container.removeChild(canvas);
            gl.deleteProgram(prog);
            gl.deleteVertexArray(vao);
            gl.deleteBuffer(buf);
        };
    }, []);

    return <div ref={containerRef} className="hero-gradient-bg" aria-hidden="true" />;
}
