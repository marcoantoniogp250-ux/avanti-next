import Link from 'next/link';

export default function Breadcrumb({ items }) {
    return (
        <nav aria-label="Breadcrumb" style={{ marginBottom: 12 }}>
            <ol style={{ display: 'flex', flexWrap: 'wrap', gap: 6, listStyle: 'none', padding: 0, margin: 0, fontSize: '0.78rem' }}>
                {items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        {i > 0 && <span style={{ color: 'rgba(255,255,255,0.35)' }}>›</span>}
                        {item.href
                            ? <Link href={item.href} style={{ color: 'var(--dourado-claro)', textDecoration: 'none' }}>{item.label}</Link>
                            : <span style={{ color: 'rgba(255,255,255,0.6)' }}>{item.label}</span>
                        }
                    </li>
                ))}
            </ol>
        </nav>
    );
}
