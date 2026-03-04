'use client';
import { useState } from 'react';
import Link from 'next/link';
import { getOperadora, getPlanosByOperadora } from '../../data/operadoras';
import { whatsappLink } from '../../../lib/whatsapp';

export default function OperadoraDetalhe({ params }) {
    const { id } = params;
    const op = getOperadora(id);
    const planosOp = getPlanosByOperadora(id);

    if (!op) return (
        <div className="page-header">
            <div className="container">
                <h1>Operadora não encontrada</h1>
                <p><Link href="/operadoras" style={{ color: 'var(--dourado)' }}>← Voltar para operadoras</Link></p>
            </div>
        </div>
    );

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <p style={{ marginBottom: 8 }}>
                        <Link href="/operadoras" style={{ color: 'var(--dourado)' }}>← Operadoras</Link>
                    </p>
                    <h1>{op.nome}</h1>
                    <p>{op.descricao}</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="tag">Planos disponíveis</div>
                        <h2>Planos {op.nome}</h2>
                        <p>Compare os planos e escolha o ideal para você.</p>
                    </div>

                    <div className="grid-3">
                        {planosOp.map(plano => (
                            <div className={`card plano-card ${plano.destaque ? 'card-destaque' : ''}`} key={plano.id}>
                                <div className="plano-header">
                                    <div className="plano-operadora">{op.nome}</div>
                                    <div className="plano-nome">{plano.nome}</div>
                                </div>
                                <div className="plano-tags">
                                    <span className={`plano-tag ${plano.segmento.toLowerCase()}`}>{plano.segmento}</span>
                                    <span className={`plano-tag ${plano.coparticipacao ? 'copart' : 'sem-copart'}`}>
                                        {plano.coparticipacao ? 'Com copart.' : 'Sem copart.'}
                                    </span>
                                    <span className={`plano-tag ${plano.abrangencia.toLowerCase()}`}>{plano.abrangencia}</span>
                                </div>
                                <div className="price" style={{ fontSize: '0.9rem', color: 'var(--dourado)' }}>
                                    <strong>⭐ Tabela sob consulta</strong>
                                </div>
                                <div className="plano-resumo">{plano.resumo}</div>
                                <div className="plano-actions">
                                    <Link href={`/plano/${plano.id}`} className="btn btn-secondary" style={{ border: '2px solid var(--cinza-e)', color: 'var(--azul)' }}>
                                        Ver detalhes
                                    </Link>
                                    <a href={whatsappLink(`Olá! Tenho interesse no plano ${plano.nome} da ${op.nome}.`)} target="_blank" rel="noreferrer" className="btn btn-primary">
                                        Contratar
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
