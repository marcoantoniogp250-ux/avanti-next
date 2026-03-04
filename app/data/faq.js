export const faqData = [
    {
        categoria: 'Carência',
        perguntas: [
            {
                pergunta: 'O que é carência?',
                resposta: 'Carência é o período que você precisa aguardar após a contratação do plano para poder utilizar determinados serviços. Os prazos variam conforme o procedimento: urgências e emergências (24h), consultas e exames simples (30 dias), internações (180 dias) e partos (300 dias).',
            },
            {
                pergunta: 'Como funciona a carência zero?',
                resposta: 'A carência zero é um benefício oferecido em campanhas especiais ou para planos empresariais/por adesão com grupos acima de determinado número de vidas. Nesse caso, você pode usar o plano imediatamente após a ativação. Consulte nossos consultores para saber quais planos possuem essa condição.',
            },
            {
                pergunta: 'Posso reduzir a carência com portabilidade?',
                resposta: 'Sim! Se você já possui um plano de saúde há mais de 2 anos (ou 3 anos em caso de cobertura parcial temporária), pode fazer a portabilidade para um plano de categoria equivalente ou inferior sem cumprir novas carências.',
            },
        ],
    },
    {
        categoria: 'Cobertura',
        perguntas: [
            {
                pergunta: 'Qual a diferença entre enfermaria e apartamento?',
                resposta: 'No plano Enfermaria, a internação é em quarto compartilhado com outros pacientes. No plano Apartamento, você tem direito a um quarto individual com banheiro privativo. A acomodação em apartamento oferece mais conforto e privacidade.',
            },
            {
                pergunta: 'O que é coparticipação?',
                resposta: 'Coparticipação é quando você paga uma pequena parte do valor de cada procedimento utilizado (consulta, exame, etc.), além da mensalidade. Planos com coparticipação costumam ter mensalidades mais baixas.',
            },
            {
                pergunta: 'Quais procedimentos são cobertos?',
                resposta: 'Todos os nossos planos cobrem os procedimentos obrigatórios pelo Rol da ANS, incluindo consultas, exames, cirurgias, internações, tratamentos oncológicos, partos e urgências/emergências. Planos de categoria superior podem oferecer coberturas adicionais.',
            },
        ],
    },
    {
        categoria: 'Contratação',
        perguntas: [
            {
                pergunta: 'Quais documentos são necessários?',
                resposta: 'Para a contratação, são necessários: RG/CNH, CPF, comprovante de residência, cartão do SUS (quando disponível) e, para planos por adesão, comprovante de vínculo com a entidade de classe.',
            },
            {
                pergunta: 'Posso incluir dependentes?',
                resposta: 'Sim! Você pode incluir cônjuge, filhos, enteados e dependentes até 21 anos (ou 24 anos se universitário). Os valores de dependentes seguem a mesma tabela por faixa etária.',
            },
            {
                pergunta: 'Como funciona o reajuste?',
                resposta: 'Os planos sofrem dois tipos de reajuste: anual (determinado pela ANS para planos individuais ou negociado para coletivos) e por mudança de faixa etária (conforme tabela de 10 faixas etárias definida pela ANS).',
            },
        ],
    },
    {
        categoria: 'Regras ANS',
        perguntas: [
            {
                pergunta: 'O que é o Rol da ANS?',
                resposta: 'O Rol de Procedimentos e Eventos em Saúde da ANS é a lista mínima obrigatória de procedimentos que todos os planos de saúde devem cobrir. Inclui consultas, exames, cirurgias, tratamentos e internações.',
            },
            {
                pergunta: 'O que é portabilidade de carência?',
                resposta: 'É o direito de trocar de plano de saúde sem precisar cumprir novos prazos de carência. Para ter direito, é necessário estar no plano atual há pelo menos 2 anos e estar em dia com as mensalidades.',
            },
            {
                pergunta: 'Posso cancelar meu plano a qualquer momento?',
                resposta: 'Para planos individuais, sim. Para planos coletivos, é necessário verificar as regras de permanência mínima do contrato. Geralmente, o cancelamento pode ser solicitado a qualquer momento após o período de carência.',
            },
        ],
    },
    {
        categoria: 'Portabilidade',
        perguntas: [
            {
                pergunta: 'Como fazer a portabilidade?',
                resposta: 'Entre em contato conosco pelo WhatsApp que orientamos todo o processo! Basicamente, você precisa estar há pelo menos 2 anos no plano atual, estar em dia com pagamentos e escolher um plano de faixa de preço compatível.',
            },
            {
                pergunta: 'Perco algum benefício na portabilidade?',
                resposta: 'Não! O principal benefício da portabilidade é justamente manter suas carências cumpridas. Você muda de plano sem precisar esperar novos prazos para usar os serviços.',
            },
        ],
    },
];

export const chatResponses = {
    'carencia': 'A carência é o tempo de espera para usar certos serviços: emergência (24h), consultas (30 dias), internação (180 dias), parto (300 dias). Temos planos com CARÊNCIA ZERO! Quer saber mais? Fale com nosso consultor pelo WhatsApp!',
    'preco': 'Os preços variam conforme operadora, tipo de plano e faixa etária. Temos opções a partir de R$ 199,90/mês! Para uma cotação personalizada, clique no botão do WhatsApp.',
    'coparticipacao': 'Coparticipação é quando você paga uma pequena parte de cada procedimento usado, além da mensalidade. Planos com coparticipação são mais baratos! Posso te ajudar a escolher — fale pelo WhatsApp!',
    'hospital': 'Trabalhamos com os melhores hospitais do RJ: Copa D\'Or, Samaritano, São Lucas, Copa Star e muitos outros! Veja a aba "Hospitais" para consultar a rede completa.',
    'portabilidade': 'Você pode trocar de plano sem cumprir nova carência se estiver há 2+ anos no plano atual. Nossos consultores cuidam de todo o processo! WhatsApp: (21) 99234-0607.',
    'documento': 'Para contratar, você precisa de: RG/CNH, CPF, comprovante de residência e cartão SUS. Para planos por adesão, também é necessário comprovante de vínculo profissional.',
    'dependente': 'Sim, você pode incluir cônjuge, filhos e dependentes até 21 anos (24 se universitário). Os valores seguem a tabela por faixa etária do plano.',
    'default': 'Entendi sua dúvida! Para uma resposta mais detalhada e personalizada, fale com nosso consultor especializado pelo WhatsApp: (21) 99234-0607. Estamos prontos para ajudar!',
};

export const getResponse = (message) => {
    const lower = message.toLowerCase();
    for (const [key, response] of Object.entries(chatResponses)) {
        if (key !== 'default' && lower.includes(key)) return response;
    }
    if (lower.includes('preço') || lower.includes('valor') || lower.includes('quanto')) return chatResponses.preco;
    if (lower.includes('carência') || lower.includes('espera')) return chatResponses.carencia;
    if (lower.includes('hospital') || lower.includes('rede')) return chatResponses.hospital;
    if (lower.includes('documento') || lower.includes('papel')) return chatResponses.documento;
    if (lower.includes('dependente') || lower.includes('filho') || lower.includes('esposa')) return chatResponses.dependente;
    if (lower.includes('trocar') || lower.includes('mudar') || lower.includes('portabilidade')) return chatResponses.portabilidade;
    return chatResponses.default;
};
