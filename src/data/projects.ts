export const projects = [
  {
    name: "ESECBR - Offensive Security",
    slug: "esecbr-offensive-security",
    links: {
      website: "https://esecbr.com.br",
    },
    imageURL: "/esecbr.avif",
    description:
      "Projeto full stack com landing page, blog e área de notícias para empresa de defesa cibernética.",
    tag: "Full Stack",
    date: "2025",
    techs: ["Next.js", "PayloadCMS", "MongoDB", "MinIO", "Coolify", "Resend"],
    details:
      "Solução completa de presença digital desenvolvida para a Esecbr. O projeto integra uma landing page, blog e portal de notícias em uma arquitetura robusta e escalável. Conta com um sistema de Newsletter integrado ao Resend, permitindo que usuários assinem e cancelem a assinatura facilmente. Utiliza Next.js para o frontend, PayloadCMS para gerenciamento de conteúdo, com dados no MongoDB e arquivos no MinIO, tudo orquestrado em uma VPS via Coolify.",
  },
  {
    name: "Mise en Place",
    slug: "mise-en-place",
    links: {
      website: "https://mise-en-place.vercel.app/",
    },
    imageURL: "/mise-en-place.avif",
    description:
      "Landing page para agência de marketing especializada em gastronomia, com seções de serviços, cases e formulário de contato integrado.",
    tag: "Landing Page",
    date: "2025",
    techs: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "React Hook Form",
    ],
    details:
      "Landing page desenvolvida para a Mise en Place, agência de marketing gastronômico. O projeto conta com seções completas de apresentação, serviços, portfólio de cases, depoimentos e contato. Possui integração com email via serverless function na Vercel, validação de formulário com Zod e react-hook-form, botão flutuante de WhatsApp para contato direto e design responsivo com Tailwind CSS.",
  },
  {
    name: "Quilombo Santa Rosa",
    slug: "quilombo-santa-rosa",
    links: {
      website: "https://quilombosantarosa.com.br",
    },
    imageURL: "/quilombo.avif",
    description:
      "Site institucional para a Fundação Quilombo Santa Rosa, com páginas de história, galeria, loja e contato.",
    tag: "Institucional",
    date: "2025",
    techs: ["Astro", "TypeScript", "Resend", "Nodemailer"],
    details:
      "Site institucional desenvolvido com Astro para a Fundação Quilombo Santa Rosa, preservando e divulgando o patrimônio cultural quilombola. O projeto conta com páginas de história, galeria fotográfica, loja, contato e carrossel de patrocinadores. Integração com Resend para envio de emails e geração de sitemap para otimização SEO.",
  },
  {
    name: "HM Gráfica Visual",
    slug: "hm-grafica-visual",
    links: {
      website: "https://hmgraficavisual.vercel.app/",
    },
    imageURL: "/hm.avif",
    description:
      "Landing page desenvolvida para a HM Gráfica Visual, uma empresa especializada em serviços de design, impressões e comunicação visual.",
    tag: "Landing Page",
    date: "2025",
    techs: ["Astro", "Tailwind CSS", "TypeScript"],
    details:
      "Landing page institucional desenvolvida com Astro para garantir alta performance e otimização para motores de busca (SEO). O site apresenta o portfólio completo da empresa, destacando serviços de design gráfico, impressões digitais, adesivos e banners. A interface, construída com Tailwind CSS, oferece uma experiência de navegação fluida e um design limpo que valoriza a identidade visual da marca.",
  },
  {
    name: "Lading Page de Psicologia",
    slug: "lp-psicologia",
    links: {
      github: "https://github.com/vinicius-dsr/psicologia-lp",
      website: "https://psicologia-lp.vercel.app/",
    },
    imageURL: "/psicologia.avif",
    description:
      "Case criada para escritório de psicologia ou psicólogos independentes.",
    tag: "Landing Page",
    date: "2024",
    techs: ["React", "Astro", "Tailwind CSS", "TypeScript"],
    details:
      "Landing page moderna e responsiva desenvolvida para profissionais de psicologia. O design minimalista e elegante transmite confiança e profissionalismo, essenciais para a área.",
  },
  {
    name: "ZapBot",
    slug: "zapbot",
    links: {
      github: "https://github.com/vinicius-dsr/zapBot",
    },
    imageURL: "/zapbot.avif",
    description:
      "ZapBot é um chatbot para WhatsApp que permite visualizar o status de conexão e o QR Code para autenticação via uma interface web simples.",
    tag: "Bot",
    date: "2025",
    techs: ["Node.js", "Express", "Socket.io", "whatsapp-web.js", "qrcode"],
    details:
      "Pode ser usado como case para diversos projetos, basta adicionar lógica ao bot, conecta-lo à um modelo de IA, banco de dados etc. As possibilidades são infinitas.",
  },
  {
    name: "Fluxo de Autenticação com Expo e Clerk",
    slug: "expo-clerk-auth",
    links: {
      github: "https://github.com/vinicius-dsr/expo-auth-clerk",
    },
    imageURL: "/expo-auth-clerk.avif",
    description:
      "Este projeto demonstra um fluxo de autenticação usando Expo e Clerk em uma aplicação React Native.",
    tag: "App Mobile",
    date: "2024",
    techs: ["React Native", "Expo", "Expo Router", "Clerk"],
    details:
      "Login com Google OAuth, rotas protegidas para usuário autenticados, rotas públicas para usuários não autênticados e gerenciamento de sessão e perfil do usuário. Ideal para quem deseja implementar autenticação segura em aplicativos móveis.",
  },
  {
    name: "Reis & Reis - Advocacia",
    slug: "reis-reis-advocacia",
    links: {
      post: "https://www.instagram.com/p/C7P1yYsRGk7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    imageURL: "/project-adv.avif",
    description:
      "Protótipo de site para escritório de advocacia. Designer feito em Figma sem versão funcional no momento",
    tag: "Lading Page",
    date: "2024",
    techs: ["Figma", "UI/UX Design"],
    details:
      "Design elegante e profissional para um escritório de advocacia, focado em transmitir confiança e seriedade. O protótipo inclui páginas de serviços, equipe, contato e blog, com uma navegação intuitiva e experiência de usuário refinada.",
  },
  {
    name: "Cardápio Digital",
    slug: "cardapio-digital",
    links: {
      github: "https://github.com/vinicius-dsr/cardapio-digital",
      website: "https://cardapio-digital-sable.vercel.app/",
    },
    imageURL: "/project-cardapio.avif",
    description:
      "Projeto de cardápio digital para restaurantes, bares e lanchonetes. Feito para fins didátivos com fotos, valores e informações fictícias.",
    tag: "E-commerce",
    date: "2024",
    techs: ["HTML", "JavasScript", "Tailwind CSS"],
    details:
      "Solução de cardápio digital interativo para estabelecimentos gastronômicos. Permite aos clientes visualizar os itens do menu com fotos, descrições e preços, além de realizar pedidos diretamente pelo aplicativo. Inclui funcionalidades de filtragem por categoria e busca.",
  },
  {
    name: "Dieta AI",
    slug: "dieta-ai",
    links: {
      github: "https://github.com/vinicius-dsr/dietaapp-frontend",
    },
    imageURL: "/dieta-ai.avif",
    description:
      "Aplicativo mobile para controle de dieta geradas por inteligência artificial.",
    tag: "App Mobile",
    date: "2024",
    techs: [
      "React Native",
      "Expo",
      "TypeScript",
      "API RESTful",
      "Google Generative AI",
      "react-hook-form",
      "Zod",
      "Axios",
    ],
    details:
      "Aplicativo móvel inovador que utiliza inteligência artificial para gerar planos de dieta personalizados. Os usuários podem inserir suas preferências alimentares, restrições e objetivos, e o aplicativo cria um plano alimentar adaptado às suas necessidades. Inclui recursos de acompanhamento de progresso e lembretes de refeições.",
  },
];
