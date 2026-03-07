/**
 * Enriched hospital data from research and Firecrawl scraping.
 * Keyed by hospital ID. Merged into hospital pages at build time.
 * SAFETY: no doctor names, no pricing, no medical advice.
 */
export const hospitaisRicos = {

    "copa-dor": {
        bairro: "Copacabana",
        endereco: "Rua Figueiredo de Magalhães, 875",
        descricaoRica: `O Hospital Copa D'Or foi inaugurado em maio de 2000 com o propósito de criar um novo padrão de atendimento hospitalar no Rio de Janeiro. Localizado no bairro de Copacabana, Zona Sul carioca, o hospital tornou-se referência em medicina de alta complexidade, combinando tecnologia de ponta, equipe especializada e atendimento humanizado. Em 2007, foi o primeiro hospital a conquistar a acreditação internacional da Joint Commission International (JCI), certificação renovada em anos subsequentes, confirmando a manutenção de padrões globais de qualidade e segurança.

A estrutura do Copa D'Or conta com mais de 230 leitos distribuídos em setores de Internação, Terapia Intensiva, Pediatria, Emergência e Day Clinic. O Centro Cirúrgico possui 10 salas, incluindo suporte para transplantes e cirurgias cardíacas complexas. As unidades de terapia intensiva são especializadas: UTI Geral adulta e pediátrica, Unidade Pós-Operatória, Unidade Cardio Intensiva, Unidade Neuro Intensiva e Unidade de Ventilação Respiratória. O hotel hospitalar oferece suítes convencionais e VIP com serviços exclusivos de hotelaria, comunicação direta com a enfermagem e governança dedicada.

Para quem busca um plano de saúde com cobertura no Hospital Copa D'Or, é fundamental conhecer as operadoras credenciadas antes da contratação. O hospital integra a Rede D'Or São Luiz, uma das maiores redes hospitalares privadas do Brasil, sendo atendido por diversas operadoras nacionais. A Avanti Corretora oferece cotação gratuita e orientação especializada para encontrar o plano ideal com acesso ao Copa D'Or.`,
        especialidades: [
            "Cardiologia", "Oncologia", "Neurologia", "Ortopedia", "Pediatria",
            "Cirurgia Geral", "Obstetrícia", "Oftalmologia", "Transplante",
            "Urologia", "Pneumologia", "Neurocirurgia", "Reumatologia",
            "Alergologia", "Angiologia", "Otorrinolaringologia", "Psiquiatria"
        ],
        servicos: [
            "Emergência 24h", "Centro Cirúrgico (10 salas)", "UTI Geral Adulta",
            "UTI Pediátrica", "Unidade Cardio Intensiva", "Unidade Neuro Intensiva",
            "Day Clinic", "Hotelaria VIP", "Medicina Diagnóstica", "Transplantes"
        ],
        faq: [
            {
                pergunta: "Quais planos de saúde cobrem o Hospital Copa D'Or?",
                resposta: "O Hospital Copa D'Or é credenciado com as principais operadoras que atuam no Rio de Janeiro, incluindo Amil, Bradesco Saúde e Porto Seguro Saúde, entre outras. Como parte da Rede D'Or São Luiz, é necessário ter planos dos segmentos superiores para garantir cobertura. A Avanti Corretora faz a comparação gratuitamente."
            },
            {
                pergunta: "O Hospital Copa D'Or aceita qual operadora?",
                resposta: "O Copa D'Or aceita diversas operadoras de saúde como Amil, Bradesco Saúde e Porto Seguro Saúde em planos nacionais de segmento médio e superior. Consulte a Avanti Corretora para verificar qual plano específico garante atendimento nesta unidade conforme seu perfil."
            },
            {
                pergunta: "O Hospital Copa D'Or faz cirurgias cardíacas e transplantes?",
                resposta: "Sim. O Copa D'Or é referência em medicina de alta complexidade, incluindo cirurgias cardíacas e transplantes. O Centro Cirúrgico conta com 10 salas e unidades de terapia intensiva especializadas, como a Unidade Cardio Intensiva, para suporte pós-operatório completo."
            },
            {
                pergunta: "O Hospital Copa D'Or tem emergência 24 horas?",
                resposta: "Sim, o Hospital Copa D'Or possui serviço de emergência em funcionamento 24 horas por dia, todos os dias da semana, com atendimento em clínica médica, cardiologia, ortopedia, pediatria e outras especialidades."
            },
            {
                pergunta: "O Copa D'Or tem UTI pediátrica?",
                resposta: "Sim. O hospital conta com UTI Pediátrica dedicada, além de internação pediátrica. O atendimento infantil é uma das especialidades do Copa D'Or, com estrutura adaptada e equipe treinada para o cuidado de crianças."
            },
            {
                pergunta: "Qual a diferença entre planos que cobrem o Copa D'Or?",
                resposta: "Os planos que cobrem o Copa D'Or geralmente são de segmento intermediário a superior, como planos nacionais com cobertura hospitalar e ambulatorial completa. A diferença está no valor de coparticipação, cobertura de quarto (apartamento ou enfermaria) e rede de credenciados adicional. A Avanti compara todas as opções."
            },
            {
                pergunta: "Preciso de autorização prévia para usar o Hospital Copa D'Or?",
                resposta: "Depende do tipo de atendimento e da operadora. Emergências geralmente não exigem autorização prévia. Para internações eletivas, exames de alta complexidade e cirurgias, a operadora normalmente solicita autorização prévia. A Avanti Corretora orienta sobre o processo de cada operadora."
            },
            {
                pergunta: "Como contratar um plano de saúde aceito no Hospital Copa D'Or?",
                resposta: "A maneira mais rápida é entrar em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara todos os planos que credenciam o Hospital Copa D'Or no Rio de Janeiro, indica o mais adequado ao seu perfil e orçamento, e cuida de toda a contratação gratuitamente."
            }
        ]
    },

    "copa-star": {
        bairro: "Copacabana",
        endereco: "Rua Figueiredo de Magalhães, 700",
        descricaoRica: `O Hospital Copa Star representa um novo patamar em hotelaria hospitalar no Brasil. Localizado em Copacabana, na Zona Sul do Rio de Janeiro, o Copa Star é reconhecido por integrar alta tecnologia médica, arquitetura diferenciada e conforto de nível internacional em um mesmo espaço. Credenciado com a tecnologia Da Vinci Surgery, o hospital conta com o Robô Da Vinci XI para cirurgias minimamente invasivas em especialidades como urologia, oncologia, cirurgia bariátrica, tórax e ginecologia — uma das mais avançadas plataformas cirúrgicas disponíveis no país.

A estrutura do Copa Star inclui um Centro Cirúrgico com 11 salas inteligentes, sendo salas dedicadas à neurocirurgia com ressonância magnética integrada e salas de hemodinâmica. O CTI (Centro de Terapia Intensiva) é dividido em áreas especializadas: Neuro Intensiva, CTI Pós-Operatório e CTI Geral, cada uma com equipe multiprofissional. O Setor de Emergência funciona 24 horas com atendimento em clínica médica, cardiologia e ortopedia, além de boxes individualizados, sala de trauma e sala de isolamento respiratório. O Centro de Imagens e Diagnósticos oferece Ressonância Magnética, Tomografia Computadorizada, Medicina Nuclear (SPECT) e outros exames de alta complexidade.

Para ter acesso ao Hospital Copa Star por meio de plano de saúde, é necessário estar em planos de segmento superior credenciados com a Rede D'Or São Luiz. O Copa Star é uma das unidades mais tecnológicas da rede, sendo referência nacional em cardiologia intervencionista, neurocirurgia e cirurgia robótica. A Avanti Corretora orienta na escolha do plano correto com cobertura garantida no Copa Star.`,
        especialidades: [
            "Cardiologia", "Neurocirurgia", "Cirurgia Robótica", "Oncologia",
            "Urologia", "Cirurgia Geral", "Clínica Médica", "Neurologia",
            "Infectologia", "Nefrologia", "Reumatologia", "Medicina Nuclear"
        ],
        servicos: [
            "Emergência 24h", "CTI (3 áreas especializadas)", "Centro Cirúrgico (11 salas)",
            "Cirurgia Robótica Da Vinci XI", "Hemodinâmica", "Ressonância Magnética Intraoperatória",
            "Medicina Nuclear (SPECT)", "Tomografia Computadorizada", "Day Clinic",
            "Centro de Estudos", "Hotelaria Premium"
        ],
        faq: [
            {
                pergunta: "Quais planos de saúde cobrem o Hospital Copa Star?",
                resposta: "O Hospital Copa Star é credenciado com operadoras como Amil, Bradesco Saúde e Porto Seguro Saúde em planos de segmento superior. Por ser uma unidade premium da Rede D'Or, é necessário um plano com cobertura ampliada. A Avanti Corretora identifica exatamente qual plano garante acesso ao Copa Star."
            },
            {
                pergunta: "O Copa Star tem cirurgia robótica?",
                resposta: "Sim. O Hospital Copa Star é credenciado com o sistema Da Vinci XI, uma das plataformas de cirurgia robótica mais avançadas disponíveis. A tecnologia é utilizada em urologia, oncologia, cirurgia bariátrica, ginecologia e cirurgia torácica, permitindo procedimentos minimamente invasivos com maior precisão."
            },
            {
                pergunta: "O Hospital Copa Star faz transplante cardíaco?",
                resposta: "Sim. O Copa Star é reconhecido por sua expertise em insuficiência cardíaca e transplante cardíaco. O Centro Cardiológico conta com tecnologia de última geração e equipe especializada em procedimentos cirúrgicos complexos e assistência circulatória extracorpórea."
            },
            {
                pergunta: "O Hospital Copa Star tem emergência 24 horas?",
                resposta: "Sim. O serviço de emergência do Copa Star funciona 24 horas por dia com atendimento em clínica médica, cardiologia e ortopedia. A estrutura inclui sala de trauma, sala de isolamento respiratório e boxes individualizados, garantindo atendimento ágil e de qualidade."
            },
            {
                pergunta: "Qual a diferença entre o Copa Star e o Copa D'Or?",
                resposta: "Ambos fazem parte da Rede D'Or São Luiz e estão localizados em Copacabana. O Copa Star tem foco em tecnologia de ponta e hotelaria premium, com destaque para cirurgia robótica, neurocirurgia avançada e cardiologia intervencionista. O Copa D'Or é uma referência mais ampla em alta complexidade, incluindo maternidade e oncologia pediátrica."
            },
            {
                pergunta: "Como funciona a UTI do Hospital Copa Star?",
                resposta: "O CTI do Copa Star é dividido em três áreas especializadas: Neuro Intensiva, CTI Pós-Operatório e CTI Geral. Cada área conta com equipe multiprofissional composta por médicos intensivistas, enfermeiros, fisioterapeutas, nutricionistas, fonoaudiólogos, psicólogos e farmacêuticos."
            },
            {
                pergunta: "Preciso de autorização para usar o Hospital Copa Star?",
                resposta: "Para atendimentos de emergência, geralmente não é exigida autorização prévia. Para internações eletivas, cirurgias programadas e exames de alta complexidade como Medicina Nuclear e Ressonância Magnética, a operadora normalmente solicita autorização prévia. Consulte a Avanti para entender o processo da sua operadora."
            },
            {
                pergunta: "Como contratar um plano que cubra o Hospital Copa Star?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe especializada analisa seu perfil, indica os planos com cobertura no Copa Star disponíveis no Rio de Janeiro e gerencia toda a contratação sem custo adicional para você."
            }
        ]
    },

    "quinta-dor": {
        bairro: "São Cristóvão",
        endereco: "Rua Almirante Baltazar, 435",
        descricaoRica: `O Hospital Quinta D'Or foi inaugurado em setembro de 2001, resultado da renovação e modernização do antigo Hospital São Francisco de Paula. Localizado estrategicamente em frente à Quinta da Boa Vista, no bairro de São Cristóvão, na Zona Norte do Rio de Janeiro, o hospital preserva elementos históricos da edificação original combinados com uma infraestrutura moderna. Desde sua inauguração, tornou-se referência em qualidade de atendimento de emergências clínicas e cirúrgicas na região norte da cidade, sendo certificado pela Accreditation Canada Qmentum e pelo Stroke Distinction (tratamento de AVC).

A estrutura do Quinta D'Or conta com mais de 340 leitos distribuídos em Internação, Terapia Intensiva, Semi-Intensiva, Pediatria, Emergência adulta e pediátrica, e Hemodinâmica. O Centro Cirúrgico possui 11 salas amplas com capacidade para transplantes. Destaca-se o Centro Avançado do Cuidado Oncológico, com 18 oncologistas em tempo integral, realizando diagnóstico, cirurgias oncológicas, quimioterapia e suporte até transplante. O programa Longevidade D'Or oferece atendimento especializado para maiores de 60 anos, com fisioterapeutas, fonoaudiólogos, nutricionistas e geriatras. O Centro de Imagem dispõe de tomografia, ressonância magnética, ultrassonografia e outros exames avançados.

Para quem mora na Zona Norte do Rio de Janeiro e busca um plano que cubra o Hospital Quinta D'Or, é fundamental conhecer as operadoras credenciadas com a Rede D'Or São Luiz nesta unidade. A Avanti Corretora oferece cotação gratuita e orienta na escolha do melhor plano com cobertura no Quinta D'Or e em toda a região.`,
        especialidades: [
            "Oncologia", "Oncologia Pediátrica", "Cardiologia", "Cardiologia Pediátrica",
            "Neurologia", "Neurocirurgia", "Pediatria", "Geriatria", "Neonatologia",
            "Cirurgia Geral", "Cirurgia Oncológica", "Cirurgia Bariátrica", "Cirurgia Cardíaca",
            "Hematologia", "Hepatologia", "Gastroenterologia", "Transplante",
            "Ortopedia", "Urologia", "Endocrinologia", "Infectologia",
            "Pneumologia", "Reumatologia", "Clínica Médica", "Medicina do Sono",
            "Medicina Reprodutiva", "Cirurgia Plástica", "Coloproctologia"
        ],
        servicos: [
            "Emergência 24h (adulto e pediátrica)", "Centro Cirúrgico (11 salas)",
            "Terapia Intensiva", "Oncologia D'Or (18 oncologistas)", "Hemodinâmica",
            "Centro de Imagem Avançado", "Longevidade D'Or", "Oncologia Pediátrica",
            "Transplantes", "Semi-Intensiva", "Stroke (AVC) Distinction"
        ],
        faq: [
            {
                pergunta: "Quais planos de saúde cobrem o Hospital Quinta D'Or?",
                resposta: "O Quinta D'Or faz parte da Rede D'Or São Luiz e é credenciado com operadoras como Amil, Bradesco Saúde e Porto Seguro Saúde em planos de segmento médio a superior. A Avanti Corretora compara todas as opções disponíveis no Rio de Janeiro com cobertura nessa unidade."
            },
            {
                pergunta: "O Quinta D'Or tem tratamento para câncer?",
                resposta: "Sim. O Hospital Quinta D'Or abriga a Oncologia D'Or, com 18 oncologistas em tempo integral, oferecendo diagnóstico completo, cirurgias oncológicas, quimioterapia, radioterapia e suporte até transplante. Também realiza oncologia pediátrica integrada ao setor de Pediatria."
            },
            {
                pergunta: "O Quinta D'Or tem serviço de emergência 24h?",
                resposta: "Sim. O hospital possui emergência 24 horas para adultos e crianças (emergência pediátrica). O Quinta D'Or é referência em emergências clínicas e cirúrgicas na Zona Norte do Rio de Janeiro, com funcionamento ininterrupto."
            },
            {
                pergunta: "O Hospital Quinta D'Or faz transplantes?",
                resposta: "Sim. O Quinta D'Or realiza transplantes, contando com Centro Cirúrgico de 11 salas com capacidade para procedimentos de alta complexidade. O hospital tem certificação de excelência reconhecida internacionalmente pela Accreditation Canada."
            },
            {
                pergunta: "Qual a localização do Hospital Quinta D'Or?",
                resposta: "O Hospital Quinta D'Or está localizado na Rua Almirante Baltazar, 435, no bairro de São Cristóvão, Zona Norte do Rio de Janeiro — estrategicamente situado em frente à Quinta da Boa Vista, com fácil acesso para moradores da Zona Norte, Grande Tijuca e adjacências."
            },
            {
                pergunta: "O Quinta D'Or tem atendimento para idosos?",
                resposta: "Sim. O programa Longevidade D'Or é dedicado a pacientes com mais de 60 anos, oferecendo atendimento coordenado por geriatras, fisioterapeutas, fonoaudiólogos, nutricionistas e enfermeiras navigadoras, desde prevenção até cuidados de alta complexidade."
            },
            {
                pergunta: "Qual plano de saúde é aceito no Hospital Quinta D'Or?",
                resposta: "O Quinta D'Or credencia planos nacionais de segmento intermediário e superior das principais operadoras que operam na Rede D'Or. Entre em contato com a Avanti Corretora para saber quais planos disponíveis no seu orçamento garantem atendimento no Quinta D'Or."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Quinta D'Or?",
                resposta: "Fale com a Avanti Corretora pelo WhatsApp. Nossa equipe identifica os planos com cobertura no Quinta D'Or, compara custos entre operadoras e orienta na contratação sem custo para você. Cotação gratuita em menos de 5 minutos."
            }
        ]
    },

    "norte-dor": {
        bairro: "Cascadura",
        endereco: "Rua Carolina Machado, 38",
        descricaoRica: `O Hospital Norte D'Or foi inaugurado em janeiro de 2011 em Cascadura, na Zona Norte do Rio de Janeiro, como mais uma das referências de excelência da Rede D'Or São Luiz. Ocupando uma área de 16.800 m² com capacidade para 200 leitos em quartos individuais e enfermaria, o hospital foi projetado para oferecer o mesmo padrão de qualidade e serviços reconhecidos em toda a rede. Sua localização estratégica em Cascadura permite atender moradores de toda a Zona Norte, incluindo Méier, Inhaúma, Abolição, Engenho de Dentro, Del Castilho e bairros adjacentes.

A estrutura do Norte D'Or inclui Emergência 24 horas, Centro Cirúrgico, UTI Geral, UTI Pós-Operatória, Unidade Cardio Intensiva, quartos de internação e serviços completos de diagnóstico por imagem e laboratório. O hospital cobre praticamente todas as especialidades médicas, incluindo cirurgia bariátrica, cirurgia robótica, oncologia, neonatologia, neurocirurgia e terapia intensiva pediátrica, sendo uma das unidades mais completas da Rede D'Or São Luiz fora da Zona Sul carioca.

Para quem mora na Zona Norte do Rio de Janeiro e busca um plano de saúde com cobertura no Hospital Norte D'Or, a Avanti Corretora oferece comparação gratuita entre as operadoras credenciadas nesta unidade. Nossa equipe identifica o plano com melhor custo-benefício para acesso à Rede D'Or São Luiz na Zona Norte.`,
        especialidades: [
            "Cardiologia", "Cirurgia Robótica", "Oncologia", "Ortopedia", "Neurologia",
            "Cirurgia Bariátrica", "Cirurgia Cardíaca", "Neurocirurgia", "Neonatologia",
            "Obstetrícia", "Hematologia", "Hepatologia", "Gastroenterologia", "Infectologia",
            "Geriatria", "Terapia Intensiva Pediátrica", "Pediatria", "Urologia",
            "Cirurgia Vascular", "Coloproctologia", "Clínica Geral"
        ],
        servicos: [
            "Emergência 24h", "Centro Cirúrgico", "UTI Geral", "UTI Pós-Operatória",
            "Unidade Cardio Intensiva", "Terapia Intensiva Pediátrica",
            "Internação (200 leitos)", "Diagnóstico por Imagem", "Laboratório"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Norte D'Or?",
                resposta: "O Hospital Norte D'Or, integrante da Rede D'Or São Luiz, é credenciado com operadoras como Amil, Bradesco Saúde e Porto Seguro Saúde em planos de segmento intermediário a superior. A Avanti Corretora identifica o plano ideal para sua necessidade."
            },
            {
                pergunta: "O Norte D'Or tem emergência 24 horas?",
                resposta: "Sim. O Hospital Norte D'Or possui pronto-atendimento funcionando 24 horas por dia, todos os dias da semana, com atendimento em diversas especialidades clínicas e cirúrgicas."
            },
            {
                pergunta: "Onde fica o Hospital Norte D'Or?",
                resposta: "O Norte D'Or está localizado na Rua Carolina Machado, 38, no bairro de Cascadura, na Zona Norte do Rio de Janeiro, com acesso facilitado para moradores do Méier, Inhaúma, Engenho de Dentro, Abolição, Del Castilho e região."
            },
            {
                pergunta: "O Hospital Norte D'Or faz cirurgias?",
                resposta: "Sim. O Norte D'Or conta com centro cirúrgico estruturado para procedimentos de média e alta complexidade, com suporte de unidade de terapia intensiva para pós-operatório."
            },
            {
                pergunta: "Qual operadora aceita o Hospital Norte D'Or?",
                resposta: "Como parte da Rede D'Or São Luiz, o Norte D'Or é atendido por diversas operadoras nacionais. Consulte a Avanti Corretora para saber quais planos disponíveis no seu orçamento credenciam esta unidade."
            },
            {
                pergunta: "O Norte D'Or tem UTI?",
                resposta: "Sim. O hospital dispõe de Unidade de Terapia Intensiva (UTI) para atendimento de pacientes em estado crítico ou pós-operatório de alta complexidade."
            },
            {
                pergunta: "Qual a diferença entre os planos que cobrem o Norte D'Or?",
                resposta: "Os planos variam em segmento, tipo de acomodação (apartamento ou enfermaria), coparticipação e amplitude da rede credenciada. A Avanti Corretora compara todas as opções e indica o melhor custo-benefício para seu perfil."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Norte D'Or?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara planos com cobertura no Norte D'Or e cuida da contratação gratuitamente, em menos de 5 minutos de atendimento."
            }
        ]
    },

    "barra-dor": {
        bairro: "Barra da Tijuca",
        endereco: "Av. Ayrton Senna, 3079",
        descricaoRica: `O Hospital Barra D'Or é um dos mais modernos e tecnologicamente avançados da Rede D'Or São Luiz no Rio de Janeiro. Inaugurado em janeiro de 2025 em sua nova sede com investimento de R$ 500 milhões e área construída de 42 mil metros quadrados, a unidade foi projetada para atender à crescente demanda da Barra da Tijuca e regiões vizinhas com tecnologia de ultracomplexidade e estrutura de ponta. Localizado próximo ao Shopping Via Parque, na Avenida Ayrton Senna, o hospital é referência em alta complexidade para toda a Zona Oeste do Rio de Janeiro.

Entre os destaques tecnológicos únicos do Barra D'Or estão 14 salas cirúrgicas — uma dedicada exclusivamente à cirurgia robótica com o sistema Da Vinci Xi —, além do primeiro sistema de radioterapia guiado por superfície (SGRT) do Brasil, que utiliza câmeras de infravermelho para mapear o corpo do paciente em tempo real e aumentar a precisão do tratamento oncológico. A UTI dispõe de suporte a ECMO (Oxigenação por Membrana Extracorpórea) para casos de insuficiência cardíaca ou respiratória grave, e exames point-of-care são realizados diretamente à beira do leito. O hospital ainda conta com Centro de Reabilitação Integrado, hemodinâmica e diagnóstico por imagem completo.

Para quem mora na Barra da Tijuca e região e deseja ter acesso ao Hospital Barra D'Or por meio de plano de saúde, a Avanti Corretora realiza comparação gratuita entre as operadoras credenciadas nesta unidade. Nossa equipe identifica o plano com melhor custo-benefício e garante cobertura no hospital mais tecnológico da Zona Oeste do Rio de Janeiro.`,
        especialidades: [
            "Cardiologia", "Cirurgia Robótica (Da Vinci Xi)", "Oncologia", "Radioterapia (SGRT)",
            "Ortopedia", "Neurologia", "Obstetrícia", "Neonatologia",
            "Cirurgia Bariátrica", "Cirurgia Cardíaca", "Neurocirurgia",
            "Hematologia", "Gastroenterologia", "Hepatologia", "Infectologia",
            "Geriatria", "Urologia", "Cirurgia Vascular", "Terapia Intensiva Pediátrica"
        ],
        servicos: [
            "Emergência 24h", "14 Salas Cirúrgicas", "Cirurgia Robótica (Da Vinci Xi)",
            "Radioterapia SGRT (1ª do Brasil)", "UTI com ECMO", "UTI Pediátrica",
            "Centro Oncológico", "Hemodinâmica", "Centro de Reabilitação",
            "Diagnóstico por Imagem", "Internação"
        ],
        faq: [
            {
                pergunta: "Quais planos de saúde cobrem o Hospital Barra D'Or?",
                resposta: "O Hospital Barra D'Or faz parte da Rede D'Or São Luiz e é credenciado com Amil, Bradesco Saúde, Porto Seguro Saúde e outras operadoras em planos de segmento intermediário a superior. A Avanti Corretora identifica o plano ideal para moradores da Barra da Tijuca e região."
            },
            {
                pergunta: "O Hospital Barra D'Or tem maternidade?",
                resposta: "Sim. O Barra D'Or conta com maternidade completa, incluindo UTI Neonatal e estrutura para partos de baixo e alto risco, com equipe especializada em obstetrícia e neonatologia."
            },
            {
                pergunta: "O Barra D'Or tem emergência 24 horas?",
                resposta: "Sim. O hospital dispõe de serviço de emergência funcionando 24 horas por dia, sete dias por semana, com atendimento clínico e cirúrgico completo."
            },
            {
                pergunta: "O Hospital Barra D'Or faz hemodinâmica?",
                resposta: "Sim. O Barra D'Or possui hemodinâmica para procedimentos cardiológicos intervencionistas como cateterismo cardíaco, angioplastia e outros procedimentos endovasculares."
            },
            {
                pergunta: "Qual a localização do Hospital Barra D'Or?",
                resposta: "O Hospital Barra D'Or está localizado na Barra da Tijuca, Zona Oeste do Rio de Janeiro, com acesso pela Av. das Américas e Linha Amarela. Atende moradores da Barra, Recreio, Jacarepaguá e municípios próximos."
            },
            {
                pergunta: "Qual operadora cobre o Hospital Barra D'Or?",
                resposta: "Como unidade da Rede D'Or, o Barra D'Or é atendido por diversas operadoras nacionais. A Avanti Corretora compara todas as opções e indica a que oferece melhor cobertura no Barra D'Or pelo menor custo para seu perfil."
            },
            {
                pergunta: "O Barra D'Or tem oncologia?",
                resposta: "Sim. O hospital possui serviço de oncologia com suporte diagnóstico e terapêutico, integrado à rede de oncologia D'Or, referência nacional em tratamento de câncer."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Barra D'Or?",
                resposta: "Fale com a Avanti Corretora pelo WhatsApp. Nossa equipe compara os planos com cobertura no Barra D'Or, indica o mais adequado ao seu perfil e cuida de toda a contratação sem custo para você."
            }
        ]
    },

    "caxias-dor": {
        bairro: "Jardim Vinte e Cinco de Agosto",
        endereco: "Av. Brigadeiro Lima e Silva, 821",
        descricaoRica: `O Hospital Caxias D'Or é a unidade da Rede D'Or São Luiz dedicada a atender a população de Duque de Caxias e da Baixada Fluminense, região com grande concentração populacional que historicamente enfrentou limitações no acesso a serviços hospitalares privados de alta qualidade. Localizado no Jardim Vinte e Cinco de Agosto, na Avenida Brigadeiro Lima e Silva, 821, o hospital é um hospital geral de grande porte com 220 leitos — sendo 80 destinados à terapia intensiva —, preparado para tratar casos de alta complexidade.

A estrutura do Caxias D'Or contempla emergências separadas para adultos e para o público pediátrico, funcionando 24 horas por dia, além de centro cirúrgico com suporte a cirurgia robótica, UTI adulta com alta capacidade (80 leitos), Centro Médico ambulatorial com diversas especialidades, diagnóstico por imagem e laboratório clínico. Como parte da Rede D'Or São Luiz, o hospital segue os protocolos de excelência da rede e se destaca como referência regional em cardiologia, oncologia e cuidados intensivos na Baixada Fluminense.

Para o beneficiário de plano de saúde em Duque de Caxias e municípios vizinhos da Baixada Fluminense, o Caxias D'Or representa a possibilidade de acesso ao padrão assistencial da maior rede hospitalar privada do Brasil dentro do próprio município, sem necessidade de deslocamento para o Rio de Janeiro. A Avanti Corretora orienta na escolha do plano com cobertura nesta unidade.`,
        especialidades: [
            "Cardiologia", "Cirurgia Cardíaca", "Oncologia", "Neurocirurgia", "Neurologia",
            "Ortopedia", "Cirurgia Geral", "Cirurgia Robótica", "Cirurgia Bariátrica",
            "Pediatria", "Neonatologia", "Obstetrícia", "Ginecologia",
            "Urologia", "Gastroenterologia", "Hematologia", "Terapia Intensiva"
        ],
        servicos: [
            "Pronto-Socorro Adulto 24h", "Pronto-Socorro Pediátrico 24h",
            "UTI Adulto (80 leitos)", "Centro Cirúrgico", "Cirurgia Robótica",
            "220 Leitos de Internação", "Centro Médico Ambulatorial",
            "Quimioterapia", "Diagnóstico por Imagem", "Laboratório Clínico"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Caxias D'Or?",
                resposta: "O Caxias D'Or faz parte da Rede D'Or São Luiz e é credenciado com operadoras como Amil, Bradesco Saúde e Porto Seguro Saúde em planos de segmento intermediário a superior. A Avanti Corretora compara as opções disponíveis para moradores de Duque de Caxias."
            },
            {
                pergunta: "O Hospital Caxias D'Or tem emergência 24h?",
                resposta: "Sim. O hospital dispõe de serviço de emergência 24 horas por dia, com atendimento clínico e cirúrgico para adultos e crianças."
            },
            {
                pergunta: "Onde fica o Hospital Caxias D'Or?",
                resposta: "O Hospital Caxias D'Or está localizado em Duque de Caxias, na Baixada Fluminense, com acesso facilitado pela Rodovia Washington Luís e demais vias da região."
            },
            {
                pergunta: "O Caxias D'Or tem maternidade?",
                resposta: "O hospital oferece serviço de ginecologia e obstetrícia. Consulte a Avanti Corretora para verificar a disponibilidade de maternidade e cobertura do seu plano nesta unidade."
            },
            {
                pergunta: "Qual operadora aceita o Hospital Caxias D'Or?",
                resposta: "O Caxias D'Or é atendido por diversas operadoras nacionais como Amil, Bradesco Saúde e Porto Seguro Saúde. A Avanti Corretora identifica a melhor opção para seu perfil e orçamento."
            },
            {
                pergunta: "O Caxias D'Or tem UTI?",
                resposta: "Sim. O hospital conta com Unidade de Terapia Intensiva para atendimento de pacientes graves e pós-operatório de procedimentos de alta complexidade."
            },
            {
                pergunta: "Qual a diferença entre os planos que cobrem o Caxias D'Or?",
                resposta: "Os planos variam em segmento (básico, intermediário, superior), tipo de acomodação e coparticipação. A Avanti Corretora explica as diferenças e indica o plano com melhor custo-benefício para a Baixada Fluminense."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Caxias D'Or?",
                resposta: "Fale com a Avanti Corretora pelo WhatsApp. Nossa equipe especializada compara as opções com cobertura no Caxias D'Or e cuida da contratação gratuitamente."
            }
        ]
    },

    "niteroi-dor": {
        bairro: "Santa Rosa",
        endereco: "Rua Mariz e Barros, 550",
        descricaoRica: `O Hospital Niterói D'Or é a unidade da Rede D'Or São Luiz dedicada a atender a população do município de Niterói e da Região dos Lagos, consolidando a presença do grupo no lado leste da Baía de Guanabara. Localizado no bairro de Santa Rosa, na Rua Mariz e Barros, 550, o hospital combina instalações modernas com parque tecnológico de ponta e elevado padrão de conforto para seus pacientes. A localização em Santa Rosa oferece fácil acesso para moradores de toda a cidade de Niterói e também de municípios vizinhos como São Gonçalo e Maricá.

O hospital oferece atendimento ambulatorial em diversas especialidades médicas, além de estrutura completa para emergência 24 horas, internação, UTI e Centro Médico. O Niterói D'Or realiza procedimentos de baixa e alta complexidade, sendo referência para a população niteroiense que busca a qualidade assistencial da Rede D'Or sem precisar se deslocar até o Rio de Janeiro. O hospital dispõe de diagnóstico por imagem completo, laboratório clínico, quimioterapia ambulatorial e fisioterapia.

Para quem mora em Niterói e deseja ter acesso ao Hospital Niterói D'Or por plano de saúde, a Avanti Corretora compara as opções disponíveis nas principais operadoras credenciadas nesta unidade. Nossa equipe orienta na escolha do plano com melhor custo-benefício para a região de Niterói e Grande Niterói.`,
        especialidades: [
            "Cardiologia", "Oncologia", "Ortopedia", "Neurologia", "Neurocirurgia",
            "Cirurgia Geral", "Gastroenterologia", "Pediatria", "Neonatologia",
            "Ginecologia", "Obstetrícia", "Urologia", "Infectologia",
            "Hematologia", "Pneumologia", "Terapia Intensiva"
        ],
        servicos: [
            "Emergência 24h", "UTI Adulto", "Centro Cirúrgico", "Internação",
            "Centro Médico Ambulatorial", "Diagnóstico por Imagem", "Laboratório Clínico",
            "Quimioterapia Ambulatorial", "Fisioterapia", "Endoscopia e Colonoscopia"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Niterói D'Or?",
                resposta: "O Niterói D'Or faz parte da Rede D'Or São Luiz e aceita planos de operadoras como Amil, Bradesco Saúde e Porto Seguro Saúde em segmentos intermediário e superior. A Avanti Corretora compara as opções para moradores de Niterói e Grande Niterói."
            },
            {
                pergunta: "O Hospital Niterói D'Or tem emergência 24 horas?",
                resposta: "Sim. O hospital possui serviço de emergência em funcionamento 24 horas por dia, com atendimento clínico e cirúrgico completo."
            },
            {
                pergunta: "Onde fica o Hospital Niterói D'Or?",
                resposta: "O Niterói D'Or está localizado na cidade de Niterói, com acesso facilitado pela Ponte Rio-Niterói, barcas e linhas de ônibus intermunicipais."
            },
            {
                pergunta: "Qual operadora aceita o Hospital Niterói D'Or?",
                resposta: "Como parte da Rede D'Or, o hospital é atendido por diversas operadoras nacionais. Consulte a Avanti Corretora para verificar quais planos cobrem o Niterói D'Or no seu orçamento."
            },
            {
                pergunta: "O Niterói D'Or tem tratamento oncológico?",
                resposta: "Sim. O hospital possui serviço de oncologia integrado à rede de oncologia D'Or, com suporte diagnóstico e terapêutico para diversos tipos de câncer."
            },
            {
                pergunta: "O Niterói D'Or tem UTI?",
                resposta: "Sim. O hospital conta com Unidade de Terapia Intensiva para atendimento de pacientes em estado crítico e pós-operatório de alta complexidade."
            },
            {
                pergunta: "Qual a diferença entre os planos que cobrem o Niterói D'Or?",
                resposta: "Os planos variam em segmento, tipo de acomodação e coparticipação. A Avanti Corretora explica todas as diferenças e indica o mais adequado para seu perfil em Niterói."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Niterói D'Or?",
                resposta: "Fale com a Avanti Corretora pelo WhatsApp. Comparamos todos os planos com cobertura no Niterói D'Or e cuidamos da contratação de forma gratuita e rápida."
            }
        ]
    },

    "gloria-dor": {
        bairro: "Glória",
        endereco: "R. Santo Amaro, 80",
        descricaoRica: `O Hospital Glória D'Or traz o que há de mais avançado na medicina para o coração do bairro da Glória, um dos mais tradicionais do Rio de Janeiro. Integrante da Rede D'Or São Luiz, o Glória D'Or está projetado para se tornar o maior complexo hospitalar da rede no Rio de Janeiro, reunindo tecnologia de ponta, corpo clínico especializado e estrutura completa de atendimento hospitalar. O hospital está localizado na Rua Santo Amaro, 80, na Glória, com fácil acesso para moradores do Centro, Catete, Flamengo, Botafogo e bairros da Zona Sul.

O Glória D'Or disponibiliza serviço de emergência, leitos hospitalares, maternidade, ala cirúrgica e Unidades de Terapia Intensiva, além de espaços para exames de diagnóstico por imagem de última geração. O hospital cobre todo o espectro de especialidades médicas, incluindo oncologia, cardiologia, neurocirurgia, cirurgia robótica, neonatologia, transplantes e terapia intensiva — com a mesma qualidade e padrões reconhecidos em toda a Rede D'Or São Luiz.

Para quem busca um plano de saúde com cobertura no Hospital Glória D'Or, a Avanti Corretora oferece comparação gratuita entre as operadoras credenciadas nesta unidade. Nossa equipe orienta na escolha do plano ideal com acesso a este importante complexo hospitalar na região central do Rio de Janeiro.`,
        especialidades: [
            "Cardiologia", "Cirurgia Robótica", "Oncologia", "Ortopedia", "Neurologia",
            "Maternidade", "Neonatologia", "Cirurgia Bariátrica", "Cirurgia Cardíaca",
            "Neurocirurgia", "Hematologia", "Hepatologia", "Gastroenterologia",
            "Infectologia", "Geriatria", "Pediatria", "Urologia",
            "Cirurgia Vascular", "Coloproctologia", "Clínica Geral"
        ],
        servicos: [
            "Emergência 24h", "Maternidade", "Centro Cirúrgico", "UTI Adulta",
            "UTI Pediátrica", "UTI Neonatal", "Diagnóstico por Imagem",
            "Cirurgia Robótica", "Oncologia", "Internação"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Glória D'Or?",
                resposta: "O Glória D'Or faz parte da Rede D'Or São Luiz e aceita operadoras como Amil, Bradesco Saúde e Porto Seguro Saúde. A Avanti Corretora compara as opções disponíveis para a região Central do Rio."
            },
            {
                pergunta: "O Hospital Glória D'Or tem emergência 24 horas?",
                resposta: "Sim. O hospital possui pronto-atendimento 24 horas por dia, com atendimento clínico e cirúrgico completo."
            },
            {
                pergunta: "Onde fica o Hospital Glória D'Or?",
                resposta: "O Glória D'Or está no bairro da Glória, na Zona Sul do Rio de Janeiro, com fácil acesso para moradores do Centro, Catete, Flamengo e Botafogo."
            },
            {
                pergunta: "O Glória D'Or tem UTI?",
                resposta: "Sim. O hospital conta com Unidade de Terapia Intensiva para atendimento de pacientes em estado crítico."
            },
            {
                pergunta: "Qual operadora aceita o Hospital Glória D'Or?",
                resposta: "Como unidade da Rede D'Or, o hospital é atendido por diversas operadoras nacionais. Consulte a Avanti Corretora para saber a melhor opção para seu perfil."
            },
            {
                pergunta: "O Glória D'Or faz cirurgias?",
                resposta: "Sim. O hospital conta com centro cirúrgico estruturado para procedimentos de média e alta complexidade."
            },
            {
                pergunta: "Qual plano tem melhor custo-benefício para o Glória D'Or?",
                resposta: "Depende do seu perfil e orçamento. A Avanti Corretora faz uma análise personalizada e indica o plano com melhor custo-benefício para ter acesso ao Glória D'Or e à Rede D'Or São Luiz."
            },
            {
                pergunta: "Como contratar um plano aceito no Glória D'Or?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp para cotação gratuita. Nossa equipe compara planos com cobertura no Glória D'Or e cuida de toda a contratação."
            }
        ]
    },

    "rios-dor": {
        bairro: "Freguesia (Jacarepaguá)",
        endereco: "Estr. dos Três Rios, 1366",
        descricaoRica: `O Hospital Rios D'Or foi inaugurado em março de 2009 como a quarta unidade da Rede D'Or São Luiz, chegando para preencher uma importante lacuna em serviços hospitalares de alta qualidade na área de Jacarepaguá. Localizado na Estrada dos Três Rios, 1366, no bairro de Freguesia, o hospital tornou-se referência internacional no atendimento à população da Zona Oeste do Rio de Janeiro, com acesso facilitado também para bairros próximos como Recreio dos Bandeirantes, Barra da Tijuca, Taquara e Pechincha.

O Rios D'Or oferece atendimento de alta complexidade com cobertura completa de especialidades médicas, incluindo oncologia, cardiologia, cirurgia bariátrica, neurocirurgia, neonatologia, obstetrícia, hematologia, hepatologia e terapia intensiva pediátrica. O hospital mantém os mesmos padrões de qualidade e segurança da Rede D'Or São Luiz, com equipe multidisciplinar e tecnologia de ponta para diagnóstico e tratamento.

Para quem mora em Jacarepaguá, Freguesia, Taquara ou bairros próximos da Zona Oeste e deseja um plano de saúde com cobertura no Rios D'Or, a Avanti Corretora faz a comparação gratuita entre as operadoras credenciadas. Nossa equipe orienta na escolha do plano com melhor custo-benefício para acesso à Rede D'Or São Luiz na Zona Oeste.`,
        especialidades: [
            "Cardiologia", "Oncologia", "Ortopedia", "Neurologia", "Neurocirurgia",
            "Obstetrícia", "Neonatologia", "Cirurgia Bariátrica", "Cirurgia Cardíaca",
            "Hematologia", "Hepatologia", "Gastroenterologia", "Infectologia",
            "Geriatria", "Pediatria", "Urologia", "Cirurgia Vascular",
            "Coloproctologia", "Clínica Geral", "Terapia Intensiva Pediátrica"
        ],
        servicos: [
            "Pronto-Socorro Adulto 24h", "Pronto-Socorro Pediátrico 24h",
            "UTI Adulto", "UTI Pediátrica", "Centro Cirúrgico",
            "Acreditação ONA Nível 3", "Diagnóstico por Imagem Completo",
            "Laboratório Clínico", "Internação Hospitalar", "Centro Médico Ambulatorial"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Rios D'Or?",
                resposta: "O Rios D'Or, da Rede D'Or São Luiz, é credenciado com operadoras como Amil, Bradesco Saúde e Porto Seguro Saúde. A Avanti Corretora compara as opções para a região Central do Rio."
            },
            {
                pergunta: "O Hospital Rios D'Or tem emergência 24 horas?",
                resposta: "Sim. O hospital possui serviço de emergência 24 horas por dia, com atendimento clínico e cirúrgico completo."
            },
            {
                pergunta: "Onde fica o Hospital Rios D'Or?",
                resposta: "O Rios D'Or está localizado no Centro do Rio de Janeiro, com fácil acesso por metrô, ônibus e barcas, atendendo moradores e trabalhadores da região central."
            },
            {
                pergunta: "Qual operadora aceita o Hospital Rios D'Or?",
                resposta: "Como unidade da Rede D'Or, o Rios D'Or é atendido por diversas operadoras nacionais. A Avanti Corretora indica a melhor opção conforme seu orçamento."
            },
            {
                pergunta: "O Rios D'Or tem UTI?",
                resposta: "Sim. O hospital conta com Unidade de Terapia Intensiva para atendimento de pacientes em situações de alta complexidade."
            },
            {
                pergunta: "O Rios D'Or faz cirurgias?",
                resposta: "Sim. O hospital possui centro cirúrgico para procedimentos de média e alta complexidade."
            },
            {
                pergunta: "Qual plano tem o melhor custo-benefício para o Hospital Rios D'Or?",
                resposta: "Varia conforme seu perfil e necessidades. A Avanti Corretora faz a análise e indica a melhor opção disponível."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Rios D'Or?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp para cotação gratuita. Comparamos todos os planos com cobertura no Rios D'Or e gerenciamos a contratação sem custo para você."
            }
        ]
    },

    "oeste-dor": {
        bairro: "Campo Grande",
        endereco: "Rua Olinda Ellis, 93",
        descricaoRica: `O Hospital Oeste D'Or está localizado em Campo Grande, na Rua Olinda Ellis, 93, sendo a unidade da Rede D'Or São Luiz dedicada a atender a população da Zona Oeste do Rio de Janeiro — especialmente moradores de Campo Grande, Santa Cruz, Bangu e Senador Camará. O hospital é o único na região com acreditação ONA Nível 3 – Excelência em Gestão, concedida pelo IQG (Instituto Qualisa de Gestão), o mais alto nível de certificação da Organização Nacional de Acreditação brasileiro, que atesta excelência em segurança do paciente, processos assistenciais e gestão hospitalar.

Dentro do padrão de qualidade da Rede D'Or São Luiz, o Oeste D'Or oferece emergência 24 horas, UTI adulta e pediátrica, centro cirúrgico completo, internação hospitalar, Centro Médico Ambulatorial com múltiplas especialidades, quimioterapia, diagnóstico por imagem e laboratório clínico. O hospital cobre um amplo espectro de especialidades, desde cardiologia e oncologia até cirurgia bariátrica e cuidados intensivos neonatais, sendo referência em alta complexidade para toda a Zona Oeste carioca.

Para o beneficiário de plano de saúde em Campo Grande e arredores, o Oeste D'Or representa acesso ao único hospital com ONA Nível 3 da região, dentro do padrão de atendimento da maior rede hospitalar privada do Brasil. A Avanti Corretora orienta na escolha do plano com cobertura nesta unidade de referência na Zona Oeste do Rio de Janeiro.`,
        especialidades: [
            "Cardiologia", "Oncologia", "Neurologia", "Neurocirurgia", "Ortopedia",
            "Cirurgia Geral", "Cirurgia Bariátrica", "Gastroenterologia",
            "Ginecologia", "Obstetrícia", "Pediatria", "Neonatologia",
            "Urologia", "Infectologia", "Terapia Intensiva"
        ],
        servicos: [
            "Emergência 24h", "UTI Adulto", "UTI Pediátrica", "Centro Cirúrgico",
            "Acreditação ONA Nível 3", "Centro Médico Ambulatorial",
            "Quimioterapia", "Diagnóstico por Imagem", "Laboratório Clínico", "Internação"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Oeste D'Or?",
                resposta: "O Oeste D'Or faz parte da Rede D'Or São Luiz e é credenciado com operadoras como Amil, Bradesco Saúde e Porto Seguro Saúde. A Avanti Corretora compara as opções para a Zona Oeste do Rio."
            },
            {
                pergunta: "O Hospital Oeste D'Or tem emergência 24 horas?",
                resposta: "Sim. O hospital possui pronto-atendimento 24 horas por dia com atendimento clínico e cirúrgico."
            },
            {
                pergunta: "Onde fica o Hospital Oeste D'Or?",
                resposta: "O Oeste D'Or está localizado em Campo Grande, na Zona Oeste do Rio de Janeiro, sendo o único hospital com certificação ONA Nível 3 na região, atendendo moradores de Campo Grande, Bangu, Santa Cruz e municípios da Baixada Ocidental."
            },
            {
                pergunta: "Qual operadora aceita o Hospital Oeste D'Or?",
                resposta: "Como unidade da Rede D'Or São Luiz, o hospital é atendido por diversas operadoras nacionais. A Avanti Corretora indica a melhor para seu perfil e orçamento."
            },
            {
                pergunta: "O Oeste D'Or tem UTI?",
                resposta: "Sim. O hospital conta com Unidade de Terapia Intensiva para atendimento de pacientes em estado crítico."
            },
            {
                pergunta: "O Oeste D'Or faz cirurgias?",
                resposta: "Sim. O hospital possui centro cirúrgico estruturado para procedimentos de média e alta complexidade."
            },
            {
                pergunta: "Qual plano tem o melhor custo-benefício para o Oeste D'Or?",
                resposta: "Depende do seu perfil. A Avanti Corretora analisa as opções e indica o plano com melhor custo-benefício para cobertura na Zona Oeste do Rio de Janeiro."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Oeste D'Or?",
                resposta: "Fale com a Avanti Corretora pelo WhatsApp para cotação gratuita. Nossa equipe compara os planos com cobertura no Oeste D'Or e cuida de toda a contratação sem custo."
            }
        ]
    },

    "samaritano": {
        bairro: "Botafogo",
        endereco: "Rua Bambina, 98",
        descricaoRica: `O Hospital Samaritano do Rio de Janeiro é uma das instituições hospitalares mais tradicionais e respeitadas do Brasil, com mais de 130 anos de história. Localizado no bairro de Botafogo, na Zona Sul do Rio de Janeiro, o Samaritano integra a Rede D'Or São Luiz e combina tradição centenária com modernas instalações e tecnologia de ponta. O hospital é referência em cardiologia, oncologia, ortopedia, maternidade e pediatria, atendendo pacientes de todo o Rio de Janeiro e do interior do estado.

O Samaritano Rio dispõe de estrutura completa: Centro Cirúrgico com salas de alta complexidade, Unidade de Terapia Intensiva adulta e pediátrica, maternidade com UTI Neonatal, setor de oncologia com quimioterapia e radioterapia, hemodinâmica, medicina diagnóstica com exames de última geração e serviço de emergência 24 horas. O hospital é acreditado pela Joint Commission International (JCI), certificação que garante padrões internacionais de qualidade e segurança assistencial.

Para quem busca um plano de saúde com cobertura no Hospital Samaritano de Botafogo, a Avanti Corretora oferece comparação gratuita entre as operadoras credenciadas. O Samaritano aceita as principais operadoras nacionais em planos de segmento médio a superior. Nossa equipe orienta na escolha do plano ideal com acesso ao Samaritano e à Rede D'Or São Luiz no Rio de Janeiro.`,
        especialidades: [
            "Cardiologia", "Oncologia", "Ortopedia", "Maternidade", "Pediatria",
            "Neurologia", "Cirurgia Geral", "Hemodinâmica", "Transplante",
            "Urologia", "Ginecologia", "Endocrinologia", "Clínica Médica",
            "Reumatologia", "Infectologia", "Pneumologia"
        ],
        servicos: [
            "Emergência 24h", "Maternidade", "UTI Adulta", "UTI Pediátrica",
            "UTI Neonatal", "Centro Cirúrgico", "Oncologia (quimioterapia e radioterapia)",
            "Hemodinâmica", "Diagnóstico por Imagem", "Day Clinic", "Transplantes"
        ],
        faq: [
            {
                pergunta: "Quais planos de saúde cobrem o Hospital Samaritano do Rio de Janeiro?",
                resposta: "O Hospital Samaritano, parte da Rede D'Or São Luiz, é credenciado com operadoras como Amil, Bradesco Saúde, Porto Seguro Saúde e SulAmérica em planos de segmento médio a superior. A Avanti Corretora identifica o plano ideal com cobertura no Samaritano."
            },
            {
                pergunta: "O Hospital Samaritano tem maternidade?",
                resposta: "Sim. O Samaritano possui maternidade completa com UTI Neonatal, acomodando partos de baixo e alto risco com equipe especializada em obstetrícia e neonatologia."
            },
            {
                pergunta: "O Hospital Samaritano tem tratamento para câncer?",
                resposta: "Sim. O Samaritano possui setor de oncologia com quimioterapia, radioterapia e suporte cirúrgico oncológico, integrado à estrutura completa de diagnóstico e terapia da Rede D'Or."
            },
            {
                pergunta: "O Hospital Samaritano tem emergência 24 horas?",
                resposta: "Sim. O hospital dispõe de serviço de emergência 24 horas por dia, com atendimento clínico e cirúrgico completo para adultos e crianças."
            },
            {
                pergunta: "Qual a história do Hospital Samaritano do Rio de Janeiro?",
                resposta: "O Hospital Samaritano tem mais de 130 anos de história no Rio de Janeiro, sendo um dos mais tradicionais do Brasil. Hoje integra a Rede D'Or São Luiz, mantendo a tradição com tecnologia e estrutura modernas."
            },
            {
                pergunta: "O Hospital Samaritano é acreditado internacionalmente?",
                resposta: "Sim. O Samaritano possui acreditação pela Joint Commission International (JCI), certificação que atesta padrões internacionais de qualidade e segurança no atendimento assistencial."
            },
            {
                pergunta: "Qual a diferença entre os planos que cobrem o Hospital Samaritano?",
                resposta: "Os planos variam em segmento, tipo de acomodação (apartamento individual ou enfermaria), coparticipação e cobertura. A Avanti Corretora compara todas as opções e indica o mais adequado ao seu perfil e orçamento."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Samaritano?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp para cotação gratuita. Nossa equipe compara os planos que credenciam o Hospital Samaritano de Botafogo e cuida de toda a contratação sem custo."
            }
        ]
    },

    "samaritano-barra": {
        bairro: "Barra da Tijuca",
        endereco: "Av. Jorge Curi, 550",
        descricaoRica: `O Hospital Samaritano Barra é a unidade da Rede D'Or São Luiz na Barra da Tijuca, trazendo a tradição e qualidade do Hospital Samaritano para a Zona Oeste do Rio de Janeiro. Localizado em um dos bairros de maior crescimento do Rio, o Samaritano Barra oferece atendimento hospitalar completo para moradores da Barra da Tijuca, Recreio dos Bandeirantes, Jacarepaguá e municípios vizinhos como Itaguaí.

O hospital conta com estrutura moderna para atendimento de média e alta complexidade, incluindo emergência 24 horas, maternidade, centro cirúrgico, unidade de terapia intensiva e diagnóstico por imagem avançado. Como parte da Rede D'Or São Luiz, o Samaritano Barra mantém os padrões de qualidade reconhecidos pela rede e é credenciado pelas principais operadoras de saúde do Brasil.

Para quem mora na Zona Oeste do Rio e busca um plano com cobertura no Samaritano Barra, a Avanti Corretora oferece cotação gratuita e comparação entre as operadoras disponíveis nesta unidade. Nossa equipe orienta na contratação do plano mais adequado para acesso à Rede D'Or na Barra da Tijuca.`,
        especialidades: [
            "Cardiologia", "Maternidade", "Oncologia", "Pediatria",
            "Ortopedia", "Cirurgia Geral", "Neurologia", "Clínica Médica",
            "Ginecologia", "Urologia"
        ],
        servicos: [
            "Emergência 24h", "Maternidade", "UTI Adulta", "UTI Neonatal",
            "Centro Cirúrgico", "Oncologia", "Diagnóstico por Imagem", "Internação"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Samaritano Barra?",
                resposta: "O Samaritano Barra, da Rede D'Or São Luiz, aceita operadoras como Amil, Bradesco Saúde e Porto Seguro Saúde em planos de segmento intermediário a superior. A Avanti Corretora compara as opções para a Zona Oeste do Rio."
            },
            {
                pergunta: "O Samaritano Barra tem maternidade?",
                resposta: "Sim. O hospital possui maternidade com UTI Neonatal, atendendo partos de baixo e alto risco com equipe especializada em obstetrícia."
            },
            {
                pergunta: "O Samaritano Barra tem emergência 24h?",
                resposta: "Sim. O hospital dispõe de emergência 24 horas por dia, com atendimento clínico e cirúrgico completo para adultos e crianças."
            },
            {
                pergunta: "Onde fica o Hospital Samaritano Barra?",
                resposta: "O Samaritano Barra está localizado na Barra da Tijuca, Zona Oeste do Rio de Janeiro, atendendo moradores da Barra, Recreio e Jacarepaguá."
            },
            {
                pergunta: "Qual operadora aceita o Samaritano Barra?",
                resposta: "Como unidade da Rede D'Or, o hospital é credenciado por diversas operadoras nacionais. A Avanti Corretora indica a melhor para seu perfil e orçamento."
            },
            {
                pergunta: "O Samaritano Barra tem oncologia?",
                resposta: "Sim. O hospital possui serviço de oncologia integrado à rede de oncologia D'Or, com suporte diagnóstico e terapêutico."
            },
            {
                pergunta: "O Samaritano Barra tem UTI?",
                resposta: "Sim. O hospital conta com Unidade de Terapia Intensiva adulta e UTI Neonatal para atendimento de pacientes em estado crítico."
            },
            {
                pergunta: "Como contratar um plano aceito no Samaritano Barra?",
                resposta: "Fale com a Avanti Corretora pelo WhatsApp para cotação gratuita. Nossa equipe compara os planos com cobertura no Samaritano Barra e cuida de toda a contratação sem custo."
            }
        ]
    },

    "pro-cardiaco": {
        bairro: "Botafogo",
        endereco: "Rua Dona Mariana, 219",
        descricaoRica: `O Hospital Pró-Cardíaco é uma referência nacional em cardiologia e cirurgia cardiovascular, localizado no bairro de Botafogo, na Zona Sul do Rio de Janeiro. Especializado em doenças do coração desde sua fundação, o Pró-Cardíaco reúne tecnologia de ponta e equipe multidisciplinar dedicada ao diagnóstico e tratamento de condições cardíacas de alta complexidade, incluindo cirurgias cardíacas, transplante cardíaco, hemodinâmica e cardiologia intervencionista.

O hospital possui uma das mais completas estruturas de cardiologia do Brasil, com Centro Cirúrgico cardiovascular, Unidade Coronariana (UCO), Unidade de Cuidados Semi-Intensivos, laboratório de hemodinâmica e diagnóstico por imagem cardiovascular avançado (ecocardiografia, ressonância cardíaca, tomografia coronariana). O Pró-Cardíaco realiza procedimentos como implante de marcapasso, cardioversão, ablação cardíaca, valvoplastias e cirurgias de revascularização miocárdica.

Para beneficiários de planos de saúde que precisam de cardiologia de excelência no Rio de Janeiro, o Pró-Cardíaco é uma das melhores opções disponíveis. A Avanti Corretora orienta na escolha do plano de saúde com cobertura nesta instituição especializada, comparando as operadoras credenciadas e identificando a melhor opção para seu perfil.`,
        especialidades: [
            "Cardiologia", "Cirurgia Cardiovascular", "Hemodinâmica",
            "Arritmologia", "Eletrofisiologia", "Insuficiência Cardíaca",
            "Transplante Cardíaco", "Cardiologia Pediátrica", "Medicina Nuclear"
        ],
        servicos: [
            "Emergência Cardiológica 24h", "Unidade Coronariana (UCO)", "Centro Cirúrgico Cardiovascular",
            "Hemodinâmica", "Ablação Cardíaca", "Marcapasso e Desfibrilador",
            "Ecocardiografia", "Ressonância Cardíaca", "Tomografia Coronariana",
            "Transplante Cardíaco", "UTI Pós-Operatória"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Pró-Cardíaco?",
                resposta: "O Hospital Pró-Cardíaco é credenciado com diversas operadoras de saúde que atuam no Rio de Janeiro, incluindo planos nacionais das principais seguradoras. A Avanti Corretora identifica quais planos garantem atendimento no Pró-Cardíaco."
            },
            {
                pergunta: "O Hospital Pró-Cardíaco faz cirurgia cardíaca?",
                resposta: "Sim. O Pró-Cardíaco é especializado em cirurgia cardiovascular, realizando desde revascularização miocárdica (ponte de safena) até cirurgias valvares, transplante cardíaco e implante de assistência circulatória."
            },
            {
                pergunta: "O Pró-Cardíaco tem hemodinâmica?",
                resposta: "Sim. O hospital possui laboratório de hemodinâmica para cateterismo cardíaco, angioplastia, ablação e outros procedimentos cardiológicos intervencionistas."
            },
            {
                pergunta: "O Hospital Pró-Cardíaco tem emergência 24h?",
                resposta: "Sim. O hospital possui emergência cardiológica 24 horas, com Unidade Coronariana (UCO) e equipe especializada para atendimento de infarto, arritmias e outras urgências cardíacas."
            },
            {
                pergunta: "Qual operadora aceita o Hospital Pró-Cardíaco?",
                resposta: "O Pró-Cardíaco é credenciado por diversas operadoras nacionais. A Avanti Corretora verifica quais planos disponíveis no seu orçamento garantem cobertura nesta instituição especializada em cardiologia."
            },
            {
                pergunta: "O Pró-Cardíaco faz transplante cardíaco?",
                resposta: "Sim. O Hospital Pró-Cardíaco é referência em transplante cardíaco no Rio de Janeiro, com equipe especializada e estrutura completa de terapia intensiva cardiovascular."
            },
            {
                pergunta: "Onde fica o Hospital Pró-Cardíaco?",
                resposta: "O Hospital Pró-Cardíaco está localizado no bairro de Botafogo, na Zona Sul do Rio de Janeiro."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Pró-Cardíaco?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp para cotação gratuita. Nossa equipe compara os planos com cobertura no Pró-Cardíaco e gerencia a contratação sem custo para você."
            }
        ]
    },

    "perinatal-laranjeiras": {
        bairro: "Glória",
        endereco: "Rua Santo Amaro, 80",
        descricaoRica: `O Hospital e Maternidade Perinatal é uma referência consolidada em obstetrícia e neonatologia no Rio de Janeiro. Em março de 2023, a unidade foi transferida para o moderno complexo do Hospital Glória D'Or, na Rua Santo Amaro, 80, bairro da Glória, Zona Sul carioca, passando a operar em instalações totalmente novas integradas a uma estrutura hospitalar completa de alta complexidade. A mudança ampliou significativamente a capacidade de atendimento materno-infantil e a disponibilidade de recursos tecnológicos para gestantes e recém-nascidos.

O Perinatal é especializado no ciclo gravídico-puerperal de baixo e alto risco: centro obstétrico moderno, salas de parto humanizado, UTI Neonatal de alta complexidade para recém-nascidos prematuros ou com necessidade de cuidados intensivos, Unidade de Cuidados Intermediários Neonatais (UCINCO) e quartos privativos mãe-bebê. A integração ao complexo Glória D'Or garante suporte cirúrgico, cardiológico e de terapia intensiva adulta dentro do mesmo complexo, benefício essencial para gestações de alto risco.

Para gestantes que buscam um plano de saúde com cobertura no Perinatal (agora no complexo Glória D'Or), a Avanti Corretora orienta na escolha do plano adequado com cobertura obstétrica ativa, verificando as carências específicas de maternidade e as operadoras credenciadas nesta unidade. Cotação gratuita e sem compromisso.`,
        especialidades: [
            "Obstetrícia", "Neonatologia", "Ginecologia", "Maternidade",
            "Gestação de Alto Risco", "Pediatria Neonatal"
        ],
        servicos: [
            "Maternidade 24h", "UTI Neonatal", "Centro Obstétrico", "Parto Humanizado",
            "UCINCO (Unidade de Cuidados Intermediários Neonatais)", "Gestação de Alto Risco",
            "Parto Normal e Cesáreo", "Internação Mãe e Bebê"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Perinatal (Glória D'Or)?",
                resposta: "O Perinatal opera no complexo Glória D'Or (Rua Santo Amaro, 80 — Glória) e é credenciado com diversas operadoras. Para cobrir parto e maternidade, é necessário um plano com cobertura obstétrica ativa. A Avanti Corretora orienta sobre carências e quais planos garantem cobertura nesta unidade."
            },
            {
                pergunta: "O Perinatal mudou de endereço?",
                resposta: "Sim. Em março de 2023, o Hospital Perinatal foi transferido do bairro de Laranjeiras para o complexo do Hospital Glória D'Or, na Rua Santo Amaro, 80, bairro da Glória, Zona Sul do Rio de Janeiro. As operações materno-infantis continuam no mesmo padrão, agora em instalações modernas."
            },
            {
                pergunta: "O Perinatal tem UTI Neonatal?",
                resposta: "Sim. O Perinatal possui UTI Neonatal de alta complexidade para recém-nascidos prematuros ou com necessidade de cuidados intensivos especializados, além de Unidade de Cuidados Intermediários Neonatais (UCINCO)."
            },
            {
                pergunta: "O Perinatal atende gestação de alto risco?",
                resposta: "Sim. O hospital é especializado em obstetrícia de alto risco, com equipe de neonatologistas e obstetras e infraestrutura completa. A integração ao complexo Glória D'Or garante suporte cirúrgico e de UTI adulta para gestantes com complicações graves."
            },
            {
                pergunta: "O Perinatal faz parto humanizado?",
                resposta: "Sim. O Perinatal oferece salas de parto humanizado, com suporte para parto normal e outras práticas que respeitam a autonomia da gestante. A equipe é especializada em obstetrícia de baixo e alto risco."
            },
            {
                pergunta: "Onde fica o Perinatal atualmente?",
                resposta: "Desde março de 2023, o Perinatal está localizado na Rua Santo Amaro, 80, bairro da Glória, Zona Sul do Rio de Janeiro — dentro do complexo Glória D'Or. Fácil acesso para moradores de Glória, Catete, Flamengo e Centro."
            },
            {
                pergunta: "Existe carência para parto no plano de saúde?",
                resposta: "Sim. Os planos de saúde têm carência de 300 dias (aproximadamente 10 meses) para parto e procedimentos obstétricos eletivos, salvo urgências. A Avanti Corretora orienta sobre a melhor estratégia de contratação para gestantes."
            },
            {
                pergunta: "Como contratar um plano aceito no Perinatal?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe orienta sobre carências, compara planos com cobertura no Perinatal (Glória D'Or) e cuida da contratação gratuitamente."
            }
        ]
    },

    "adventista-silvestre": {
        bairro: "Cosme Velho",
        endereco: "Ladeira dos Guararapes, 260",
        descricaoRica: `O Hospital Adventista Silvestre é uma das instituições hospitalares mais antigas e reconhecidas do Rio de Janeiro. Fundado em 1942 pela Igreja Adventista do Sétimo Dia, o hospital está localizado na Ladeira dos Guararapes, no bairro de Cosme Velho, com vista para o Corcovado e a Baía de Guanabara. Em 1968, a instituição registrou um marco histórico mundial ao realizar o primeiro transplante de pâncreas do mundo, consolidando sua posição de vanguarda na medicina brasileira. Em 2026, o Adventista Silvestre foi reconhecido pela revista Newsweek entre os 80 melhores hospitais do Brasil.

A estrutura do Adventista Silvestre inclui um novo setor de Emergência inaugurado em janeiro de 2026, Centro Cirúrgico, Unidade de Terapia Intensiva, maternidade com UTI Neonatal, oncologia, cardiologia com hemodinâmica, diagnóstico por imagem completo e serviços ambulatoriais. O hospital é acreditado pelo Consórcio Brasileiro de Acreditação (CBA) em parceria com a Joint Commission International (JCI), certificação que atesta padrões internacionais de qualidade e segurança assistencial, renovada consecutivamente nos últimos anos.

Para quem busca um plano de saúde com cobertura no Hospital Adventista Silvestre, a Avanti Corretora oferece cotação gratuita e comparação entre as operadoras credenciadas nesta instituição com mais de 80 anos de história e reconhecimento internacional. Nossa equipe orienta na escolha do plano ideal para acesso ao Adventista Silvestre.`,
        especialidades: [
            "Cardiologia", "Oncologia", "Ortopedia", "Neurologia", "Pediatria",
            "Maternidade", "Cirurgia Geral", "Clínica Médica", "Urologia",
            "Ginecologia", "Endocrinologia", "Infectologia", "Transplante",
            "Cirurgia Cardíaca", "Nefrologia"
        ],
        servicos: [
            "Emergência 24h (nova ala — jan/2026)", "Maternidade", "UTI Neonatal",
            "Centro Cirúrgico", "Terapia Intensiva", "Oncologia",
            "Hemodinâmica", "Diagnóstico por Imagem", "Day Clinic", "Internação"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Adventista Silvestre?",
                resposta: "O Hospital Adventista Silvestre é credenciado com diversas operadoras nacionais de saúde em planos de segmento intermediário e superior. A Avanti Corretora compara as opções disponíveis e indica a melhor para seu perfil."
            },
            {
                pergunta: "O Adventista Silvestre tem emergência 24 horas?",
                resposta: "Sim. O hospital inaugurou uma nova ala de emergência em janeiro de 2026, ampliando a capacidade de atendimento 24 horas por dia com cobertura clínica e cirúrgica para adultos e crianças."
            },
            {
                pergunta: "Qual a história do Hospital Adventista Silvestre?",
                resposta: "O Adventista Silvestre foi fundado em 1942 pela Igreja Adventista do Sétimo Dia. Em 1968, realizou o primeiro transplante de pâncreas do mundo. Em 2026, foi reconhecido pela revista Newsweek entre os 80 melhores hospitais do Brasil, consolidando mais de 80 anos de excelência médica."
            },
            {
                pergunta: "O Hospital Adventista Silvestre é acreditado?",
                resposta: "Sim. O Adventista Silvestre possui acreditação pelo Consórcio Brasileiro de Acreditação (CBA) com a Joint Commission International (JCI), certificação de padrão internacional de qualidade e segurança assistencial, renovada consecutivamente."
            },
            {
                pergunta: "O Adventista Silvestre tem maternidade?",
                resposta: "Sim. O hospital possui maternidade com UTI Neonatal, atendendo partos normais e cesarianas com equipe especializada em obstetrícia e neonatologia."
            },
            {
                pergunta: "Onde fica o Hospital Adventista Silvestre?",
                resposta: "O Adventista Silvestre está localizado na Ladeira dos Guararapes, 260, bairro de Cosme Velho, Zona Sul do Rio de Janeiro — próximo ao Corcovado, com acesso pela Rua Cosme Velho e fácil acesso para moradores de Laranjeiras, Botafogo, Santa Teresa e adjacências."
            },
            {
                pergunta: "O Adventista Silvestre tem oncologia?",
                resposta: "Sim. O hospital possui serviço de oncologia com suporte diagnóstico e terapêutico para diferentes tipos de câncer, integrado às demais especialidades da instituição."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Adventista Silvestre?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp para cotação gratuita. Nossa equipe compara os planos com cobertura no Adventista Silvestre, instituição reconhecida pela Newsweek como um dos melhores hospitais do Brasil, e cuida de toda a contratação sem custo."
            }
        ]
    },

    "hospital-inga": {
        bairro: "Ingá",
        endereco: "Rua Presidente Pedreira, 20",
        descricaoRica: `O Hospital Ingá é uma instituição de saúde com tradição em Niterói, localizado no bairro do Ingá, na Rua Presidente Pedreira, 20. Fundado em 1968, o hospital acumula mais de cinco décadas de atendimento à população de Niterói e municípios da Região Metropolitana, sendo reconhecido como referência em urologia e nefrologia na área. Ao longo dos anos, o Hospital Ingá consolidou sua posição como prestador de serviços hospitalares gerais de média e alta complexidade, com equipe especializada e estrutura para internação, cirurgia e emergência.

A estrutura do Hospital Ingá contempla Emergência 24 horas, Centro Cirúrgico, Unidade de Terapia Intensiva, setores de internação clínica e cirúrgica e diagnóstico por imagem. As especialidades de urologia e nefrologia são historicamente fortes nesta unidade, com suporte para procedimentos endoscópicos, litotripsia e hemodiálise. O hospital atende convênios das principais operadoras de saúde que operam em Niterói e Grande Niterói.

Para beneficiários de planos de saúde em Niterói que buscam cobertura no Hospital Ingá, a Avanti Corretora compara gratuitamente as operadoras disponíveis e indica o plano com melhor custo-benefício para acesso a este hospital tradicional da Região Metropolitana do Rio de Janeiro.`,
        especialidades: [
            "Urologia", "Nefrologia", "Hemodiálise", "Cardiologia",
            "Cirurgia Geral", "Clínica Médica", "Ortopedia", "Neurologia",
            "Ginecologia", "Pediatria"
        ],
        servicos: [
            "Emergência 24h", "Centro Cirúrgico", "Terapia Intensiva",
            "Hemodiálise", "Internação Clínica", "Internação Cirúrgica",
            "Diagnóstico por Imagem", "Endoscopia Urológica"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Ingá em Niterói?",
                resposta: "O Hospital Ingá é credenciado com as principais operadoras de saúde que atuam em Niterói e Grande Niterói. A Avanti Corretora identifica quais planos disponíveis no seu orçamento garantem atendimento no Ingá."
            },
            {
                pergunta: "O Hospital Ingá tem urologia e nefrologia?",
                resposta: "Sim. O Hospital Ingá é reconhecido como referência em urologia e nefrologia em Niterói, com estrutura para procedimentos cirúrgicos urológicos, hemodiálise e tratamento de doenças renais."
            },
            {
                pergunta: "O Hospital Ingá tem emergência 24 horas?",
                resposta: "Sim. O hospital dispõe de pronto-atendimento funcionando 24 horas por dia com cobertura clínica e cirúrgica."
            },
            {
                pergunta: "Onde fica o Hospital Ingá?",
                resposta: "O Hospital Ingá está localizado na Rua Presidente Pedreira, 20, bairro do Ingá, em Niterói, Rio de Janeiro."
            },
            {
                pergunta: "O Hospital Ingá tem UTI?",
                resposta: "Sim. O hospital dispõe de Unidade de Terapia Intensiva para atendimento de pacientes críticos ou em pós-operatório de cirurgias de média e alta complexidade."
            },
            {
                pergunta: "O Hospital Ingá faz hemodiálise?",
                resposta: "Sim. O Hospital Ingá oferece serviço de hemodiálise para pacientes com insuficiência renal, integrado à especialidade de nefrologia do hospital."
            },
            {
                pergunta: "Qual a história do Hospital Ingá?",
                resposta: "Fundado em 1968, o Hospital Ingá tem mais de 55 anos de atendimento à população de Niterói e municípios vizinhos, sendo referência regional em urologia e nefrologia."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Ingá?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara os planos com cobertura no Hospital Ingá em Niterói e cuida da contratação gratuitamente."
            }
        ]
    },

    "notrecare-rio": {
        bairro: "Andaraí",
        endereco: "Rua Silva Teles, 52",
        descricaoRica: `O Hospital NotreCare Rio é uma unidade hospitalar da Rede NotreDame Intermédica localizada no bairro do Andaraí, Zona Norte do Rio de Janeiro, na Rua Silva Teles, 52. O hospital atende beneficiários dos planos da operadora NotreDame Intermédica (Grupo Hapvida NotreDame Intermédica) que necessitam de internação hospitalar, procedimentos cirúrgicos e atendimento de emergência na região. A unidade está estrategicamente posicionada para atender moradores do Andaraí, Tijuca, Vila Isabel, Grajaú e adjacências.

A estrutura do NotreCare Rio compreende serviços hospitalares para os credenciados da operadora: emergência 24 horas, centro cirúrgico, unidades de internação e suporte de terapia intensiva. O hospital é voltado exclusivamente ao atendimento de beneficiários dos planos da rede NotreDame Intermédica, não realizando atendimentos particulares. Como parte do Grupo Hapvida NotreDame Intermédica, a unidade segue os protocolos e padrões assistenciais do grupo.

Para quem possui plano NotreDame Intermédica ou Hapvida no Rio de Janeiro e mora na Zona Norte, o NotreCare Rio é a principal referência hospitalar da rede na região. A Avanti Corretora orienta na contratação de planos dessa operadora com cobertura nesta e em outras unidades do grupo.`,
        especialidades: [
            "Clínica Médica", "Cirurgia Geral", "Ortopedia", "Cardiologia",
            "Neurologia", "Ginecologia", "Pediatria", "Urologia"
        ],
        servicos: [
            "Emergência 24h", "Centro Cirúrgico", "Terapia Intensiva",
            "Internação Clínica", "Internação Cirúrgica", "Diagnóstico por Imagem"
        ],
        faq: [
            {
                pergunta: "O Hospital NotreCare Rio atende qual plano de saúde?",
                resposta: "O NotreCare Rio é exclusivo para beneficiários dos planos NotreDame Intermédica (Grupo Hapvida NotreDame Intermédica). O hospital não realiza atendimentos particulares. A Avanti Corretora auxilia na contratação de planos NotreDame com cobertura nesta unidade."
            },
            {
                pergunta: "O NotreCare Rio tem emergência 24 horas?",
                resposta: "Sim. O hospital dispõe de serviço de emergência 24 horas para beneficiários dos planos NotreDame Intermédica e Hapvida credenciados nesta unidade."
            },
            {
                pergunta: "Onde fica o Hospital NotreCare Rio?",
                resposta: "O NotreCare Rio está localizado na Rua Silva Teles, 52, bairro do Andaraí, Zona Norte do Rio de Janeiro, próximo ao Maracanã e com acesso para moradores de Tijuca, Vila Isabel, Grajaú e adjacências."
            },
            {
                pergunta: "O NotreCare Rio faz cirurgias?",
                resposta: "Sim. O hospital possui Centro Cirúrgico estruturado para procedimentos de média e alta complexidade para beneficiários credenciados nos planos da rede."
            },
            {
                pergunta: "O NotreCare atende plano Hapvida?",
                resposta: "Sim. O Grupo Hapvida e NotreDame Intermédica fundiram-se formando o Grupo Hapvida NotreDame Intermédica. Beneficiários de planos Hapvida e NotreDame têm acesso às unidades da rede integrada, incluindo o NotreCare Rio. Consulte a Avanti para verificar a cobertura específica do seu plano."
            },
            {
                pergunta: "O NotreCare Rio tem UTI?",
                resposta: "Sim. O hospital dispõe de Unidade de Terapia Intensiva para atendimento de pacientes em estado crítico, dentro da rede NotreDame Intermédica."
            },
            {
                pergunta: "Qual a diferença entre NotreCare e outros hospitais da rede?",
                resposta: "Os hospitais NotreCare são unidades da rede própria NotreDame Intermédica destinadas ao atendimento hospitalar exclusivo de beneficiários dos planos do grupo. Já clínicas e centros médicos da rede atendem consultas e exames ambulatoriais."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital NotreCare Rio?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara planos NotreDame Intermédica e Hapvida com cobertura no NotreCare Rio e outras unidades da Zona Norte, orientando na contratação gratuitamente."
            }
        ]
    },

    "hospital-mulher-nd": {
        bairro: "Jacarepaguá",
        endereco: "Estrada dos Três Rios, 542",
        descricaoRica: `O Hospital da Mulher NotreDame Intermédica (Hospital Mulher ND) é uma unidade especializada no cuidado feminino integrante da Rede NotreDame Intermédica (Grupo Hapvida NotreDame Intermédica), localizada na Estrada dos Três Rios, 542, no bairro de Jacarepaguá, Zona Oeste do Rio de Janeiro. O hospital foi concebido com foco nas necessidades de saúde da mulher ao longo de todas as fases da vida, desde a ginecologia preventiva e a saúde reprodutiva até a obstetrícia, maternidade e oncologia ginecológica.

A estrutura do Hospital Mulher ND compreende Centro Obstétrico, salas de parto, UTI Neonatal, internação ginecológica e obstétrica, Centro Cirúrgico especializado e serviços de diagnóstico por imagem direcionados à saúde feminina. O hospital é voltado ao atendimento de beneficiárias dos planos NotreDame Intermédica e Hapvida, sendo uma referência para gestantes e mulheres que necessitam de cuidados especializados na Zona Oeste do Rio de Janeiro.

Para beneficiárias de planos NotreDame Intermédica ou Hapvida que moram na Barra da Tijuca, Recreio, Jacarepaguá e adjacências, o Hospital Mulher ND é a principal referência materna da rede na região. A Avanti Corretora orienta na contratação de planos com cobertura nesta unidade, incluindo informações sobre carências obstétricas.`,
        especialidades: [
            "Obstetrícia", "Ginecologia", "Neonatologia", "Maternidade",
            "Gestação de Alto Risco", "Oncologia Ginecológica",
            "Reprodução Assistida", "Saúde da Mulher"
        ],
        servicos: [
            "Maternidade 24h", "UTI Neonatal", "Centro Obstétrico",
            "Centro Cirúrgico", "Internação Ginecológica", "Parto Humanizado",
            "Diagnóstico por Imagem Feminino", "Internação Mãe e Bebê"
        ],
        faq: [
            {
                pergunta: "O Hospital Mulher ND atende qual plano de saúde?",
                resposta: "O Hospital Mulher ND atende beneficiárias dos planos NotreDame Intermédica e Hapvida (Grupo Hapvida NotreDame Intermédica). A Avanti Corretora auxilia na contratação de planos com cobertura nesta unidade especializada."
            },
            {
                pergunta: "O Hospital Mulher ND tem maternidade?",
                resposta: "Sim. O hospital possui maternidade completa com UTI Neonatal, Centro Obstétrico e equipe especializada para partos normais, cesarianas e gestações de alto risco."
            },
            {
                pergunta: "Onde fica o Hospital Mulher NotreDame?",
                resposta: "O Hospital Mulher ND está na Estrada dos Três Rios, 542, bairro de Jacarepaguá, Zona Oeste do Rio de Janeiro, atendendo moradores de Jacarepaguá, Barra da Tijuca, Recreio e adjacências."
            },
            {
                pergunta: "O Hospital Mulher ND faz parto humanizado?",
                resposta: "Sim. A unidade é focada na saúde da mulher e oferece suporte para parto humanizado, respeitando a autonomia da gestante durante o processo."
            },
            {
                pergunta: "O Hospital Mulher ND atende ginecologia?",
                resposta: "Sim. Além de maternidade, o hospital oferece atendimento ginecológico amplo, incluindo cirurgias ginecológicas, oncologia ginecológica e saúde reprodutiva."
            },
            {
                pergunta: "Existe carência para parto no plano NotreDame?",
                resposta: "Sim. Como em todos os planos de saúde, há carência de 300 dias para procedimentos obstétricos eletivos (parto), salvo urgências. A Avanti Corretora orienta sobre como contratar antecipando a carência para a gestação planejada."
            },
            {
                pergunta: "O Hospital Mulher ND tem UTI Neonatal?",
                resposta: "Sim. O hospital dispõe de UTI Neonatal para recém-nascidos prematuros ou que necessitam de cuidados intensivos especializados."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Mulher ND?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara planos NotreDame Intermédica com cobertura no Hospital Mulher ND na Zona Oeste e cuida da contratação gratuitamente."
            }
        ]
    },

    "hospital-infantil-jac": {
        bairro: "Jacarepaguá",
        endereco: "Estrada dos Três Rios, 610",
        descricaoRica: `O Hospital Infantil JAC é uma unidade pediátrica especializada integrante da Rede NotreDame Intermédica (Grupo Hapvida NotreDame Intermédica), localizada na Estrada dos Três Rios, 610, em Jacarepaguá, Zona Oeste do Rio de Janeiro. O hospital é dedicado exclusivamente ao atendimento de crianças e adolescentes de 0 a 17 anos, oferecendo cuidados pediátricos de média e alta complexidade em uma estrutura projetada para o público infantil.

A infraestrutura do Hospital Infantil JAC inclui Emergência Pediátrica 24 horas, Centro Cirúrgico pediátrico, UTI Pediátrica (UTIP), internação pediátrica, neonatologia e suporte clínico para as principais especialidades infantis: cardiologia pediátrica, neurologia pediátrica, oncologia pediátrica, pneumologia e outras. O ambiente hospitalar é humanizado, com espaços projetados para minimizar o estresse do ambiente hospitalar para crianças e familiares.

Para beneficiários dos planos NotreDame Intermédica e Hapvida com filhos na Zona Oeste do Rio de Janeiro, o Hospital Infantil JAC é a principal referência pediátrica da rede na região. A Avanti Corretora auxilia na contratação de planos com cobertura nesta unidade especializada no cuidado infantil.`,
        especialidades: [
            "Pediatria Geral", "Cardiologia Pediátrica", "Neurologia Pediátrica",
            "Oncologia Pediátrica", "Neonatologia", "Pneumologia Pediátrica",
            "Cirurgia Pediátrica", "Ortopedia Pediátrica", "Infectologia Pediátrica"
        ],
        servicos: [
            "Emergência Pediátrica 24h", "UTI Pediátrica (UTIP)",
            "Centro Cirúrgico Pediátrico", "Internação Pediátrica",
            "Neonatologia", "Diagnóstico por Imagem", "Ambulatório Pediátrico"
        ],
        faq: [
            {
                pergunta: "O Hospital Infantil JAC atende qual plano de saúde?",
                resposta: "O Hospital Infantil JAC atende beneficiários dos planos NotreDame Intermédica e Hapvida (Grupo Hapvida NotreDame Intermédica). A Avanti Corretora auxilia na contratação de planos com cobertura nesta unidade pediátrica."
            },
            {
                pergunta: "O Hospital Infantil JAC tem emergência 24 horas para crianças?",
                resposta: "Sim. O hospital possui emergência pediátrica funcionando 24 horas por dia, exclusivamente para atendimento de crianças e adolescentes de 0 a 17 anos."
            },
            {
                pergunta: "Até que idade o Hospital Infantil JAC atende?",
                resposta: "O Hospital Infantil JAC atende crianças e adolescentes de 0 a 17 anos em todas as modalidades: emergência, internação, cirurgia e UTI Pediátrica."
            },
            {
                pergunta: "Onde fica o Hospital Infantil JAC?",
                resposta: "O hospital está localizado na Estrada dos Três Rios, 610, bairro de Jacarepaguá, Zona Oeste do Rio de Janeiro — próximo ao Hospital Mulher ND (nº 542 da mesma estrada), formando um polo assistencial da rede na região."
            },
            {
                pergunta: "O Hospital Infantil JAC tem UTI Pediátrica?",
                resposta: "Sim. O hospital conta com UTI Pediátrica (UTIP) para atendimento de crianças em estado crítico ou em pós-operatório de cirurgias de alta complexidade."
            },
            {
                pergunta: "O Hospital Infantil JAC faz cirurgia pediátrica?",
                resposta: "Sim. O hospital possui Centro Cirúrgico especializado em procedimentos pediátricos, com equipe de cirurgiões pediátricos e anestesiologistas especializados no atendimento infantil."
            },
            {
                pergunta: "Qual plano cobre o Hospital Infantil JAC?",
                resposta: "Planos NotreDame Intermédica e Hapvida que incluam cobertura hospitalar na Zona Oeste do Rio de Janeiro. A Avanti Corretora compara todas as opções e indica o melhor plano para famílias com crianças."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Infantil JAC?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara planos NotreDame Intermédica com cobertura no Hospital Infantil JAC e orienta famílias na escolha do plano ideal para crianças."
            }
        ]
    },

    "tijutrauma": {
        bairro: "Tijuca",
        endereco: "Rua Antônio Basílio, 400",
        descricaoRica: `O Hospital Tijutrauma é uma unidade especializada em ortopedia e traumatologia localizada na Rua Antônio Basílio, 400, no bairro da Tijuca, Zona Norte do Rio de Janeiro. Referência regional em atendimento de urgências ortopédicas e traumatológicas, o hospital atende fraturas, luxações, lesões musculoesqueléticas e realiza cirurgias ortopédicas eletivas e de emergência para moradores da Tijuca, Grande Tijuca e adjacências.

A especialização em ortopedia e trauma permite ao hospital manter equipe dedicada e estrutura direcionada para procedimentos como artroplastias (prótese de joelho e quadril), artroscopias, osteossínteses (fixação de fraturas com placas, parafusos e hastes) e cirurgias de coluna. O hospital conta com Centro Cirúrgico, Unidade de Terapia Intensiva, emergência ortopédica 24 horas, internação e diagnóstico por imagem específico para ortopedia (radiografia, tomografia e ressonância magnética musculoesquelética).

Para quem precisa de ortopedia ou traumatologia na Zona Norte do Rio de Janeiro com cobertura por plano de saúde, o Tijutrauma é uma referência consolidada. A Avanti Corretora identifica as operadoras credenciadas nesta unidade especializada e orienta na contratação do plano ideal.`,
        especialidades: [
            "Ortopedia", "Traumatologia", "Cirurgia da Coluna",
            "Artroplastia (prótese de joelho e quadril)", "Artroscopia",
            "Medicina do Esporte", "Cirurgia da Mão", "Fisioterapia Ortopédica"
        ],
        servicos: [
            "Emergência Ortopédica 24h", "Centro Cirúrgico Ortopédico",
            "Terapia Intensiva", "Internação", "Diagnóstico por Imagem",
            "Fisioterapia", "Osteossíntese", "Artroplastia"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Tijutrauma?",
                resposta: "O Hospital Tijutrauma é credenciado com as principais operadoras de saúde que atuam na Zona Norte do Rio de Janeiro. A Avanti Corretora identifica quais planos garantem cobertura para ortopedia e traumatologia nesta unidade."
            },
            {
                pergunta: "O Tijutrauma tem emergência 24 horas?",
                resposta: "Sim. O hospital possui emergência ortopédica e traumatológica funcionando 24 horas por dia para atendimento de fraturas, luxações e lesões agudas do aparelho musculoesquelético."
            },
            {
                pergunta: "O Tijutrauma faz prótese de quadril e joelho?",
                resposta: "Sim. O hospital realiza artroplastias (prótese total e parcial de quadril e joelho), sendo referência em ortopedia na Zona Norte do Rio de Janeiro."
            },
            {
                pergunta: "O Tijutrauma faz artroscopia?",
                resposta: "Sim. O hospital realiza artroscopia de joelho, ombro e outras articulações, procedimento minimamente invasivo para diagnóstico e tratamento de lesões articulares."
            },
            {
                pergunta: "Onde fica o Hospital Tijutrauma?",
                resposta: "O Tijutrauma está localizado na Rua Antônio Basílio, 400, bairro da Tijuca, Zona Norte do Rio de Janeiro, de fácil acesso para moradores da Tijuca, Vila Isabel, Grajaú, Méier e adjacências."
            },
            {
                pergunta: "O Tijutrauma tem UTI?",
                resposta: "Sim. O hospital conta com Unidade de Terapia Intensiva para suporte pós-operatório de cirurgias ortopédicas de alta complexidade e atendimento de pacientes em estado crítico."
            },
            {
                pergunta: "O Tijutrauma faz cirurgia de coluna?",
                resposta: "Sim. O hospital realiza cirurgias de coluna vertebral, incluindo procedimentos para hérnia de disco, estenose, fraturas vertebrais e deformidades da coluna."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Tijutrauma?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara os planos com cobertura no Tijutrauma e orienta na contratação do plano ideal para ortopedia na Zona Norte do Rio."
            }
        ]
    },

    "maternidade-terezinha": {
        bairro: "São João de Meriti",
        endereco: "Rua Gessyr Gonçalves Fontes, 153",
        descricaoRica: `A Maternidade Santa Terezinha é uma referência no atendimento obstétrico e neonatal em São João de Meriti, localizada na Rua Gessyr Gonçalves Fontes, 153. O hospital é especializado no cuidado da gestante e do recém-nascido, atendendo partos normais e cesarianas, gestações de baixo e alto risco, e oferecendo suporte neonatal para recém-nascidos que necessitam de cuidados especializados. A maternidade é uma das principais referências para gestantes da Baixada Fluminense, região com grande demanda por serviços obstétricos de qualidade.

A estrutura da Maternidade Terezinha contempla Centro Obstétrico com salas de parto, UTI Neonatal, Unidade de Cuidados Intermediários Neonatais, quartos privativos mãe-bebê, internação obstétrica e equipe multidisciplinar com obstetras, neonatologistas, enfermeiros obstetras e equipe de apoio. O hospital atende as principais operadoras de saúde que atuam na Baixada Fluminense, sendo acessível para beneficiários de planos de diversas operadoras na região.

Para gestantes em São João de Meriti, Nova Iguaçu, Belford Roxo e municípios vizinhos que buscam plano de saúde com cobertura na Maternidade Terezinha, a Avanti Corretora oferece cotação gratuita e orienta sobre carências obstétricas, que são de 300 dias para procedimentos eletivos de parto.`,
        especialidades: [
            "Obstetrícia", "Neonatologia", "Ginecologia",
            "Maternidade", "Gestação de Alto Risco", "Pediatria Neonatal"
        ],
        servicos: [
            "Maternidade 24h", "UTI Neonatal", "Centro Obstétrico",
            "Internação Mãe e Bebê", "Parto Normal e Cesáreo",
            "Gestação de Alto Risco", "Cuidados Intermediários Neonatais"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem a Maternidade Terezinha em São João de Meriti?",
                resposta: "A Maternidade Terezinha é credenciada com as principais operadoras de saúde que atuam na Baixada Fluminense. A Avanti Corretora identifica quais planos disponíveis no seu orçamento garantem cobertura obstétrica nesta maternidade."
            },
            {
                pergunta: "A Maternidade Terezinha tem UTI Neonatal?",
                resposta: "Sim. A maternidade dispõe de UTI Neonatal para recém-nascidos prematuros ou com necessidade de cuidados intensivos, garantindo segurança para gestações de risco."
            },
            {
                pergunta: "A Maternidade Terezinha atende gestação de alto risco?",
                resposta: "Sim. A maternidade possui estrutura e equipe especializada para atendimento de gestações de alto risco, com obstetras, neonatologistas e UTI Neonatal disponíveis."
            },
            {
                pergunta: "Onde fica a Maternidade Terezinha?",
                resposta: "A Maternidade Terezinha está localizada na Rua Gessyr Gonçalves Fontes, 153, em São João de Meriti, Baixada Fluminense, atendendo gestantes de São João de Meriti, Nova Iguaçu, Belford Roxo e municípios vizinhos."
            },
            {
                pergunta: "Existe carência para parto na Maternidade Terezinha?",
                resposta: "Sim. Todos os planos de saúde têm carência de 300 dias para parto eletivo e procedimentos obstétricos. Em urgências obstétricas, não há carência. A Avanti Corretora orienta sobre o momento ideal para contratar o plano."
            },
            {
                pergunta: "A Maternidade Terezinha faz parto normal?",
                resposta: "Sim. A maternidade realiza partos normais e cesarianas, com equipe especializada para ambas as modalidades de parto."
            },
            {
                pergunta: "Qual operadora aceita a Maternidade Terezinha?",
                resposta: "A maternidade é credenciada por diversas operadoras na Baixada Fluminense. A Avanti Corretora verifica as opções disponíveis no seu município e perfil."
            },
            {
                pergunta: "Como contratar um plano aceito na Maternidade Terezinha?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara planos com cobertura na Maternidade Terezinha em São João de Meriti e orienta sobre carências e contratação gratuitamente."
            }
        ]
    },

    "intermedica-sao-goncalo": {
        bairro: "Zé Garoto",
        endereco: "Rua Coronel Serrado, 688",
        descricaoRica: `O Hospital Intermédica São Gonçalo é uma unidade da Rede NotreDame Intermédica (Grupo Hapvida NotreDame Intermédica) localizada na Rua Coronel Serrado, 688, bairro Zé Garoto, em São Gonçalo. O hospital atende beneficiários dos planos da operadora que necessitam de atendimento hospitalar em São Gonçalo e municípios vizinhos como Niterói, Itaboraí e Maricá. A unidade oferece atendimento de emergência, internação e procedimentos cirúrgicos para os conveniados da rede.

A estrutura hospitalar contempla Emergência 24 horas, Centro Cirúrgico, Unidade de Terapia Intensiva, internação clínica e cirúrgica, e diagnóstico por imagem. O hospital é voltado exclusivamente ao atendimento de beneficiários dos planos NotreDame Intermédica e Hapvida, sendo a principal referência hospitalar desta rede no município de São Gonçalo. Como parte do Grupo Hapvida NotreDame Intermédica — o maior grupo de saúde do Brasil — a unidade segue os protocolos padronizados da rede nacional.

Para moradores de São Gonçalo e Grande Niterói que possuem ou desejam contratar plano NotreDame Intermédica, o Hospital Intermédica São Gonçalo é a referência hospitalar local da rede. A Avanti Corretora orienta na comparação e contratação dos planos disponíveis nesta região.`,
        especialidades: [
            "Clínica Médica", "Cirurgia Geral", "Ortopedia", "Cardiologia",
            "Neurologia", "Ginecologia", "Obstetrícia", "Pediatria", "Urologia"
        ],
        servicos: [
            "Emergência 24h", "Centro Cirúrgico", "Terapia Intensiva",
            "Internação Clínica", "Internação Cirúrgica", "Diagnóstico por Imagem"
        ],
        faq: [
            {
                pergunta: "O Hospital Intermédica São Gonçalo atende qual plano?",
                resposta: "O Intermédica São Gonçalo atende exclusivamente beneficiários dos planos NotreDame Intermédica e Hapvida (Grupo Hapvida NotreDame Intermédica). A Avanti Corretora auxilia na contratação de planos com cobertura nesta unidade."
            },
            {
                pergunta: "O Hospital Intermédica São Gonçalo tem emergência 24h?",
                resposta: "Sim. O hospital dispõe de emergência 24 horas para beneficiários dos planos credenciados nesta unidade."
            },
            {
                pergunta: "Onde fica o Hospital Intermédica em São Gonçalo?",
                resposta: "O hospital está localizado na Rua Coronel Serrado, 688, bairro Zé Garoto, em São Gonçalo, com acesso para moradores de São Gonçalo e municípios vizinhos."
            },
            {
                pergunta: "O Intermédica São Gonçalo tem UTI?",
                resposta: "Sim. O hospital conta com Unidade de Terapia Intensiva para pacientes em estado crítico ou em pós-operatório de cirurgias de alta complexidade."
            },
            {
                pergunta: "O plano Hapvida cobre o Hospital Intermédica São Gonçalo?",
                resposta: "Sim. Com a fusão dos grupos Hapvida e NotreDame Intermédica, os beneficiários de ambas as marcas têm acesso às unidades da rede integrada, incluindo o Intermédica São Gonçalo. Verifique a cobertura específica do seu plano com a Avanti Corretora."
            },
            {
                pergunta: "O Intermédica São Gonçalo faz cirurgias?",
                resposta: "Sim. O hospital possui Centro Cirúrgico para procedimentos de média e alta complexidade para os beneficiários credenciados nos planos da rede."
            },
            {
                pergunta: "Quais especialidades têm no Hospital Intermédica São Gonçalo?",
                resposta: "O hospital oferece clínica médica, cirurgia geral, ortopedia, cardiologia, ginecologia, obstetrícia, pediatria, neurologia e urologia, entre outras especialidades para os conveniados da rede."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Intermédica São Gonçalo?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara planos NotreDame Intermédica disponíveis em São Gonçalo e municípios vizinhos, orientando na contratação gratuitamente."
            }
        ]
    },

    "prontobaby": {
        bairro: "Tijuca",
        endereco: "Rua Adolfo Mota, 81",
        descricaoRica: `O Hospital Prontobaby é o maior hospital pediátrico privado do Rio de Janeiro, localizado na Rua Adolfo Mota, 81, no bairro da Tijuca, Zona Norte da cidade. Especializado no atendimento exclusivo de crianças e adolescentes, o Prontobaby é acreditado pelo ONA Nível 3 — a mais alta certificação de qualidade hospitalar do sistema de acreditação brasileiro — sendo referência nacional em pediatria de alta complexidade. O hospital se destaca por abrigar o maior CTI Pediátrico privado do Rio de Janeiro, com capacidade para atender casos de extrema gravidade.

A estrutura do Prontobaby é inteiramente voltada ao paciente pediátrico: Emergência Pediátrica 24 horas, CTI Pediátrico (maior privado do Rio), Centro Cirúrgico Pediátrico, Internação Pediátrica, Neonatologia, UTI Neonatal, Berçário e ambulatório de especialidades pediátricas. Entre as especialidades disponíveis estão cardiologia pediátrica, neurologia pediátrica, oncologia pediátrica, pneumologia pediátrica, cirurgia pediátrica e neonatologia de alto risco. O ambiente hospitalar foi projetado com foco na humanização do atendimento infantil.

Para famílias com crianças que buscam um plano de saúde com cobertura no Prontobaby, a Avanti Corretora compara gratuitamente as operadoras credenciadas nesta referência em pediatria de alta complexidade da Zona Norte do Rio de Janeiro. O hospital aceita diversas operadoras nacionais em planos de segmento intermediário e superior.`,
        especialidades: [
            "Pediatria Geral", "Cardiologia Pediátrica", "Neurologia Pediátrica",
            "Oncologia Pediátrica", "Neonatologia", "Pneumologia Pediátrica",
            "Cirurgia Pediátrica", "Ortopedia Pediátrica", "Infectologia Pediátrica",
            "Endocrinologia Pediátrica", "Gastroenterologia Pediátrica", "Nefrologia Pediátrica"
        ],
        servicos: [
            "Emergência Pediátrica 24h", "CTI Pediátrico (maior privado do RJ)",
            "Centro Cirúrgico Pediátrico", "UTI Neonatal", "Berçário",
            "Internação Pediátrica", "Neonatologia", "Diagnóstico por Imagem",
            "Ambulatório de Especialidades Pediátricas"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Prontobaby?",
                resposta: "O Hospital Prontobaby é credenciado com as principais operadoras de saúde, incluindo Amil, Bradesco Saúde, Porto Seguro Saúde e SulAmérica, em planos de segmento intermediário e superior. A Avanti Corretora identifica o plano ideal para sua família com cobertura no Prontobaby."
            },
            {
                pergunta: "O Prontobaby tem emergência 24 horas para crianças?",
                resposta: "Sim. O Prontobaby possui emergência pediátrica funcionando 24 horas por dia, sete dias por semana, com atendimento exclusivo para crianças e adolescentes, referência em urgências pediátricas na Zona Norte do Rio."
            },
            {
                pergunta: "O Prontobaby tem o maior CTI Pediátrico do Rio?",
                resposta: "Sim. O Hospital Prontobaby abriga o maior CTI Pediátrico privado do Rio de Janeiro, com capacidade para atender crianças em estado crítico com toda a tecnologia necessária. O hospital é acreditado ONA Nível 3, o mais alto padrão de qualidade da acreditação brasileira."
            },
            {
                pergunta: "Até que idade o Prontobaby atende?",
                resposta: "O Prontobaby é especializado no atendimento de crianças e adolescentes, em geral até os 14 a 16 anos dependendo da especialidade. Para detalhes sobre faixas etárias específicas, consulte diretamente o hospital ou a Avanti Corretora."
            },
            {
                pergunta: "O Prontobaby é acreditado?",
                resposta: "Sim. O Hospital Prontobaby possui acreditação ONA Nível 3, o mais alto nível do sistema de acreditação hospitalar brasileiro, que certifica excelência em qualidade e segurança assistencial."
            },
            {
                pergunta: "O Prontobaby faz cirurgias em crianças?",
                resposta: "Sim. O hospital conta com Centro Cirúrgico Pediátrico especializado para procedimentos cirúrgicos em crianças de diferentes idades, com anestesiologistas e cirurgiões pediátricos especializados."
            },
            {
                pergunta: "O Prontobaby tem neonatologia?",
                resposta: "Sim. O hospital possui UTI Neonatal e Berçário para atendimento de recém-nascidos, incluindo prematuros e neonatos com necessidade de cuidados especializados."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Prontobaby?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara os planos com cobertura no Prontobaby na Tijuca, indica o mais adequado para famílias com crianças e cuida de toda a contratação sem custo."
            }
        ]
    },

    "icarai": {
        bairro: "Centro",
        endereco: "Rua Marquês do Paraná, 233",
        descricaoRica: `O Hospital Icaraí é uma das maiores e mais completas instituições hospitalares privadas de Niterói e do estado do Rio de Janeiro. Fundado em 2011 por médicos empreendedores, o hospital conta com 290 leitos e mais de 2.000 médicos cadastrados, realizando aproximadamente 15.000 cirurgias por ano nas mais diversas especialidades. Localizado na Rua Marquês do Paraná, 233, no centro de Niterói, o hospital é referência regional para moradores de Niterói, São Gonçalo, Maricá, Itaboraí e toda a Região Metropolitana Leste.

A estrutura do Hospital Icaraí destaca-se pela robusta área de Terapia Intensiva, com cinco CTIs e duas Unidades Coronarianas especializadas — adulta, pediátrica, pós-operatória e coronariana. O Centro Cirúrgico conta com 10 salas totalmente equipadas, duas com fluxo laminar para transplantes, e videoconferência para transmissão ao vivo de cirurgias. O hospital é credenciado pelo Sistema Nacional de Transplantes para Transplante Renal e possui Unidade de Transplante de Medula Óssea com leitos com filtro HEPA e pressão negativa. O serviço de neurologia opera com o protocolo Iniciativa Angels para tratamento de AVC.

O Hospital Icaraí é certificado pela metodologia Qmentum canadense, reconhecimento internacional que atesta os mais rigorosos padrões de segurança e qualidade assistencial. A Avanti Corretora compara gratuitamente os planos disponíveis com cobertura no Hospital Icaraí, um dos mais completos de Niterói.`,
        especialidades: [
            "Cardiologia e Cirurgia Cardíaca", "Neurologia e Neurocirurgia (Protocolo AVC)",
            "Oncologia", "Transplante Renal", "Transplante de Medula Óssea",
            "Ortopedia e Traumatologia", "Cirurgia Bariátrica", "Hematologia",
            "Pediatria", "Gastroenterologia", "Cirurgia Vascular",
            "Coloproctologia", "Urologia", "Endocrinologia", "Cirurgia Plástica"
        ],
        servicos: [
            "Emergência Adulto 24h (Clínica, Cardiologia, Ortopedia)", "Emergência Pediátrica",
            "5 CTIs (Adulto, Pediátrica, Pós-Op, 2 Coronarianas)", "Centro Cirúrgico (10 salas)",
            "Hemodinâmica", "Transplante Renal", "Transplante de Medula Óssea",
            "Unidade Oncológica", "Diagnóstico por Imagem Completo", "Day Clinic"
        ],
        faq: [
            {
                pergunta: "Quais planos de saúde são aceitos no Hospital Icaraí?",
                resposta: "O Hospital Icaraí aceita uma ampla lista de operadoras, incluindo Unimed Ferj, Unimed Leste Fluminense, Amil, Bradesco Saúde, SulAmérica, Porto Seguro, Care Plus, CASSI, Saúde Petrobras e outras. A Avanti Corretora confirma a cobertura e orienta na contratação."
            },
            {
                pergunta: "O Hospital Icaraí tem emergência 24 horas?",
                resposta: "Sim. O hospital conta com Emergência Adulto 24h com Clínica Médica, Cardiologia, Ortopedia e Radiologia de plantão, além de Emergência Pediátrica, com sala de observação e laboratório de apoio."
            },
            {
                pergunta: "O Hospital Icaraí realiza transplantes?",
                resposta: "Sim. O hospital é credenciado pelo Sistema Nacional de Transplantes para Transplante Renal e possui Unidade de Transplante de Medula Óssea com leitos com filtro HEPA e pressão negativa para oncohematologia de alta complexidade."
            },
            {
                pergunta: "O Hospital Icaraí é acreditado internacionalmente?",
                resposta: "Sim. O hospital é certificado pela metodologia Qmentum (canadense), integrado a um seleto grupo de hospitais com acreditação internacional no Brasil. Também integra a Iniciativa Angels para tratamento de AVC."
            },
            {
                pergunta: "O Hospital Icaraí tem quantos leitos e salas cirúrgicas?",
                resposta: "O hospital conta com 290 leitos, 10 salas cirúrgicas (2 com fluxo laminar para transplantes), 5 CTIs e 2 Unidades Coronarianas, realizando cerca de 15.000 cirurgias por ano."
            },
            {
                pergunta: "Onde fica o Hospital Icaraí?",
                resposta: "O Hospital Icaraí está na Rua Marquês do Paraná, 233, centro de Niterói, com fácil acesso para moradores de Niterói, São Gonçalo, Maricá e municípios vizinhos."
            },
            {
                pergunta: "O Hospital Icaraí tem UTI Pediátrica?",
                resposta: "Sim. Entre os cinco CTIs do hospital há uma UTI Pediátrica dedicada, além de Emergência Pediátrica com equipe especializada para atendimento infantil em estado crítico."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Icaraí?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara os planos das operadoras com cobertura no Hospital Icaraí em Niterói e orienta na contratação gratuitamente."
            }
        ]
    },

    "vitoria": {
        bairro: "Barra da Tijuca",
        endereco: "Rua Barros de Alarcão, 1025",
        descricaoRica: `O Hospital Vitória é uma instituição hospitalar privada de referência na Barra da Tijuca, Rio de Janeiro, reconhecida pelo atendimento de alta complexidade e infraestrutura moderna voltada ao cuidado integral do paciente. Situado na Zona Oeste carioca, o hospital serve moradores da Barra da Tijuca, Recreio dos Bandeirantes, Jacarepaguá e municípios vizinhos, oferecendo um padrão assistencial completo para a crescente população dessa região.

O hospital dispõe de estrutura para internações clínicas e cirúrgicas, com Centro Cirúrgico equipado com tecnologia de ponta, UTI Adulta e Pediátrica, Pronto-Socorro 24 horas, hemodinâmica, Centro de Diagnóstico por Imagem e laboratório. A equipe médica multidisciplinar cobre as principais especialidades, garantindo assistência integral desde a admissão até a alta hospitalar, com forte atuação em cardiologia, ortopedia, oncologia e neurologia.

Como hospital independente, o Hospital Vitória mantém convênios com as principais operadoras de saúde do Rio de Janeiro. A Avanti Corretora compara gratuitamente os planos com cobertura no Hospital Vitória, identificando o plano de melhor custo-benefício para moradores da Zona Oeste.`,
        especialidades: [
            "Cardiologia", "Cirurgia Geral", "Ortopedia e Traumatologia",
            "Pediatria", "Neurologia e Neurocirurgia", "Oncologia",
            "Gastroenterologia", "Urologia", "Ginecologia",
            "Pneumologia", "Clínica Médica", "Hemodinâmica"
        ],
        servicos: [
            "Pronto-Socorro 24h (Adulto e Pediátrico)", "UTI Adulto", "UTI Pediátrica",
            "Centro Cirúrgico", "Hemodinâmica", "Centro de Diagnóstico por Imagem",
            "Laboratório", "Internação Clínica e Cirúrgica", "Endoscopia"
        ],
        faq: [
            {
                pergunta: "Quais planos de saúde cobrem o Hospital Vitória?",
                resposta: "O Hospital Vitória é credenciado pelas principais operadoras do Rio de Janeiro, incluindo Amil, Bradesco Saúde, SulAmérica e outras. A Avanti Corretora verifica a cobertura específica e compara opções na Barra da Tijuca."
            },
            {
                pergunta: "O Hospital Vitória tem emergência 24 horas?",
                resposta: "Sim. O hospital opera com Pronto-Socorro 24 horas para adultos e crianças, com equipe especializada para atender desde casos leves até emergências de alta complexidade."
            },
            {
                pergunta: "O Hospital Vitória tem UTI Pediátrica?",
                resposta: "Sim. O hospital dispõe de UTI Pediátrica para atendimento de crianças em estado crítico, além de Pronto-Socorro Pediátrico com pediatras de plantão."
            },
            {
                pergunta: "O Hospital Vitória faz hemodinâmica?",
                resposta: "Sim. O hospital possui serviço de hemodinâmica para procedimentos cardiológicos intervencionistas como cateterismo, angioplastia e outros procedimentos endovasculares."
            },
            {
                pergunta: "Onde fica o Hospital Vitória na Barra da Tijuca?",
                resposta: "O Hospital Vitória está na Rua Barros de Alarcão, 1025, Barra da Tijuca, com acesso pela Av. das Américas e fácil acesso para moradores da Barra, Recreio e Jacarepaguá."
            },
            {
                pergunta: "O Hospital Vitória faz oncologia?",
                resposta: "Sim. O hospital possui serviço de oncologia com suporte diagnóstico e terapêutico, sendo referência em tratamento de câncer na Zona Oeste do Rio de Janeiro."
            },
            {
                pergunta: "Qual a diferença entre os planos que cobrem o Hospital Vitória?",
                resposta: "Os planos variam em cobertura, acomodação, coparticipação e rede credenciada. A Avanti Corretora compara todas as opções e indica o melhor custo-benefício para cobertura no Hospital Vitória."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Vitória?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara os planos com cobertura no Hospital Vitória na Barra da Tijuca e cuida da contratação gratuitamente."
            }
        ]
    },

    "badim": {
        bairro: "Tijuca",
        endereco: "Rua Visconde de Santa Isabel, 22",
        descricaoRica: `O Hospital Badim é uma instituição hospitalar privada consolidada no bairro da Tijuca, Zona Norte do Rio de Janeiro, reconhecida pela tripla emergência adulta 24 horas nas modalidades clínica, cirúrgica e ortopédica. Com décadas de história servindo à comunidade da Tijuca e adjacências, o hospital é referência em pronto-atendimento e internação para moradores da Tijuca, Vila Isabel, Andaraí, Grajaú e Maracanã.

O hospital opera com estrutura dedicada à emergência e internação, incluindo CTI (Centro de Terapia Intensiva), salas cirúrgicas, serviço de hemodinâmica, ambulatório de especialidades e fisioterapia respiratória. O Badim adotou protocolos humanizados para o manejo da dor e aprimorou sua terapia nutricional enteral, registrando indicadores de qualidade elevados. A unidade também recebeu certificado por práticas sustentáveis, demonstrando compromisso com boas práticas institucionais.

Para moradores da Zona Norte do Rio que buscam plano com cobertura no Hospital Badim, a Avanti Corretora oferece cotação gratuita e comparação entre as operadoras credenciadas. O hospital é uma das referências em emergência e cirurgia na Tijuca e Grande Tijuca.`,
        especialidades: [
            "Clínica Médica", "Cirurgia Geral", "Ortopedia e Traumatologia",
            "Cardiologia", "Hemodinâmica", "Neurologia",
            "Fisiatria", "Endocrinologia", "Gastroenterologia",
            "Urologia", "Cirurgia de Coluna", "Pneumologia"
        ],
        servicos: [
            "Emergência Clínica Adulto 24h", "Emergência Cirúrgica 24h", "Emergência Ortopédica 24h",
            "CTI", "Centro Cirúrgico", "Hemodinâmica",
            "Internação Clínica e Cirúrgica", "Fisioterapia Respiratória", "Diagnóstico por Imagem"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Badim?",
                resposta: "O Hospital Badim aceita diversas operadoras de saúde do Rio de Janeiro. A Avanti Corretora identifica quais planos no seu orçamento garantem cobertura nesta referência da Tijuca."
            },
            {
                pergunta: "O Hospital Badim tem emergência 24 horas?",
                resposta: "Sim. O Badim é conhecido pela tripla emergência adulta 24h: clínica, cirúrgica e ortopédica — funcionando todos os dias, incluindo feriados. É um dos principais prontos-socorros da Zona Norte do Rio."
            },
            {
                pergunta: "O Hospital Badim tem CTI?",
                resposta: "Sim. O hospital conta com CTI para atendimento de pacientes em estado crítico ou em pós-operatório de cirurgias de alta complexidade."
            },
            {
                pergunta: "O Hospital Badim faz hemodinâmica?",
                resposta: "Sim. O Badim possui serviço de hemodinâmica para cateterismo cardíaco, angioplastia e outros procedimentos cardiológicos intervencionistas."
            },
            {
                pergunta: "Onde fica o Hospital Badim?",
                resposta: "O Badim está na Rua Visconde de Santa Isabel, 22, Tijuca, Zona Norte do Rio — com fácil acesso para moradores da Tijuca, Vila Isabel, Andaraí, Grajaú e Maracanã."
            },
            {
                pergunta: "O Hospital Badim faz cirurgia de coluna?",
                resposta: "Sim. O hospital realiza cirurgias de coluna vertebral entre seus procedimentos cirúrgicos de alta complexidade, com CTI disponível para suporte pós-operatório."
            },
            {
                pergunta: "O que diferencia o Hospital Badim na Tijuca?",
                resposta: "O Badim destaca-se pela tripla emergência adulta 24h (clínica, cirúrgica e ortopédica), pela hemodinâmica e pelos protocolos humanizados de manejo da dor. É referência consolidada na Zona Norte há décadas."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Badim?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara os planos com cobertura no Hospital Badim na Tijuca e cuida da contratação gratuitamente."
            }
        ]
    },

    "pasteur": {
        bairro: "Urca",
        endereco: "Avenida Pasteur, 72",
        descricaoRica: `O Hospital Pasteur é uma instituição hospitalar privada com longa trajetória no Rio de Janeiro, localizado na Avenida Pasteur, no bairro da Urca, Zona Sul da cidade. A unidade ocupa posição singular na paisagem hospitalar carioca por estar encravada em um dos bairros mais tranquilos e seguros do Rio, próximo ao Pão de Açúcar e à Enseada de Botafogo, com fácil acesso para moradores da Urca, Botafogo, Flamengo e adjacências.

O hospital oferece estrutura para internações clínicas e cirúrgicas, com Pronto-Socorro 24 horas, Centro Cirúrgico, UTI Adulta, laboratório e ambulatório de especialidades. A localização exclusiva na Urca contribui para um ambiente hospitalar diferenciado, com menor movimentação e maior foco no cuidado individualizado. O Pasteur combina tradição assistencial com estrutura moderna para as principais demandas clínicas e cirúrgicas da região sul do Rio de Janeiro.

Como hospital independente, o Pasteur mantém credenciamento com diversas operadoras nacionais. A Avanti Corretora compara gratuitamente os planos com cobertura no Hospital Pasteur na Urca.`,
        especialidades: [
            "Clínica Médica", "Cirurgia Geral", "Ortopedia e Traumatologia",
            "Cardiologia", "Neurologia", "Ginecologia",
            "Urologia", "Gastroenterologia", "Pneumologia",
            "Dermatologia", "Endocrinologia"
        ],
        servicos: [
            "Pronto-Socorro 24h", "UTI Adulto", "Centro Cirúrgico",
            "Internação Clínica e Cirúrgica", "Ambulatório de Especialidades",
            "Diagnóstico por Imagem", "Laboratório", "Fisioterapia"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Pasteur?",
                resposta: "O Hospital Pasteur aceita diversas operadoras. A Avanti Corretora identifica as melhores opções com cobertura nesta unidade na Urca e orienta na contratação gratuitamente."
            },
            {
                pergunta: "O Hospital Pasteur tem emergência 24 horas?",
                resposta: "Sim. O Pasteur conta com Pronto-Socorro 24 horas para urgências clínicas e cirúrgicas de adultos, funcionando todos os dias da semana."
            },
            {
                pergunta: "Onde fica o Hospital Pasteur?",
                resposta: "O hospital está na Avenida Pasteur, 72, no bairro da Urca, Zona Sul do Rio de Janeiro, próximo ao Pão de Açúcar e com fácil acesso por transporte público."
            },
            {
                pergunta: "O Hospital Pasteur tem UTI?",
                resposta: "Sim. O hospital dispõe de UTI Adulta para pacientes em estado crítico ou pós-operatório de alta complexidade."
            },
            {
                pergunta: "O Hospital Pasteur faz cirurgias eletivas?",
                resposta: "Sim. O Pasteur conta com Centro Cirúrgico para procedimentos eletivos em diversas especialidades, com agendamento mediante indicação médica e autorização do plano."
            },
            {
                pergunta: "O que diferencia o Hospital Pasteur?",
                resposta: "A localização no bairro da Urca, um dos mais tranquilos e seguros do Rio, oferece ambiente diferenciado com menor movimentação e atendimento mais personalizado. O hospital tem longa tradição no cuidado à saúde da comunidade local."
            },
            {
                pergunta: "Quais especialidades têm no Hospital Pasteur?",
                resposta: "O hospital oferece Clínica Médica, Cirurgia Geral, Ortopedia, Cardiologia, Neurologia, Ginecologia, Urologia, Gastroenterologia, Pneumologia e outras especialidades em regime ambulatorial e de internação."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Pasteur?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe indica os planos com cobertura no Hospital Pasteur na Urca e cuida da contratação gratuitamente."
            }
        ]
    },

    "sao-lucas": {
        bairro: "Copacabana",
        descricaoRica: `O Hospital São Lucas Copacabana é uma instituição hospitalar privada tradicional no coração de Copacabana, um dos bairros mais densos e populosos do Rio de Janeiro. Atendendo há décadas a população de Copacabana, Leme, Ipanema e adjacências, o hospital é uma referência de assistência médica de qualidade na Zona Sul carioca, especialmente para a numerosa população idosa do bairro.

A unidade oferece estrutura para atendimento de urgência, internação clínica e cirúrgica, com Centro Cirúrgico, UTI Adulta e amplo portfólio de especialidades médicas. Por sua localização em Copacabana, bairro com alta concentração de idosos e moradores de longa data, o hospital é especialmente adequado para demandas relacionadas à saúde do idoso, cardiologia, ortopedia e clínica médica. O serviço de geriatria é um diferencial relevante para a demografia local.

Para quem mora em Copacabana ou na Zona Sul do Rio e busca um plano com cobertura no Hospital São Lucas, a Avanti Corretora compara gratuitamente os planos disponíveis. Como hospital independente, o São Lucas mantém credenciamento com as principais operadoras do mercado carioca.`,
        especialidades: [
            "Clínica Médica", "Geriatria", "Cardiologia",
            "Ortopedia e Traumatologia", "Cirurgia Geral", "Neurologia",
            "Endocrinologia", "Gastroenterologia", "Pneumologia",
            "Urologia", "Ginecologia", "Reumatologia"
        ],
        servicos: [
            "Pronto-Socorro 24h", "UTI Adulto", "Centro Cirúrgico",
            "Internação", "Geriatria", "Ambulatório de Especialidades",
            "Diagnóstico por Imagem", "Laboratório"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital São Lucas Copacabana?",
                resposta: "O Hospital São Lucas é credenciado pelas principais operadoras do Rio de Janeiro. A Avanti Corretora confirma quais planos cobrem a unidade e orienta na escolha mais adequada ao seu perfil."
            },
            {
                pergunta: "O Hospital São Lucas tem emergência 24 horas?",
                resposta: "Sim. O hospital opera com Pronto-Socorro 24 horas para urgências clínicas e cirúrgicas, funcionando todos os dias da semana."
            },
            {
                pergunta: "O Hospital São Lucas tem geriatria?",
                resposta: "Sim. Por atender população com alta concentração de idosos em Copacabana, o hospital mantém serviço de geriatria com equipe experiente no cuidado integral do paciente idoso."
            },
            {
                pergunta: "Onde fica o Hospital São Lucas Copacabana?",
                resposta: "O hospital está em Copacabana, Zona Sul do Rio de Janeiro, com fácil acesso por metrô (Estação Cardeal Arcoverde), ônibus e carro."
            },
            {
                pergunta: "O Hospital São Lucas tem UTI?",
                resposta: "Sim. O hospital dispõe de UTI Adulta para pacientes em estado crítico ou em pós-operatório de alta complexidade."
            },
            {
                pergunta: "O Hospital São Lucas faz cirurgias?",
                resposta: "Sim. O hospital conta com Centro Cirúrgico para procedimentos eletivos e de urgência em diversas especialidades."
            },
            {
                pergunta: "O que diferencia o Hospital São Lucas em Copacabana?",
                resposta: "O hospital destaca-se pela longa tradição de atendimento à população da Zona Sul e pelo serviço de geriatria especializado — diferencial relevante para Copacabana, bairro com alta proporção de idosos."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital São Lucas?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara os planos com cobertura no São Lucas em Copacabana e cuida da contratação gratuitamente."
            }
        ]
    },

    "sao-goncalo": {
        bairro: "Centro",
        endereco: "Rua Coronel Moreira César, 138",
        descricaoRica: `O Hospital São Gonçalo é uma instituição hospitalar privada de referência no município de São Gonçalo, o segundo maior em população do estado do Rio de Janeiro, com mais de 1 milhão de habitantes. Localizado no centro do município, na Rua Coronel Moreira César, 138, o hospital é uma das principais opções de assistência médica de qualidade para a vasta população gonçalense e para moradores de municípios vizinhos como Itaboraí, Maricá e Niterói.

A unidade oferece estrutura completa para emergências 24 horas, internações clínicas e cirúrgicas, UTI Adulta, Centro Cirúrgico e ampla gama de especialidades médicas, incluindo maternidade e equipe de obstetrícia. Por ser um dos poucos hospitais privados de referência em São Gonçalo, a unidade desempenha papel crucial no acesso à saúde privada de qualidade em uma região com alta densidade populacional. O hospital mantém credenciamento com diversas operadoras, incluindo Unimed Leste Fluminense.

Para moradores de São Gonçalo que buscam plano com cobertura no Hospital São Gonçalo, a Avanti Corretora compara gratuitamente as operadoras disponíveis na região leste fluminense.`,
        especialidades: [
            "Clínica Médica", "Cirurgia Geral", "Pediatria",
            "Ortopedia e Traumatologia", "Ginecologia e Obstetrícia", "Cardiologia",
            "Neurologia", "Gastroenterologia", "Pneumologia",
            "Urologia", "Infectologia", "Endocrinologia"
        ],
        servicos: [
            "Pronto-Socorro Adulto e Pediátrico 24h", "UTI Adulto", "Centro Cirúrgico",
            "Maternidade", "Internação Clínica e Cirúrgica",
            "Diagnóstico por Imagem", "Laboratório", "Fisioterapia"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital São Gonçalo?",
                resposta: "O Hospital São Gonçalo é credenciado por diversas operadoras, incluindo Unimed Leste Fluminense, Bradesco Saúde, SulAmérica e outras. A Avanti Corretora confirma quais planos disponíveis em São Gonçalo cobrem esta unidade."
            },
            {
                pergunta: "O Hospital São Gonçalo tem emergência 24 horas?",
                resposta: "Sim. O hospital conta com Pronto-Socorro 24 horas para adultos e crianças, com equipe especializada para urgência e emergência em todas as especialidades disponíveis."
            },
            {
                pergunta: "O Hospital São Gonçalo tem maternidade?",
                resposta: "Sim. O hospital conta com maternidade e equipe de ginecologia e obstetrícia para pré-natal, parto normal e cesariana, servindo gestantes de São Gonçalo e região."
            },
            {
                pergunta: "Onde fica o Hospital São Gonçalo?",
                resposta: "O hospital está na Rua Coronel Moreira César, 138, centro de São Gonçalo, com acesso para moradores de toda a cidade e municípios vizinhos como Niterói, Itaboraí e Maricá."
            },
            {
                pergunta: "O Hospital São Gonçalo tem UTI?",
                resposta: "Sim. O hospital dispõe de UTI Adulta para pacientes em estado crítico ou em pós-operatório de alta complexidade."
            },
            {
                pergunta: "O que diferencia o Hospital São Gonçalo?",
                resposta: "O hospital é uma das principais referências de assistência privada completa em São Gonçalo, segundo maior município do Rio. Sua localização central e o portfólio completo de especialidades tornam-no a principal opção local sem necessidade de deslocamento até Niterói."
            },
            {
                pergunta: "Qual plano tem o melhor custo-benefício para o Hospital São Gonçalo?",
                resposta: "Depende do perfil. A Avanti Corretora analisa todas as operadoras com cobertura no Hospital São Gonçalo e indica o plano mais adequado ao seu orçamento e necessidade."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital São Gonçalo?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara os planos com cobertura no Hospital São Gonçalo e cuida da contratação gratuitamente."
            }
        ]
    },

    "mario-lioni": {
        bairro: "Centro",
        endereco: "Rua Doutor Mário Lioni, s/n",
        descricaoRica: `O Hospital de Clínicas Mário Lioni é a principal unidade hospitalar da Amil na Baixada Fluminense, situado em Duque de Caxias. Como hospital próprio da operadora Amil, o Mário Lioni é referência regional em assistência de média e alta complexidade para a população de Duque de Caxias e municípios adjacentes como São João de Meriti, Belford Roxo e Nova Iguaçu — atendendo uma região com mais de 900 mil habitantes.

A unidade oferece Pronto-Socorro 24 horas para adultos e crianças, Centro Cirúrgico, UTI Adulta, maternidade, leitos de internação clínica e cirúrgica e amplo portfólio de especialidades. Por ser hospital próprio da Amil, o Mário Lioni oferece integração direta com a operadora, facilitando autorizações e reduzindo burocracia para beneficiários. O hospital tem papel estratégico no acesso à saúde de qualidade na Baixada Fluminense, região historicamente carente de serviços hospitalares privados de alta complexidade.

Para beneficiários de planos Amil em Duque de Caxias e municípios da Baixada Fluminense, a Avanti Corretora orienta na contratação dos planos Amil disponíveis na região com cobertura nesta unidade.`,
        especialidades: [
            "Clínica Médica", "Cirurgia Geral", "Pediatria",
            "Ortopedia e Traumatologia", "Ginecologia e Obstetrícia", "Cardiologia",
            "Neurologia", "Oncologia", "Gastroenterologia",
            "Pneumologia", "Nefrologia", "Urologia"
        ],
        servicos: [
            "Pronto-Socorro Adulto e Pediátrico 24h", "UTI Adulto", "Centro Cirúrgico",
            "Maternidade", "Oncologia", "Internação Clínica e Cirúrgica",
            "Diagnóstico por Imagem", "Laboratório", "Farmácia Hospitalar"
        ],
        faq: [
            {
                pergunta: "Quais planos Amil cobrem o Hospital Mário Lioni?",
                resposta: "O Hospital Mário Lioni é um hospital próprio da Amil, disponível nos planos Amil com cobertura na Baixada Fluminense. A Avanti Corretora verifica a cobertura específica e compara os planos disponíveis na região."
            },
            {
                pergunta: "O Hospital Mário Lioni tem emergência 24 horas?",
                resposta: "Sim. O hospital conta com Pronto-Socorro para adultos e crianças funcionando 24 horas por dia, todos os dias. É o principal serviço de emergência da rede Amil na Baixada Fluminense."
            },
            {
                pergunta: "O Hospital Mário Lioni tem maternidade?",
                resposta: "Sim. O hospital conta com maternidade e equipe de ginecologia e obstetrícia para pré-natal, parto normal e cesariana, servindo gestantes de Duque de Caxias e região."
            },
            {
                pergunta: "Onde fica o Hospital Mário Lioni?",
                resposta: "O Mário Lioni está na Rua Doutor Mário Lioni, centro de Duque de Caxias, Baixada Fluminense, com acesso para moradores de Duque de Caxias, São João de Meriti, Belford Roxo e Nova Iguaçu."
            },
            {
                pergunta: "O Hospital Mário Lioni tem oncologia?",
                resposta: "Sim. O hospital dispõe de serviço de oncologia para beneficiários Amil, com diagnóstico e tratamento integrado à rede da operadora."
            },
            {
                pergunta: "O que diferencia o Hospital Mário Lioni na Baixada Fluminense?",
                resposta: "Por ser hospital próprio da Amil, o Mário Lioni oferece integração direta com a operadora, agilizando autorizações e reduzindo burocracia. É a principal referência da rede Amil na Baixada Fluminense para uma região de mais de 900 mil habitantes."
            },
            {
                pergunta: "Qual plano Amil dá acesso ao Hospital Mário Lioni?",
                resposta: "Os planos Amil com cobertura na Baixada Fluminense incluem o Hospital Mário Lioni. A Avanti Corretora indica o plano com melhor custo-benefício para seu perfil."
            },
            {
                pergunta: "Como contratar um plano Amil aceito no Mário Lioni?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Somos parceiros Amil e ajudamos na contratação de planos com acesso ao Hospital Mário Lioni em Duque de Caxias."
            }
        ]
    },

    "amil-espaco-saude-cg": {
        bairro: "Campo Grande",
        endereco: "Estrada do Mendanha, 720",
        descricaoRica: `O Amil Espaço Saúde Campo Grande é uma unidade ambulatorial e de pronto-atendimento da Amil localizada na Estrada do Mendanha, 720, em Campo Grande, Zona Oeste do Rio de Janeiro. A unidade foi concebida para oferecer acesso ágil e conveniente aos serviços de saúde para beneficiários Amil da Zona Oeste, reduzindo a necessidade de deslocamento até unidades mais centrais.

O espaço reúne consultórios médicos com múltiplas especialidades, serviços de diagnóstico por imagem, laboratório, farmácia e pronto-atendimento, funcionando como hub de saúde integrado para a comunidade de Campo Grande e adjacências — Realengo, Bangu, Santíssimo e Senador Camará. A proposta do Amil Espaço Saúde é oferecer conveniência com qualidade assistencial: consulta, exame e retirada de medicamentos no mesmo local.

Para beneficiários Amil que moram na Zona Oeste do Rio de Janeiro, o Espaço Saúde Campo Grande é uma referência estratégica de atenção ambulatorial. A Avanti Corretora orienta na contratação dos planos Amil disponíveis em Campo Grande com cobertura nesta unidade.`,
        especialidades: [
            "Clínica Médica", "Pediatria", "Ginecologia",
            "Cardiologia", "Dermatologia", "Ortopedia",
            "Otorrinolaringologia", "Oftalmologia", "Neurologia",
            "Endocrinologia", "Psiquiatria"
        ],
        servicos: [
            "Pronto-Atendimento Adulto e Pediátrico", "Consultórios Multiespecialidades",
            "Diagnóstico por Imagem", "Laboratório", "Farmácia",
            "Vacinação", "Agendamento Online"
        ],
        faq: [
            {
                pergunta: "O Amil Espaço Saúde Campo Grande atende qual plano?",
                resposta: "O Amil Espaço Saúde atende beneficiários de planos Amil com cobertura na Zona Oeste do Rio de Janeiro. A Avanti Corretora verifica a cobertura e compara as opções de planos disponíveis."
            },
            {
                pergunta: "O Amil Espaço Saúde tem pronto-atendimento?",
                resposta: "Sim. A unidade conta com pronto-atendimento para adultos e crianças para casos de baixa e média complexidade. Emergências graves devem ser atendidas em unidade hospitalar completa da rede Amil."
            },
            {
                pergunta: "Onde fica o Amil Espaço Saúde Campo Grande?",
                resposta: "A unidade está na Estrada do Mendanha, 720, Campo Grande, Zona Oeste do Rio de Janeiro, atendendo moradores de Campo Grande, Realengo, Bangu, Santíssimo e adjacências."
            },
            {
                pergunta: "O Amil Espaço Saúde tem exames de imagem?",
                resposta: "Sim. A unidade conta com serviço de diagnóstico por imagem. A disponibilidade de exames específicos deve ser confirmada junto à unidade ou pelo aplicativo Amil."
            },
            {
                pergunta: "Quais especialidades têm no Amil Espaço Saúde Campo Grande?",
                resposta: "A unidade oferece Clínica Médica, Pediatria, Ginecologia, Cardiologia, Dermatologia, Ortopedia, Otorrinolaringologia, Oftalmologia, Neurologia e outras em consultórios agendados e pronto-atendimento."
            },
            {
                pergunta: "O que diferencia o Amil Espaço Saúde de um hospital?",
                resposta: "O Espaço Saúde é um modelo de atenção ambulatorial integrado, ideal para consultas, exames e pronto-atendimento de baixa e média complexidade. Não substitui um hospital completo para internações e cirurgias."
            },
            {
                pergunta: "Como agendar no Amil Espaço Saúde Campo Grande?",
                resposta: "O agendamento pode ser feito pelo aplicativo Amil, site da operadora ou por telefone. Beneficiários devem apresentar a carteirinha do plano no atendimento."
            },
            {
                pergunta: "Como contratar um plano Amil com acesso ao Espaço Saúde Campo Grande?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Somos parceiros Amil e orientamos na contratação do plano mais adequado com cobertura no Espaço Saúde Campo Grande e nas demais unidades Amil na Zona Oeste."
            }
        ]
    },

    "unimed-barra": {
        bairro: "Barra da Tijuca",
        endereco: "Avenida Ayrton Senna, 2550",
        descricaoRica: `O Hospital Unimed Barra da Tijuca é a principal unidade hospitalar da rede Unimed Ferj no Rio de Janeiro, localizado na Avenida Ayrton Senna, 2550, na Barra da Tijuca. Com 189 leitos, 11 salas de cirurgia convencionais, uma sala de cirurgia híbrida e uma sala de hemodinâmica, o hospital se destaca pela infraestrutura assistencial de alto padrão e pelo atendimento humanizado.

A unidade dispõe de UTI para adultos, Unidade Semi-Intensiva, unidades especializadas para Transplante de Medula Óssea (alogênico aparentado e não aparentado), Transplante Renal, Transplante de Tecidos Ósseos, Unidade Oncológica com CTI e Unidade Pediátrica com leitos de UTI. O Centro de Tratamento do Câncer (CTC) é integrado ao complexo. O parque de imagens contempla ressonância magnética, tomografia, mamografia digital e medicina nuclear (SPECT).

O hospital possui certificação ONA Nível 3 (Excelência) e Certificado Bronze no Selo ESG Unimed 2024. É referência para beneficiários dos planos Unimed Ferj e Unimed Intercâmbio, sendo uma das unidades mais completas da Zona Oeste do Rio. A Avanti Corretora orienta na contratação de planos Unimed com cobertura nesta unidade.`,
        especialidades: [
            "Cardiologia", "Oncologia", "Cirurgia Robótica",
            "Transplante de Medula Óssea", "Transplante Renal", "Cirurgia Cardíaca",
            "Neurocirurgia", "Ortopedia", "Pediatria",
            "Hematologia", "Gastroenterologia", "Pneumologia",
            "Nefrologia", "Cirurgia Torácica", "Medicina Nuclear", "Infectologia"
        ],
        servicos: [
            "UTI Adulto", "Unidade Semi-Intensiva",
            "Centro Cirúrgico (11 salas convencionais + 1 sala híbrida)",
            "Hemodinâmica", "Centro de Tratamento do Câncer (CTC)",
            "Transplante de Medula Óssea", "Transplante Renal",
            "Unidade Pediátrica com UTI", "Medicina Nuclear (SPECT)",
            "Ressonância Magnética", "Tomografia"
        ],
        faq: [
            {
                pergunta: "O Hospital Unimed Barra atende qual plano?",
                resposta: "O Hospital Unimed Barra atende prioritariamente beneficiários dos planos Unimed Ferj e Unimed Intercâmbio. A Avanti Corretora orienta na contratação de planos Unimed com acesso a esta unidade na Barra da Tijuca."
            },
            {
                pergunta: "O Hospital Unimed Barra faz transplantes?",
                resposta: "Sim. O hospital realiza Transplante de Medula Óssea (alogênico aparentado e não aparentado), Transplante Renal e Transplante de Tecidos Ósseos, sendo uma das poucas unidades na Zona Oeste do Rio com essa capacidade."
            },
            {
                pergunta: "O Hospital Unimed Barra é acreditado?",
                resposta: "Sim. O hospital possui certificação ONA Nível 3 (Excelência), a mais alta distinção da Organização Nacional de Acreditação, e Certificado Bronze no Selo ESG Unimed 2024."
            },
            {
                pergunta: "O Hospital Unimed Barra tem oncologia?",
                resposta: "Sim. O Centro de Tratamento do Câncer (CTC) é integrado ao complexo, com Unidade Oncológica com leitos de UTI para tratamento oncológico de alta complexidade."
            },
            {
                pergunta: "Onde fica o Hospital Unimed Barra?",
                resposta: "O hospital está na Avenida Ayrton Senna, 2550, Barra da Tijuca, com acesso pela Linha Amarela e Av. das Américas, servindo moradores da Barra, Recreio, Jacarepaguá e Zona Oeste."
            },
            {
                pergunta: "O Hospital Unimed Barra tem emergência 24 horas?",
                resposta: "O hospital é voltado principalmente a internações eletivas e procedimentos de alta complexidade. Para urgências, beneficiários Unimed devem acionar a central de atendimento para encaminhamento adequado."
            },
            {
                pergunta: "O Hospital Unimed Barra tem quantos leitos?",
                resposta: "O hospital conta com 189 leitos e 12 salas cirúrgicas (11 convencionais + 1 híbrida), além de Unidade Pediátrica com UTI, Unidade Oncológica e suporte a transplantes."
            },
            {
                pergunta: "Como contratar um plano Unimed aceito no Hospital Unimed Barra?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Somos especialistas em planos Unimed Ferj e orientamos na contratação do plano adequado com acesso ao Hospital Unimed Barra da Tijuca."
            }
        ]
    },

    "unimed-rio-hospital": {
        bairro: "Botafogo",
        endereco: "Rua Mário Ribeiro, 117",
        descricaoRica: `O Hospital Unimed-Rio, localizado no bairro de Botafogo na Rua Mário Ribeiro, 117, é uma unidade hospitalar de alta e média complexidade pertencente à Unimed-Rio Empreendimentos Médicos e Hospitalares, gerido pela Unimed Ferj para atendimento aos seus beneficiários. O hospital é reconhecido pela qualidade assistencial e pelo atendimento humanizado que caracterizam a marca Unimed.

A unidade detém o Certificado de Acreditação ONA Nível 3 (Excelência), o Certificado de Distinção no Serviço de Enfermagem e o Certificado de Identificação e Tratamento da Sepse do Instituto Latino-Americano de Sepse (ILAS) — três das principais certificações de qualidade hospitalar do Brasil. O hospital conta com programas de residência médica administrados pelo Instituto Unimed-Rio, garantindo presença contínua de profissionais em atualização científica e elevando o padrão do cuidado assistencial.

Em Botafogo, o hospital serve como ponto estratégico na Zona Sul do Rio, com localização conveniente para moradores de Botafogo, Laranjeiras, Humaitá, Catete e adjacências. A Avanti Corretora orienta na contratação de planos Unimed Ferj com cobertura nesta unidade.`,
        especialidades: [
            "Cardiologia", "Oncologia", "Pediatria com UTI",
            "Neurologia", "Cirurgia Geral", "Ortopedia",
            "Gastroenterologia", "Nefrologia", "Infectologia",
            "Hematologia", "Transplante de Medula Óssea", "Transplante Renal", "Clínica Médica"
        ],
        servicos: [
            "Internação Clínica e Cirúrgica", "UTI Adulto",
            "Unidade Pediátrica com UTI", "Centro Oncológico com UTI",
            "Centro Cirúrgico", "Transplante de Medula Óssea", "Transplante Renal",
            "Diagnóstico por Imagem", "Residência Médica"
        ],
        faq: [
            {
                pergunta: "O Hospital Unimed-Rio atende qual plano?",
                resposta: "O Hospital Unimed-Rio atende prioritariamente beneficiários dos planos Unimed Ferj e Unimed Intercâmbio. A Avanti Corretora auxilia na contratação de planos Unimed com acesso a esta unidade em Botafogo."
            },
            {
                pergunta: "O Hospital Unimed-Rio é acreditado?",
                resposta: "Sim. O hospital detém ONA Nível 3 (Excelência), Certificado de Distinção no Serviço de Enfermagem e Certificado ILAS (Sepse) — entre as mais completas certificações de qualidade hospitalar disponíveis no Brasil."
            },
            {
                pergunta: "O Hospital Unimed-Rio faz transplantes?",
                resposta: "Sim. O hospital realiza Transplante de Medula Óssea e Transplante Renal, além de Centro Oncológico com UTI, sendo referência para alta complexidade hematológica e oncológica na Zona Sul."
            },
            {
                pergunta: "O Hospital Unimed-Rio tem emergência?",
                resposta: "O hospital foca em procedimentos de alta e média complexidade e internações eletivas. Beneficiários Unimed com urgência devem acionar a central de atendimento para direcionamento adequado."
            },
            {
                pergunta: "Onde fica o Hospital Unimed-Rio?",
                resposta: "O hospital está na Rua Mário Ribeiro, 117, bairro de Botafogo, Zona Sul do Rio de Janeiro, com acesso facilitado para moradores de Botafogo, Laranjeiras, Humaitá e Catete."
            },
            {
                pergunta: "O Hospital Unimed-Rio tem UTI Pediátrica?",
                resposta: "Sim. O hospital conta com Unidade Pediátrica com leitos de UTI e Centro Oncológico com UTI para atendimento de casos críticos."
            },
            {
                pergunta: "O Hospital Unimed-Rio tem residência médica?",
                resposta: "Sim. O hospital conta com programas de residência médica do Instituto Unimed-Rio, garantindo equipe em constante atualização científica e formação de especialistas."
            },
            {
                pergunta: "Como contratar um plano Unimed aceito no Hospital Unimed-Rio?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Somos especialistas em planos Unimed Ferj e orientamos na escolha do plano adequado com acesso ao Hospital Unimed-Rio em Botafogo."
            }
        ]
    },

    "hospital-itaipu": {
        bairro: "Itaipu",
        endereco: "Estrada Francisco da Cruz Nunes, 5599",
        descricaoRica: `O Hospital Itaipu é a unidade hospitalar de referência da Unimed Leste Fluminense, localizada na Estrada Francisco da Cruz Nunes, 5599, no bairro de Itaipu, em Niterói. Com estrutura de 2.600 m², o hospital foi desenvolvido para oferecer assistência completa em urgência e emergência para adultos e crianças, com equipe qualificada e multidisciplinar para atendimento integral à saúde da família na região leste de Niterói.

A unidade se destaca pelo moderno Centro de Imagem e Diagnóstico. O portfólio de exames inclui ressonância magnética (com e sem anestesia), RM cardíaca, tomografia computadorizada, angiotomografia de coronárias, mamografia digital, densitometria óssea, ultrassonografia, ecocardiograma com Doppler, teste ergométrico, MAPA, Holter, endoscopia, colonoscopia e biópsia guiada por ultrassom. No pavimento superior funciona o OC Oncoclínicas Niterói, núcleo de oncologia e hematologia vinculado à mesma estrutura, garantindo um complexo de saúde completo no extremo leste de Niterói.

Como unidade da rede própria Unimed Leste Fluminense, o Hospital Itaipu está estrategicamente localizado a aproximadamente 15 minutos do centro de Icaraí. A Avanti Corretora orienta na contratação de planos Unimed Leste Fluminense com cobertura nesta unidade.`,
        especialidades: [
            "Clínica Médica", "Ortopedia e Traumatologia", "Cardiologia",
            "Pediatria", "Radiologia e Diagnóstico por Imagem",
            "Cardiologia Intervencionista", "Gastroenterologia",
            "Mastologia", "Endocrinologia"
        ],
        servicos: [
            "Pronto-Atendimento Adulto 24h (Clínico e Ortopédico)", "Pronto-Atendimento Pediátrico",
            "Ressonância Magnética (com e sem anestesia)", "RM Cardíaca",
            "Tomografia e Angiotomografia de Coronárias", "Mamografia Digital e Densitometria",
            "Ecocardiograma com Doppler", "Holter e MAPA", "Endoscopia e Colonoscopia",
            "Biópsia Intervencionista por Ultrassom"
        ],
        faq: [
            {
                pergunta: "O Hospital Itaipu aceita qual plano de saúde?",
                resposta: "O Hospital Itaipu atende prioritariamente beneficiários dos planos Unimed Leste Fluminense e Unimed Intercâmbio. A Avanti Corretora auxilia na contratação de planos com cobertura nesta unidade em Niterói."
            },
            {
                pergunta: "O Hospital Itaipu tem emergência 24 horas?",
                resposta: "Sim. O hospital conta com Pronto-Atendimento 24 horas para adultos (clínico e ortopédico) e atendimento pediátrico, com equipe qualificada e multidisciplinar."
            },
            {
                pergunta: "Quais exames de imagem têm no Hospital Itaipu?",
                resposta: "A unidade dispõe de ressonância magnética (inclusive cardíaca, com opção de anestesia), tomografia, angiotomografia de coronárias, mamografia digital, densitometria óssea, ecocardiograma, Holter, MAPA, ultrassonografia e biópsia intervencionista por ultrassom."
            },
            {
                pergunta: "O que é o OC Oncoclínicas no complexo Itaipu?",
                resposta: "O OC Oncoclínicas Niterói é um centro especializado em oncologia e hematologia localizado no pavimento superior do Hospital Itaipu, no mesmo endereço. Integra a parceria entre Unimed Leste Fluminense e o Grupo Oncoclínicas&Co."
            },
            {
                pergunta: "Onde fica o Hospital Itaipu?",
                resposta: "O hospital está na Estrada Francisco da Cruz Nunes, 5599, bairro de Itaipu, Niterói, a aproximadamente 15 minutos de Icaraí, na região leste de Niterói."
            },
            {
                pergunta: "O Hospital Itaipu faz endoscopia e colonoscopia?",
                resposta: "Sim. A unidade realiza endoscopia digestiva alta e colonoscopia, além de outros procedimentos diagnósticos, incluindo biópsia guiada por ultrassom."
            },
            {
                pergunta: "Qual plano dá acesso ao Hospital Itaipu?",
                resposta: "Planos Unimed Leste Fluminense e Unimed Intercâmbio com cobertura em Niterói garantem acesso ao Hospital Itaipu. A Avanti Corretora compara opções para moradores da região leste de Niterói."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Itaipu?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara planos Unimed Leste Fluminense com cobertura no Hospital Itaipu em Niterói e orienta na contratação gratuitamente."
            }
        ]
    },

    "oncoclínicas-niteroi": {
        bairro: "Itaipu",
        endereco: "Estrada Francisco da Cruz Nunes, 5599 (complexo Hospital Itaipu)",
        descricaoRica: `A OC Oncoclínicas Niterói é o núcleo especializado em oncologia e hematologia da rede Unimed Leste Fluminense, localizada no pavimento superior do complexo do Hospital Itaipu, na Estrada Francisco da Cruz Nunes, 5599, em Itaipu, Niterói. A unidade integra a parceria entre a Unimed Leste Fluminense e o Grupo Oncoclínicas&Co, referência nacional no diagnóstico e tratamento oncológico.

Com 1.000 m² dedicados ao cuidado integral do paciente oncológico, a OC Oncoclínicas Niterói oferece 18 boxes para tratamento e 2 leitos privativos, sala de procedimentos e sala de acolhimento ao paciente e família. O modelo de assistência é baseado no tratamento humanizado, aliando tecnologia de ponta à atenção emocional e psicossocial. A localização dentro do complexo Itaipu garante acesso integrado ao Centro de Imagem do hospital para exames diagnósticos oncológicos.

A unidade funciona de segunda a sábado das 8h às 19h, com agendamento pelo (21) 3003-9855. Para beneficiários de planos de saúde com necessidade de tratamento oncológico em Niterói, a Avanti Corretora orienta na contratação dos planos adequados com acesso a esta unidade especializada.`,
        especialidades: [
            "Oncologia Clínica", "Hematologia", "Oncohematologia",
            "Cuidados Paliativos", "Suporte Nutricional Oncológico", "Psico-Oncologia"
        ],
        servicos: [
            "Quimioterapia (18 boxes para tratamento)", "2 Leitos Privativos",
            "Sala de Procedimentos Oncológicos", "Sala de Acolhimento ao Paciente",
            "Suporte Multidisciplinar Oncológico",
            "Acesso Integrado ao Centro de Imagem Unimed Itaipu"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem a OC Oncoclínicas Niterói?",
                resposta: "A OC Oncoclínicas Niterói atende prioritariamente beneficiários da Unimed Leste Fluminense. Para outros convênios, o contato é pelo (21) 3003-9855. A Avanti Corretora orienta na contratação de planos com cobertura oncológica em Niterói."
            },
            {
                pergunta: "A OC Oncoclínicas faz quimioterapia?",
                resposta: "Sim. A unidade dispõe de 18 boxes individuais para quimioterapia e 2 leitos privativos para tratamentos que exigem maior suporte, com equipe multidisciplinar oncológica completa."
            },
            {
                pergunta: "Onde fica a OC Oncoclínicas Niterói?",
                resposta: "A unidade está no pavimento superior do complexo Hospital Itaipu, na Estrada Francisco da Cruz Nunes, 5599, bairro de Itaipu, Niterói."
            },
            {
                pergunta: "A OC Oncoclínicas tem suporte psicológico?",
                resposta: "Sim. O modelo de cuidados integrais inclui psico-oncologia e suporte nutricional como parte do tratamento, com sala de acolhimento dedicada ao paciente e familiares."
            },
            {
                pergunta: "Qual o horário de atendimento da OC Oncoclínicas Niterói?",
                resposta: "De segunda a sábado, das 8h às 19h. Agendamento pelo (21) 3003-9855."
            },
            {
                pergunta: "O plano precisa ter cobertura oncológica para usar a OC Oncoclínicas?",
                resposta: "Sim. Todos os planos de saúde são obrigados pela ANS a cobrir tratamentos oncológicos conforme o Rol de Procedimentos vigente. A Avanti Corretora orienta sobre coberturas e auxilia na contratação do plano adequado."
            },
            {
                pergunta: "O que diferencia a OC Oncoclínicas Niterói?",
                resposta: "A integração com a rede Oncoclínicas&Co (nacional) garante protocolos atualizados. A localização no complexo Itaipu oferece conveniência diagnóstica com o Centro de Imagem no mesmo endereço, facilitando exames durante o tratamento."
            },
            {
                pergunta: "Como contratar um plano para tratamento na OC Oncoclínicas Niterói?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe orienta na contratação de planos Unimed Leste Fluminense com cobertura no complexo Itaipu/OC Oncoclínicas em Niterói."
            }
        ]
    },

    "hospital-balbino": {
        bairro: "Olaria",
        endereco: "Rua Angélica Mota, 90",
        descricaoRica: `O Hospital Balbino é uma instituição hospitalar fundada em 1975, localizada no bairro de Olaria, Zona Norte do Rio de Janeiro. Em 2021, o hospital foi adquirido pela Rede D'Or São Luiz, maior rede hospitalar privada do Brasil, passando a receber investimentos contínuos em infraestrutura, tecnologia e capacitação profissional. O hospital combina mais de cinco décadas de tradição local com os padrões de excelência da maior rede hospitalar do país.

A unidade detém a certificação ONA Nível 1 (Acreditado Pleno) e conta com Centro Cirúrgico moderno com 8 salas equipadas, Centro de Diagnósticos com laboratório próprio e centro médico integrado com 15 consultórios e mais de 25 especialidades disponíveis. Destaque para a neurocirurgia de coluna, com suporte de tecnologia que permite monitoramento remoto por especialistas durante os procedimentos cirúrgicos. O agendamento online é feito pelo portal da Rede D'Or.

Como parte da Rede D'Or São Luiz, o Hospital Balbino é credenciado pelas principais operadoras do mercado. Para moradores de Olaria, Ramos, Penha e Bonsucesso, representa o acesso ao padrão da maior rede hospitalar privada do Brasil na Zona Norte. A Avanti Corretora orienta na escolha do plano ideal com cobertura no Balbino.`,
        especialidades: [
            "Cirurgia Geral", "Cirurgia de Coluna (Neurocirurgia)", "Cardiologia",
            "Gastroenterologia", "Ortopedia e Traumatologia", "Clínica Médica",
            "Urologia", "Dermatologia", "Ginecologia",
            "Endocrinologia", "Oftalmologia", "Otorrinolaringologia"
        ],
        servicos: [
            "Centro Cirúrgico (8 salas)", "Endoscopia e Colonoscopia",
            "Centro Médico (15 consultórios, 25+ especialidades)",
            "Laboratório", "Diagnóstico por Imagem",
            "Cirurgia de Coluna com Monitoramento Remoto",
            "Agendamento Online (Rede D'Or)"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Balbino?",
                resposta: "O Hospital Balbino, integrante da Rede D'Or São Luiz, é credenciado pelas principais operadoras, incluindo Bradesco Saúde, SulAmérica, Amil, Unimed e outras. A Avanti Corretora verifica quais planos cobrem esta unidade na Zona Norte do Rio."
            },
            {
                pergunta: "O Hospital Balbino faz cirurgia de coluna?",
                resposta: "Sim. O Balbino destaca-se em neurocirurgia de coluna, com tecnologia de monitoramento remoto por especialistas durante os procedimentos, garantindo maior segurança cirúrgica."
            },
            {
                pergunta: "O Hospital Balbino é acreditado?",
                resposta: "Sim. O Balbino possui certificação ONA Nível 1 (Acreditado Pleno) e integra a Rede D'Or São Luiz, que mantém rigorosos padrões de qualidade em todas as suas unidades."
            },
            {
                pergunta: "Quando o Hospital Balbino passou para a Rede D'Or?",
                resposta: "Em 2021. Desde então, o hospital recebeu investimentos em infraestrutura e tecnologia, com o Centro Cirúrgico modernizado com 8 salas de alto padrão e integração aos sistemas digitais da Rede D'Or, incluindo agendamento online."
            },
            {
                pergunta: "Onde fica o Hospital Balbino?",
                resposta: "O Balbino está na Rua Angélica Mota, 90, bairro de Olaria, Zona Norte do Rio de Janeiro, atendendo moradores de Olaria, Ramos, Penha e Bonsucesso."
            },
            {
                pergunta: "O Hospital Balbino tem emergência 24 horas?",
                resposta: "O Balbino é focado em atendimento eletivo e ambulatorial. Para emergências, a Rede D'Or direciona para as unidades com pronto-socorro mais próximas. Verifique disponibilidade diretamente com a unidade."
            },
            {
                pergunta: "Quais especialidades têm no Hospital Balbino?",
                resposta: "O centro médico conta com mais de 25 especialidades, incluindo Cirurgia Geral, Cirurgia de Coluna, Cardiologia, Gastroenterologia, Ortopedia, Urologia, Ginecologia, Endocrinologia, Oftalmologia e Otorrinolaringologia."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Balbino?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara os planos com cobertura no Hospital Balbino (Rede D'Or) em Olaria e cuida da contratação gratuitamente."
            }
        ]
    },

    "hospital-bangu": {
        bairro: "Bangu",
        endereco: "Rua Francisco Real, 752",
        descricaoRica: `O Hospital Bangu é a referência em saúde na Zona Oeste do Rio de Janeiro, integrante da Rede D'Or São Luiz, maior rede hospitalar privada do Brasil. Localizado na Rua Francisco Real, 752, em Bangu, o hospital atende uma vasta população da Zona Oeste carioca, incluindo moradores de Bangu, Campo Grande, Realengo, Padre Miguel, Senador Camará e adjacências. O hospital detém a certificação ONA Nível 3 (Excelência), o mais alto grau de acreditação da Organização Nacional de Acreditação — tornando-se a principal referência assistencial certificada na Zona Oeste do Rio.

O Hospital Bangu oferece quatro modalidades de emergência: Emergência Adulto 24h, Emergência Oncológica exclusiva para pacientes em quimioterapia (única na Zona Oeste), Emergência Pediátrica 24h e Pronto-Atendimento Ortopédico, além de Centro Cirúrgico com tecnologia de ponta e CTI Pós-Operatório com a Oncologia D'Or integrada. O complexo inclui ainda o Centro Médico Real D'Or, na Rua do Capelão, 137, Padre Miguel, dedicado a Day Clinic e consultórios multiespecialidades.

Para moradores da Zona Oeste que buscam plano com cobertura no Hospital Bangu, a Avanti Corretora compara gratuitamente as operadoras credenciadas nesta referência ONA Nível 3 na Zona Oeste.`,
        especialidades: [
            "Cirurgia Geral", "Neurocirurgia de Coluna", "Oncologia",
            "Ortopedia e Traumatologia", "Pediatria", "Cardiologia",
            "Gastroenterologia", "Clínica Médica", "Ginecologia",
            "Urologia", "Pneumologia", "Endocrinologia"
        ],
        servicos: [
            "Emergência Adulto 24h", "Emergência Oncológica 24h (única na Zona Oeste)",
            "Emergência Pediátrica 24h", "Pronto-Atendimento Ortopédico",
            "Centro Cirúrgico", "CTI Pós-Operatório", "Oncologia D'Or",
            "Day Clinic (Centro Médico Real D'Or — Padre Miguel)",
            "Endoscopia e Colonoscopia", "Diagnóstico por Imagem"
        ],
        faq: [
            {
                pergunta: "Quais planos cobrem o Hospital Bangu?",
                resposta: "O Hospital Bangu, da Rede D'Or São Luiz, é credenciado pelas principais operadoras, incluindo Bradesco Saúde, SulAmérica, Amil, Unimed, Porto Seguro e outras. A Avanti Corretora compara as opções disponíveis na Zona Oeste."
            },
            {
                pergunta: "O Hospital Bangu tem emergência 24 horas?",
                resposta: "Sim. O hospital oferece quatro modalidades de emergência: Adulto, Oncológica (para pacientes em quimioterapia), Pediátrica e Ortopédica, todas 24 horas. É a principal emergência hospitalar privada da Zona Oeste."
            },
            {
                pergunta: "O Hospital Bangu é acreditado?",
                resposta: "Sim. O Bangu detém a certificação ONA Nível 3 (Excelência), o mais alto grau de acreditação da Organização Nacional de Acreditação, sendo referência de excelência na Zona Oeste."
            },
            {
                pergunta: "O Hospital Bangu tem emergência oncológica?",
                resposta: "Sim. O Bangu é o único hospital da Zona Oeste do Rio com Emergência Oncológica 24h exclusiva para pacientes em quimioterapia — diferencial único na região para os casos mais críticos de oncologia."
            },
            {
                pergunta: "O que é o Centro Médico Real D'Or?",
                resposta: "O Centro Médico Real D'Or, na Rua do Capelão, 137, Padre Miguel, é o braço ambulatorial do Hospital Bangu, dedicado a Day Clinic (cirurgias de pequeno e médio porte sem internação) e consultórios multiespecialidades."
            },
            {
                pergunta: "Onde fica o Hospital Bangu?",
                resposta: "O Hospital Bangu está na Rua Francisco Real, 752, Bangu, Zona Oeste do Rio, com acesso para moradores de Bangu, Campo Grande, Realengo, Padre Miguel, Senador Camará e municípios da Baixada Ocidental."
            },
            {
                pergunta: "O que diferencia o Hospital Bangu?",
                resposta: "O Bangu é o único da Zona Oeste com ONA Nível 3 (Excelência) e o único a oferecer Emergência Oncológica 24h para pacientes em quimioterapia. A Rede D'Or garante tecnologia de ponta e protocolos de alto padrão."
            },
            {
                pergunta: "Como contratar um plano aceito no Hospital Bangu?",
                resposta: "Entre em contato com a Avanti Corretora pelo WhatsApp. Nossa equipe compara planos com cobertura no Hospital Bangu (Rede D'Or, ONA Nível 3) na Zona Oeste e cuida da contratação gratuitamente."
            }
        ]
    }
};

export function getHospitalRico(id) {
    return hospitaisRicos[id] || null;
}
