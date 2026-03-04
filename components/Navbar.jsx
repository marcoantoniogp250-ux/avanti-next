'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const WHATSAPP = 'https://wa.me/5521992340607?text=Ol%C3%A1!%20Gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20de%20plano%20de%20sa%C3%BAde.';

function AvantiLogo({ size = 44 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="44" height="44" rx="10" fill="#BB8C3B" />
            <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle"
                fill="#163854" fontSize="24" fontWeight="900" fontFamily="Inter, sans-serif">
                A
            </text>
            <line x1="28" y1="30" x2="38" y2="18" stroke="#163854" strokeWidth="2.5" strokeLinecap="round" />
            <polygon points="38,18 33,19 37,23" fill="#163854" />
        </svg>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => setOpen(false), [pathname]);

    const isActive = (path) => pathname === path ? 'active' : '';

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            {/* Linha dourada superior */}
            <div className="navbar-gold-line" />

            <div className="nav-container">
                <Link href="/" className="nav-logo">
                    <AvantiLogo size={44} />
                    <div className="nav-logo-text">
                        <span className="nav-logo-avanti">AVANTI</span>
                        <small className="nav-logo-corretora">CORRETORA</small>
                    </div>
                </Link>

                <ul className={`nav-links ${open ? 'open' : ''}`}>
                    <li><Link href="/" className={isActive('/')}>Início</Link></li>
                    <li><Link href="/operadoras" className={isActive('/operadoras')}>Operadoras</Link></li>
                    <li><Link href="/hospitais" className={isActive('/hospitais')}>Hospitais</Link></li>
                    <li><Link href="/duvidas" className={isActive('/duvidas')}>Dúvidas</Link></li>
                    <li><Link href="/contato" className={isActive('/contato')}>Contato</Link></li>
                    <li>
                        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="nav-cta">
                            📋 Fazer Cotação
                        </a>
                    </li>
                </ul>

                <button className="nav-mobile-btn" onClick={() => setOpen(!open)} aria-label="Menu">
                    {open ? '✕' : '☰'}
                </button>
            </div>
        </nav>
    );
}
