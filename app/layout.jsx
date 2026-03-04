import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export const metadata = {
    title: 'Avanti Corretora | Planos de Saúde no Rio de Janeiro',
    description: 'Cotação gratuita com as maiores operadoras do Brasil. Amil, SulAmérica, Bradesco, Porto Seguro, Unimed e NotreDame. Acesse a rede dos melhores hospitais do Rio de Janeiro.',
    keywords: 'plano de saúde rio de janeiro, amil, sulamerica, bradesco saúde, porto seguro saúde, unimed rio, corretora saúde rj',
    openGraph: {
        title: 'Avanti Corretora | Planos de Saúde no Rio de Janeiro',
        description: 'Cotação gratuita. Acesse os melhores hospitais do RJ com desconto exclusivo.',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}
