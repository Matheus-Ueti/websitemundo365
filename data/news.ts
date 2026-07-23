import type { CompanyNewsArticle, CompanyNewsArticleSource, CountryCode, Locale } from '@/types'

/**
 * Notícias próprias da Mundo365, entregues pelo marketing (textos + fotos por
 * país, em `Front/NOTICIAS`). O texto é traduzido nos três idiomas do site
 * (pt/en/es) e resolvido para o idioma atual por `localizeArticle`.
 *
 * As datas são aproximadas (inferidas do contexto/EXIF das fotos) e podem ser
 * ajustadas livremente aqui.
 */
export const companyNewsSource: CompanyNewsArticleSource[] = [
  {
    slug: 'top-20-global-copilot',
    country: 'us',
    date: { pt: 'Fev 2026', en: 'Feb 2026', es: 'Feb 2026' },
    place: { pt: 'Redmond · EUA', en: 'Redmond · USA', es: 'Redmond · EE. UU.' },
    category: { pt: 'Reconhecimento', en: 'Recognition', es: 'Reconocimiento' },
    title: {
      pt: 'Mundo365 é reconhecida entre os 20 parceiros globais da Microsoft em desafio sobre Microsoft Copilot',
      en: "Mundo365 is recognized among Microsoft's top 20 global partners in a Microsoft Copilot challenge",
      es: 'Mundo365 es reconocida entre los 20 socios globales de Microsoft en un desafío sobre Microsoft Copilot',
    },
    dek: {
      pt: 'Reconhecimento internacional destaca parceiros que desenvolveram projetos de destaque na adoção do Microsoft Copilot e reforça a atuação da Mundo365 em Inteligência Artificial aplicada aos negócios.',
      en: "International recognition highlights partners that delivered standout projects in Microsoft Copilot adoption and reinforces Mundo365's work in Artificial Intelligence applied to business.",
      es: 'El reconocimiento internacional destaca a los socios que desarrollaron proyectos sobresalientes en la adopción de Microsoft Copilot y refuerza la labor de Mundo365 en Inteligencia Artificial aplicada a los negocios.',
    },
    body: {
      pt: [
        'A Mundo365 conquistou um importante reconhecimento internacional ao ser selecionada entre os 20 parceiros globais no CSP Copilot Success Story Challenge, iniciativa promovida pela Microsoft para destacar cases de sucesso relacionados ao Microsoft Copilot.',
        'O programa reuniu parceiros de diferentes países que se destacaram pela forma como aplicaram a Inteligência Artificial para gerar resultados concretos aos seus clientes. A seleção reconhece empresas capazes de transformar o potencial da tecnologia em ganhos reais de produtividade, colaboração e inovação.',
        'Para a Mundo365, esse reconhecimento representa mais um marco em sua trajetória dentro do ecossistema Microsoft e reforça o compromisso da empresa em apoiar organizações na adoção segura e estratégica do Microsoft Copilot e das soluções Microsoft 365.',
        'Além de valorizar o trabalho desenvolvido pela equipe, a conquista fortalece a presença da Mundo365 entre os parceiros de destaque da Microsoft no cenário internacional, consolidando sua atuação em projetos de transformação digital e Inteligência Artificial.',
      ],
      en: [
        'Mundo365 earned an important international recognition by being selected among the top 20 global partners in the CSP Copilot Success Story Challenge, an initiative promoted by Microsoft to highlight success stories related to Microsoft Copilot.',
        "The program brought together partners from different countries that stood out for the way they applied Artificial Intelligence to generate concrete results for their clients. The selection recognizes companies capable of turning the technology's potential into real gains in productivity, collaboration and innovation.",
        "For Mundo365, this recognition represents another milestone in its journey within the Microsoft ecosystem and reinforces the company's commitment to supporting organizations in the secure and strategic adoption of Microsoft Copilot and Microsoft 365 solutions.",
        "In addition to valuing the work developed by the team, the achievement strengthens Mundo365's presence among Microsoft's leading partners on the international stage, consolidating its work in digital transformation and Artificial Intelligence projects.",
      ],
      es: [
        'Mundo365 obtuvo un importante reconocimiento internacional al ser seleccionada entre los 20 socios globales en el CSP Copilot Success Story Challenge, una iniciativa promovida por Microsoft para destacar casos de éxito relacionados con Microsoft Copilot.',
        'El programa reunió a socios de diferentes países que se destacaron por la forma en que aplicaron la Inteligencia Artificial para generar resultados concretos a sus clientes. La selección reconoce a empresas capaces de transformar el potencial de la tecnología en ganancias reales de productividad, colaboración e innovación.',
        'Para Mundo365, este reconocimiento representa un hito más en su trayectoria dentro del ecosistema Microsoft y refuerza el compromiso de la empresa de apoyar a las organizaciones en la adopción segura y estratégica de Microsoft Copilot y de las soluciones Microsoft 365.',
        'Además de valorar el trabajo desarrollado por el equipo, el logro fortalece la presencia de Mundo365 entre los socios destacados de Microsoft en el escenario internacional, consolidando su actuación en proyectos de transformación digital e Inteligencia Artificial.',
      ],
    },
    closing: {
      pt: 'Mais do que um reconhecimento, essa conquista reforça a missão da Mundo365 de transformar tecnologia em vantagem competitiva, conectando inovação, conhecimento e resultados para empresas de diferentes segmentos.',
      en: "More than a recognition, this achievement reinforces Mundo365's mission to turn technology into competitive advantage, connecting innovation, knowledge and results for companies across different segments.",
      es: 'Más que un reconocimiento, este logro refuerza la misión de Mundo365 de transformar la tecnología en ventaja competitiva, conectando innovación, conocimiento y resultados para empresas de diferentes segmentos.',
    },
    cover: '/news/top-20-global-copilot/cover.jpg',
    gallery: [
      '/news/top-20-global-copilot/g01.jpg',
      '/news/top-20-global-copilot/g02.jpg',
      '/news/top-20-global-copilot/g03.jpg',
      '/news/top-20-global-copilot/g04.jpg',
      '/news/top-20-global-copilot/g05.jpg',
      '/news/top-20-global-copilot/g06.jpg',
      '/news/top-20-global-copilot/g07.jpg',
      '/news/top-20-global-copilot/g08.jpg',
      '/news/top-20-global-copilot/g09.jpg',
      '/news/top-20-global-copilot/g10.jpg',
      '/news/top-20-global-copilot/g11.jpg',
      '/news/top-20-global-copilot/g12.jpg',
    ],
  },
  {
    slug: 'top-100-global-security',
    country: 'es',
    date: { pt: 'Mai 2026', en: 'May 2026', es: 'May 2026' },
    place: { pt: 'Espanha', en: 'Spain', es: 'España' },
    category: { pt: 'Reconhecimento', en: 'Recognition', es: 'Reconocimiento' },
    title: {
      pt: 'Mundo365 é a única empresa brasileira reconhecida entre os 100 principais parceiros de Segurança da Microsoft no mundo',
      en: "Mundo365 is the only Brazilian company recognized among Microsoft's top 100 Security partners worldwide",
      es: 'Mundo365 es la única empresa brasileña reconocida entre los 100 principales socios de Seguridad de Microsoft en el mundo',
    },
    dek: {
      pt: 'Reconhecimento internacional reforça a especialização da Mundo365 em Segurança e posiciona a empresa entre os principais parceiros do ecossistema Microsoft em nível global.',
      en: "International recognition reinforces Mundo365's specialization in Security and positions the company among the leading partners of the Microsoft ecosystem at a global level.",
      es: 'El reconocimiento internacional refuerza la especialización de Mundo365 en Seguridad y posiciona a la empresa entre los principales socios del ecosistema Microsoft a nivel global.',
    },
    body: {
      pt: [
        'A Mundo365 alcançou um dos mais importantes reconhecimentos internacionais do ecossistema Microsoft ao se tornar a única empresa brasileira selecionada entre os 100 principais parceiros de Segurança da Microsoft no mundo.',
        'A seleção reúne organizações que se destacam globalmente pela excelência na implementação de soluções de segurança, proteção de ambientes corporativos e desenvolvimento de projetos alinhados às melhores práticas da Microsoft. Estar entre esse grupo representa um reconhecimento à capacidade técnica, à inovação e ao compromisso com a segurança digital.',
        'Para a Mundo365, essa conquista representa mais um marco em sua trajetória e reforça o trabalho desenvolvido ao longo dos últimos anos na construção de ambientes corporativos mais seguros, modernos e preparados para os desafios do cenário digital.',
        'Mais do que acompanhar a evolução da tecnologia, buscamos apoiar empresas na criação de estratégias de segurança que unem governança, proteção e inovação, sempre alinhadas às necessidades de cada negócio.',
      ],
      en: [
        "Mundo365 reached one of the most important international recognitions in the Microsoft ecosystem by becoming the only Brazilian company selected among Microsoft's top 100 Security partners worldwide.",
        "The selection brings together organizations that stand out globally for excellence in implementing security solutions, protecting corporate environments and developing projects aligned with Microsoft's best practices. Being among this group represents recognition of technical capability, innovation and commitment to digital security.",
        'For Mundo365, this achievement represents another milestone in its journey and reinforces the work developed over the last few years in building corporate environments that are more secure, modern and prepared for the challenges of the digital landscape.',
        'More than keeping up with the evolution of technology, we seek to support companies in creating security strategies that combine governance, protection and innovation, always aligned with the needs of each business.',
      ],
      es: [
        'Mundo365 alcanzó uno de los reconocimientos internacionales más importantes del ecosistema Microsoft al convertirse en la única empresa brasileña seleccionada entre los 100 principales socios de Seguridad de Microsoft en el mundo.',
        'La selección reúne a organizaciones que se destacan globalmente por la excelencia en la implementación de soluciones de seguridad, la protección de entornos corporativos y el desarrollo de proyectos alineados con las mejores prácticas de Microsoft. Estar entre ese grupo representa un reconocimiento a la capacidad técnica, la innovación y el compromiso con la seguridad digital.',
        'Para Mundo365, este logro representa un hito más en su trayectoria y refuerza el trabajo desarrollado a lo largo de los últimos años en la construcción de entornos corporativos más seguros, modernos y preparados para los desafíos del escenario digital.',
        'Más que acompañar la evolución de la tecnología, buscamos apoyar a las empresas en la creación de estrategias de seguridad que unen gobernanza, protección e innovación, siempre alineadas con las necesidades de cada negocio.',
      ],
    },
    closing: {
      pt: 'Ser a única empresa brasileira presente nessa seleção global reforça o compromisso da Mundo365 em evoluir continuamente, levando conhecimento, inovação e as melhores soluções do ecossistema Microsoft para empresas que enxergam a segurança como um pilar estratégico para o futuro.',
      en: "Being the only Brazilian company in this global selection reinforces Mundo365's commitment to evolving continuously, bringing knowledge, innovation and the best solutions of the Microsoft ecosystem to companies that see security as a strategic pillar for the future.",
      es: 'Ser la única empresa brasileña presente en esta selección global refuerza el compromiso de Mundo365 de evolucionar continuamente, llevando conocimiento, innovación y las mejores soluciones del ecosistema Microsoft a las empresas que ven la seguridad como un pilar estratégico para el futuro.',
    },
    cover: '/news/top-100-global-security/cover.jpg',
    gallery: ['/news/top-100-global-security/g01.jpg'],
  },
  {
    slug: 'americas-partnerverse-peru',
    country: 'pe',
    date: { pt: 'Mar 2026', en: 'Mar 2026', es: 'Mar 2026' },
    place: { pt: 'Lima · Peru', en: 'Lima · Peru', es: 'Lima · Perú' },
    category: { pt: 'Cibersegurança', en: 'Cybersecurity', es: 'Ciberseguridad' },
    title: {
      pt: 'Mundo365 fortalece sua atuação em Cibersegurança durante encontro da Kaspersky no Peru',
      en: "Mundo365 strengthens its Cybersecurity work during Kaspersky's gathering in Peru",
      es: 'Mundo365 fortalece su actuación en Ciberseguridad durante el encuentro de Kaspersky en Perú',
    },
    dek: {
      pt: 'Realizado em Lima, o encontro reuniu parceiros de toda a América para discutir o futuro da cibersegurança, compartilhar estratégias e fortalecer o ecossistema global da Kaspersky.',
      en: "Held in Lima, the gathering brought together partners from across the Americas to discuss the future of cybersecurity, share strategies and strengthen Kaspersky's global ecosystem.",
      es: 'Realizado en Lima, el encuentro reunió a socios de toda América para discutir el futuro de la ciberseguridad, compartir estrategias y fortalecer el ecosistema global de Kaspersky.',
    },
    body: {
      pt: [
        'A evolução da cibersegurança exige atualização constante, troca de experiências e proximidade com os principais fabricantes do mercado. Foi com esse propósito que a Mundo365 participou da Americas Partnerverse Conference 2026, realizada em Lima, no Peru, um dos principais encontros promovidos pela Kaspersky para parceiros das Américas.',
        'Durante o evento, mais de 200 executivos de diferentes países estiveram reunidos para acompanhar as estratégias da fabricante, conhecer as novidades do portfólio e compartilhar experiências sobre os desafios e oportunidades do cenário atual de segurança digital.',
        'Além do conteúdo técnico e das discussões sobre tendências do mercado, o encontro proporcionou um ambiente de colaboração entre parceiros, reforçando a importância do compartilhamento de conhecimento para impulsionar soluções cada vez mais completas e eficientes.',
        'Para a Mundo365, estar presente nesse tipo de iniciativa representa mais uma oportunidade de fortalecer o relacionamento com parceiros estratégicos, acompanhar a evolução do mercado e levar aos nossos clientes soluções alinhadas às melhores práticas globais em cibersegurança.',
      ],
      en: [
        "The evolution of cybersecurity requires constant updating, exchange of experiences and closeness to the market's leading vendors. It was with this purpose that Mundo365 took part in the Americas Partnerverse Conference 2026, held in Lima, Peru, one of the main gatherings promoted by Kaspersky for partners across the Americas.",
        "During the event, more than 200 executives from different countries came together to follow the vendor's strategies, learn about the latest additions to the portfolio and share experiences about the challenges and opportunities of the current digital security landscape.",
        'Beyond the technical content and discussions about market trends, the gathering provided an environment of collaboration among partners, reinforcing the importance of knowledge sharing to drive increasingly complete and efficient solutions.',
        "For Mundo365, being present at this kind of initiative represents another opportunity to strengthen the relationship with strategic partners, keep up with the market's evolution and bring our clients solutions aligned with the best global practices in cybersecurity.",
      ],
      es: [
        'La evolución de la ciberseguridad exige actualización constante, intercambio de experiencias y cercanía con los principales fabricantes del mercado. Fue con ese propósito que Mundo365 participó en la Americas Partnerverse Conference 2026, realizada en Lima, Perú, uno de los principales encuentros promovidos por Kaspersky para socios de las Américas.',
        'Durante el evento, más de 200 ejecutivos de diferentes países se reunieron para conocer las estrategias del fabricante, descubrir las novedades del portafolio y compartir experiencias sobre los desafíos y oportunidades del escenario actual de la seguridad digital.',
        'Además del contenido técnico y de las discusiones sobre tendencias del mercado, el encuentro proporcionó un ambiente de colaboración entre socios, reforzando la importancia de compartir conocimiento para impulsar soluciones cada vez más completas y eficientes.',
        'Para Mundo365, estar presente en este tipo de iniciativa representa una oportunidad más de fortalecer la relación con socios estratégicos, acompañar la evolución del mercado y llevar a nuestros clientes soluciones alineadas con las mejores prácticas globales en ciberseguridad.',
      ],
    },
    closing: {
      pt: 'Seguimos investindo em conhecimento, parcerias e inovação para transformar tendências globais em soluções que ajudam empresas brasileiras a operar com mais segurança, confiança e eficiência.',
      en: 'We continue investing in knowledge, partnerships and innovation to turn global trends into solutions that help Brazilian companies operate with more security, confidence and efficiency.',
      es: 'Seguimos invirtiendo en conocimiento, alianzas e innovación para transformar las tendencias globales en soluciones que ayudan a las empresas brasileñas a operar con más seguridad, confianza y eficiencia.',
    },
    cover: '/news/americas-partnerverse-peru/cover.jpg',
    gallery: [
      '/news/americas-partnerverse-peru/g01.jpg',
      '/news/americas-partnerverse-peru/g02.jpg',
      '/news/americas-partnerverse-peru/g03.jpg',
      '/news/americas-partnerverse-peru/g04.jpg',
      '/news/americas-partnerverse-peru/g05.jpg',
      '/news/americas-partnerverse-peru/g06.jpg',
    ],
  },
  {
    slug: 'inspire-lac-2026',
    country: 'mx',
    date: { pt: 'Abr 2026', en: 'Apr 2026', es: 'Abr 2026' },
    place: { pt: 'México', en: 'Mexico', es: 'México' },
    category: { pt: 'Evento', en: 'Event', es: 'Evento' },
    title: {
      pt: 'Mundo365 participa do Inspire LAC 2026, no México, um dos principais encontros da TD SYNNEX na América Latina',
      en: "Mundo365 takes part in Inspire LAC 2026, in Mexico, one of TD SYNNEX's main gatherings in Latin America",
      es: 'Mundo365 participa en Inspire LAC 2026, en México, uno de los principales encuentros de TD SYNNEX en América Latina',
    },
    dek: {
      pt: 'Presença da empresa no evento reforça o compromisso com a inovação, o fortalecimento de parcerias estratégicas e a evolução constante do ecossistema Microsoft.',
      en: "The company's presence at the event reinforces its commitment to innovation, the strengthening of strategic partnerships and the constant evolution of the Microsoft ecosystem.",
      es: 'La presencia de la empresa en el evento refuerza el compromiso con la innovación, el fortalecimiento de alianzas estratégicas y la evolución constante del ecosistema Microsoft.',
    },
    body: {
      pt: [
        'Participar dos principais encontros do setor faz parte da forma como a Mundo365 enxerga inovação: estar próxima das pessoas, das tecnologias e das decisões que ajudam a construir o futuro do mercado.',
        'Foi com esse propósito que a empresa esteve no México, participando do Inspire LAC 2026, evento promovido pela TD SYNNEX que reúne parceiros estratégicos de toda a América Latina para compartilhar conhecimento, discutir tendências e fortalecer o ecossistema de tecnologia.',
        'Ao longo da programação, a equipe acompanhou apresentações sobre as principais estratégias para o mercado, participou de momentos de networking com parceiros internacionais e teve acesso a iniciativas que irão contribuir para ampliar ainda mais a geração de valor aos clientes da Mundo365.',
        'Mais do que uma participação internacional, o Inspire LAC representa uma oportunidade de transformar conexões, experiências e aprendizados em soluções que impulsionam empresas brasileiras a evoluírem com segurança, inovação e estratégia.',
      ],
      en: [
        "Taking part in the industry's main gatherings is part of the way Mundo365 sees innovation: staying close to the people, the technologies and the decisions that help build the future of the market.",
        'It was with this purpose that the company was in Mexico, taking part in Inspire LAC 2026, an event promoted by TD SYNNEX that brings together strategic partners from all over Latin America to share knowledge, discuss trends and strengthen the technology ecosystem.',
        "Throughout the program, the team followed presentations about the main strategies for the market, took part in networking moments with international partners and had access to initiatives that will help further expand the value generated for Mundo365's clients.",
        'More than an international participation, Inspire LAC represents an opportunity to turn connections, experiences and learnings into solutions that drive Brazilian companies to evolve with security, innovation and strategy.',
      ],
      es: [
        'Participar en los principales encuentros del sector forma parte de la manera en que Mundo365 entiende la innovación: estar cerca de las personas, de las tecnologías y de las decisiones que ayudan a construir el futuro del mercado.',
        'Fue con ese propósito que la empresa estuvo en México, participando en Inspire LAC 2026, un evento promovido por TD SYNNEX que reúne a socios estratégicos de toda América Latina para compartir conocimiento, discutir tendencias y fortalecer el ecosistema de tecnología.',
        'A lo largo de la programación, el equipo asistió a presentaciones sobre las principales estrategias para el mercado, participó en momentos de networking con socios internacionales y tuvo acceso a iniciativas que contribuirán a ampliar aún más la generación de valor para los clientes de Mundo365.',
        'Más que una participación internacional, Inspire LAC representa una oportunidad de transformar conexiones, experiencias y aprendizajes en soluciones que impulsan a las empresas brasileñas a evolucionar con seguridad, innovación y estrategia.',
      ],
    },
    closing: {
      pt: 'Estar presente onde o futuro da tecnologia é discutido faz parte do compromisso da Mundo365 em levar conhecimento, inovação e as melhores soluções do ecossistema Microsoft para cada cliente.',
      en: "Being present where the future of technology is discussed is part of Mundo365's commitment to bringing knowledge, innovation and the best solutions of the Microsoft ecosystem to every client.",
      es: 'Estar presente donde se discute el futuro de la tecnología forma parte del compromiso de Mundo365 de llevar conocimiento, innovación y las mejores soluciones del ecosistema Microsoft a cada cliente.',
    },
    cover: '/news/inspire-lac-2026/cover.jpg',
    gallery: [
      '/news/inspire-lac-2026/g01.jpg',
      '/news/inspire-lac-2026/g02.jpg',
      '/news/inspire-lac-2026/g03.jpg',
      '/news/inspire-lac-2026/g04.jpg',
      '/news/inspire-lac-2026/g05.jpg',
      '/news/inspire-lac-2026/g06.jpg',
      '/news/inspire-lac-2026/g07.jpg',
      '/news/inspire-lac-2026/g08.jpg',
      '/news/inspire-lac-2026/g09.jpg',
      '/news/inspire-lac-2026/g10.jpg',
      '/news/inspire-lac-2026/g11.jpg',
      '/news/inspire-lac-2026/g12.jpg',
      '/news/inspire-lac-2026/g13.jpg',
    ],
  },
  {
    slug: 'mundo-conecta',
    country: 'br',
    date: { pt: 'Jun 2026', en: 'Jun 2026', es: 'Jun 2026' },
    place: { pt: 'Cascavel · Brasil', en: 'Cascavel · Brazil', es: 'Cascavel · Brasil' },
    category: { pt: 'Evento', en: 'Event', es: 'Evento' },
    title: {
      pt: 'Microsoft Day marca o início do Mundo Conecta e reúne especialistas do ecossistema Microsoft em Cascavel',
      en: 'Microsoft Day marks the launch of Mundo Conecta and gathers Microsoft ecosystem experts in Cascavel',
      es: 'Microsoft Day marca el inicio de Mundo Conecta y reúne a especialistas del ecosistema Microsoft en Cascavel',
    },
    dek: {
      pt: 'Idealizado pela Mundo365, em parceria com a Microsoft e a TD SYNNEX, o Microsoft Day deu início ao Mundo Conecta, um novo movimento criado para conectar empresas, tecnologia e grandes especialistas do mercado.',
      en: 'Conceived by Mundo365, in partnership with Microsoft and TD SYNNEX, Microsoft Day launched Mundo Conecta, a new movement created to connect companies, technology and leading market experts.',
      es: 'Ideado por Mundo365, en alianza con Microsoft y TD SYNNEX, el Microsoft Day dio inicio a Mundo Conecta, un nuevo movimiento creado para conectar empresas, tecnología y grandes especialistas del mercado.',
    },
    body: {
      pt: [
        'Conectar pessoas, compartilhar conhecimento e aproximar empresas das principais tendências do mercado. Foi com esse propósito que nasceu o Mundo Conecta, iniciativa idealizada pela Mundo365 para fortalecer o ecossistema de tecnologia da região por meio de eventos que unem conteúdo, relacionamento e inovação.',
        'A primeira edição aconteceu em 2026 com o tema Microsoft Day, reunindo clientes, parceiros e empresas em uma tarde de troca de experiências ao lado de alguns dos principais especialistas do ecossistema Microsoft. Realizado em parceria com a Microsoft e a TD SYNNEX, o encontro contou com palestrantes de referência nacional — incluindo especialistas da própria Microsoft — que compartilharam conteúdos sobre Inteligência Artificial, Cibersegurança, Dados, Infraestrutura e os desafios que estão transformando o mercado.',
        'Mais do que acompanhar palestras, os participantes vivenciaram um ambiente pensado para gerar conexões, estimular o compartilhamento de conhecimento e aproximar empresas das tecnologias que estão impulsionando a transformação digital.',
        'O Microsoft Day representa o primeiro capítulo do Mundo Conecta, um projeto que nasce com o compromisso de promover novas edições, ampliar o acesso a conteúdo de alto nível e fortalecer, cada vez mais, o ecossistema de tecnologia da nossa região.',
      ],
      en: [
        'Connecting people, sharing knowledge and bringing companies closer to the main market trends. It was with this purpose that Mundo Conecta was born, an initiative conceived by Mundo365 to strengthen the region’s technology ecosystem through events that combine content, relationships and innovation.',
        'The first edition took place in 2026 with the theme Microsoft Day, bringing together clients, partners and companies for an afternoon of exchanging experiences alongside some of the leading experts of the Microsoft ecosystem. Held in partnership with Microsoft and TD SYNNEX, the gathering featured nationally recognized speakers — including experts from Microsoft itself — who shared content about Artificial Intelligence, Cybersecurity, Data, Infrastructure and the challenges that are transforming the market.',
        'More than attending talks, participants experienced an environment designed to generate connections, encourage knowledge sharing and bring companies closer to the technologies that are driving digital transformation.',
        'Microsoft Day represents the first chapter of Mundo Conecta, a project that is born with the commitment to promote new editions, expand access to high-level content and increasingly strengthen the technology ecosystem of our region.',
      ],
      es: [
        'Conectar personas, compartir conocimiento y acercar a las empresas a las principales tendencias del mercado. Fue con ese propósito que nació Mundo Conecta, una iniciativa ideada por Mundo365 para fortalecer el ecosistema de tecnología de la región mediante eventos que unen contenido, relaciones e innovación.',
        'La primera edición se realizó en 2026 con el tema Microsoft Day, reuniendo a clientes, socios y empresas en una tarde de intercambio de experiencias junto a algunos de los principales especialistas del ecosistema Microsoft. Realizado en alianza con Microsoft y TD SYNNEX, el encuentro contó con ponentes de referencia nacional —incluyendo especialistas de la propia Microsoft— que compartieron contenidos sobre Inteligencia Artificial, Ciberseguridad, Datos, Infraestructura y los desafíos que están transformando el mercado.',
        'Más que asistir a charlas, los participantes vivieron un ambiente pensado para generar conexiones, estimular el intercambio de conocimiento y acercar a las empresas a las tecnologías que están impulsando la transformación digital.',
        'El Microsoft Day representa el primer capítulo de Mundo Conecta, un proyecto que nace con el compromiso de promover nuevas ediciones, ampliar el acceso a contenido de alto nivel y fortalecer, cada vez más, el ecosistema de tecnología de nuestra región.',
      ],
    },
    closing: {
      pt: 'Mais do que realizar um evento, a Mundo365 deu início a um movimento que acredita no poder do conhecimento para conectar pessoas, impulsionar negócios e construir o futuro da tecnologia, uma edição de cada vez.',
      en: 'More than holding an event, Mundo365 launched a movement that believes in the power of knowledge to connect people, drive business and build the future of technology, one edition at a time.',
      es: 'Más que realizar un evento, Mundo365 dio inicio a un movimiento que cree en el poder del conocimiento para conectar personas, impulsar negocios y construir el futuro de la tecnología, una edición a la vez.',
    },
    cover: '/news/mundo-conecta/cover.jpg',
    gallery: [
      '/news/mundo-conecta/g01.jpg',
      '/news/mundo-conecta/g02.jpg',
      '/news/mundo-conecta/g03.jpg',
      '/news/mundo-conecta/g04.jpg',
      '/news/mundo-conecta/g05.jpg',
      '/news/mundo-conecta/g06.jpg',
      '/news/mundo-conecta/g07.jpg',
      '/news/mundo-conecta/g08.jpg',
    ],
  },
  {
    slug: 'performance-copilot-fy26',
    country: 'br',
    date: { pt: 'Jun 2026', en: 'Jun 2026', es: 'Jun 2026' },
    place: { pt: 'Brasil', en: 'Brazil', es: 'Brasil' },
    category: { pt: 'Reconhecimento', en: 'Recognition', es: 'Reconocimiento' },
    title: {
      pt: 'Microsoft reconhece a Mundo365 por sua Performance FY26 em Copilot Business',
      en: 'Microsoft recognizes Mundo365 for its FY26 Performance in Copilot Business',
      es: 'Microsoft reconoce a Mundo365 por su Performance FY26 en Copilot Business',
    },
    dek: {
      pt: 'Reconhecimento destaca a atuação da Mundo365 na adoção do Microsoft Copilot e reforça o compromisso da empresa em transformar Inteligência Artificial em resultados para seus clientes.',
      en: "The recognition highlights Mundo365's work in adopting Microsoft Copilot and reinforces the company's commitment to turning Artificial Intelligence into results for its clients.",
      es: 'El reconocimiento destaca la actuación de Mundo365 en la adopción de Microsoft Copilot y refuerza el compromiso de la empresa de transformar la Inteligencia Artificial en resultados para sus clientes.',
    },
    body: {
      pt: [
        'A Mundo365 foi reconhecida pela Microsoft com o prêmio Performance FY26 – Copilot Business, uma conquista que evidencia o trabalho desenvolvido pela empresa na adoção estratégica do Microsoft Copilot e das soluções de Inteligência Artificial no ambiente corporativo.',
        'A premiação faz parte das iniciativas da Microsoft para reconhecer parceiros que vêm contribuindo para acelerar a transformação digital das empresas por meio do Microsoft Copilot, apoiando clientes na implementação de soluções que geram produtividade, colaboração e inovação.',
        'Para a Mundo365, esse reconhecimento representa o reflexo de um trabalho construído em conjunto com clientes, parceiros e colaboradores, sempre com foco em entregar soluções que geram impacto real para os negócios.',
        'Mais do que acompanhar a evolução da Inteligência Artificial, seguimos comprometidos em ajudar empresas a adotarem essa tecnologia com estratégia, segurança e governança, garantindo que inovação e resultados caminhem lado a lado.',
      ],
      en: [
        'Mundo365 was recognized by Microsoft with the Performance FY26 – Copilot Business award, an achievement that highlights the work developed by the company in the strategic adoption of Microsoft Copilot and Artificial Intelligence solutions in the corporate environment.',
        "The award is part of Microsoft's initiatives to recognize partners that have been contributing to accelerate companies' digital transformation through Microsoft Copilot, supporting clients in implementing solutions that generate productivity, collaboration and innovation.",
        'For Mundo365, this recognition reflects work built together with clients, partners and employees, always focused on delivering solutions that generate real impact for business.',
        'More than keeping up with the evolution of Artificial Intelligence, we remain committed to helping companies adopt this technology with strategy, security and governance, ensuring that innovation and results go hand in hand.',
      ],
      es: [
        'Mundo365 fue reconocida por Microsoft con el premio Performance FY26 – Copilot Business, un logro que evidencia el trabajo desarrollado por la empresa en la adopción estratégica de Microsoft Copilot y de las soluciones de Inteligencia Artificial en el entorno corporativo.',
        'El premio forma parte de las iniciativas de Microsoft para reconocer a los socios que vienen contribuyendo a acelerar la transformación digital de las empresas a través de Microsoft Copilot, apoyando a los clientes en la implementación de soluciones que generan productividad, colaboración e innovación.',
        'Para Mundo365, este reconocimiento representa el reflejo de un trabajo construido en conjunto con clientes, socios y colaboradores, siempre con el foco en entregar soluciones que generan un impacto real para los negocios.',
        'Más que acompañar la evolución de la Inteligencia Artificial, seguimos comprometidos en ayudar a las empresas a adoptar esta tecnología con estrategia, seguridad y gobernanza, garantizando que la innovación y los resultados avancen de la mano.',
      ],
    },
    closing: {
      pt: 'Cada reconhecimento reforça nossa convicção de que a tecnologia gera mais valor quando aplicada com propósito. Seguimos evoluindo ao lado da Microsoft para transformar o potencial da Inteligência Artificial em resultados concretos para empresas de todo o Brasil.',
      en: 'Each recognition reinforces our conviction that technology generates more value when applied with purpose. We continue evolving alongside Microsoft to turn the potential of Artificial Intelligence into concrete results for companies all over Brazil.',
      es: 'Cada reconocimiento refuerza nuestra convicción de que la tecnología genera más valor cuando se aplica con propósito. Seguimos evolucionando junto a Microsoft para transformar el potencial de la Inteligencia Artificial en resultados concretos para empresas de todo Brasil.',
    },
    cover: '/news/performance-copilot-fy26/cover.jpg',
    gallery: ['/news/performance-copilot-fy26/g01.jpg', '/news/performance-copilot-fy26/g02.jpg'],
  },
  {
    slug: 'in-a-day-copa-mundo',
    country: 'br',
    date: { pt: 'Jun 2026', en: 'Jun 2026', es: 'Jun 2026' },
    place: { pt: 'Cascavel · Brasil', en: 'Cascavel · Brazil', es: 'Cascavel · Brasil' },
    category: { pt: 'Integração', en: 'Integration', es: 'Integración' },
    title: {
      pt: 'Mundo365 promove ação de integração ao lado da TD SYNNEX para fortalecer conexões e cultura',
      en: 'Mundo365 hosts a team-building day with TD SYNNEX to strengthen connections and culture',
      es: 'Mundo365 promueve una acción de integración junto a TD SYNNEX para fortalecer conexiones y cultura',
    },
    dek: {
      pt: 'Iniciativa reuniu colaboradores da Mundo365 e da TD SYNNEX em um dia de atualização sobre o ecossistema Microsoft, integração entre equipes e uma experiência inspirada no clima da Copa e das festas juninas.',
      en: "The initiative brought together Mundo365 and TD SYNNEX employees for a day of updates on the Microsoft ecosystem, team integration and an experience inspired by the World Cup spirit and Brazil's traditional June festivals.",
      es: 'La iniciativa reunió a colaboradores de Mundo365 y de TD SYNNEX en un día de actualización sobre el ecosistema Microsoft, integración entre equipos y una experiencia inspirada en el clima del Mundial y de las tradicionales fiestas juninas.',
    },
    body: {
      pt: [
        'Acreditamos que grandes parcerias também são construídas fora das reuniões e dos projetos. Pensando nisso, a Mundo365 promoveu uma ação especial de integração ao lado da TD SYNNEX, reunindo colaboradores das duas empresas em um dia dedicado ao compartilhamento de conhecimento, relacionamento e celebração.',
        'O encontro começou com um momento voltado à atualização sobre o ecossistema Microsoft, apresentação de iniciativas em andamento e troca de experiências entre as equipes. Mais do que compartilhar informações, o objetivo foi fortalecer a conexão entre pessoas que trabalham diariamente para entregar mais valor aos clientes.',
        'Durante a tarde, o ambiente ganhou uma nova atmosfera com uma experiência inspirada no clima da Copa e das tradicionais festas juninas. Kits personalizados, comidas típicas, dinâmicas, premiações e momentos de descontração transformaram a ação em uma oportunidade para fortalecer ainda mais a parceria entre as equipes.',
        'Mais do que uma comemoração, o encontro reforçou um dos pilares da Mundo365: criar conexões genuínas, incentivar a colaboração e construir uma cultura onde pessoas, parceiros e tecnologia evoluem juntos.',
      ],
      en: [
        'We believe that great partnerships are also built outside of meetings and projects. With that in mind, Mundo365 hosted a special team-building day together with TD SYNNEX, bringing together employees from both companies for a day dedicated to knowledge sharing, relationships and celebration.',
        'The gathering began with a moment focused on updates about the Microsoft ecosystem, a presentation of ongoing initiatives and an exchange of experiences between the teams. More than sharing information, the goal was to strengthen the connection between people who work daily to deliver more value to clients.',
        "During the afternoon, the setting took on a new atmosphere with an experience inspired by the World Cup spirit and Brazil's traditional June festivals. Personalized kits, typical foods, activities, awards and relaxed moments turned the event into an opportunity to further strengthen the partnership between the teams.",
        'More than a celebration, the gathering reinforced one of Mundo365’s pillars: creating genuine connections, encouraging collaboration and building a culture where people, partners and technology evolve together.',
      ],
      es: [
        'Creemos que las grandes alianzas también se construyen fuera de las reuniones y de los proyectos. Pensando en eso, Mundo365 promovió una acción especial de integración junto a TD SYNNEX, reuniendo a colaboradores de ambas empresas en un día dedicado a compartir conocimiento, a las relaciones y a la celebración.',
        'El encuentro comenzó con un momento dedicado a la actualización sobre el ecosistema Microsoft, la presentación de iniciativas en marcha y el intercambio de experiencias entre los equipos. Más que compartir información, el objetivo fue fortalecer la conexión entre personas que trabajan a diario para entregar más valor a los clientes.',
        'Durante la tarde, el ambiente adquirió una nueva atmósfera con una experiencia inspirada en el clima del Mundial y de las tradicionales fiestas juninas. Kits personalizados, comidas típicas, dinámicas, premios y momentos de distensión transformaron la acción en una oportunidad para fortalecer aún más la alianza entre los equipos.',
        'Más que una celebración, el encuentro reforzó uno de los pilares de Mundo365: crear conexiones genuinas, incentivar la colaboración y construir una cultura donde personas, socios y tecnología evolucionan juntos.',
      ],
    },
    closing: {
      pt: 'Momentos como esse reforçam que resultados consistentes também nascem de relacionamentos sólidos. Seguimos investindo em iniciativas que aproximam pessoas, fortalecem parcerias e tornam a experiência de trabalhar e construir juntos ainda mais significativa.',
      en: 'Moments like this reinforce that consistent results are also born from solid relationships. We keep investing in initiatives that bring people closer, strengthen partnerships and make the experience of working and building together even more meaningful.',
      es: 'Momentos como este refuerzan que los resultados consistentes también nacen de relaciones sólidas. Seguimos invirtiendo en iniciativas que acercan a las personas, fortalecen las alianzas y hacen que la experiencia de trabajar y construir juntos sea aún más significativa.',
    },
    cover: '/news/in-a-day-copa-mundo/cover.jpg',
    gallery: [
      '/news/in-a-day-copa-mundo/g01.jpg',
      '/news/in-a-day-copa-mundo/g02.jpg',
      '/news/in-a-day-copa-mundo/g03.jpg',
      '/news/in-a-day-copa-mundo/g04.jpg',
      '/news/in-a-day-copa-mundo/g05.jpg',
      '/news/in-a-day-copa-mundo/g06.jpg',
      '/news/in-a-day-copa-mundo/g07.jpg',
      '/news/in-a-day-copa-mundo/g08.jpg',
      '/news/in-a-day-copa-mundo/g09.jpg',
      '/news/in-a-day-copa-mundo/g10.jpg',
      '/news/in-a-day-copa-mundo/g11.jpg',
    ],
  },
]

