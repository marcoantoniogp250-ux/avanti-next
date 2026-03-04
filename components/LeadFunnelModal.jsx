'use client';
import { useState } from 'react';
import { whatsappLink } from '../lib/whatsapp';

export default function LeadFunnelModal({ isOpen, onClose, planoNome, operadoraNome }) {
    const [tipo, setTipo] = useState('');

    if (!isOpen) return null;

    const handleEnviar = () => {
        if (!tipo) return;
        const texto = tipo === 'PJ'
            ? `Olá! Tenho interesse no plano *${planoNome}* da *${operadoraNome}* para Pessoa Jurídica (CNPJ). Gostaria de receber a tabela atualizada com o desconto de 15%.`
            : `Olá! Tenho interesse no plano *${planoNome}* da *${operadoraNome}* como Pessoa Física. Gostaria de receber a tabela atualizada.`;
        window.open(whatsappLink(texto), '_blank');
        onClose();
        setTipo('');
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="funnel-modal-box" onClick={e => e.stopPropagation()}>
                <button className="funnel-close-btn" onClick={onClose} aria-label="Fechar">✕</button>

                <div className="funnel-icon-top">📋</div>
                <h2 className="funnel-title">Solicitar Tabela de Valores</h2>
                <p className="funnel-subtitle">
                    Para enviarmos a tabela correta, informe o seu perfil:
                </p>

                <div className="funnel-form">
                    <label className={`funnel-radio-card ${tipo === 'PJ' ? 'selected' : ''}`}>
                        <input
                            type="radio"
                            name="perfil"
                            value="PJ"
                            checked={tipo === 'PJ'}
                            onChange={() => setTipo('PJ')}
                        />
                        <div className="funnel-radio-content">
                            <span className="funnel-radio-emoji">🏢</span>
                            <div>
                                <strong>Possuo CNPJ / MEI</strong>
                                <span className="funnel-badge">15% de desconto</span>
                            </div>
                        </div>
                    </label>

                    <label className={`funnel-radio-card ${tipo === 'PF' ? 'selected' : ''}`}>
                        <input
                            type="radio"
                            name="perfil"
                            value="PF"
                            checked={tipo === 'PF'}
                            onChange={() => setTipo('PF')}
                        />
                        <div className="funnel-radio-content">
                            <span className="funnel-radio-emoji">👤</span>
                            <div>
                                <strong>Sou Pessoa Física</strong>
                                <span className="funnel-badge-gray">Plano Familiar / Adesão</span>
                            </div>
                        </div>
                    </label>
                </div>

                <button
                    className="btn btn-whatsapp funnel-submit-btn"
                    onClick={handleEnviar}
                    disabled={!tipo}
                >
                    📲 Receber Tabela no WhatsApp
                </button>
            </div>
        </div>
    );
}
