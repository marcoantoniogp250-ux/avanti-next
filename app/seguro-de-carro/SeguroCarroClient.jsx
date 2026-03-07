'use client';
import Image from 'next/image';
import { whatsappLink } from '../../lib/whatsapp';

const wpCota = whatsappLink('Olá! Gostaria de cotar um seguro para o meu veículo premium.');
const wpConsultor = whatsappLink('Olá! Tenho um veículo de alto valor e gostaria de falar com um corretor especializado.');

const marcas = [
    'BMW', 'Mercedes-Benz', 'Audi', 'Porsche',
    'Land Rover', 'Volvo', 'Jaguar', 'Lexus',
    'Ferrari', 'Lamborghini', 'Maserati', 'Bentley',
];

const seguradoras = [
    { nome: 'Porto Seguro', inicial: 'PS', cor: '#003D84', descricao: 'Líder em seguro auto no Brasil, com rede de concessionárias autorizadas para veículos premium.' },
    { nome: 'Allianz', inicial: 'AZ', cor: '#003781', descricao: 'Referência global em seguros. Reconhecida como melhor seguradora do país por múltiplos anos.' },
    { nome: 'SulAmérica', inicial: 'SA', cor: '#E8781A', descricao: 'Coberturas flexíveis com valor acordado para veículos importados e de luxo.' },
    { nome: 'Tokio Marine', inicial: 'TM', cor: '#C8102E', descricao: 'Especialista em seguros de alto padrão com produtos personalizados por perfil.' },
    { nome: 'Zurich', inicial: 'Z', cor: '#0035A9', descricao: 'Apólices premium para frotas executivas e veículos de alto valor patrimonial.' },
    { nome: 'Bradesco Seguros', inicial: 'BD', cor: '#CC092F', descricao: 'Solidez e tradição com condições diferenciadas para veículos premium e alta renda.' },
];

const coberturas = [
    {
        svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L3 7l9 5 9-5-9-5z"/><path d="M3 17l9 5 9-5"/><path d="M3 12l9 5 9-5"/></svg>,
        titulo: 'Valor Acordado', destaque: true,
        descricao: 'Indenização pelo valor contratado em apólice — não pela tabela FIPE. Para importados, a FIPE frequentemente subestima o valor real do veículo.',
    },
    {
        svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
        titulo: 'Reparo em Concessionária', destaque: true,
        descricao: 'Reparos exclusivamente na concessionária autorizada da marca, preservando a garantia do fabricante e usando peças 100% originais.',
    },
    {
        svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
        titulo: 'Carro Reserva de Categoria', destaque: true,
        descricao: 'Veículo substituto compatível com o seu padrão enquanto o carro está na concessionária. Sem rebaixar a experiência.',
    },
    {
        svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
        titulo: 'Blindagem e Acessórios', destaque: false,
        descricao: 'Cobertura específica para veículos blindados e proteção de acessórios de alto valor instalados no veículo.',
    },
    {
        svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
        titulo: 'Remoção por Prancha', destaque: false,
        descricao: 'Remoção por caminhão-prancha — não por guincho de gancho — preservando carroceria e componentes eletrônicos.',
    },
    {
        svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>,
        titulo: 'Cobertura Internacional', destaque: false,
        descricao: 'Extensão para uso do veículo em países do Mercosul, ideal para quem circula entre Brasil, Argentina e Uruguai.',
    },
    {
        svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
        titulo: 'RCF Ampliada', destaque: false,
        descricao: 'Limites elevados de Responsabilidade Civil Facultativa para danos materiais e corporais a terceiros.',
    },
    {
        svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="8" y1="20" x2="8.01" y2="20"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="12" y1="22" x2="12.01" y2="22"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="16" y1="20" x2="16.01" y2="20"/></svg>,
        titulo: 'Fenômenos Naturais', destaque: false,
        descricao: 'Proteção total contra alagamento, granizo, vendaval e eventos climáticos que danificam pintura, lataria e elétrica.',
    },
];

const passos = [
    { num: '01', titulo: 'Fale com um especialista', descricao: 'Nosso corretor especializado em veículos de alto valor entende as suas necessidades e o perfil do seu carro.' },
    { num: '02', titulo: 'Cotação comparada', descricao: 'Comparamos Porto Seguro, Allianz, SulAmérica, Tokio Marine e outras seguradoras com valor acordado e reparo em concessionária.' },
    { num: '03', titulo: 'Apólice sob medida', descricao: 'Você aprova e contrata. Toda a burocracia fica com a gente. Seu veículo protegido no padrão que merece.' },
];

