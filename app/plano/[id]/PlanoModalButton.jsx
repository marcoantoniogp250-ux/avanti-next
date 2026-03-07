'use client';
import { useState } from 'react';
import LeadFunnelModal from '../../../components/LeadFunnelModal';

export default function PlanoModalButton({ planoNome, operadoraNome }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <button onClick={() => setIsModalOpen(true)} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 12, padding: '15px' }}>
                📊 Ver Tabela Atualizada
            </button>
            <LeadFunnelModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                planoNome={planoNome}
                operadoraNome={operadoraNome}
            />
        </>
    );
}
