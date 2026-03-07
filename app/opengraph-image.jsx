import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Avanti Corretora | Planos de Saúde no Rio de Janeiro';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0d2540 0%, #163854 60%, #1a4a70 100%)',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Círculo decorativo fundo */}
                <div
                    style={{
                        position: 'absolute',
                        top: -120,
                        right: -120,
                        width: 500,
                        height: 500,
                        borderRadius: '50%',
                        background: 'rgba(187,140,59,0.08)',
                        display: 'flex',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: -80,
                        left: -80,
                        width: 350,
                        height: 350,
                        borderRadius: '50%',
                        background: 'rgba(187,140,59,0.06)',
                        display: 'flex',
                    }}
                />

                {/* Faixa dourada superior */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 6,
                        background: 'linear-gradient(90deg, #BB8C3B, #e0b96a, #BB8C3B)',
                        display: 'flex',
                    }}
                />

                {/* Logo / ícone */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 20,
                        marginBottom: 36,
                    }}
                >
                    <div
                        style={{
                            width: 72,
                            height: 72,
                            borderRadius: 16,
                            background: '#BB8C3B',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 40,
                            fontWeight: 900,
                            color: '#163854',
                        }}
                    >
                        A
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: 32, fontWeight: 900, color: '#ffffff', letterSpacing: 4 }}>
                            AVANTI
                        </span>
                        <span style={{ fontSize: 13, color: '#BB8C3B', letterSpacing: 3, fontWeight: 600 }}>
                            CORRETORA DE SAÚDE
                        </span>
                    </div>
                </div>

                {/* Headline */}
                <div
                    style={{
                        fontSize: 52,
                        fontWeight: 800,
                        color: '#ffffff',
                        textAlign: 'center',
                        lineHeight: 1.2,
                        maxWidth: 860,
                        marginBottom: 20,
                    }}
                >
                    Planos de Saúde no
                    {' '}
                    <span style={{ color: '#e0b96a' }}>Rio de Janeiro</span>
                </div>

                {/* Subtítulo */}
                <div
                    style={{
                        fontSize: 22,
                        color: 'rgba(255,255,255,0.7)',
                        textAlign: 'center',
                        maxWidth: 700,
                        marginBottom: 44,
                        lineHeight: 1.5,
                    }}
                >
                    Amil · SulAmérica · Bradesco · Porto Seguro · Unimed · NotreDame
                </div>

                {/* Badges */}
                <div style={{ display: 'flex', gap: 16 }}>
                    {['🏆 +5.000 famílias', '📊 Cotação Gratuita', '🏥 +200 hospitais'].map((badge) => (
                        <div
                            key={badge}
                            style={{
                                background: 'rgba(187,140,59,0.15)',
                                border: '1px solid rgba(187,140,59,0.4)',
                                borderRadius: 50,
                                padding: '10px 22px',
                                fontSize: 17,
                                color: '#e0b96a',
                                fontWeight: 600,
                                display: 'flex',
                            }}
                        >
                            {badge}
                        </div>
                    ))}
                </div>

                {/* Faixa dourada inferior */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: 'linear-gradient(90deg, #BB8C3B, #e0b96a, #BB8C3B)',
                        display: 'flex',
                    }}
                />
            </div>
        ),
        { ...size }
    );
}
