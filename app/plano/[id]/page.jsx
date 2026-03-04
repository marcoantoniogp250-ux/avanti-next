'use client';
import { useState } from 'react';
import Link from 'next/link';
import { getPlano, getOperadora } from '../../data/operadoras';
import { getHospital } from '../../data/hospitais';
import { whatsappLink } from '../../../components/WhatsAppButton';
import LeadFunnelModal from '../../../components/LeadFunnelModal';

export default function PlanoDetalhe({ params }) {
    const { id } = params;
    const plano = getPlano(id);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!plano) return (
        <div className="page-header">
            <div className="container">
                <h1>Plano não encontrado</h1>
                <p><Link href="/operadoras" style={{ color: 'var(--dourado)' }}>← Voltar para operadoras</Link></p>
            </div>
        </div>
    );

    const op = getOperadora(plano.operadoraId);
    const hospitaisPlano = plano.hospitais.map(hId => getHospital(hId)).filter(Boolean);
    const ctaLink = whatsappLink(`Olá! Gostaria de contratar o plano ${plano.nome} da ${op?.nome}. Pode me enviar uma cotação?`);

    return (
        <>
            <div className="plano-detalhe-header">
                <div className="container">
                    <p style={{ marginBottom: 8 }}>
                        <Link href={`/operadora/${op?.id}`} style={{ color: 'var(--dourado)' }}>← {op?.nome}</Link>
                    </p>
                    <h1>{plano.nome}</h1>
                    <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: 8 }}>{plano.resumo}</p>
                    <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                        <span className={`plano-tag ${plano.segmento.toLowerCase()}`}>{plano.segmento}</span>
                        <span className={`plano-tag ${plano.coparticipacao ? 'copart' : 'sem-copart'}`}>
                            {plano.coparticipacao ? 'Com coparticipação' : 'Sem coparticipação'}
                        </span>
                        <span className={`plano-tag ${plano.abrangencia.toLowerCase()}`}>{plano.abrangencia}</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="plano-detalhe-grid">
                        {/* CONTEÚDO PRINCIPAL */}
                        <div>
                            {/* COBERTURAS */}
                            <h2 style={{ marginBottom: 20 }}>📋 Coberturas</h2>
                            <div style={{ marginBottom: 40 }}>
                                {plano.coberturas.map((cob, i) => (
                                    <div className="vantagem-item" key={i}>
                                        <div className="check">✓</div>
                                        <span>{cob}</span>
                                    </div>
                                ))}
                            </div>

                            {/* VANTAGENS */}
                            <h2 style={{ marginBottom: 20 }}>⭐ Vantagens</h2>
                            <div style={{ marginBottom: 40 }}>
                                {plano.vantagens.map((van, i) => (
                                    <div className="vantagem-item" key={i}>
                                        <div className="check" style={{ background: 'rgba(187,140,59,0.1)', color: 'var(--dourado)' }}>★</div>
                                        <span>{van}</span>
                                    </div>
                                ))}
                            </div>

                            {/* HOSPITAIS */}
                            <h2 style={{ marginTop: 40, marginBottom: 20 }}>🏥 Hospitais Cobertos</h2>
                            <div className="grid-2">
                                {hospitaisPlano.map(h => (
                                    <div className="card" key={h.id} style={{ padding: 20 }}>
                                        <h4>{h.nome}</h4>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--cinza-6)', marginBottom: 8 }}>
                                            📍 {h.bairro}, {h.cidade}
                                        </p>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                                            {h.especialidades.slice(0, 3).map((e, i) => (
                                                <span key={i} style={{ fontSize: '0.7rem', background: 'var(--cinza-f)', padding: '3px 8px', borderRadius: 4, color: 'var(--cinza-6)' }}>
                                                    {e}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SIDEBAR STICKY */}
                        <div className="plano-sticky">
                            <div className="plano-price-card" style={{ textAlign: 'center' }}>
                                <h3 style={{ marginBottom: '15px' }}>Tabela de Preços</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--cinza-6)', marginBottom: '20px', lineHeight: '1.5' }}>
                                    Faça sua cotação com nossa equipe e descubra descontos exclusivos de até <strong>40% para CNPJ/MEI</strong>.
                                </p>
                                <button onClick={() => setIsModalOpen(true)} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 12, padding: '15px' }}>
                                    📊 Ver Tabela Atualizada
                                </button>
                            </div>

                            <div className="card" style={{ marginTop: 16, padding: 20, textAlign: 'center' }}>
                                <p style={{ fontSize: '0.85rem', color: 'var(--cinza-6)', marginBottom: 12 }}>
                                    Dúvidas sobre este plano?
                                </p>
                                <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>📞 (21) 99234-0607</p>
                                <p style={{ fontSize: '0.75rem', color: 'var(--cinza-9)', marginTop: 4 }}>
                                    Seg a Sex: 9h às 18h
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <LeadFunnelModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    planoNome={plano.nome}
                    operadoraNome={op?.nome}
                />
            </section>
        </>
    );
}
