'use client';
import { useState } from 'react';

const PLANS = [
    {
        id: 'pessoa-fisica',
        label: 'Pessoa Física',
        desc: 'Plano individual com cobertura completa, acesso à rede credenciada e carência reduzida para urgências.',
        highlights: ['Consultas e exames', 'Internações', 'Urgência sem carência', 'Reembolso disponível'],
        color: '#163854',
    },
    {
        id: 'familia',
        label: 'Família',
        desc: 'Proteja cônjuge e filhos em um único plano. Inclua dependentes até 21 anos sem custo de adesão.',
        highlights: ['Cônjuge e filhos', 'Maternidade credenciada', 'Pediatria especializada', 'Preço por faixa etária'],
        color: '#BB8C3B',
    },
    {
        id: 'mei',
        label: 'MEI / Autônomo',
        desc: 'Tenha CNPJ? Garanta 15% de desconto no plano com as mesmas coberturas de um plano empresarial.',
        highlights: ['15% OFF garantido', 'Plano coletivo por adesão', 'Sem carência para urgência', 'Ativação rápida'],
        color: '#1e8449',
    },
    {
        id: 'empresarial',
        label: 'Empresarial',
        desc: 'Para empresas com 2 ou mais vidas. Condições especiais, sem carência e com atendimento corporativo.',
        highlights: ['A partir de 2 vidas', 'Sem carência', 'Fatura única', 'Gestão simplificada'],
        color: '#1a5276',
    },
    {
        id: 'senior',
        label: 'Sênior (60+)',
        desc: 'Planos especializados para maiores de 60 anos com acesso a geriatria, cardiologia e oncologia.',
        highlights: ['Geriatria e cardiologia', 'Oncologia incluída', 'Rede hospitalar premium', 'Suporte dedicado'],
        color: '#6d3b47',
    },
];

export default function PlanTypesPanel({ wpCota }) {
    const [active, setActive] = useState(0);
    const plan = PLANS[active];

    return (
        <section className="plantypes-section">
            <div className="container">
                <div className="section-header">
                    <h2>Mais opções para cada perfil</h2>
                    <p>Personalize sua cobertura de acordo com sua situação</p>
                </div>
                <div className="plantypes-layout">
                    <div className="plantypes-tabs">
                        {PLANS.map((p, i) => (
                            <button
                                key={p.id}
                                className={`ptab ${active === i ? 'ptab-active' : ''}`}
                                onClick={() => setActive(i)}
                            >
                                <span className="ptab-dot" />
                                <div>
                                    <strong>{p.label}</strong>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="plantypes-panel" style={{ borderTopColor: plan.color }}>
                        <div className="pp-header" style={{ background: plan.color }}>
                            <h3>{plan.label}</h3>
                        </div>
                        <p className="pp-desc">{plan.desc}</p>
                        <ul className="pp-highlights">
                            {plan.highlights.map((h, i) => (
                                <li key={i}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill={plan.color} fillOpacity=".12"/><path d="M5.5 9l2.5 2.5L12.5 6" stroke={plan.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    {h}
                                </li>
                            ))}
                        </ul>
                        <a href={wpCota} target="_blank" rel="noreferrer" className="btn btn-primary pp-cta">
                            Cotar plano {plan.label}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
