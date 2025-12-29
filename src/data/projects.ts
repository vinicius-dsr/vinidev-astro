
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
		details: "Solução completa de presença digital desenvolvida para a Esecbr. O projeto integra uma landing page, blog e portal de notícias em uma arquitetura robusta e escalável. Conta com um sistema de Newsletter integrado ao Resend, permitindo que usuários assinem e cancelem a assinatura facilmente. Utiliza Next.js para o frontend, PayloadCMS para gerenciamento de conteúdo, com dados no MongoDB e arquivos no MinIO, tudo orquestrado em uma VPS via Coolify.",
	},
		{
		name: "Telemedicina SaaS",
		slug: "telemedicina-saas",
		links: {
			website: "https://telemedicina-two.vercel.app/",
		},
		imageURL: "/telemedicina.avif",
		description:
			"Plataforma completa de telemedicina construída com Next.js e shadcn/ui. O projeto oferece landing page institucional, fluxo de autenticação, dashboards para pacientes, médicos e administradores, gestão de consultas, planos de assinatura, prontuários e notificações.",
		tag: "Full Stack",
		date: "2025",
		techs: ["Next.js","shadcn/ui","Prisma ORM","PostgreSQL","Zod","React Hook Form", "Next Auth", "Tailwind CSS"],
		details: "Lading page responsiva com CTA para login/cadastro, menu mobile e FAQ dem acordeão. Autenticação via NextAuth com Prisma Adapter e páginas protegidas. Gestão de consultas com confirmação por médicos, novos status e notificações automáticas. Dashboards temáticos para cada perfil (cliente, médico, admin) com visual consistente e dark mode. Design system baseado em shadcn/ui.",
	},
			{
		name: "Aptus",
		slug: "aptus",
		links: {
			website: "https://aptus-eight.vercel.app/",
		},
		imageURL: "/aptus.avif",
		description:
			"Plataforma completa SaaS para geração automática de recursos de multas de trânsito com IA (Gemini 2.5 Flash), sistema de assinaturas e dashboard administrativo.",
		tag: "Full Stack",
		date: "2025",
		techs: [
			"Next.js 14",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"shadcn/ui",
			"Lucide Icons",
			"react-dropzone",
			"Next.js API Routes",
			"Prisma ORM",
			"PostgreSQL",
			"NextAuth.js",
			"bcryptjs",
			"Gemini 2.5 Flash",
			"Tesseract.js",
			"jsPDF",
			"Nodemailer",
		],
		details:
			"SaaS Completo: 4 planos de assinatura (Gratuito, Básico, Pro, Enterprise), Controle de limites por plano, Renovação automática mensal e Dashboard com métricas de uso. Sistema Administrativo: Gerenciamento de usuários (ativar/desativar), Estatísticas gerais do sistema, Visualização de todos os recursos e Controle de acessos (USER/ADMIN). Geração de Recursos: Upload de documentos (CNH, CRLV, Auto de Infração), OCR automático com Tesseract.js, Geração com Gemini 2.5 Flash, Geração de PDF profissional, Envio automático por email e Histórico completo. Interface Moderna: UI moderna com Tailwind CSS + shadcn/ui, Responsiva (mobile-first) e Performance otimizada.",
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
		details: "Landing page moderna e responsiva desenvolvida para profissionais de psicologia. O design minimalista e elegante transmite confiança e profissionalismo, essenciais para a área.",
	},
	{
		name: "Agenda Paragominas",
		slug: "agenda-paragominas",
			links: {
			github: "https://github.com/vinicius-dsr/agenda-paragominas",
		},
		imageURL: "/agenda-pgm.avif",
		description:
			"Projetos MVP criado como um hub digital onde contém em seu banco de dados vários estabelecimentos e serviços da cidade de Paragominas.",
		tag: "Web App",
		date: "2024",
		techs: ["React", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Zod", "TyperScript"],
		details: "Aplicação web completa que funciona como um diretório digital para a cidade de Paragominas. Permite aos usuários encontrar facilmente estabelecimentos, serviços e informações locais, com sistema de busca e categorização.",
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
		details: "Pode ser usado como case para diversos projetos, basta adicionar lógica ao bot, conecta-lo à um modelo de IA, banco de dados etc. As possibilidades são infinitas.",
	},
	{
		name: "Blog MDX",
		slug: "blog-mdx",
					links: {
			github: "https://github.com/vinicius-dsr/mdx-blog",
			website: "https://mdx-blog-psi.vercel.app/",
			post: "https://www.instagram.com/p/C7O6gnGOH9Y/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
		},
		imageURL: "/project-blog.avif",
		description:
			"Blog criado para fins didáticos, com o intuito de aprender e ensinar. Ele conta com artigos escritos em MDX, que é uma extensão do Markdown que permite incluir componentes React dentro do conteúdo.",
		tag: "Blog",
		date: "2024",
		techs: ["React", "Next.js", "MDX", "Tailwind CSS", "Velite"],
		details: "Plataforma de blog moderna que utiliza MDX para criar conteúdo rico e interativo. Permite a integração de componentes React diretamente nos artigos, oferecendo uma experiência de leitura dinâmica e personalizada.",
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
		details: "Login com Google OAuth, rotas protegidas para usuário autenticados, rotas públicas para usuários não autênticados e gerenciamento de sessão e perfil do usuário. Ideal para quem deseja implementar autenticação segura em aplicativos móveis.",
	},
	{
		name: "Reis & Reis - Advocacia",
		slug: "reis-reis-advocacia",
					links: {
			post: "https://www.instagram.com/p/C7P1yYsRGk7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
		},
		imageURL: "/project-adv.avif",
		description:
			"Protótipo de site para escritório de advocacia. Designer feito em Figma sem versão funcional no momento",
		tag: "Lading Page",
		date: "2024",
		techs: ["Figma", "UI/UX Design"],
		details: "Design elegante e profissional para um escritório de advocacia, focado em transmitir confiança e seriedade. O protótipo inclui páginas de serviços, equipe, contato e blog, com uma navegação intuitiva e experiência de usuário refinada.",
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
		details: "Solução de cardápio digital interativo para estabelecimentos gastronômicos. Permite aos clientes visualizar os itens do menu com fotos, descrições e preços, além de realizar pedidos diretamente pelo aplicativo. Inclui funcionalidades de filtragem por categoria e busca.",
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
		techs: ["React Native", "Expo", "TypeScript", "API RESTful", "Google Generative AI", "react-hook-form", "Zod", "Axios"],
		details: "Aplicativo móvel inovador que utiliza inteligência artificial para gerar planos de dieta personalizados. Os usuários podem inserir suas preferências alimentares, restrições e objetivos, e o aplicativo cria um plano alimentar adaptado às suas necessidades. Inclui recursos de acompanhamento de progresso e lembretes de refeições.",
	},
];
