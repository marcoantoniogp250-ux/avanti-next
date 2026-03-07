import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getOperadora, getPlanosByOperadora } from '../../data/operadoras';
import { whatsappLink } from '../../../lib/whatsapp';
import Breadcrumb from '../../../components/Breadcrumb';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const op = getOperadora(id);
    if (!op) return { title: 'Operadora não encontrada' };
    return {
        title: `Planos ${op.nome} no Rio de Janeiro`,
        description: `Compare todos os planos ${op.nome} disponíveis no RJ. ${op.descricao} Cotação gratuita com a Avanti Corretora.`,
        alternates: { canonical: `/operadora/${id}` },
    };
}

export default async function OperadoraDetalhe({ params }) {
    const { id } = await params;
    const op = getOperadora(id);
    const planosOp = getPlanosByOperadora(id);

    if (!op) notFound();

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <Breadcrumb items={[
                        { label: 'Início', href: '/' },
                        { label: 'Operadoras', href: '/operadoras' },
                        { label: `Planos ${op.nome}` },
                    ]} />
                    <h1>Planos {op.nome} no Rio de Janeiro</h1>
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
