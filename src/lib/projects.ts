export type Project = {
	slug: string;
	title: string;
	/** Monospace overline shown above the title, e.g. "MARKETPLACE / 2026". */
	category: { en: string; pt: string };
	year: string;
	description: { en: string; pt: string };
	/** One hard number or outcome. Rendered as the card's highlight. */
	metric: { en: string; pt: string };
	tags: string[];
	/** Painted-hover accent. Two stops so the fill reads as a gradient. */
	accent: [string, string];
	liveUrl?: string;
	githubUrl?: string;
	imageUrl?: string;
	featured?: boolean;
};

export const projects: Project[] = [
	{
		slug: "databricks-ingestion",
		title: "Salesforce → Databricks Ingestion",
		category: { en: "Data Engineering · Databricks", pt: "Engenharia de Dados · Databricks" },
		year: "2026",
		description: {
			en: "Historical Salesforce data ingestion into Databricks on GCP: PySpark and Parquet pipelines feeding the Landing → Bronze layer of a Medallion architecture, with ID-based deduplication, metadata tracking and Type-1 SCD merges.",
			pt: "Ingestão de dados históricos do Salesforce no Databricks (GCP): pipelines em PySpark e Parquet alimentando a camada Landing → Bronze de uma arquitetura Medallion, com deduplicação por ID, rastreamento de metadados e merges SCD Tipo 1.",
		},
		metric: {
			en: "62 parametrized notebooks built for Salesforce object ingestion",
			pt: "62 notebooks parametrizados construídos para ingestão de objetos Salesforce",
		},
		tags: ["PySpark", "Databricks", "GCP", "Parquet", "Kafka", "Medallion Architecture"],
		accent: ["#22c55e", "#0ea5e9"],
		featured: true,
	},
	{
		slug: "duvens-analytics",
		title: "Duvens Analytics — Petrobras Maritime Safety",
		category: { en: "Computer Vision · Maritime Safety", pt: "Visão Computacional · Segurança Marítima" },
		year: "2026",
		description: {
			en: "Computer-vision workflows for maritime camera streams, built via the Duvens Analytics platform for Petrobras: detecting fallen individuals, PPE compliance and danger-zone violations from vessel footage using YOLO and Roboflow.",
			pt: "Fluxos de visão computacional para câmeras marítimas, construídos na plataforma Duvens Analytics para a Petrobras: detecção de pessoas caídas, uso de EPIs e violações de zonas de perigo em embarcações usando YOLO e Roboflow.",
		},
		metric: {
			en: "Detection workflows for fallen-person, PPE compliance and danger-zone violations shipped to production camera footage",
			pt: "Fluxos de detecção de pessoa caída, uso de EPI e violação de zona de perigo entregues para câmeras de produção",
		},
		tags: ["Python", "YOLO", "Roboflow", "Computer Vision", "FFmpeg", "GPU Inference"],
		accent: ["#06b6d4", "#6366f1"],
		featured: true,
	},
	{
		slug: "noleak-defence",
		title: "Noleak Defence",
		category: { en: "Backend · Computer Vision", pt: "Backend · Visão Computacional" },
		year: "2024",
		description: {
			en: "Backend and computer-vision maintenance for a production video-intelligence system: investigating detection failures in multi-person scenes, monitoring containers and messaging services, and validating pipelines with custom message producers.",
			pt: "Manutenção de backend e visão computacional para um sistema de inteligência de vídeo em produção: investigação de falhas de detecção em cenas com múltiplas pessoas, monitoramento de containers e serviços de mensageria, e validação de pipelines com produtores de mensagem customizados.",
		},
		metric: {
			en: "Ongoing production support since 2024 — containers, messaging pipelines and computer-vision accuracy",
			pt: "Suporte contínuo em produção desde 2024 — containers, pipelines de mensageria e precisão de visão computacional",
		},
		tags: ["Python", "Computer Vision", "Docker", "RabbitMQ", "Kafka", "Unit Testing"],
		accent: ["#8b5cf6", "#6366f1"],
		featured: true,
	},
	{
		slug: "social-place",
		title: "Social Place CRM",
		category: { en: "CRM · AdTech", pt: "CRM · AdTech" },
		year: "2024",
		description: {
			en: "CRM for targeted advertising: backend endpoints, pagination, search optimization and analytics features to support commercial and operational decisions.",
			pt: "CRM para publicidade segmentada: endpoints de backend, paginação, otimização de buscas e funcionalidades analíticas para apoiar decisões comerciais e operacionais.",
		},
		metric: {
			en: "REST endpoints, pagination and search optimization delivered for a production CRM",
			pt: "Endpoints REST, paginação e otimização de buscas entregues para um CRM em produção",
		},
		tags: ["REST APIs", "SQL", "Pagination", "Analytics", "Full Stack"],
		accent: ["#f97316", "#eab308"],
	},
	{
		slug: "vortex-labs",
		title: "Vortex Labs Solutions",
		category: { en: "Requirements · Frontend", pt: "Requisitos · Frontend" },
		year: "2024",
		description: {
			en: "Requirements gathering and frontend development for web platforms: client interviews, technical flows, Swagger-documented APIs and dynamic ReactJS/Redux interfaces.",
			pt: "Levantamento de requisitos e desenvolvimento frontend para plataformas web: entrevistas com clientes, fluxos técnicos, APIs documentadas com Swagger e interfaces dinâmicas em ReactJS/Redux.",
		},
		metric: {
			en: "Requirements-to-flow analysis plus React/Redux interfaces, backed by Swagger-documented APIs",
			pt: "Análise de requisitos a fluxo, mais interfaces React/Redux, apoiadas por APIs documentadas com Swagger",
		},
		tags: ["ReactJS", "Redux", "Swagger/OpenAPI", "Requirements Analysis"],
		accent: ["#22c55e", "#06b6d4"],
	},
	{
		slug: "zigurate",
		title: "Zigurate",
		category: { en: "Full Stack · Ruby on Rails", pt: "Full Stack · Ruby on Rails" },
		year: "2022",
		description: {
			en: "Management platforms built in Ruby on Rails with relational-database integration, RabbitMQ queues for asynchronous processing and automated tests protecting critical business rules.",
			pt: "Plataformas de gestão construídas em Ruby on Rails com integração a bancos de dados relacionais, filas RabbitMQ para processamento assíncrono e testes automatizados protegendo regras de negócio críticas.",
		},
		metric: {
			en: "Async processing via RabbitMQ plus automated tests across critical business rules",
			pt: "Processamento assíncrono via RabbitMQ e testes automatizados sobre regras de negócio críticas",
		},
		tags: ["Ruby on Rails", "RabbitMQ", "Automated Testing", "SQL"],
		accent: ["#ef4444", "#f97316"],
	},
	{
		slug: "conexos",
		title: "Conexos",
		category: { en: "Database Administration", pt: "Administração de Banco de Dados" },
		year: "2021",
		description: {
			en: "Database administration for a Brazilian company: custom SQL reporting queries, large-scale data migrations and query/routine optimization that cut database load time by 65%.",
			pt: "Administração de banco de dados para empresa brasileira: consultas SQL customizadas para relatórios, migrações de dados em larga escala e otimização de rotinas que reduziu o tempo de carregamento do banco em 65%.",
		},
		metric: {
			en: "65% reduction in database load time via targeted query and routine optimization",
			pt: "Redução de 65% no tempo de carregamento do banco via otimização direcionada de rotinas e consultas",
		},
		tags: ["SQL", "Database Optimization", "Data Migration", "Reporting"],
		accent: ["#0ea5e9", "#14b8a6"],
	},
	{
		slug: "scoutify",
		title: "Scoutify",
		category: { en: "Data Automation · Web Scraping", pt: "Automação de Dados · Web Scraping" },
		year: "2020",
		description: {
			en: "Automated data collection for a US sports-industry client: Python scraping pipelines and Pandas/Databricks organization turning raw web data into structured, analysis-ready datasets.",
			pt: "Coleta automatizada de dados para cliente do setor esportivo nos EUA: pipelines de scraping em Python e organização com Pandas/Databricks transformando dados brutos da web em bases estruturadas e prontas para análise.",
		},
		metric: {
			en: "Automated collection and structuring of sports-industry datasets with Python, Pandas and Databricks",
			pt: "Coleta e estruturação automatizada de bases do setor esportivo com Python, Pandas e Databricks",
		},
		tags: ["Python", "Web Scraping", "Pandas", "Databricks"],
		accent: ["#a855f7", "#ec4899"],
	},
];
