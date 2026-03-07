import Link from 'next/link';

export const metadata = {
    title: 'Página não encontrada',
};

export default function NotFound() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <div style={{ textAlign: 'center', maxWidth: 480 }}>
                <div style={{ fontSize: '3rem', marginBottom: 12 }}>🔍</div>
                <h1 style={{ marginBottom: 12 }}>Página não encontrada</h1>
                <p style={{ color: 'var(--cinza-6)', marginBottom: 24 }}>
                    O conteúdo que você procura não existe ou foi removido.
                </p>
                <Link href="/" className="btn btn-primary">
                    Voltar para o início
                </Link>
            </div>
        </div>
    );
}
