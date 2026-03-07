export default function Loading() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <div style={{ textAlign: 'center', color: 'var(--cinza-6)' }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>⏳</div>
                <p>Carregando...</p>
            </div>
        </div>
    );
}
