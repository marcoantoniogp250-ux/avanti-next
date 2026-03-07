import HospitaisClient from './HospitaisClient';

export const metadata = {
    title: 'Rede de Hospitais Credenciados no Rio de Janeiro',
    description: 'Veja os hospitais credenciados pelos planos de saúde no RJ: Copa D\'Or, Samaritano, Norte D\'Or, Prontobaby e mais de 200 unidades. Encontre qual plano cobre o hospital ideal para você.',
    alternates: { canonical: '/hospitais' },
};

export default function Hospitais() {
    return <HospitaisClient />;
}
