import Link from 'next/link';
import { redes, getRede } from '../../data/redes';
import { hospitais, getHospital } from '../../data/hospitais';
import { whatsappLink } from '../../../lib/whatsapp';

export async function generateStaticParams() {
    return redes.map((r) => ({ id: r.id }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const rede = getRede(id);
    if (!rede) return { title: 'Rede não encontrada' };

    return {
        title: `Plano de Saúde ${rede.nome} — Hospitais Credenciados no RJ`,
        description: `Conheça todos os hospitais da ${rede.nome} no Rio de Janeiro e descubra quais planos de saúde dão acesso à rede completa. Compare operadoras e contrate com desconto pela Avanti Corretora.`,
        alternates: { canonical: `/rede/${rede.id}` },
        openGraph: {
            title: `Plano de Saúde ${rede.nome} — Hospitais Credenciados no RJ`,
            description: `Quais planos cobrem a ${rede.nome} no Rio de Janeiro? Veja todos os hospitais da rede, especialidades e compare operadoras gratuitamente.`,
        },
        twitter: {
            card: 'summary_large_image',
            title: `Plano de Saúde ${rede.nome} no RJ`,
            description: `Quais planos cobrem a ${rede.nome}? Todos os hospitais da rede no RJ.`,
        },
    };
}

export default async function RedeDetalhe({ params }) {
    const { id } = await params;
    const rede = getRede(id);

    if (!rede) return (
        <div className="page-header">
            <div className="container">
                <h1>Rede não encontrada</h1>
                <p><Link href="/hospitais" style={{ color: 'var(--dourado)' }}>← Voltar para hospitais</Link></p>
            </div>
        </div>
    );

    const hospitaisRede = rede.hospitaisIds
        .map(hId => getHospital(hId))
        .filter(Boolean);

    const cidades = [...new Set(hospitaisRede.map(h => h.cidade))];
    const ctaLink = whatsappLink(`Olá! Quero um plano de saúde com cobertura na ${rede.nome} no Rio de Janeiro. Pode me ajudar?`);

    const redeSchema = {
        '@context': 'https://schema.org',
        '@type': 'MedicalOrganization',
        name: rede.nomeCompleto,
        description: rede.descricao,
        areaServed: 'Rio de Janeiro',
        medicalSpecialty: rede.especialidades,
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: rede.faq.map(item => ({
            '@type': 'Question',
            name: item.pergunta,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.resposta,
            },
        })),
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://avanticorretora.com.br' },
            { '@type': 'ListItem', position: 2, name: 'Hospitais', item: 'https://avanticorretora.com.br/hospitais' },
            { '@type': 'ListItem', position: 3, name: rede.nome, item: `https://avanticorretora.com.br/rede/${rede.id}` },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(redeSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* HEADER */}
            <div className="page-header">
                <div className="container">
                    <p style={{ marginBottom: 8 }}>
                        <Link href="/hospitais" style={{ color: 'var(--dourado)' }}>← Hospitais Credenciados</Link>
                    </p>
                    <h1>Plano de Saúde {rede.nome}</h1>
                    <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 640 }}>{rede.descricao}</p>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
                        <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.85rem', padding: '6px 14px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.3)' }}>
                            🏥 {hospitaisRede.length} {hospitaisRede.length === 1 ? 'hospital' : 'hospitais'}
                        </span>
                        <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.85rem', padding: '6px 14px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.3)' }}>
                            📍 {cidades.length} {cidades.length === 1 ? 'cidade' : 'cidades'}
                        </span>
                    </div>
                </div>
            </div>

            {/* PROMO STRIP */}
            <div className="promo-strip">
                <div className="container promo-strip-inner">
                    <span>🏆 {rede.nome} no RJ</span>
                    <span>🔒 Sem carência para urgência</span>
                    <span>💳 Desconto de 15% para CNPJ/MEI</span>
                    <span>📲 Cotação grátis em 5 minutos</span>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="plano-detalhe-grid">
                        {/* MAIN */}
                        <div>
                            {/* SOBRE A REDE */}
                            <h2 style={{ marginBottom: 20 }}>Sobre a {rede.nome}</h2>
                            <div style={{ marginBottom: 40, color: 'var(--cinza-3)', lineHeight: 1.8 }}>
                                {rede.descricaoRica.split('\n\n').map((para, i) => (
                                    <p key={i} style={{ marginBottom: 16 }}>{para}</p>
                                ))}
                            </div>

                            {/* ESPECIALIDADES */}
                            <h2 style={{ marginBottom: 16 }}>🩺 Especialidades da {rede.nome}</h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
                                {rede.especialidades.map((e, i) => (
                                    <span key={i} style={{
                                        background: 'var(--cinza-f)',
                                        border: '1px solid var(--cinza-e)',
                                        color: 'var(--azul)',
                                        padding: '6px 14px',
                                        borderRadius: 20,
                                        fontSize: '0.875rem',
                                        fontWeight: 500
                                    }}>{e}</span>
                                ))}
                            </div>

                            {/* HOSPITAIS DA REDE */}
                            <h2 style={{ marginBottom: 8 }}>🏥 Hospitais da {rede.nome} no RJ</h2>
                            <p style={{ color: 'var(--cinza-6)', marginBottom: 24, fontSize: '0.95rem' }}>
                                Clique em um hospital para ver os planos que cobrem aquela unidade e informações detalhadas.
                            </p>

                            {cidades.map(cidade => {
                                const hospitaisCidade = hospitaisRede.filter(h => h.cidade === cidade);
                                return (
                                    <div key={cidade} style={{ marginBottom: 32 }}>
                                        <h3 style={{ fontSize: '1rem', color: 'var(--cinza-6)', marginBottom: 12, fontWeight: 600 }}>
                                            📍 {cidade}
                                        </h3>
                                        <div className="grid-2">
                                            {hospitaisCidade.map(h => (
                                                <Link key={h.id} href={`/hospitais/${h.id}`} style={{ textDecoration: 'none' }}>
                                                    <div className="card" style={{
                                                        padding: 20,
                                                        height: '100%',
                                                        transition: 'box-shadow 0.2s',
                                                        cursor: 'pointer',
                                                        borderTop: h.premium ? '3px solid var(--dourado)' : undefined,
                                                    }}>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                                                            <h4 style={{ color: 'var(--azul)', margin: 0, fontSize: '0.95rem' }}>{h.nome}</h4>
                                                            {h.premium && <span style={{ background: 'var(--dourado)', color: '#fff', fontSize: '0.65rem', fontWeight: 700, padding: '2px 8px', borderRadius: 10, flexShrink: 0, marginLeft: 8 }}>PREMIUM</span>}
                                                        </div>
                                                        <p style={{ fontSize: '0.8rem', color: 'var(--cinza-6)', marginBottom: 10 }}>
                                                            {h.bairro && h.bairro !== 'Em atualização' ? `${h.bairro}, ` : ''}{h.cidade}
                                                        </p>
                                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                                                            {h.especialidades.slice(0, 3).map((e, i) => (
                                                                <span key={i} style={{ fontSize: '0.7rem', background: 'var(--cinza-f)', padding: '3px 8px', borderRadius: 4, color: 'var(--cinza-6)' }}>{e}</span>
                                                            ))}
                                                        </div>
                                                        <p style={{ fontSize: '0.8rem', color: 'var(--dourado)', fontWeight: 600, marginTop: 10, marginBottom: 0 }}>
                                                            Ver planos →
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}

                            {/* CTA */}
                            <div style={{
                                background: 'linear-gradient(135deg, var(--azul) 0%, #0a3070 100%)',
                                borderRadius: 16,
                                padding: '32px',
                                marginBottom: 48,
                                marginTop: 24,
                                color: '#fff',
                                textAlign: 'center'
                            }}>
                                <h3 style={{ marginBottom: 12, fontSize: '1.2rem' }}>Quer um plano com cobertura na {rede.nome}?</h3>
                                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 20, fontSize: '0.95rem' }}>
                                    Nossa equipe compara todas as operadoras e encontra o plano ideal para você com acesso à {rede.nome}.
                                </p>
                                <a href={ctaLink} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ display: 'inline-flex', justifyContent: 'center', gap: 8 }}>
                                    💬 Cotar pelo WhatsApp — Grátis
                                </a>
                            </div>

                            {/* FAQ */}
                            <h2 style={{ marginBottom: 8 }}>❓ Perguntas Frequentes</h2>
                            <p style={{ color: 'var(--cinza-6)', marginBottom: 24, fontSize: '0.95rem' }}>
                                Tire suas dúvidas sobre planos com cobertura na {rede.nome}.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                {rede.faq.map((item, i) => (
                                    <details key={i} style={{ borderBottom: '1px solid var(--cinza-e)', padding: '0' }}>
                                        <summary style={{
                                            padding: '18px 0',
                                            fontWeight: 600,
                                            fontSize: '0.95rem',
                                            color: 'var(--azul)',
                                            cursor: 'pointer',
                                            listStyle: 'none',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}>
                                            {item.pergunta}
                                            <span style={{ fontSize: '1.2rem', fontWeight: 300, flexShrink: 0, marginLeft: 16 }}>+</span>
                                        </summary>
                                        <p style={{ paddingBottom: 18, color: 'var(--cinza-3)', lineHeight: 1.7, margin: 0, fontSize: '0.9rem' }}>
                                            {item.resposta}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </div>

                        {/* SIDEBAR */}
                        <div className="plano-sticky">
                            <div className="plano-price-card" style={{ textAlign: 'center' }}>
                                <h3 style={{ marginBottom: 12 }}>Planos com cobertura na {rede.nome}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--cinza-6)', marginBottom: 20, lineHeight: 1.5 }}>
                                    Compare as melhores opções e receba cotação gratuita. Desconto de até <strong>40% para CNPJ/MEI</strong>.
                                </p>
                                <a href={ctaLink} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center', display: 'flex', gap: 8 }}>
                                    💬 Cotar agora — Grátis
                                </a>
                            </div>

                            <div className="card" style={{ marginTop: 16, padding: 20, textAlign: 'center' }}>
                                <p style={{ fontSize: '0.85rem', color: 'var(--cinza-6)', marginBottom: 12 }}>
                                    Fale com um especialista
                                </p>
                                <p style={{ fontSize: '1.1rem', fontWeight: 700 }}>📞 (21) 99234-0607</p>
                                <p style={{ fontSize: '0.75rem', color: 'var(--cinza-9)', marginTop: 4 }}>
                                    Seg a Sex: 9h às 18h
                                </p>
                            </div>

                            <div className="card" style={{ marginTop: 16, padding: 20 }}>
                                <h4 style={{ marginBottom: 12, fontSize: '0.95rem' }}>Outras redes hospitalares</h4>
                                {redes
                                    .filter(r => r.id !== rede.id)
                                    .map(r => (
                                        <Link key={r.id} href={`/rede/${r.id}`} style={{
                                            display: 'block',
                                            padding: '8px 0',
                                            borderBottom: '1px solid var(--cinza-f)',
                                            fontSize: '0.85rem',
                                            color: 'var(--azul)',
                                            textDecoration: 'none',
                                        }}>
                                            {r.nome}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
