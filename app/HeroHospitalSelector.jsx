'use client';
import { useState } from 'react';
import Link from 'next/link';
import { whatsappLink } from '../lib/whatsapp';

const FEATURED = [
    { id: 'copa-dor',    label: "Copa D'Or",    sub: 'Copacabana' },
    { id: 'copa-star',   label: 'Copa Star',    sub: 'Copacabana' },
    { id: 'samaritano',  label: 'Samaritano',   sub: 'Botafogo' },
    { id: 'norte-dor',   label: "Norte D'Or",   sub: 'Zona Norte' },
    { id: 'niteroi-dor', label: "Niterói D'Or", sub: 'Niterói' },
    { id: 'prontobaby',  label: 'Prontobaby',   sub: 'Barra · Botafogo' },
];

export default function HeroHospitalSelector({ hospitalCoverage, wpCota }) {
    const [selected, setSelected] = useState(null);

    const hospital  = FEATURED.find(h => h.id === selected);
    const operadoras = selected ? (hospitalCoverage[selected] ?? []) : [];

    const wpHospital = hospital
        ? whatsappLink(`Olá! Gostaria de um plano de saúde que cubra o ${hospital.label}. Pode me ajudar?`)
        : wpCota;

    const toggle = (id) => setSelected(prev => (prev === id ? null : id));

    return (
        <div className="hero-v2-center">
            <div className="hero-v2-badge">+5.000 famílias atendidas no RJ</div>
            <h1 className="hero-v2-title">O Melhor Plano de Saúde para Você e Sua Família</h1>

            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', marginTop: 8, marginBottom: 14 }}>
                Qual hospital você quer na sua rede?
            </p>

            {/* HOSPITAL CHIPS */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 20 }}>
                {FEATURED.map(h => {
                    const active = selected === h.id;
                    return (
                        <button
                            key={h.id}
                            onClick={() => toggle(h.id)}
                            style={{
                                padding: '7px 14px',
                                borderRadius: 50,
                                border: `2px solid ${active ? 'var(--dourado)' : 'rgba(255,255,255,0.3)'}`,
                                background: active ? 'var(--dourado)' : 'rgba(255,255,255,0.07)',
                                color: active ? 'var(--azul-escuro)' : '#fff',
                                fontWeight: active ? 700 : 500,
                                fontSize: '0.8rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                lineHeight: 1.3,
                            }}
                        >
                            🏥 {h.label}
                            <span style={{ fontSize: '0.7rem', opacity: 0.65, marginLeft: 4 }}>({h.sub})</span>
                        </button>
                    );
                })}
            </div>

            {/* RESULT PANEL — shown when a hospital is selected */}
            {selected && (
                <div style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(187,140,59,0.45)',
                    borderRadius: 12,
                    padding: '16px 20px',
                    marginBottom: 16,
                    textAlign: 'left',
                    maxWidth: 440,
                    margin: '0 auto 16px',
                }}>
                    {operadoras.length > 0 ? (
                        <>
                            <p style={{ color: 'var(--dourado-claro)', fontWeight: 700, fontSize: '0.83rem', marginBottom: 10 }}>
                                ✅ {hospital.label} é coberto por {operadoras.length} operadora{operadoras.length !== 1 ? 's' : ''}:
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                                {operadoras.map(op => (
                                    <span key={op} style={{
                                        background: 'rgba(255,255,255,0.18)',
                                        color: '#fff',
                                        borderRadius: 4,
                                        padding: '3px 10px',
                                        fontSize: '0.77rem',
                                        fontWeight: 600,
                                    }}>
                                        {op}
                                    </span>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p style={{ color: 'var(--dourado-claro)', fontSize: '0.83rem', marginBottom: 10 }}>
                            🏥 Fale com nosso corretor para verificar a cobertura desse hospital.
                        </p>
                    )}
                    <a
                        href={wpHospital}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-whatsapp"
                        style={{ width: '100%', justifyContent: 'center', display: 'flex', fontSize: '0.88rem', padding: '11px 0' }}
                    >
                        💬 Quero plano que cubra o {hospital.label}
                    </a>
                </div>
            )}

            {/* GENERIC CTA — always visible */}
            {!selected && (
                <a href={wpCota} target="_blank" rel="noreferrer" className="hero-v2-cta">
                    Cotar agora — Grátis
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <circle cx="11" cy="11" r="11" fill="currentColor" fillOpacity=".2" />
                        <path d="M8 11h6M11 8l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            )}

            <div className="hero-v2-trust" style={{ marginTop: selected ? 12 : 16 }}>
                <span>Sem carência para urgência</span>
                <span>15% OFF para CNPJ</span>
                <span>Resposta em minutos</span>
            </div>

            <Link
                href="/hospitais"
                style={{ display: 'block', marginTop: 10, color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', textDecoration: 'underline' }}
            >
                Ver todos os hospitais credenciados →
            </Link>
        </div>
    );
}
