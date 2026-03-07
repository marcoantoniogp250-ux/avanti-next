'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { hospitais, cidades } from '../data/hospitais';
import { whatsappLink } from '../../lib/whatsapp';
import Breadcrumb from '../../components/Breadcrumb';

const FALLBACK_POOL = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=600&q=80",
    "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&q=80",
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80",
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80",
    "https://images.unsplash.com/photo-1628372095387-017d1099fc19?w=600&q=80",
    "https://images.unsplash.com/photo-1633219664572-473fd988a44f?w=600&q=80",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80",
    "https://images.unsplash.com/photo-1512102438733-bfa4ed29aef7?w=600&q=80",
    "https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?w=600&q=80",
    "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&q=80",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
    "https://images.unsplash.com/photo-1517120026326-d87759a7b63b?w=600&q=80",
    "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?w=600&q=80",
    "https://images.unsplash.com/photo-1579488081688-3dbbbae7893e?w=600&q=80",
    "https://images.unsplash.com/photo-1589279003513-467d320f47eb?w=600&q=80",
    "https://images.unsplash.com/photo-1606318313647-137d1f3b4d3c?w=600&q=80",
    "https://images.unsplash.com/photo-1612375689547-b5351e63050b?w=600&q=80",
    "https://images.unsplash.com/photo-1629909614456-6b1c5c94cecc?w=600&q=80",
    "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=600&q=80",
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    "https://images.unsplash.com/photo-1589278787442-d2840f4024f1?w=600&q=80",
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80",
    "https://images.unsplash.com/photo-1625134673337-519d4d10b313?w=600&q=80",
];

const stablePhoto = (id) => {
    let hash = 0;
    for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
    return FALLBACK_POOL[Math.abs(hash) % FALLBACK_POOL.length];
};

const PAGE_SIZE = 16;

export default function HospitaisClient() {
    const [cidadeFiltro, setCidadeFiltro] = useState('Todos');
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    const filtered = cidadeFiltro === 'Todos' ? hospitais : hospitais.filter(h => h.cidade === cidadeFiltro);
    const visible = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < filtered.length;

    return (
        <>
            {/* PAGE HEADER COM FOTO DE FUNDO */}
            <div className="page-header hospitais-header">
                <div className="hospitais-header-bg" />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Hospitais Credenciados' }]} />
                    <h1>Rede de Hospitais Credenciados no Rio de Janeiro</h1>
                    <p>Encontre os melhores hospitais credenciados e descubra quais planos cobrem cada um.</p>
                </div>
            </div>

            {/* STATS */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {[
                            { label: 'Hospitais credenciados no RJ', value: '+200', bg: '#0e2a3f' },
                            { label: 'Sem carência para urgência', value: '0 dias', bg: '#1a3d5c' },
                            { label: 'Desconto para CNPJ/MEI', value: '15%', bg: '#163854' },
                            { label: 'Cotação no WhatsApp', value: '5 min', bg: '#1a3d5c' },
                        ].map((s, i) => (
                            <div key={i} className="stat-card" style={{ background: s.bg }}>
                                <p className="stat-label">{s.label}</p>
                                <div className="stat-value">{s.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    {/* SECTION HEADER */}
                    <div className="section-header" style={{ textAlign: 'left', marginBottom: 32 }}>
                        <span className="tag">REDE CREDENCIADA</span>
                        <h2>Encontre o Hospital Ideal para Você</h2>
                        <p style={{ margin: 0 }}>Filtre por cidade e veja quais planos cobrem cada hospital.</p>
                    </div>

                    {/* FILTRO POR CIDADE */}
                    <div className="filter-bar">
                        <button className={`filter-btn ${cidadeFiltro === 'Todos' ? 'active' : ''}`} onClick={() => { setCidadeFiltro('Todos'); setVisibleCount(PAGE_SIZE); }}>
                            Todas as cidades
                        </button>
                        {cidades.map(c => (
                            <button key={c} className={`filter-btn ${cidadeFiltro === c ? 'active' : ''}`} onClick={() => { setCidadeFiltro(c); setVisibleCount(PAGE_SIZE); }}>
                                {c}
                            </button>
                        ))}
                    </div>

                    {/* GRID DE HOSPITAIS */}
                    <div className="grid-3">
                        {visible.map(h => (
                            <Link href={`/hospitais/${h.id}`} className={`hospital-card-new ${h.premium ? 'premium' : ''}`} key={h.id} style={{ textDecoration: 'none', display: 'block' }}>
                                <div className="hospital-card-img">
                                    <Image src={stablePhoto(h.id)} alt={h.nome} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                                    <div className="hospital-card-overlay" />
                                    {h.premium && <span className="hospital-badge-new">★ Premium</span>}
                                    <div className="hospital-card-city">{h.cidade}</div>
                                </div>
                                <div className="hospital-card-body">
                                    <h3>{h.nome}</h3>
                                    <p className="hospital-local">📍 {h.bairro !== 'Em atualização' ? h.bairro + ', ' : ''}{h.cidade}</p>
                                    <div className="hospital-specs">
                                        {h.especialidades.slice(0, 3).map((e, i) => <span key={i}>{e}</span>)}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {hasMore && (
                        <div style={{ textAlign: 'center', marginTop: 40 }}>
                            <button
                                onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
                                className="btn btn-secondary"
                                style={{ minHeight: 48, padding: '12px 36px', fontSize: '1rem' }}
                            >
                                Carregar mais ({filtered.length - visibleCount} restantes)
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="final-cta-section">
                <div className="container">
                    <div className="final-cta-inner">
                        <div className="final-cta-text">
                            <h2>Achou o hospital ideal?</h2>
                            <p>Cote agora e garanta um plano que cobre sua rede preferida. Grátis e em minutos.</p>
                        </div>
                        <a href={whatsappLink('Olá! Quero cotar um plano de saúde que cubra meu hospital preferido.')} target="_blank" rel="noreferrer" className="final-cta-card">
                            <div className="final-cta-card-content">
                                <span>Cotar plano no WhatsApp — Grátis</span>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="white" fillOpacity=".15"/><path d="M13 18h10M18 13l5 5-5 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

        </>
    );
}
