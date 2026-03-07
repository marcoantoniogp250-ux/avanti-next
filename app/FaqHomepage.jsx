'use client';
import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const TABS = ['Planos', 'Cobertura', 'Contratação'];

const FAQ = {
    'Planos': [
        { q: 'Qual a diferença entre enfermaria e apartamento?', a: 'No plano Enfermaria, a internação é em quarto compartilhado. No plano Apartamento, você tem quarto individual com banheiro privativo. O apartamento oferece mais conforto e privacidade.' },
        { q: 'O que é coparticipação?', a: 'Coparticipação é quando você paga uma pequena parte de cada procedimento utilizado (consulta, exame, etc.), além da mensalidade. Planos com coparticipação costumam ter mensalidades mais baixas.' },
        { q: 'Posso incluir dependentes no plano?', a: 'Sim! Você pode incluir cônjuge, filhos e dependentes até 21 anos (ou 24 anos se universitário). Os valores seguem a tabela por faixa etária do plano.' },
        { q: 'Quanto custa um plano de saúde no RJ?', a: 'Os preços variam conforme operadora, tipo de plano, acomodação e faixa etária. Temos opções a partir de R$199,90/mês. Para uma cotação personalizada, fale com nosso consultor no WhatsApp.' },
    ],
    'Cobertura': [
        { q: 'Quais procedimentos são cobertos?', a: 'Todos os planos cobrem os procedimentos obrigatórios pelo Rol da ANS: consultas, exames, cirurgias, internações, tratamentos oncológicos, partos e urgências/emergências.' },
        { q: 'Há carência para urgência e emergência?', a: 'Não! Por lei, todos os planos de saúde devem cobrir urgências e emergências sem carência, a partir de 24 horas após a contratação.' },
        { q: 'Os hospitais Copa D\'Or e Samaritano são credenciados?', a: 'Sim! Trabalhamos com operadoras que credenciam os principais hospitais do Rio, incluindo Copa D\'Or, Copa Star, Samaritano, Norte D\'Or, Prontobaby e muito mais.' },
    ],
    'Contratação': [
        { q: 'Quais documentos são necessários?', a: 'Para a contratação são necessários: RG ou CNH, CPF, comprovante de residência e cartão do SUS. Para planos empresariais, também é necessário o contrato social.' },
        { q: 'Como funciona a portabilidade de carência?', a: 'Se você está há mais de 2 anos no plano atual e está em dia com os pagamentos, pode fazer a portabilidade para um plano equivalente sem cumprir novas carências. Cuidamos de todo o processo.' },
        { q: 'Como recebo minha cotação?', a: 'Você recebe a tabela de preços diretamente pelo WhatsApp em menos de 5 minutos, com opções de planos comparadas lado a lado para facilitar sua escolha.' },
    ],
};

const allFaqs = Object.values(FAQ).flat();

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
    })),
};

export default function FaqHomepage() {
    const [tab, setTab] = useState('Planos');
    const [open, setOpen] = useState(null);

    return (
        <section className="faq-hp-section">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container">
                <div className="faq-hp-layout">
                    <div className="faq-hp-left">
                        <h2>Dúvidas Frequentes</h2>
                        <div className="faq-hp-tabs">
                            {TABS.map(t => (
                                <button
                                    key={t}
                                    className={`fhp-tab ${tab === t ? 'fhp-tab-active' : ''}`}
                                    onClick={() => { setTab(t); setOpen(null); }}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                        <Link href="/duvidas" className="faq-all-link">
                            Ver todas as dúvidas
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </Link>
                    </div>
                    <div className="faq-hp-right">
                        {FAQ[tab].map((item, i) => (
                            <div key={i} className={`faq-item ${open === i ? 'faq-open' : ''}`}>
                                <button
                                    className="faq-q"
                                    onClick={() => setOpen(open === i ? null : i)}
                                    aria-expanded={open === i}
                                >
                                    <span>{item.q}</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="faq-icon" aria-hidden="true"><path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </button>
                                <div className="faq-a-wrap">
                                    <p className="faq-a">{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
