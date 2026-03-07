'use client';
import { useState } from 'react';
import { faqData } from '../data/faq';
import { whatsappLink } from '../../lib/whatsapp';
import Breadcrumb from '../../components/Breadcrumb';

export default function DuvidasClient() {
    const [openItems, setOpenItems] = useState({});
    const [catAtiva, setCatAtiva] = useState('Todas');

    const toggleFaq = (key) => {
        setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const categorias = ['Todas', ...faqData.map(f => f.categoria)];
    const faqFiltrado = catAtiva === 'Todas' ? faqData : faqData.filter(f => f.categoria === catAtiva);

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Dúvidas Frequentes' }]} />
                    <h1>Dúvidas Frequentes sobre Planos de Saúde</h1>
                    <p>Tire suas dúvidas sobre planos de saúde, carência, coberturas e muito mais.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    {/* FILTRO DE CATEGORIAS */}
                    <div className="filter-bar" style={{ justifyContent: 'center' }}>
                        {categorias.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${catAtiva === cat ? 'active' : ''}`}
                                onClick={() => setCatAtiva(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* FAQ ACCORDION */}
                    <div style={{ maxWidth: 800, margin: '0 auto' }}>
                        {faqFiltrado.map((cat, ci) => (
                            <div key={ci}>
                                <h3 style={{ marginBottom: 12, marginTop: ci > 0 ? 32 : 0, color: 'var(--dourado)' }}>
                                    {cat.categoria}
                                </h3>
                                {cat.perguntas.map((faq, fi) => {
                                    const key = `${ci}-${fi}`;
                                    const isOpen = openItems[key];
                                    return (
                                        <div className={`faq-item ${isOpen ? 'open' : ''}`} key={key}>
                                            <button className="faq-question" onClick={() => toggleFaq(key)}>
                                                {faq.pergunta}
                                                <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
                                            </button>
                                            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>{faq.resposta}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div style={{ textAlign: 'center', marginTop: 40 }}>
                        <p style={{ color: 'var(--cinza-6)', marginBottom: 16 }}>
                            Não encontrou sua resposta? Fale diretamente com nosso consultor!
                        </p>
                        <a href={whatsappLink('Olá! Tenho uma dúvida sobre planos de saúde.')} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                            💬 Falar com Consultor no WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
