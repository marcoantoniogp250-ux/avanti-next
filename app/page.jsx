import Link from 'next/link';
import { operadoras, planos } from './data/operadoras';
import { whatsappLink } from '../lib/whatsapp';

export const metadata = {
    title: 'Avanti Corretora | Planos de Saúde no Rio de Janeiro',
    description: 'Cotação gratuita com as maiores operadoras do Brasil. Acesse a rede dos melhores hospitais do Rio de Janeiro com descontos exclusivos.',
};

export default function Home() {
    const operadorasDestaque = operadoras.slice(0, 4);
    const planosDestaque = planos.filter(p => p.destaque).slice(0, 3);
    const wpCota = whatsappLink('Olá! Gostaria de cotar um plano de saúde.');
    const wpHospitais = whatsappLink('Quero ver os planos que cobrem os melhores hospitais do RJ.');
    const wpConsultor = whatsappLink('Olá! Quero falar com um corretor para encontrar o plano ideal para mim.');

    return (
        <div>
            {/* HERO SECTION */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content" style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{ display: 'inline-block', background: 'rgba(187,140,59,0.2)', color: 'var(--dourado-claro)', padding: '6px 18px', borderRadius: 50, fontSize: '0.8rem', fontWeight: 700, marginBottom: 20, letterSpacing: 1 }}>
                            🏆 +5.000 famílias atendidas no RJ
                        </div>
                        <h1 className="hero-title">A Melhor Escolha para a Sua Saúde e da Sua Família</h1>
                        <p className="hero-subtitle">
                            Cotação gratuita com as maiores operadoras do Brasil. Acesse a rede dos melhores hospitais do Rio de Janeiro com descontos exclusivos.
                        </p>
                        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
                            <a href={wpCota} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '15px 32px', fontSize: '1.1rem' }}>
                                📊 Cotar Agora — Grátis
                            </a>
                            <Link href="/hospitais" className="btn btn-outline" style={{ padding: '15px 32px', fontSize: '1.1rem', background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>
                                🏥 Ver Hospitais
                            </Link>
                        </div>
                        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem' }}>✅ Sem carência em urgência</span>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem' }}>✅ 15% OFF para CNPJ</span>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem' }}>✅ Resposta em minutos</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROMO STRIP */}
            <div className="promo-strip">
                <div className="container promo-strip-inner">
                    <span>🏆 Rede com +200 hospitais no RJ</span>
                    <span>🔒 Sem carência para urgência e emergência</span>
                    <span>💳 15% de desconto para CNPJ/MEI</span>
                    <span>📲 Cotação grátis em 5 minutos</span>
                </div>
            </div>

            {/* VANTAGENS */}
            <section className="section bg-light">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 40 }}>
                        <h2>Por que escolher a Avanti Corretora?</h2>
                        <p style={{ color: 'var(--cinza-6)', marginTop: 10 }}>Especialistas em planos de saúde no Rio de Janeiro.</p>
                    </div>
                    <div className="grid-3" style={{ textAlign: 'center' }}>
                        <div className="card" style={{ padding: '30px' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🏢</div>
                            <h3 style={{ marginBottom: '10px' }}>15% OFF para CNPJ/MEI</h3>
                            <p style={{ color: 'var(--cinza-6)' }}>Condições especiais para empresas, profissionais autônomos com CNPJ e MEI.</p>
                        </div>
                        <div className="card" style={{ padding: '30px' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🏥</div>
                            <h3 style={{ marginBottom: '10px' }}>Melhores Hospitais do RJ</h3>
                            <p style={{ color: 'var(--cinza-6)' }}>Copa D'Or, Samaritano, Norte D'Or, Niterói D'Or, Prontobaby e muito mais.</p>
                        </div>
                        <div className="card" style={{ padding: '30px' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⚡</div>
                            <h3 style={{ marginBottom: '10px' }}>Cotação em 5 Minutos</h3>
                            <p style={{ color: 'var(--cinza-6)' }}>Fale com um corretor agora no WhatsApp e receba sua tabela na hora.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROPAGANDA VISUAL */}
            <section className="promo-banners">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 8 }}>
                        <h2 style={{ color: '#fff', fontSize: '2rem' }}>Acesso aos Melhores Hospitais do Rio</h2>
                        <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: 8 }}>Com um plano da Avanti, você tem acesso imediato à rede premium.</p>
                    </div>
                    <div className="promo-banners-grid">
                        <div className="promo-banner-card">
                            <div className="promo-icon">🏆</div>
                            <h3>Copa D&apos;Or &amp; Copa Star</h3>
                            <p>Os hospitais mais sofisticados da Zona Sul do Rio. Tecnologia de ponta e atendimento de classe mundial.</p>
                        </div>
                        <div className="promo-banner-card">
                            <div className="promo-icon">🍼</div>
                            <h3>Maternidades Credenciadas</h3>
                            <p>Samaritano, Prontobaby, Perinatal e mais. Cuide do seu bebê desde antes do nascimento.</p>
                        </div>
                        <div className="promo-banner-card">
                            <div className="promo-icon">🧬</div>
                            <h3>Alta Complexidade</h3>
                            <p>Oncologia, Cardiologia e Neurologia com profissionais de referência nacional disponíveis para você.</p>
                        </div>
                        <div className="promo-banner-card">
                            <div className="promo-icon">🚨</div>
                            <h3>Emergência 24h SEM Burocracia</h3>
                            <p>Pronto-atendimento sem carência para urgência. Você nunca fica desamparado.</p>
                        </div>
                        <div className="promo-banner-card">
                            <div className="promo-icon">📍</div>
                            <h3>Niterói, São Gonçalo e Baixada</h3>
                            <p>Rede credenciada além da capital: CHN Niterói, Samcordis, Mário Lioni perto de você.</p>
                        </div>
                        <div className="promo-banner-card">
                            <div className="promo-icon">💬</div>
                            <h3>Corretor Dedicado</h3>
                            <p>Atendimento humanizado. Nós negociamos pelo melhor preço e encontramos o plano perfeito.</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 36 }}>
                        <a href={wpHospitais} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ fontSize: '1.05rem', padding: '15px 36px', display: 'inline-flex' }}>
                            💬 Quero esses hospitais — Falar com Corretor
                        </a>
                    </div>
                </div>
            </section>

            {/* OPERADORAS DESTAQUE */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2>Trabalhamos com as Melhores Operadoras</h2>
                        <p style={{ color: 'var(--cinza-6)', marginTop: '10px' }}>Opções sob medida para o seu bolso e necessidades.</p>
                    </div>
                    <div className="operadoras-grid">
                        {operadorasDestaque.map(op => (
                            <Link href={`/operadora/${op.id}`} key={op.id} className="operadora-card">
                                <h3>{op.nome}</h3>
                                <p style={{ fontSize: '0.85rem', color: 'var(--cinza-6)', marginTop: '8px' }}>
                                    {op.descricao}
                                </p>
                            </Link>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <Link href="/operadoras" className="btn btn-secondary" style={{ border: '2px solid var(--cinza-e)', color: 'var(--azul)' }}>
                            Ver todas as operadoras →
                        </Link>
                    </div>
                </div>
            </section>

            {/* PLANOS DESTAQUE */}
            <section className="section bg-light">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2>Planos em Destaque</h2>
                        <p style={{ color: 'var(--cinza-6)', marginTop: '10px' }}>Os planos mais procurados pelos cariocas.</p>
                    </div>
                    <div className="grid-3">
                        {planosDestaque.map(plano => {
                            const op = operadoras.find(o => o.id === plano.operadoraId);
                            return (
                                <div className="card" key={plano.id}>
                                    <div className="plano-header">
                                        <h3 className="plano-titulo">{plano.nome}</h3>
                                    </div>
                                    <div style={{ padding: '20px' }}>
                                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '15px' }}>
                                            <span className="plano-tag" style={{ background: 'var(--cinza-f)' }}>{op?.nome}</span>
                                            <span className={`plano-tag ${plano.segmento.toLowerCase()}`}>{plano.segmento}</span>
                                        </div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--dourado)', marginBottom: '15px', fontWeight: 700 }}>
                                            ⭐ Tabela sob consulta
                                        </div>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--cinza-6)', marginBottom: '20px', minHeight: '60px' }}>
                                            {plano.resumo}
                                        </p>
                                        <Link href={`/plano/${plano.id}`} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', border: '2px solid var(--cinza-e)', color: 'var(--azul)' }}>
                                            Ver Detalhes
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="section" style={{ background: 'var(--azul)', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '620px' }}>
                    <div style={{ fontSize: '3rem', marginBottom: 12 }}>💬</div>
                    <h2 style={{ color: 'var(--dourado-claro)', marginBottom: '15px' }}>Ainda com dúvidas? Fale Agora!</h2>
                    <p style={{ marginBottom: '30px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                        Nossos corretores estão prontos para encontrar o plano ideal para você <strong>de graça</strong>,
                        analisando sua faixa etária, região e orçamento. Consulta sem compromisso!
                    </p>
                    <a href={wpConsultor} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ padding: '16px 44px', fontSize: '1.15rem', display: 'inline-flex' }}>
                        Falar com Consultor Agora — WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
}
