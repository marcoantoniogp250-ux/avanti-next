'use client';
import { useState } from 'react';
import Link from 'next/link';
import { hospitais, cidades } from '../data/hospitais';
import { getPlanosByHospital } from '../data/operadoras';
import { whatsappLink } from '../../lib/whatsapp';

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

export default function Hospitais() {
    const [cidadeFiltro, setCidadeFiltro] = useState('Todos');
    const [hospitalSel, setHospitalSel] = useState(null);

    const filtered = cidadeFiltro === 'Todos' ? hospitais : hospitais.filter(h => h.cidade === cidadeFiltro);
    const planosHospital = hospitalSel ? getPlanosByHospital(hospitalSel.id) : [];

    return (
        <>
            {/* PAGE HEADER COM FOTO DE FUNDO */}
            <div className="page-header hospitais-header">
                <div className="hospitais-header-bg" />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>Rede de Hospitais</h1>
                    <p>Encontre os melhores hospitais credenciados e descubra quais planos cobrem cada um.</p>
                </div>
            </div>

            {/* BANNER PROPAGANDA */}
            <div className="promo-strip">
                <div className="container promo-strip-inner">
                    <span>🏆 Rede credenciada com +200 hospitais no RJ</span>
                    <span>🔒 Sem carência para urgência e emergência</span>
                    <span>💳 Desconto de 15% para CNPJ/MEI</span>
                    <span>📲 Cotação grátis em 5 minutos no WhatsApp</span>
                </div>
            </div>

            <section className="section bg-light">
                <div className="container">
                    {/* FILTRO POR CIDADE */}
                    <div className="filter-bar">
                        <button className={`filter-btn ${cidadeFiltro === 'Todos' ? 'active' : ''}`} onClick={() => setCidadeFiltro('Todos')}>
                            Todas as cidades
                        </button>
                        {cidades.map(c => (
                            <button key={c} className={`filter-btn ${cidadeFiltro === c ? 'active' : ''}`} onClick={() => setCidadeFiltro(c)}>
                                {c}
                            </button>
                        ))}
                    </div>

                    {/* GRID DE HOSPITAIS */}
                    <div className="grid-3">
                        {filtered.map(h => (
                            <div className={`hospital-card-new ${h.premium ? 'premium' : ''}`} key={h.id} onClick={() => setHospitalSel(h)}>
                                <div className="hospital-card-img">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={stablePhoto(h.id)} alt={h.nome} loading="lazy" />
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
                                    <p className="hospital-cta-text">Clique para ver os planos →</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MODAL DO HOSPITAL */}
            {hospitalSel && (
                <div className="modal-overlay" onClick={() => setHospitalSel(null)}>
                    <div className="modal-hospital" onClick={e => e.stopPropagation()}>
                        <button className="funnel-close-btn" onClick={() => setHospitalSel(null)}>✕</button>

                        <div className="modal-hospital-img">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={stablePhoto(hospitalSel.id)} alt={hospitalSel.nome} />
                            <div className="modal-hospital-overlay" />
                            <h2 className="modal-hospital-nome">{hospitalSel.nome}</h2>
                        </div>

                        <div className="modal-hospital-body">
                            <p style={{ color: 'var(--cinza-6)', marginBottom: 8 }}>
                                📍 {hospitalSel.cidade}
                            </p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--cinza-6)', marginBottom: 16 }}>
                                {hospitalSel.descricao}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                                {hospitalSel.especialidades.map((e, i) => (
                                    <span key={i} className="plano-tag nacional">{e}</span>
                                ))}
                            </div>

                            <h3 style={{ marginBottom: 14, fontSize: '1rem' }}>Planos que cobrem este hospital:</h3>
                            {planosHospital.length === 0 ? (
                                <p style={{ color: 'var(--cinza-6)', fontSize: '0.9rem' }}>
                                    Consulte-nos pelo WhatsApp para verificar a cobertura mais recente.
                                </p>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxHeight: 240, overflowY: 'auto' }}>
                                    {planosHospital.map(plano => (
                                        <div key={plano.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'var(--cinza-f)', borderRadius: 10 }}>
                                            <div>
                                                <strong style={{ fontSize: '0.9rem' }}>{plano.nome}</strong>
                                                <p style={{ fontSize: '0.75rem', color: 'var(--cinza-6)', margin: 0 }}>{plano.segmento}</p>
                                            </div>
                                            <Link href={`/plano/${plano.id}`} className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '6px 14px' }} onClick={() => setHospitalSel(null)}>
                                                Ver plano
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <a href={whatsappLink(`Olá! Quero um plano que cubra o ${hospitalSel.nome}.`)} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center', marginTop: 20 }}>
                                💬 Quero este hospital — Cotar no WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
