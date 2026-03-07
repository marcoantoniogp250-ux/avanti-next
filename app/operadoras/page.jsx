import Link from 'next/link';
import { operadoras } from '../data/operadoras';
import Breadcrumb from '../../components/Breadcrumb';
import { whatsappLink } from '../../lib/whatsapp';

export const metadata = {
    title: 'Operadoras de Planos de Saúde no Rio de Janeiro | Avanti Corretora',
    description: 'Compare Amil, SulAmérica, Bradesco Saúde, Porto Seguro, Unimed e NotreDame. Cotação gratuita com as melhores operadoras do Brasil no Rio de Janeiro.',
    alternates: { canonical: '/operadoras' },
};

const operadoraExtras = {
    amil: {
        destaque: 'Maior rede credenciada do RJ',
        tags: ['Copa D\'Or', 'Copa Star', 'Samaritano', 'A partir R$200'],
    },
    sulamerica: {
        destaque: 'Líder em saúde e seguros',
        tags: ['Direto Nacional', 'Executivo', 'Prestige', 'Cobertura nacional'],
    },
    bradesco: {
        destaque: 'Tradição e solidez',
        tags: ['Efetivo', 'Ideal', 'Premium', 'Nacional Plus'],
    },
    porto: {
        destaque: 'Reembolso + rede premium',
        tags: ['Reembolso R$714/mês', 'Telemedicina 24h', 'Bairros RJ', 'Copa D\'Or'],
    },
    'unimed-ferj': {
        destaque: 'Cooperativa do RJ',
        tags: ['Médicos cooperados', 'Essencial', 'Estilo RJ', 'Premium'],
    },
    'unimed-rio': {
        destaque: 'Hospital próprio no RJ',
        tags: ['Hospital Unimed-Rio', 'Delta', 'Ômega', 'Empresas'],
    },
    'unimed-leste': {
        destaque: 'Niterói e região leste',
        tags: ['Niterói', 'São Gonçalo', 'Hospital Itaipu', 'Oncoclínicas'],
    },
    notredame: {
        destaque: 'Rede Hapvida NotreDame',
        tags: ['Smart 150', 'Advance', 'Infinity', 'Samaritano + Copa D\'Or'],
    },
};

const totalPlanos = operadoras.reduce((acc, op) => acc + op.planos.length, 0);
const wpCota = whatsappLink('Olá! Gostaria de comparar os planos das operadoras disponíveis. Pode me ajudar?');

export default function Operadoras() {
    return (
        <>
            {/* HEADER */}
            <div className="page-header">
                <div className="container">
                    <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Operadoras' }]} />
                    <h1>Operadoras de Planos de Saúde no RJ</h1>
                    <p>Compare as maiores operadoras do Brasil e encontre o plano ideal para você.</p>
                </div>
            </div>

            {/* STATS */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {[
                            { label: 'Operadoras parceiras', value: `${operadoras.length}`, bg: '#0e2a3f' },
                            { label: 'Planos disponíveis', value: `${totalPlanos}+`, bg: '#1a3d5c' },
                            { label: 'Cotação gratuita', value: '5 min', bg: '#163854' },
                            { label: 'Desconto CNPJ/MEI', value: '15%', bg: '#1a3d5c' },
                        ].map((s, i) => (
                            <div key={i} className="stat-card" style={{ background: s.bg }}>
                                <p className="stat-label">{s.label}</p>
                                <div className="stat-value">{s.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OPERADORAS GRID */}
            <section className="section bg-light">
                <div className="container">
                    <div className="section-header">
                        <span className="tag">PARCEIROS OFICIAIS</span>
                        <h2>Escolha a sua operadora</h2>
                        <p>Clique para ver todos os planos disponíveis de cada operadora no Rio de Janeiro.</p>
                    </div>

                    <div className="operadoras-rich-grid">
                        {operadoras.map(op => {
                            const extra = operadoraExtras[op.id] || {};
                            return (
                                <Link href={`/operadora/${op.id}`} key={op.id} className="operadora-rich-card">
                                    <div className="operadora-rich-bar" style={{ background: op.cor }} />
                                    <div className="operadora-rich-body">
                                        <div className="operadora-rich-header">
                                            <div className="operadora-rich-initial" style={{ background: op.cor }}>
                                                {op.nome.charAt(0)}
                                            </div>
                                            <div className="operadora-rich-meta">
                                                <div className="operadora-rich-title-row">
                                                    <h3>{op.nome}</h3>
                                                    <span className="operadora-plano-count">
                                                        {op.planos.length} plano{op.planos.length !== 1 ? 's' : ''}
                                                    </span>
                                                </div>
                                                {extra.destaque && (
                                                    <div className="operadora-rich-destaque" style={{ color: op.cor }}>
                                                        ★ {extra.destaque}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <p className="operadora-rich-desc">{op.descricao}</p>

                                        {extra.tags && (
                                            <div className="operadora-rich-tags">
                                                {extra.tags.map(tag => (
                                                    <span
                                                        key={tag}
                                                        className="operadora-rich-tag"
                                                        style={{ color: op.cor, background: `${op.cor}14`, border: `1px solid ${op.cor}28` }}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="operadora-rich-footer">
                                            <span>Ver planos e detalhes</span>
                                            <span className="operadora-rich-cta" style={{ color: op.cor }}>
                                                Ver planos
                                                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* COMO ESCOLHER */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Como escolher a operadora certa?</h2>
                        <p>Nosso consultor faz o trabalho por você — de graça.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                        {[
                            { num: '1', titulo: 'Defina suas prioridades', desc: 'Rede credenciada? Preço? Cobertura ampla? Portabilidade? Cada operadora tem pontos fortes diferentes.' },
                            { num: '2', titulo: 'Compare as opções', desc: 'Nossa equipe apresenta as tabelas de todas as operadoras lado a lado, com coberturas e valores atualizados.' },
                            { num: '3', titulo: 'Contrate com desconto', desc: 'Pela Avanti você acessa condições exclusivas e desconto de até 15% para CNPJ/MEI. Sem custo de consultoria.' },
                        ].map(step => (
                            <div key={step.num} className="how-step-card">
                                <div className="how-step-num">{step.num}</div>
                                <div>
                                    <h3 style={{ fontSize: '0.95rem', marginBottom: 6 }}>{step.titulo}</h3>
                                    <p style={{ fontSize: '0.83rem', color: 'var(--cinza-6)', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="final-cta-section">
                <div className="container">
                    <div className="final-cta-inner">
                        <div className="final-cta-text">
                            <h2>Não sabe qual operadora escolher?</h2>
                            <p>Nosso consultor compara todas as opções e encontra o plano ideal para o seu perfil. Grátis e em minutos.</p>
                        </div>
                        <a href={wpCota} target="_blank" rel="noreferrer" className="final-cta-card">
                            <div className="final-cta-card-content">
                                <span>Comparar operadoras pelo WhatsApp</span>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="white" fillOpacity=".15"/><path d="M13 18h10M18 13l5 5-5 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
