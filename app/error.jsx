'use client';

export default function Error({ reset }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <div style={{ textAlign: 'center', maxWidth: 480 }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>⚠️</div>
                <h2 style={{ marginBottom: 12 }}>Algo deu errado</h2>
                <p style={{ color: 'var(--cinza-6)', marginBottom: 24 }}>
                    Ocorreu um erro ao carregar esta página.
                </p>
                <button onClick={reset} className="btn btn-primary">
                    Tentar novamente
                </button>
            </div>
        </div>
    );
}
