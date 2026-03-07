import Link from 'next/link';
import { hospitais, getHospital } from '../../data/hospitais';
import { getPlanosByHospital, getOperadora } from '../../data/operadoras';
import { getRedeByHospital } from '../../data/redes';
import { getHospitalRico } from '../../data/hospitaisRicos';
import { whatsappLink } from '../../../lib/whatsapp';

export async function generateStaticParams() {
    return hospitais.map((h) => ({ id: h.id }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const h = getHospital(id);
    if (!h) return { title: 'Hospital não encontrado' };

    const rede = getRedeByHospital(h.id);
    const rico = getHospitalRico(h.id);
    const bairro = rico?.bairro || h.bairro;
    const bairroText = bairro && bairro !== 'Em atualização' ? `, ${bairro}` : '';
    const redeText = rede ? ` — ${rede.nome}` : '';
    const especialidadesText = h.especialidades.slice(0, 3).join(', ');
    const cidadeText = h.cidade !== 'Rio de Janeiro' ? ` em ${h.cidade}` : ` no Rio de Janeiro`;

    return {
        title: `Plano de Saúde ${h.nome}${bairroText} — Qual Plano Cobre?`,
        description: `Descubra quais planos de saúde cobrem o ${h.nome}${bairroText}${cidadeText}${redeText}. Especialidades: ${especialidadesText}. Compare operadoras e contrate com desconto pela Avanti Corretora. Cotação gratuita.`,
        alternates: { canonical: `/hospitais/${h.id}` },
        openGraph: {
            title: `Plano de Saúde ${h.nome}${bairroText} — Qual Plano Cobre?`,
            description: `Quais planos cobrem o ${h.nome}${bairroText}${cidadeText}? Compare operadoras, confira especialidades e contrate com a Avanti Corretora.`,
        },
        twitter: {
            card: 'summary_large_image',
            title: `Plano de Saúde ${h.nome}${bairroText}`,
            description: `Quais planos cobrem o ${h.nome}${cidadeText}? Compare e contrate grátis.`,
        },
    };
}

function generateDescricaoRica(h) {
    const bairroText = h.bairro && h.bairro !== 'Em atualização' ? `, no bairro ${h.bairro},` : '';
    const especialidadesStr = h.especialidades.join(', ');

    return `O ${h.nome}${bairroText} é uma instituição hospitalar credenciada localizada em ${h.cidade}. ${h.descricao} Com atendimento estruturado e equipe especializada, o hospital oferece serviços nas áreas de ${especialidadesStr}, atendendo tanto beneficiários de planos de saúde quanto procedimentos eletivos e de urgência.

O ${h.nome} faz parte da rede credenciada de operadoras de saúde que atuam no Rio de Janeiro e região, garantindo acesso a beneficiários de diferentes planos. A localização estratégica em ${h.cidade} facilita o acesso para moradores da região e municípios vizinhos, tornando o hospital uma referência importante para quem busca atendimento médico de qualidade próximo de casa.

Para quem está em busca de um plano de saúde que cubra o ${h.nome}, é fundamental verificar a rede credenciada de cada operadora antes da contratação. A Avanti Corretora oferece orientação especializada e cotação gratuita, ajudando você a encontrar o plano ideal com cobertura neste hospital e em toda a rede da sua região.`;
}

function generateServicos(h) {
    const base = ['Internação', 'Cirurgia', 'Pronto-Atendimento'];
    const fromEsp = h.especialidades.flatMap(e => {
        const map = {
            'Cardiologia': ['UTI Cardiológica', 'Hemodinâmica'],
            'Oncologia': ['Centro Oncológico', 'Quimioterapia', 'Radioterapia'],
            'Maternidade': ['Maternidade', 'UTI Neonatal', 'Pré-Natal'],
            'Pediatria': ['Pediatria', 'UTI Pediátrica'],
            'Neurologia': ['Neurologia', 'Neurocirurgia'],
            'Ortopedia': ['Ortopedia e Traumatologia', 'Fisioterapia'],
            'Cirurgia Geral': ['Centro Cirúrgico', 'Cirurgia Ambulatorial'],
            'Emergência': ['Emergência 24h', 'Suporte Avançado de Vida'],
            'Clínica Geral': ['Internação Clínica', 'Ambulatório'],
            'Cirurgia Robótica': ['Cirurgia Robótica', 'Centro Cirúrgico Avançado'],
            'Urologia': ['Urologia', 'Litotripsia'],
            'Neonatologia': ['UTI Neonatal', 'Berçário'],
            'Obstetrícia': ['Centro Obstétrico', 'Pré-Parto e Parto'],
            'Oftalmologia': ['Cirurgia Ocular', 'Exames Oftalmológicos'],
            'Radioterapia': ['Radioterapia', 'Oncologia Radioterápica'],
            'Quimioterapia': ['Quimioterapia Ambulatorial', 'Centro de Infusão'],
        };
        return map[e] || [];
    });
    return [...new Set([...base, ...fromEsp])].slice(0, 10);
}

function generateFaq(h, planosHospital, rede) {
    const operadorasNomes = [...new Set(planosHospital.map(p => {
        const op = getOperadora(p.operadoraId);
        return op ? op.nome : null;
    }).filter(Boolean))];

    const operadorasText = operadorasNomes.length > 0
        ? operadorasNomes.join(', ')
        : 'SulAmérica, Bradesco Saúde, Porto Seguro e outras operadoras credenciadas';

    const redeText = rede ? ` da ${rede.nome}` : '';
    const esp1 = h.especialidades[0] || 'Clínica Geral';
    const esp2 = h.especialidades[1] || 'Cirurgia';
    const temEmergencia = h.especialidades.some(e => e.toLowerCase().includes('emergência') || e.toLowerCase().includes('urgência')) || h.premium;
    const temMaternidade = h.especialidades.some(e => e.toLowerCase().includes('maternidade') || e.toLowerCase().includes('obstetrícia') || e.toLowerCase().includes('obstétrico'));

    return [
        {
            pergunta: `Qual plano de saúde cobre o ${h.nome}?`,
            resposta: `O ${h.nome}${redeText} é credenciado pelas seguintes operadoras de saúde no Rio de Janeiro: ${operadorasText}. A cobertura pode variar conforme a categoria do plano escolhido. Entre em contato com a Avanti Corretora para verificar qual plano oferece cobertura completa neste hospital.`
        },
        {
            pergunta: `O ${h.nome} aceita qual operadora de saúde?`,
            resposta: `As principais operadoras com acesso ao ${h.nome} incluem ${operadorasText}. Cada operadora pode ter condições específicas de cobertura e categorias de plano que garantem atendimento nesta unidade. Nossa equipe pode orientar você na escolha mais adequada.`
        },
        {
            pergunta: `Quanto custa um plano de saúde que cobre o ${h.nome}?`,
            resposta: `O valor depende da operadora escolhida, da categoria do plano, da sua faixa etária e do tipo de cobertura (enfermaria ou apartamento, com ou sem coparticipação). A Avanti Corretora realiza cotações gratuitas e personalizadas para que você encontre o melhor plano com cobertura no ${h.nome}.`
        },
        {
            pergunta: `O ${h.nome} oferece ${esp1}?`,
            resposta: `Sim, o ${h.nome} disponibiliza serviços de ${esp1} como parte de sua estrutura de atendimento. ${h.especialidades.length > 1 ? `O hospital também oferece ${h.especialidades.slice(1, 4).join(', ')}, entre outras especialidades.` : ''} Verifique com a sua operadora se o seu plano cobre consultas e procedimentos nessa especialidade no ${h.nome}.`
        },
        {
            pergunta: `Preciso de autorização prévia para usar o ${h.nome}?`,
            resposta: `Para consultas e procedimentos eletivos, a maioria das operadoras exige autorização prévia para utilizar o ${h.nome}. Em casos de urgência e emergência, a ANS garante atendimento sem necessidade de autorização prévia pelo período inicial. Consulte o guia da sua operadora para entender os procedimentos específicos.`
        },
        {
            pergunta: `Qual a diferença entre os planos que cobrem o ${h.nome}?`,
            resposta: `Os planos que cobrem o ${h.nome} diferem principalmente em acomodação (enfermaria ou apartamento), coparticipação (se você paga uma parte de cada procedimento) e abrangência da rede. Planos de categorias superiores costumam oferecer mais hospitais cobertos, menor coparticipação e acomodação em apartamento.`
        },
        {
            pergunta: `O ${h.nome} tem ${temEmergencia ? 'emergência 24 horas' : esp2}?`,
            resposta: temEmergencia
                ? `Sim, o ${h.nome} dispõe de serviço de pronto-atendimento${h.premium ? ' 24 horas estruturado para urgências e emergências de alta complexidade' : ' para urgências e emergências'}. O atendimento de emergência pelos planos de saúde credenciados não exige autorização prévia da operadora.`
                : `O ${h.nome} oferece serviços de ${esp2} dentro de sua estrutura. Para verificar se o seu plano cobre procedimentos de ${esp2} nesta unidade, entre em contato com sua operadora ou consulte a Avanti Corretora.`
        },
        {
            pergunta: `Como contratar um plano de saúde aceito no ${h.nome}?`,
            resposta: `Para contratar um plano com cobertura no ${h.nome}, entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe especializada compara as opções disponíveis das principais operadoras, verifica a cobertura específica neste hospital e orienta você durante todo o processo de contratação — sem custo algum.`
        },
        ...(temMaternidade ? [{
            pergunta: `O ${h.nome} tem maternidade?`,
            resposta: `Sim, o ${h.nome} conta com serviços de maternidade e obstetrícia. Para utilizar os serviços de parto e acompanhamento gestacional pelo plano de saúde, é importante verificar o prazo de carência — normalmente 300 dias para partos em planos sem portabilidade — e se o seu plano específico cobre a maternidade nesta unidade.`
        }] : [])
    ].slice(0, 8);
}

export default async function HospitalDetalhe({ params }) {
    const { id } = await params;
    const h = getHospital(id);

    if (!h) return (
        <div className="page-header">
            <div className="container">
                <h1>Hospital não encontrado</h1>
                <p><Link href="/hospitais" style={{ color: 'var(--dourado)' }}>← Voltar para hospitais</Link></p>
            </div>
        </div>
    );

    const rede = getRedeByHospital(h.id);
    const rico = getHospitalRico(h.id);
    const planosHospital = getPlanosByHospital(h.id);
    const descricao = rico?.descricaoRica || h.descricaoRica || generateDescricaoRica(h);
    const servicos = rico?.servicos || h.servicos || generateServicos(h);
    const especialidades = rico?.especialidades || h.especialidades;
    const faq = rico?.faq || h.faq || generateFaq(h, planosHospital, rede);
    const ctaLink = whatsappLink(`Olá! Quero um plano de saúde que cubra o ${h.nome} em ${h.cidade}. Pode me ajudar?`);

    const hospitalSchema = {
        '@context': 'https://schema.org',
        '@type': 'Hospital',
        name: h.nome,
        description: h.descricao,
        address: {
            '@type': 'PostalAddress',
            streetAddress: h.endereco !== h.cidade ? h.endereco : undefined,
            addressLocality: h.cidade,
            addressRegion: 'RJ',
            addressCountry: 'BR',
        },
        ...(h.bairro && h.bairro !== 'Em atualização' ? {
            areaServed: h.bairro + ', ' + h.cidade
        } : { areaServed: h.cidade }),
        medicalSpecialty: especialidades,
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(item => ({
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
            { '@type': 'ListItem', position: 3, name: h.nome, item: `https://avanticorretora.com.br/hospitais/${h.id}` },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* HEADER */}
            <div className="page-header">
                <div className="container">
                    <p style={{ marginBottom: 8 }}>
                        <Link href="/hospitais" style={{ color: 'var(--dourado)' }}>← Hospitais Credenciados</Link>
                        {rede && (
                            <> · <Link href={`/rede/${rede.id}`} style={{ color: 'var(--dourado)' }}>{rede.nome}</Link></>
                        )}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
                        <h1 style={{ margin: 0 }}>{h.nome}</h1>
                        {h.premium && (
                            <span style={{ background: 'var(--dourado)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: 20 }}>★ Premium</span>
                        )}
                        {rede && (
                            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.75rem', padding: '4px 10px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.3)' }}>{rede.nome}</span>
                        )}
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 0 }}>
                        📍 {h.bairro && h.bairro !== 'Em atualização' ? `${h.bairro}, ` : ''}{h.cidade}
                        {h.endereco && h.endereco !== h.cidade && h.endereco !== 'Rio de Janeiro' && h.endereco !== 'Niterói' && h.endereco !== 'São Gonçalo' && h.endereco !== 'Duque de Caxias'
                            ? ` — ${h.endereco}` : ''}
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="plano-detalhe-grid">
                        {/* MAIN CONTENT */}
                        <div>
                            {/* SOBRE */}
                            <h2 style={{ marginBottom: 20 }}>🏥 Sobre o {h.nome}</h2>
                            <div style={{ marginBottom: 40, color: 'var(--cinza-3)', lineHeight: 1.8 }}>
                                {descricao.split('\n\n').map((para, i) => (
                                    <p key={i} style={{ marginBottom: 16 }}>{para}</p>
                                ))}
                            </div>

                            {/* ESPECIALIDADES */}
                            <h2 style={{ marginBottom: 16 }}>🩺 Especialidades Médicas</h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
                                {especialidades.map((e, i) => (
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

                            {/* SERVIÇOS */}
                            <h2 style={{ marginBottom: 16 }}>⚕️ Serviços e Estrutura</h2>
                            <div className="grid-2" style={{ marginBottom: 40 }}>
                                {servicos.map((s, i) => (
                                    <div key={i} className="vantagem-item">
                                        <div className="check">✓</div>
                                        <span>{s}</span>
                                    </div>
                                ))}
                            </div>

                            {/* PLANOS */}
                            <h2 style={{ marginBottom: 20 }}>💳 Planos que Cobrem o {h.nome}</h2>
                            {planosHospital.length > 0 ? (
                                <>
                                    <p style={{ color: 'var(--cinza-6)', marginBottom: 20, fontSize: '0.95rem' }}>
                                        Os planos abaixo incluem o {h.nome} na rede credenciada. Compare e escolha o ideal para você.
                                    </p>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                                        {planosHospital.map(plano => {
                                            const op = getOperadora(plano.operadoraId);
                                            return (
                                                <div key={plano.id} style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    padding: '16px 20px',
                                                    background: 'var(--cinza-f)',
                                                    borderRadius: 12,
                                                    border: '1px solid var(--cinza-e)',
                                                    gap: 12,
                                                    flexWrap: 'wrap'
                                                }}>
                                                    <div>
                                                        <strong style={{ fontSize: '0.95rem', color: 'var(--azul)' }}>{plano.nome}</strong>
                                                        <p style={{ fontSize: '0.8rem', color: 'var(--cinza-6)', margin: '2px 0 0' }}>
                                                            {op?.nome} · {plano.segmento} · {plano.coparticipacao ? 'Com copart.' : 'Sem copart.'}
                                                        </p>
                                                    </div>
                                                    <div style={{ display: 'flex', gap: 8 }}>
                                                        <Link href={`/plano/${plano.id}`} className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '8px 16px', border: '1.5px solid var(--cinza-e)', color: 'var(--azul)' }}>
                                                            Ver detalhes
                                                        </Link>
                                                        <a href={whatsappLink(`Olá! Tenho interesse no plano ${plano.nome} da ${op?.nome} que cobre o ${h.nome}.`)} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '8px 16px' }}>
                                                            Contratar
                                                        </a>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </>
                            ) : (
                                <div style={{ background: 'var(--cinza-f)', borderRadius: 12, padding: '24px', marginBottom: 32, border: '1px solid var(--cinza-e)' }}>
                                    <p style={{ color: 'var(--cinza-6)', margin: 0 }}>
                                        Consulte nossa equipe pelo WhatsApp para verificar os planos com cobertura no {h.nome} e receber uma cotação personalizada gratuita.
                                    </p>
                                </div>
                            )}

                            {/* CTA COMERCIAL */}
                            <div style={{
                                background: 'linear-gradient(135deg, var(--azul) 0%, #0a3070 100%)',
                                borderRadius: 16,
                                padding: '32px',
                                marginBottom: 48,
                                color: '#fff',
                                textAlign: 'center'
                            }}>
                                <h3 style={{ marginBottom: 12, fontSize: '1.2rem' }}>Quer um plano que cubra o {h.nome}?</h3>
                                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 20, fontSize: '0.95rem' }}>
                                    Nossa equipe compara as melhores opções de cobertura para {h.cidade} e região. Cotação 100% gratuita.
                                </p>
                                <a href={ctaLink} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ display: 'inline-flex', justifyContent: 'center', gap: 8 }}>
                                    💬 Cotar pelo WhatsApp — Grátis
                                </a>
                            </div>

                            {/* FAQ */}
                            <h2 style={{ marginBottom: 8 }}>❓ Perguntas Frequentes</h2>
                            <p style={{ color: 'var(--cinza-6)', marginBottom: 24, fontSize: '0.95rem' }}>
                                Tire suas dúvidas sobre cobertura e planos para o {h.nome}.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                {faq.map((item, i) => (
                                    <details key={i} style={{
                                        borderBottom: '1px solid var(--cinza-e)',
                                        padding: '0'
                                    }}>
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
                                <h3 style={{ marginBottom: 12 }}>Planos com cobertura no {h.nome}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--cinza-6)', marginBottom: 20, lineHeight: 1.5 }}>
                                    Compare os planos disponíveis e receba uma cotação gratuita. Desconto de até <strong>40% para CNPJ/MEI</strong>.
                                </p>
                                <a href={ctaLink} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center', display: 'flex', gap: 8 }}>
                                    💬 Cotar agora — Grátis
                                </a>
                            </div>

                            {rede && (
                                <div className="card" style={{ marginTop: 16, padding: 20 }}>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--cinza-9)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Faz parte da</p>
                                    <h4 style={{ marginBottom: 8, color: 'var(--azul)' }}>{rede.nome}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--cinza-6)', marginBottom: 12 }}>{rede.descricao}</p>
                                    <Link href={`/rede/${rede.id}`} style={{ fontSize: '0.85rem', color: 'var(--dourado)', fontWeight: 600 }}>
                                        Ver todos os hospitais da {rede.nome} →
                                    </Link>
                                </div>
                            )}

                            <div className="card" style={{ marginTop: 16, padding: 20, textAlign: 'center' }}>
                                <p style={{ fontSize: '0.85rem', color: 'var(--cinza-6)', marginBottom: 12 }}>
                                    Dúvidas sobre cobertura?
                                </p>
                                <p style={{ fontSize: '1.1rem', fontWeight: 700 }}>📞 (21) 99234-0607</p>
                                <p style={{ fontSize: '0.75rem', color: 'var(--cinza-9)', marginTop: 4 }}>
                                    Seg a Sex: 9h às 18h
                                </p>
                            </div>

                            <div className="card" style={{ marginTop: 16, padding: 20 }}>
                                <h4 style={{ marginBottom: 12, fontSize: '0.95rem' }}>Outros hospitais em {h.cidade}</h4>
                                {hospitais
                                    .filter(x => x.cidade === h.cidade && x.id !== h.id)
                                    .slice(0, 4)
                                    .map(x => (
                                        <Link key={x.id} href={`/hospitais/${x.id}`} style={{
                                            display: 'block',
                                            padding: '8px 0',
                                            borderBottom: '1px solid var(--cinza-f)',
                                            fontSize: '0.85rem',
                                            color: 'var(--azul)',
                                            textDecoration: 'none',
                                        }}>
                                            {x.nome}
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
