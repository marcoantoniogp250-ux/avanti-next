import { operadoras, planos } from './data/operadoras';
import { hospitais } from './data/hospitais';
import { redes } from './data/redes';

const BASE_URL = 'https://avanticorretora.com.br';

export default function sitemap() {
    const staticRoutes = [
        { url: BASE_URL, lastModified: new Date(), priority: 1.0, changeFrequency: 'weekly' },
        { url: `${BASE_URL}/operadoras`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
        { url: `${BASE_URL}/hospitais`, lastModified: new Date(), priority: 0.9, changeFrequency: 'weekly' },
        { url: `${BASE_URL}/duvidas`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
        { url: `${BASE_URL}/contato`, lastModified: new Date(), priority: 0.8, changeFrequency: 'yearly' },
    ];

    const operadoraRoutes = operadoras.map((op) => ({
        url: `${BASE_URL}/operadora/${op.id}`,
        lastModified: new Date(),
        priority: 0.8,
        changeFrequency: 'monthly',
    }));

    const planoRoutes = planos.map((plano) => ({
        url: `${BASE_URL}/plano/${plano.id}`,
        lastModified: new Date(),
        priority: 0.7,
        changeFrequency: 'monthly',
    }));

    const hospitalRoutes = hospitais.map((h) => ({
        url: `${BASE_URL}/hospitais/${h.id}`,
        lastModified: new Date(),
        priority: h.premium ? 0.9 : 0.8,
        changeFrequency: 'monthly',
    }));

    const redeRoutes = redes.map((r) => ({
        url: `${BASE_URL}/rede/${r.id}`,
        lastModified: new Date(),
        priority: 0.85,
        changeFrequency: 'monthly',
    }));

    return [...staticRoutes, ...operadoraRoutes, ...planoRoutes, ...hospitalRoutes, ...redeRoutes];
}
