import './globals.css';
import { Space_Grotesk, Syne } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-heading',
    display: 'swap',
});

const syne = Syne({
    subsets: ['latin'],
    weight: ['700', '800'],
    variable: '--font-brand',
    display: 'swap',
});
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const BASE_URL = 'https://avanticorretora.com.br';

export const metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        template: '%s | Avanti Corretora',
        default: 'Avanti Corretora | Planos de Saúde no Rio de Janeiro',
    },
    description: 'Cotação gratuita com as maiores operadoras do Brasil. Amil, SulAmérica, Bradesco, Porto Seguro, Unimed e NotreDame. Acesse a rede dos melhores hospitais do Rio de Janeiro.',
    keywords: 'plano de saúde rio de janeiro, amil, sulamerica, bradesco saúde, porto seguro saúde, unimed rio, corretora saúde rj',
    openGraph: {
        title: 'Avanti Corretora | Planos de Saúde no Rio de Janeiro',
        description: 'Cotação gratuita. Acesse os melhores hospitais do RJ com desconto exclusivo.',
        type: 'website',
        url: BASE_URL,
        locale: 'pt_BR',
        siteName: 'Avanti Corretora',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Avanti Corretora | Planos de Saúde no Rio de Janeiro',
        description: 'Cotação gratuita com Amil, SulAmérica, Bradesco, Porto Seguro, Unimed e NotreDame. Acesse a rede dos melhores hospitais do RJ.',
    },
    alternates: {
        canonical: BASE_URL,
    },
    other: {
        'google-site-verification': '',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: 'Avanti Corretora de Planos de Saúde',
    description: 'Corretora especializada em planos de saúde no Rio de Janeiro. Cotação gratuita com Amil, SulAmérica, Bradesco Saúde, Porto Seguro, Unimed e NotreDame Intermédica.',
    url: BASE_URL,
    telephone: '+55-21-99234-0607',
    areaServed: {
        '@type': 'State',
        name: 'Rio de Janeiro',
        sameAs: 'https://www.wikidata.org/wiki/Q8678',
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rio de Janeiro',
        addressRegion: 'RJ',
        addressCountry: 'BR',
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '13:00',
        },
    ],
    knowsAbout: [
        'Planos de saúde individuais',
        'Planos de saúde empresariais',
        'Planos de saúde MEI e CNPJ',
        'Portabilidade de plano de saúde',
        'Amil',
        'SulAmérica Saúde',
        'Bradesco Saúde',
        'Porto Seguro Saúde',
        'Unimed Ferj',
        'NotreDame Intermédica',
        'Rede D\'Or São Luiz',
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Planos de Saúde no Rio de Janeiro',
        itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plano de Saúde Individual' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plano de Saúde Familiar' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plano de Saúde Empresarial' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plano de Saúde MEI / CNPJ' } },
        ],
    },
};

const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Avanti Corretora',
    url: BASE_URL,
    description: 'Corretora de planos de saúde no Rio de Janeiro. Compare operadoras, hospitais e encontre o plano ideal.',
    inLanguage: 'pt-BR',
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}/hospitais?busca={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={`${spaceGrotesk.variable} ${syne.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                />
            </head>
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
