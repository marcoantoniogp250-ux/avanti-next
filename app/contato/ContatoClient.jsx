import { whatsappLink } from '../../lib/whatsapp';
import Breadcrumb from '../../components/Breadcrumb';

export default function ContatoClient() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Fale Conosco' }]} />
                    <h1>Fale Conosco</h1>
                    <p>Estamos prontos para ajudar você a encontrar o plano ideal.</p>
                </div>
            </div>

            <section className="section">
                <div className="container" style={{ maxWidth: 520, textAlign: 'center' }}>
                    <p style={{ color: 'var(--cinza-6)', marginBottom: 32, fontSize: '1rem' }}>
                        Fale diretamente com um de nossos consultores pelo WhatsApp e receba atendimento imediato.
                    </p>

                    <div style={{ marginBottom: 24 }}>
                        <div style={{ fontSize: '1rem', marginBottom: 4 }}>
                            <strong>(21) 99234-0607</strong>
                        </div>
                        <div style={{ color: 'var(--cinza-6)', fontSize: '0.875rem' }}>
                            Seg a Sex: 9h às 18h &nbsp;|&nbsp; Sábado: 9h às 13h
                        </div>
                    </div>

                    <a
                        href={whatsappLink('Olá! Gostaria de uma cotação de plano de saúde.')}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-whatsapp"
                        style={{ justifyContent: 'center', fontSize: '1.1rem', padding: '14px 32px' }}
                    >
                        Falar pelo WhatsApp
                    </a>
                </div>
            </section>
        </>
    );
}
