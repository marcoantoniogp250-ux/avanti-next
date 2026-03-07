import Link from 'next/link';

const WHATSAPP = 'https://wa.me/5521992340607?text=Ol%C3%A1!%20Gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20de%20plano%20de%20sa%C3%BAde.';

export default function Footer() {
    return (
        <footer className="footer">
            {/* Faixa dourada superior */}
            <div className="footer-gold-bar" />

            {/* Operadoras strip */}
            <div className="footer-ops-strip">
                <div className="container">
                    <div className="footer-ops-inner">
                        {['Amil', 'SulAmérica', 'Bradesco Saúde', 'Porto Seguro', 'Unimed', 'NotreDame'].map(op => (
                            <span key={op} className="footer-ops-item">{op}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-grid">
                    {/* Coluna 1: Identidade da marca */}
                    <div className="footer-brand">
                            <div className="footer-logo">
                            <img src="/logo-footer.png" alt="Avanti Corretora" className="footer-logo-img" />
                        </div>
                        <p className="footer-desc">
                            Sua parceira na escolha do plano de saúde ideal. Encontramos as melhores opções
                            com os melhores preços para você e sua família.
                        </p>
                        <div className="footer-contact">
                            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="footer-phone">
                                (21) 99234-0607
                            </a>
                        </div>
                    </div>

                    {/* Coluna 2: Navegação */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Navegação</h4>
                        <ul className="footer-col-links">
                            <li><Link href="/">Início</Link></li>
                            <li><Link href="/operadoras">Operadoras</Link></li>
                            <li><Link href="/hospitais">Hospitais</Link></li>
                            <li><Link href="/duvidas">Dúvidas Frequentes</Link></li>
                            <li><Link href="/contato">Contato / Cotação</Link></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Operadoras */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Operadoras</h4>
                        <ul className="footer-col-links">
                            <li><Link href="/operadora/amil">Amil</Link></li>
                            <li><Link href="/operadora/sulamerica">SulAmérica</Link></li>
                            <li><Link href="/operadora/bradesco">Bradesco Saúde</Link></li>
                            <li><Link href="/operadora/porto">Porto Seguro</Link></li>
                            <li><Link href="/operadora/unimed">Unimed</Link></li>
                            <li><Link href="/operadora/notredame">NotreDame</Link></li>
                        </ul>
                    </div>

                    {/* Coluna 4: CTA */}
                    <div className="footer-col footer-cta-col">
                        <h4 className="footer-col-title">Fale Conosco</h4>
                        <p className="footer-cta-text">
                            Cotação gratuita em minutos. Nosso corretor encontra o plano ideal para você.
                        </p>
                        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="footer-cta-btn">
                            💬 Cotar no WhatsApp
                        </a>
                        <div className="footer-badges">
                            <span>+5.000 famílias atendidas no RJ</span>
                            <span>+200 hospitais credenciados</span>
                            <span>Seg–Sex 9h–18h · Sáb 9h–13h</span>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <p>© {new Date().getFullYear()} <strong>Avanti Corretora de Planos de Saúde</strong>. Todos os direitos reservados.</p>
                    </div>
                    <div className="footer-bottom-right">
                        <p className="disclaimer">
                            Planos coletivos por adesão conforme regras da ANS. Preços sujeitos a alterações.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