const faqItems = [
    {
        pergunta: 'O que é valor acordado e por que é fundamental para carros de luxo?',
        resposta: 'Valor acordado é a indenização fixada previamente em contrato, independente da tabela FIPE. Para carros importados e premium, a FIPE frequentemente fica abaixo do valor de mercado — especialmente em momentos de câmbio desfavorável. Com valor acordado, você recebe exatamente o que foi combinado na apólice, sem surpresas.',
    },
    {
        pergunta: 'O reparo será feito na concessionária autorizada da marca?',
        resposta: 'Sim, desde que essa cobertura esteja incluída na apólice — o que recomendamos fortemente para veículos premium. Reparos na concessionária autorizada preservam a garantia do fabricante, usam peças originais e mantêm o valor de revenda do veículo.',
    },
    {
        pergunta: 'Como funciona o seguro para veículos blindados?',
        resposta: 'Veículos blindados exigem apólice específica que considere o custo da blindagem no valor segurado. É necessário informar o tipo e nível de blindagem na contratação. Trabalhamos com seguradoras que possuem produtos homologados para este perfil.',
    },
    {
        pergunta: 'Qual o carro reserva disponível para veículos de luxo?',
        resposta: 'As melhores apólices para veículos premium preveem carro reserva de categoria compatível — não um veículo popular. Negociamos coberturas que oferecem veículo executivo ou SUV de alto padrão como substituto.',
    },
    {
        pergunta: 'Como é calculado o seguro de um carro importado?',
        resposta: 'O cálculo considera valor de mercado, custo de peças importadas (impactado pelo câmbio), perfil do motorista, CEP e histórico de sinistros. Para importados, recomendamos o valor acordado acima da FIPE para refletir o custo real de reposição.',
    },
    {
        pergunta: 'O seguro tem cobertura internacional?',
        resposta: 'Alguns produtos oferecem extensão de cobertura para países do Mercosul (Argentina, Uruguai, Paraguai). Essa cobertura é opcional e deve ser solicitada no momento da contratação.',
    },
    {
        pergunta: 'O seguro cobre veículos de coleção e clássicos?',
        resposta: 'Sim, com apólice especial para veículos de coleção, que leva em conta o valor de mercado entre colecionadores — normalmente superior à tabela FIPE. O valor é acordado entre você e a seguradora com base em laudos especializados.',
    },
    {
        pergunta: 'Como é a remoção em caso de sinistro?',
        resposta: 'Para veículos de alto valor, recomendamos apólices que garantam remoção por caminhão-prancha em vez de guincho de gancho, evitando danos à carroceria, para-choques e sistemas eletrônicos sensíveis.',
    },
];

