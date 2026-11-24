export const PROFILE = {
  name: 'Adriano Oliveira Castro',
  shortName: 'adrianoCastro',
  handle: '@aocastro',
  title: 'Mestre em Ciência da Computação • Professor de T.I. • Arquiteto de Software',
  location: 'Lins / SP, Brasil',
  email: 'adriano.castro2@etec.sp.gov.br',
  avatarUrl: 'https://avatars.githubusercontent.com/u/56028189?v=4',
  bio: 'Mestre em Ciência da Computação pela UNESP (Bauru), Professor de Tecnologia da Informação no Centro Paula Souza e Sócio da A&D Soluções em Tecnologia. Entusiasta de T.I.C., Visualização da Informação e Engenharia de Software.',
  links: {
    lattes: 'http://lattes.cnpq.br/0485865376238115',
    linkedin: 'https://www.linkedin.com/in/adriano-castro/',
    github: 'https://github.com/aocastro',
    company: 'https://adsolucoestecnologia.com.br',
  },
  research: {
    degree: 'Mestrado em Ciência da Computação',
    institution: 'Universidade Estadual Paulista (UNESP) — Faculdade de Ciências, Bauru',
    year: '2025',
    thesisTitle:
      'O uso da visualização da informação no estudo nutricional por perfis profissionais multidisciplinares',
    project: 'ArticulaTIS',
    summary:
      'Desenvolvimento de uma aplicação web voltada à saúde pública e ao monitoramento do estado nutricional infantil (0 a 6 anos), combinando técnicas de Visualização da Informação (VI) e Descoberta de Conhecimento em Bases de Dados (KDD) a partir de dados públicos como o e-SUS para apoiar decisões de equipes de saúde, educação e assistência social.',
    tags: ['Visualização da Informação', 'KDD / Mineração de Dados', 'Saúde Pública', 'e-SUS', 'ArticulaTIS'],
  },
  techStack: [
    { name: 'React & TypeScript', group: 'Frontend' },
    { name: 'Tailwind CSS', group: 'UI/UX' },
    { name: 'JavaScript (ES6+)', group: 'Web' },
    { name: 'PHP & Arquitetura MVC', group: 'Backend' },
    { name: 'Node.js', group: 'Backend' },
    { name: 'SQL & Modelagem de Dados', group: 'Dados' },
    { name: 'Visualização da Informação', group: 'Pesquisa' },
    { name: 'Git & GitHub Actions', group: 'DevOps' },
  ],
  timeline: [
    {
      period: '2023 — 2025',
      role: 'Mestre em Ciência da Computação',
      organization: 'UNESP — Câmpus de Bauru',
      description:
        'Pesquisa em Visualização da Informação e Mineração de Dados (KDD) aplicada à saúde pública e nutrição infantil, culminando na plataforma web ArticulaTIS.',
      type: 'academic' as const,
    },
    {
      period: 'Atuação Contínua',
      role: 'Professor de Tecnologia da Informação',
      organization: 'Centro Paula Souza (ETEC / FATEC)',
      description:
        'Docência no Ensino Médio com Habilitação Técnica em Desenvolvimento de Sistemas (PW II, Arquitetura MVC, Git/GitHub, Banco de Dados e Projetos de TCC).',
      type: 'teaching' as const,
    },
    {
      period: 'Atuação Contínua',
      role: 'Sócio & Arquiteto de Software',
      organization: 'A&D Soluções em Tecnologia',
      description:
        'Consultoria estratégica em T.I.C., desenvolvimento de aplicações web modernas, refatoração de sistemas legados e soluções personalizadas para empresas.',
      type: 'industry' as const,
    },
  ],
};