/** Ordem dos países nas abas de "Últimas movimentações". */
export const NEWS_COUNTRY_ORDER: CountryCode[] = ['br', 'us', 'es', 'pe', 'mx']

/** Resolve uma notícia para um idioma específico. */
export function localizeArticle(
  article: CompanyNewsArticleSource,
  locale: Locale
): CompanyNewsArticle {
  return {
    slug: article.slug,
    country: article.country,
    category: article.category[locale],
    date: article.date[locale],
    place: article.place[locale],
    title: article.title[locale],
    dek: article.dek[locale],
    body: article.body[locale],
    closing: article.closing[locale],
    cover: article.cover,
    gallery: article.gallery,
  }
}

export function getArticleBySlug(slug: string, locale: Locale): CompanyNewsArticle | undefined {
  const article = companyNewsSource.find((item) => item.slug === slug)
  return article ? localizeArticle(article, locale) : undefined
}

export function getArticlesByCountry(country: CountryCode, locale: Locale): CompanyNewsArticle[] {
  return companyNewsSource
    .filter((article) => article.country === country)
    .map((article) => localizeArticle(article, locale))
}

/** Países que têm ao menos uma notícia, na ordem das abas. */
export function getNewsCountries(): CountryCode[] {
  return NEWS_COUNTRY_ORDER.filter((code) =>
    companyNewsSource.some((article) => article.country === code)
  )
}

/** Demais notícias (para a seção "Outras notícias" da página de detalhe). */
export function getRelatedArticles(slug: string, locale: Locale, limit = 3): CompanyNewsArticle[] {
  return companyNewsSource
    .filter((article) => article.slug !== slug)
    .slice(0, limit)
    .map((article) => localizeArticle(article, locale))
}

/**
 * Destaques do topo da página: os três reconhecimentos de maior peso, com o
 * primeiro assumindo o card grande.
 */
export const FEATURED_SLUGS = [
  'top-20-global-copilot',
  'top-100-global-security',
  'americas-partnerverse-peru',
] as const

export function getFeaturedArticles(locale: Locale): CompanyNewsArticle[] {
  return FEATURED_SLUGS.map((slug) => getArticleBySlug(slug, locale)).filter(
    (article): article is CompanyNewsArticle => article !== undefined
  )
}