export default function SeguroCarroClient() {
    return (
        <>
            {/* ===== HERO ===== */}
            <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 72, background: '#050e1a' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <Image
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
                        alt="Veículo premium"
                        fill
                        priority
                        style={{ objectFit: 'cover', objectPosition: '60% center' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(5,14,26,0.97) 0%, rgba(5,14,26,0.88) 48%, rgba(5,14,26,0.25) 100%)' }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 48, paddingBottom: 80 }}>
                    <div style={{ maxWidth: 600 }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(187,140,59,0.18)', border: '1px solid rgba(187,140,59,0.35)', color: '#e0b96a', padding: '6px 16px', borderRadius: 50, fontSize: '0.75rem', fontWeight: 700, marginBottom: 28, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            Especialistas em Veículos de Alto Valor
                        </div>

                        <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.1rem)', lineHeight: 1.15, color: '#fff', fontWeight: 800, marginBottom: 20 }}>
                            Seu Veículo Premium Merece uma{' '}
                            <span style={{ color: '#e0b96a' }}>Proteção à Altura</span>
                        </h1>

                        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: 32 }}>
                            Seguro com <strong style={{ color: 'rgba(255,255,255,0.9)' }}>valor acordado</strong>, reparo exclusivo em concessionária autorizada e carro reserva de mesma categoria — para BMW, Mercedes, Porsche, Land Rover e muito mais.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
                            {[
                                'Indenização pelo valor acordado — não pela FIPE',
                                'Reparo na concessionária autorizada da marca',
                                'Carro reserva executivo enquanto o seu é reparado',
                            ].map(item => (
                                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(187,140,59,0.2)', border: '1.5px solid #BB8C3B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#e0b96a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </span>
                                    <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.93rem' }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        <a href={wpCota} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ fontSize: '1rem', padding: '14px 32px', display: 'inline-flex', gap: 10 }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.539 5.874L.057 23.5l5.797-1.521A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.956 0-3.792-.518-5.373-1.423l-.384-.228-3.979 1.043 1.062-3.872-.25-.4A9.969 9.969 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                            Cotar Seguro Premium — Grátis
                        </a>
                    </div>
                </div>
            </section>

            {/* ===== PROMO STRIP ===== */}
            <div style={{ background: 'var(--dourado)', padding: '13px 0' }}>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 36px' }}>
                    {['Valor acordado acima da FIPE', 'Reparo em concessionária autorizada', 'Carro reserva de categoria', 'Remoção por prancha'].map(item => (
                        <span key={item} style={{ color: '#fff', fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.03em' }}>✓ {item}</span>
                    ))}
                </div>
            </div>

            {/* ===== POR QUE O SEGURO COMUM NAO BASTA ===== */}
            <section className="section bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2>O seguro comum não é suficiente para o seu veículo</h2>
                        <p>Veículos de alto valor exigem coberturas que vão muito além do padrão.</p>
                    </div>
                    <div className="grid-3">
                        {[
                            {
                                img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80',
                                alt: 'Tabela FIPE vs valor real',
                                num: '01',
                                titulo: 'A FIPE não reflete o valor real',
                                desc: 'Para importados e premium, a FIPE frequentemente fica abaixo do mercado — especialmente com câmbio alto. O valor acordado garante a indenização justa.',
                            },
                            {
                                img: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&q=80',
                                alt: 'Oficina concessionária premium',
                                num: '02',
                                titulo: 'Peças originais e garantia preservada',
                                desc: 'Reparos em oficinas comuns podem anular a garantia de fábrica e usar peças não originais. Exija reparo exclusivamente na concessionária autorizada.',
                            },
                            {
                                img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80',
                                alt: 'Carro reserva executivo',
                                num: '03',
                                titulo: 'Padrão de atendimento compatível',
                                desc: 'Carro reserva executivo, remoção por prancha e atendimento prioritário. A experiência do sinistro deve respeitar o padrão do seu veículo.',
                            },
                        ].map(card => (
                            <div key={card.num} style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', minHeight: 320 }}>
                                <Image src={card.img} alt={card.alt} fill style={{ objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,14,26,0.95) 40%, rgba(5,14,26,0.35) 100%)' }} />
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 24px' }}>
                                    <div style={{ color: '#e0b96a', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Problema {card.num}</div>
                                    <h3 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: 8 }}>{card.titulo}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.83rem', lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== MARCAS ===== */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Marcas que atendemos</h2>
                        <p>Cotamos o seguro ideal para todas as principais marcas premium do mercado.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10 }}>
                        {marcas.map(marca => (
                            <div key={marca} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '18px 12px', background: 'var(--cinza-f)', border: '1px solid var(--cinza-e)', borderRadius: 12 }}>
                                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--azul)', letterSpacing: '0.03em', textAlign: 'center' }}>{marca}</span>
                            </div>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', color: 'var(--cinza-6)', fontSize: '0.88rem', marginTop: 20 }}>
                        Seu veículo não está na lista?{' '}
                        <a href={wpCota} target="_blank" rel="noreferrer" style={{ color: 'var(--dourado)', fontWeight: 600 }}>
                            Fale conosco — cotamos qualquer marca.
                        </a>
                    </p>
                </div>
            </section>

            {/* ===== COBERTURAS ===== */}
            <section className="section bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2>Coberturas para veículos de alto valor</h2>
                        <p>Apólice personalizada com o que realmente importa para o seu perfil.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 14 }}>
                        {coberturas.map((c, i) => (
                            <div key={i} style={{ padding: '22px 24px', background: '#fff', border: c.destaque ? '2px solid var(--dourado)' : '1px solid var(--cinza-e)', borderRadius: 14, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                                <div style={{ width: 44, height: 44, borderRadius: 12, background: c.destaque ? 'rgba(187,140,59,0.1)' : 'var(--cinza-f)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: c.destaque ? 'var(--dourado)' : 'var(--azul)' }}>
                                    {c.svg}
                                </div>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                                        <h3 style={{ fontSize: '0.93rem', margin: 0 }}>{c.titulo}</h3>
                                        {c.destaque && <span style={{ fontSize: '0.58rem', fontWeight: 700, background: 'var(--dourado)', color: '#fff', padding: '2px 7px', borderRadius: 50, flexShrink: 0 }}>ESSENCIAL</span>}
                                    </div>
                                    <p style={{ fontSize: '0.83rem', color: 'var(--cinza-6)', lineHeight: 1.6, margin: 0 }}>{c.descricao}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 36 }}>
                        <a href={wpCota} target="_blank" rel="noreferrer" className="btn btn-primary">
                            Quero uma apólice sob medida — Cotar Agora
                        </a>
                    </div>
                </div>
            </section>

            {/* ===== SEGURADORAS ===== */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Seguradoras com produtos premium</h2>
                        <p>Comparamos as seguradoras que oferecem os melhores produtos para veículos de alto valor.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                        {seguradoras.map(s => (
                            <div key={s.nome} style={{ padding: '24px', background: 'var(--cinza-f)', border: '1px solid var(--cinza-e)', borderRadius: 14, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                                <div style={{ width: 52, height: 52, borderRadius: 12, background: s.cor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <span style={{ color: '#fff', fontWeight: 900, fontSize: s.inicial.length > 2 ? '0.85rem' : '1rem', letterSpacing: '-0.02em' }}>{s.inicial}</span>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1rem', marginBottom: 6 }}>{s.nome}</h3>
                                    <p style={{ fontSize: '0.83rem', color: 'var(--cinza-6)', lineHeight: 1.55, margin: 0 }}>{s.descricao}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== COMO FUNCIONA ===== */}
            <section className="section" style={{ background: 'var(--azul)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 48 }}>
                        <h2 style={{ color: '#fff' }}>Como funciona a cotação?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 10 }}>Consultoria especializada, sem burocracia.</p>
                    </div>
                    <div className="grid-3">
                        {passos.map((p, i) => (
                            <div key={i} style={{ textAlign: 'center', padding: '32px 24px', background: 'rgba(255,255,255,0.06)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--dourado)', marginBottom: 14, lineHeight: 1, fontFamily: 'var(--font-brand)' }}>{p.num}</div>
                                <h3 style={{ color: '#fff', marginBottom: 10, fontSize: '1.05rem' }}>{p.titulo}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.87rem', lineHeight: 1.7, margin: 0 }}>{p.descricao}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 40 }}>
                        <a href={wpCota} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ fontSize: '1.05rem', padding: '15px 36px', display: 'inline-flex', gap: 10 }}>
                            Falar com Especialista pelo WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="section bg-light">
                <div className="container" style={{ maxWidth: 820 }}>
                    <div className="section-header">
                        <h2>Dúvidas sobre seguro de veículo premium</h2>
                        <p>Respostas para quem entende que proteção é um investimento.</p>
                    </div>
                    <div>
                        {faqItems.map((faq, i) => (
                            <details key={i} style={{ borderBottom: '1px solid var(--cinza-e)' }}>
                                <summary style={{ padding: '18px 0', fontWeight: 600, fontSize: '0.95rem', color: 'var(--azul)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {faq.pergunta}
                                    <span style={{ fontSize: '1.3rem', fontWeight: 300, flexShrink: 0, marginLeft: 16, color: 'var(--dourado)' }}>+</span>
                                </summary>
                                <p style={{ paddingBottom: 20, color: 'var(--cinza-3)', lineHeight: 1.75, margin: 0, fontSize: '0.9rem' }}>
                                    {faq.resposta}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section style={{ background: 'var(--azul)', padding: '80px 24px', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: 640 }}>
                    <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(187,140,59,0.18)', border: '1.5px solid rgba(187,140,59,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e0b96a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h2 style={{ color: '#fff', marginBottom: 16, fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}>
                        Seu carro tem valor.{' '}
                        <span style={{ color: '#e0b96a' }}>A proteção também deve ter.</span>
                    </h2>
                    <p style={{ marginBottom: 36, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, fontSize: '0.98rem' }}>
                        Fale com nosso corretor especializado em veículos de alto valor. Comparamos as melhores seguradoras e montamos uma apólice com valor acordado, reparo em concessionária e coberturas exclusivas para o seu perfil.{' '}
                        <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Consultoria 100% gratuita.</strong>
                    </p>
                    <a href={wpConsultor} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ padding: '16px 44px', fontSize: '1.1rem', display: 'inline-flex', gap: 10 }}>
                        Falar com Especialista — WhatsApp
                    </a>
                </div>
            </section>
        </>
    );
}
