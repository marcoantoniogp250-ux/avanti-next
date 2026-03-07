'use client';
import { useState } from 'react';

const TESTIMONIALS = [
    { name: 'Mariana S.', age: 34, bairro: 'Botafogo', text: 'Consegui o plano certo em menos de 10 minutos pelo WhatsApp. Atendimento excepcional, corretor super atencioso!' },
    { name: 'Carlos F.', age: 47, bairro: 'Niterói', text: 'Fiz portabilidade sem burocracia nenhuma e economizei R$180 por mês mantendo o mesmo plano. Recomendo!' },
    { name: 'Fernanda R.', age: 29, bairro: 'Barra da Tijuca', text: 'Incluí toda a família com acesso ao Copa D\'Or. Processo super fácil e rápido. Nota 10!' },
    { name: 'Roberto M.', age: 52, bairro: 'Tijuca', text: 'O corretor me explicou cada detalhe, sem enrolação. Encontrei o plano ideal para minha faixa etária.' },
    { name: 'Ana P.', age: 38, bairro: 'Ipanema', text: 'Tenho MEI e consegui 15% de desconto. Em 5 minutos já tinha minha cotação com 3 opções de plano.' },
];

const CARD_COLORS = ['#F5C97A', '#7ECAB2', '#B09FE2', '#F08978', '#7AB5E8'];
const BASE_ROTATIONS = [-10, -5, 0, 5, 10];

function Stars() {
    return (
        <div className="tc-fan-stars">
            {[1,2,3,4,5].map(i => (
                <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#c47a1a">
                    <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"/>
                </svg>
            ))}
        </div>
    );
}

export default function TestimonialsCarousel() {
    const [activeIdx, setActiveIdx] = useState(4);

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="tc-fan-layout">
                    <div className="tc-fan-left">
                        <h2>Para quem quer saúde de qualidade no Rio</h2>
                        <p>Veja o que nossos clientes dizem sobre a Avanti.</p>
                        <div className="tc-fan-hint">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Clique nos cartões
                        </div>
                    </div>

                    <div className="tc-fan-stack-outer">
                        {TESTIMONIALS.map((t, i) => {
                            const isActive = i === activeIdx;
                            const rot = isActive ? 0 : BASE_ROTATIONS[i];
                            return (
                                <div
                                    key={i}
                                    className={`tc-fan-card${isActive ? ' tc-fan-active' : ''}`}
                                    style={{
                                        background: CARD_COLORS[i],
                                        '--rot': `${rot}deg`,
                                        zIndex: isActive ? 20 : i + 1,
                                        left: `${i * 17}%`,
                                    }}
                                    onClick={() => setActiveIdx(i)}
                                >
                                    <Stars />
                                    <p className="tc-fan-quote">&ldquo;{t.text}&rdquo;</p>
                                    <div className="tc-fan-author">
                                        <div className="tc-fan-avatar">{t.name[0]}</div>
                                        <div className="tc-fan-author-info">
                                            <strong>{t.name}, {t.age}</strong>
                                            <span>{t.bairro}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
