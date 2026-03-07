import Link from 'next/link';
import { operadoras } from './data/operadoras';
import { whatsappLink } from '../lib/whatsapp';
import TestimonialsCarousel from './TestimonialsCarousel';
import PlanTypesPanel from './PlanTypesPanel';
import FaqHomepage from './FaqHomepage';
import RotatingText from './RotatingText';
import HeroGradient from './HeroGradient';

export const metadata = {
    title: 'Avanti Corretora | Planos de Saúde no Rio de Janeiro',
    description: 'Cotação gratuita com as maiores operadoras do Brasil. Acesse a rede dos melhores hospitais do Rio de Janeiro com descontos exclusivos.',
};

const STATS = [
    { label: 'Famílias atendidas no RJ', value: '5.000+', bg: '#0e2a3f' },
    { label: 'Hospitais credenciados', value: '200+', bg: '#1a3d5c' },
    { label: 'Desconto para CNPJ/MEI', value: '15%', bg: '#163854' },
    { label: 'Cotação em minutos', value: '5 min', bg: '#1a3d5c' },
    { label: 'Operadoras parceiras', value: '6', bg: '#0e2a3f' },
];

const BENEFITS = [
    { tag: 'Cobertura', value: 'Sem carência', title: 'Urgência e Emergência', desc: 'Atendimento imediato após a contratação, sem espera para casos de urgência e emergência.' },
    { tag: 'Desconto', value: '15% OFF', title: 'CNPJ / MEI / Empresas', desc: 'Condições exclusivas para autônomos, MEI e empresas de qualquer porte.' },
    { tag: 'Rede', value: '+200 hospitais', title: 'Melhores Hospitais do RJ', desc: 'Copa D\'Or, Samaritano, Norte D\'Or, Prontobaby e toda a rede premium do Rio.' },
    { tag: 'Atendimento', value: 'Dedicado', title: 'Corretor Exclusivo', desc: 'Consultor exclusivo para encontrar o plano ideal para o seu perfil e orçamento.' },
    { tag: 'Portabilidade', value: 'Sem burocracia', title: 'Troca Sem Carência', desc: 'Mude de plano mantendo suas carências cumpridas. Cuidamos de tudo para você.' },
    { tag: 'Reembolso', value: 'Até R$800/mês', title: 'Reembolso de Consultas', desc: 'Planos com reembolso para médicos fora da rede. Liberdade de escolha total.' },
];

const LOGOS = ['Amil', 'SulAmérica', 'Bradesco Saúde', 'Porto Seguro', 'Unimed', 'NotreDame'];

export default function Home() {
    const wpCota = whatsappLink('Olá! Gostaria de cotar um plano de saúde.');
    const wpConsultor = whatsappLink('Olá! Quero falar com um corretor para encontrar o plano ideal para mim.');

    return (
        <div>
            {/* ===== HERO ===== */}
            <section className="hero-v2">
                <HeroGradient />
                <div className="fc fc-top-left">
                    <span className="fc-label">* Copa D&apos;Or credenciado</span>
                    <div className="fc-img">
                        <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=220&h=220&fit=crop&auto=format" alt="Hospital Copa D'Or" />
                    </div>
                </div>
                <div className="fc fc-top-right">
                    <span className="fc-label">* Família protegida</span>
                    <div className="fc-img">
                        <img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=220&h=220&fit=crop&auto=format" alt="Família feliz" />
                    </div>
                </div>
                <div className="fc fc-mid-left">
                    <span className="fc-label">* Emergência 24h</span>
                    <div className="fc-img">
                        <img src="https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?w=220&h=220&fit=crop&auto=format" alt="Ambulância emergência" />
                    </div>
                </div>
                <div className="fc fc-mid-right">
                    <span className="fc-label">* Seguro veículo premium</span>
                    <div className="fc-img">
                        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=220&h=220&fit=crop&auto=format" alt="Veículo premium" />
                    </div>
                </div>
                <div className="fc fc-bot-right">
                    <span className="fc-label">* Cotação em 5 min</span>
                    <div className="fc-img">
                        <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=220&h=220&fit=crop&auto=format" alt="Cotação rápida" />
                    </div>
                </div>

                <div className="hero-v2-center">
                    <div className="hero-v2-badge">+5.000 famílias atendidas no RJ</div>
                    <h1 className="hero-v2-title">
                        O melhor plano de saúde para
                        <RotatingText />
                    </h1>
                    <p className="hero-v2-sub">
                        Cotação gratuita com as maiores operadoras do Brasil.
                    </p>
                    <a href={wpCota} target="_blank" rel="noreferrer" className="hero-v2-cta">
                        Cotar agora — Grátis
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="11" fill="currentColor" fillOpacity=".2"/><path d="M8 11h6M11 8l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>
                    <div className="hero-v2-trust">
                        <span>Sem carência para urgência</span>
                        <span>15% OFF para CNPJ</span>
                        <span>Resposta em minutos</span>
                    </div>
                </div>

                {/* ===== LOGOS MARQUEE — pinned to bottom of hero ===== */}
                <div className="logos-strip logos-strip-hero">
                    <div className="logos-track">
                        {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
                            <span key={i} className="logos-item">{logo}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== STATS ===== */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {STATS.map((s, i) => (
                            <div key={i} className="stat-card" style={{ background: s.bg }}>
                                <p className="stat-label">{s.label}</p>
                                <div className="stat-value">{s.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== BENEFITS ===== */}
            <section className="benefits-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Um plano com tudo que você precisa</h2>
                        <p>As melhores condições do Rio em um só lugar.</p>
                    </div>
                    <div className="benefits-grid">
                        {BENEFITS.map((b, i) => (
                            <div key={i} className="benefit-card">
                                <div className="benefit-top">
                                    <span className="benefit-tag">{b.tag}</span>
                                    <span className="benefit-value">{b.value}</span>
                                </div>
                                <h3 className="benefit-title">{b.title}</h3>
                                <p className="benefit-desc">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 40 }}>
                        <a href={wpCota} target="_blank" rel="noreferrer" className="btn btn-primary">
                            Ver condições completas
                        </a>
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <TestimonialsCarousel />

            {/* ===== OPERADORAS ===== */}
            <section className="operadoras-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Trabalhamos com as Melhores Operadoras</h2>
                        <p>Opções sob medida para o seu bolso e necessidades.</p>
                    </div>
                    <div className="operadoras-strip">
                        {operadoras.map(op => (
                            <Link href={`/operadora/${op.id}`} key={op.id} className="op-pill">
                                {op.nome}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PLAN TYPES ===== */}
            <PlanTypesPanel wpCota={wpCota} />

            {/* ===== FAQ ===== */}
            <FaqHomepage />

            {/* ===== FINAL CTA ===== */}
            <section className="final-cta-section">
                <div className="container">
                    <div className="final-cta-inner">
                        <div className="final-cta-text">
                            <h2>Cotação gratuita hoje</h2>
                            <p>Leva menos de 5 minutos. Nosso corretor encontra o plano ideal para você, de graça.</p>
                        </div>
                        <a href={wpConsultor} target="_blank" rel="noreferrer" className="final-cta-card">
                            <div className="final-cta-card-content">
                                <span>Falar com consultor agora pelo WhatsApp</span>
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><circle cx="22" cy="22" r="22" fill="#0e2a3f" fillOpacity=".15"/><path d="M16 22h12M22 16l6 6-6 6" stroke="#0e2a3f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
