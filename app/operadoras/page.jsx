import Link from 'next/link';
import { operadoras } from '../data/operadoras';

export const metadata = {
    title: 'Operadoras de Saúde | Avanti Corretora',
    description: 'Compare Amil, SulAmérica, Bradesco Saúde, Porto Seguro, Unimed e NotreDame. Encontre o plano ideal para você.',
};

const operadoraIcons = { amil: '🏥', sulamerica: '🛡️', bradesco: '🏦', porto: '⚓', unimed: '💚', notredame: '🏨' };

export default function Operadoras() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1>Operadoras de Saúde</h1>
                    <p>Escolha a operadora e descubra os melhores planos disponíveis para você.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid-3">
                        {operadoras.map(op => (
                            <Link href={`/operadora/${op.id}`} key={op.id}>
                                <div className="card operadora-card">
                                    <div className="operadora-icon" style={{ background: op.cor }}>
                                        {operadoraIcons[op.id] || '🏥'}
                                    </div>
                                    <h3>{op.nome}</h3>
                                    <p>{op.descricao}</p>
                                    <div className="planos-count">{op.planos.length} plano{op.planos.length > 1 ? 's' : ''} disponíve{op.planos.length > 1 ? 'is' : 'l'}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
