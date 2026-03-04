'use client';
import { useState, useEffect } from 'react';

const WHATSAPP = 'https://wa.me/5521992340607?text=Ol%C3%A1!%20Gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20de%20plano%20de%20sa%C3%BAde.';

export default function WhatsAppButton() {
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowTooltip(true), 3000);
        const hide = setTimeout(() => setShowTooltip(false), 8000);
        return () => { clearTimeout(timer); clearTimeout(hide); };
    }, []);

    return (
        <div className="whatsapp-float">
            {showTooltip && <div className="tooltip">Fale conosco agora! 💬</div>}
            <a href={WHATSAPP} target="_blank" rel="noreferrer" title="Falar no WhatsApp" aria-label="WhatsApp">
                💬
            </a>
        </div>
    );
}

export function whatsappLink(message) {
    return `https://wa.me/5521992340607?text=${encodeURIComponent(message)}`;
}
