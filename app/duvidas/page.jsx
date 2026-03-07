import DuvidasClient from './DuvidasClient';
import { faqData } from '../data/faq';

export const metadata = {
    title: 'Dúvidas Frequentes sobre Planos de Saúde no RJ',
    description: 'Tire suas dúvidas sobre carência, cobertura, coparticipação, portabilidade e regras da ANS. Respostas completas para escolher o melhor plano de saúde no Rio de Janeiro.',
    alternates: { canonical: '/duvidas' },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.flatMap(cat =>
        cat.perguntas.map(item => ({
            '@type': 'Question',
            name: item.pergunta,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.resposta,
            },
        }))
    ),
};

export default function Duvidas() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <DuvidasClient />
        </>
    );
}
