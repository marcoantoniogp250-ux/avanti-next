'use client';
import { useState } from 'react';
import { faqData, getResponse } from '../data/faq';

const WHATSAPP = 'https://wa.me/5521992340607?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20planos%20de%20sa%C3%BAde.';

export default function Duvidas() {
    const [openItems, setOpenItems] = useState({});
    const [catAtiva, setCatAtiva] = useState('Todas');
    const [messages, setMessages] = useState([
        { text: 'Olá! 👋 Sou o assistente da Avanti Corretora. Posso ajudar com dúvidas sobre planos de saúde, carência, coberturas e muito mais! Como posso ajudar?', type: 'bot' },
    ]);
    const [input, setInput] = useState('');

    const toggleFaq = (key) => {
        setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const sendMessage = () => {
        if (!input.trim()) return;
        const userMsg = input.trim();
        setMessages(prev => [...prev, { text: userMsg, type: 'user' }]);
        setInput('');
        setTimeout(() => {
            const response = getResponse(userMsg);
            setMessages(prev => [...prev, { text: response, type: 'bot' }]);
        }, 600);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') sendMessage();
    };

    const categorias = ['Todas', ...faqData.map(f => f.categoria)];
    const faqFiltrado = catAtiva === 'Todas' ? faqData : faqData.filter(f => f.categoria === catAtiva);

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1>Dúvidas Frequentes</h1>
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
                                        <div className="faq-item" key={key}>
                                            <button className="faq-question" onClick={() => toggleFaq(key)}>
                                                {faq.pergunta}
                                                <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
                                            </button>
                                            {isOpen && <div className="faq-answer">{faq.resposta}</div>}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>

                    {/* CHATBOT */}
                    <div className="chatbot">
                        <div className="chatbot-header">
                            <div className="avatar">🤖</div>
                            <div>
                                <strong>Assistente Avanti</strong>
                                <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>Online agora</p>
                            </div>
                        </div>
                        <div className="chatbot-messages" id="chat-messages">
                            {messages.map((msg, i) => (
                                <div key={i} className={`chat-msg ${msg.type}`}>{msg.text}</div>
                            ))}
                        </div>
                        <div className="chatbot-input">
                            <input
                                type="text"
                                placeholder="Digite sua dúvida..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <button onClick={sendMessage}>Enviar</button>
                        </div>
                    </div>

                    {/* CTA */}
                    <div style={{ textAlign: 'center', marginTop: 40 }}>
                        <p style={{ color: 'var(--cinza-6)', marginBottom: 16 }}>
                            Não encontrou sua resposta? Fale diretamente com nosso consultor!
                        </p>
                        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                            💬 Falar com Consultor no WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
