import SeguroCarroClient from './SeguroCarroClient';

export const metadata = {
    title: 'Seguro de Carro Premium no Rio de Janeiro | Avanti Corretora',
    description: 'Seguro auto com valor acordado, reparo em concessionária autorizada e carro reserva de categoria para BMW, Mercedes, Porsche, Land Rover e outros veículos de alto valor no RJ.',
    keywords: 'seguro carro premium rio de janeiro, seguro auto luxo rj, seguro BMW RJ, seguro Mercedes RJ, seguro Porsche RJ, valor acordado seguro auto, seguro carro importado rio de janeiro',
    alternates: { canonical: '/seguro-de-carro' },
    openGraph: {
        title: 'Seguro de Carro Premium no Rio de Janeiro | Avanti Corretora',
        description: 'Seguro com valor acordado, reparo em concessionária e cobertura exclusiva para veículos de alto valor no RJ.',
        url: 'https://avanticorretora.com.br/seguro-de-carro',
    },
};

const seguroCarroSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Seguro de Carro Premium',
    provider: {
        '@type': 'InsuranceAgency',
        name: 'Avanti Corretora',
        url: 'https://avanticorretora.com.br',
        telephone: '+55-21-99234-0607',
        areaServed: 'Rio de Janeiro',
    },
    description: 'Seguro auto com valor acordado, reparo em concessionária autorizada e coberturas exclusivas para veículos de alto valor no Rio de Janeiro. BMW, Mercedes, Porsche, Land Rover e importados.',
    areaServed: 'Rio de Janeiro',
    url: 'https://avanticorretora.com.br/seguro-de-carro',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'O que é valor acordado e por que é fundamental para carros de luxo?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Valor acordado é a indenização fixada previamente em contrato, independente da tabela FIPE. Para carros importados e premium, a FIPE frequentemente subestima o valor real do veículo. Com valor acordado, você recebe exatamente o que foi combinado na apólice.',
            },
        },
        {
            '@type': 'Question',
            name: 'O reparo será feito na concessionária autorizada da marca?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sim, desde que essa cobertura esteja incluída na apólice. Reparos na concessionária autorizada preservam a garantia do fabricante, usam peças originais e mantêm o valor de revenda do veículo.',
            },
        },
        {
            '@type': 'Question',
            name: 'Como funciona o seguro para veículos blindados?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Veículos blindados exigem apólice específica que considere o custo da blindagem no valor segurado. É necessário informar o tipo e nível de blindagem na contratação. Trabalhamos com seguradoras que possuem produtos homologados para este perfil.',
            },
        },
        {
            '@type': 'Question',
            name: 'Como é calculado o seguro de um carro importado?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'O cálculo considera valor de mercado, custo de peças importadas (impactado pelo câmbio), perfil do motorista, CEP e histórico de sinistros. Para importados, recomendamos o valor acordado acima da FIPE para refletir o custo real de reposição.',
            },
        },
        {
            '@type': 'Question',
            name: 'O seguro cobre veículos de coleção e clássicos?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sim, com apólice especial para veículos de coleção, que leva em conta o valor de mercado entre colecionadores. O valor é acordado entre você e a seguradora com base em laudos especializados.',
            },
        },
    ],
};

export default function SeguroCarro() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(seguroCarroSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <SeguroCarroClient />
        </>
    );
}
