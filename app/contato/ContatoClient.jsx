'use client';
import { useState } from 'react';
import { operadoras } from '../data/operadoras';
import { whatsappLink } from '../../components/WhatsAppButton';

const WHATSAPP_BASE = 'https://wa.me/5521992340607';

export default function ContatoClient() {
    const [form, setForm] = useState({ nome: '', telefone: '', operadora: '', mensagem: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const msg = `Olá! Meu nome é ${form.nome}.\nTelefone: ${form.telefone}\nInteresse: ${form.operadora || 'A definir'}\n${form.mensagem ? `Mensagem: ${form.mensagem}` : ''}`;
        window.open(whatsappLink(msg), '_blank');
    };

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1>Fale Conosco</h1>
                    <p>Estamos prontos para ajudar você a encontrar o plano ideal.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* FORMULÁRIO */}
                        <div>
                            <h2 style={{ marginBottom: 8 }}>Solicitar Cotação</h2>
                            <p style={{ color: 'var(--cinza-6)', marginBottom: 24, fontSize: '0.9rem' }}>
                                Preencha seus dados e você será direcionado ao nosso WhatsApp para atendimento imediato.
                            </p>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nome completo *</label>
                                    <input type="text" name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome" required />
                                </div>
                                <div className="form-group">
                                    <label>Telefone *</label>
                                    <input type="tel" name="telefone" value={form.telefone} onChange={handleChange} placeholder="(21) 99999-9999" required />
                                </div>
                                <div className="form-group">
                                    <label>Operadora de interesse</label>
                                    <select name="operadora" value={form.operadora} onChange={handleChange}>
                                        <option value="">Selecione (opcional)</option>
                                        {operadoras.map(op => (
                                            <option key={op.id} value={op.nome}>{op.nome}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Mensagem (opcional)</label>
                                    <textarea name="mensagem" value={form.mensagem} onChange={handleChange} rows="3" placeholder="Conte-nos o que procura..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                                    💬 Enviar pelo WhatsApp
                                </button>
                            </form>
                        </div>

                        {/* INFO */}
                        <div className="contact-info">
                            <h3>Informações de Contato</h3>

                            <div className="contact-info-item">
                                <div className="icon">💬</div>
                                <div>
                                    <strong>WhatsApp</strong>
                                    <p>(21) 99234-0607</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="icon">📞</div>
                                <div>
                                    <strong>Telefone</strong>
                                    <p>(21) 99234-0607</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="icon">🕐</div>
                                <div>
                                    <strong>Horário</strong>
                                    <p>Seg a Sex: 9h às 18h</p>
                                    <p>Sábado: 9h às 13h</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="icon">📧</div>
                                <div>
                                    <strong>E-mail</strong>
                                    <p>contato@avanticorretora.com.br</p>
                                </div>
                            </div>

                            <div style={{ background: 'rgba(187,140,59,0.15)', borderRadius: 'var(--radius-md)', padding: 20, marginTop: 20, textAlign: 'center' }}>
                                <p style={{ fontSize: '0.9rem', marginBottom: 12 }}>
                                    Prefere atendimento imediato?
                                </p>
                                <a href={`${WHATSAPP_BASE}?text=${encodeURIComponent('Olá! Gostaria de uma cotação de plano de saúde.')}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center' }}>
                                    💬 Chamar no WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
