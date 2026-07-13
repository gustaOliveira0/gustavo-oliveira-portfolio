/**
 * Deep technical write-ups shown when a project card is expanded.
 *
 * Everything here is grounded in what the résumé and work history actually
 * show — no invented endpoints or numbers. Roles with thinner evidence get
 * shorter sections rather than padded ones.
 */

type Bi = { en: string; pt: string };
type BiList = { en: string[]; pt: string[] };
type Qa = { problem: Bi; solution: Bi };

export type ProjectDetail = {
	role: Bi;
	timeline: Bi;
	summary: Bi;
	/** Architecture / engineering decisions and why they were taken. */
	architecture: BiList;
	/** Hard problems and how they were solved. */
	challenges: Qa[];
	/** Verifiable outcomes. */
	results: BiList;
	/** Grouped stack, so a reader can scan the surface area quickly. */
	stack: { label: Bi; items: string[] }[];
};

export const projectDetails: Record<string, ProjectDetail> = {
	"databricks-ingestion": {
		role: { en: "Junior Data Engineer", pt: "Engenheiro de Dados Jr." },
		timeline: { en: "Jun 2026 → present · remote", pt: "Jun 2026 → atual · remoto" },
		summary: {
			en: "Current role: building the ingestion layer that brings historical Salesforce data into Databricks on GCP, supporting the Landing → Bronze stage of a Medallion architecture and investigating failures coming out of upstream Kafka pipelines.",
			pt: "Papel atual: construção da camada de ingestão que traz dados históricos do Salesforce para o Databricks no GCP, apoiando a etapa Landing → Bronze de uma arquitetura Medallion e investigando falhas vindas de pipelines Kafka a montante.",
		},
		architecture: {
			en: [
				"Built PySpark pipelines reading Salesforce data and writing Parquet files into the Landing → Bronze stage of a Medallion architecture.",
				"Applied ID-based deduplication, metadata tracking and Type-1 SCD MERGE logic so Bronze tables reflect the latest state without losing history where it matters.",
				"Investigated failures in incremental loads, permission issues and date-parsing problems on ingestion fed by upstream Kafka pipelines.",
				"Created 62 parametrized notebooks covering the different Salesforce objects, instead of maintaining one notebook per object.",
			],
			pt: [
				"Construí pipelines em PySpark lendo dados do Salesforce e gravando arquivos Parquet na etapa Landing → Bronze de uma arquitetura Medallion.",
				"Apliquei deduplicação por ID, rastreamento de metadados e lógica de MERGE SCD Tipo 1 para que as tabelas Bronze reflitam o estado mais recente sem perder histórico onde importa.",
				"Investiguei falhas em cargas incrementais, problemas de permissão e parsing de datas na ingestão alimentada por pipelines Kafka a montante.",
				"Criei 62 notebooks parametrizados cobrindo os diferentes objetos do Salesforce, em vez de manter um notebook por objeto.",
			],
		},
		challenges: [
			{
				problem: {
					en: "Each Salesforce object needed its own ingestion notebook, which doesn't scale as objects are added.",
					pt: "Cada objeto do Salesforce exigia seu próprio notebook de ingestão, o que não escala conforme novos objetos são adicionados.",
				},
				solution: {
					en: "Parametrized the notebook so a single template drives ingestion for any object, producing 62 object-specific runs instead of 62 hand-maintained notebooks.",
					pt: "Parametrizei o notebook para que um único template conduza a ingestão de qualquer objeto, gerando 62 execuções específicas por objeto em vez de 62 notebooks mantidos manualmente.",
				},
			},
		],
		results: {
			en: [
				"62 parametrized notebooks built for Salesforce object ingestion",
				"Landing → Bronze Medallion loads with ID deduplication and Type-1 SCD merge",
				"Incremental-load, permission and date-parsing failures diagnosed against Kafka-fed ingestion",
			],
			pt: [
				"62 notebooks parametrizados construídos para ingestão de objetos Salesforce",
				"Cargas Landing → Bronze na arquitetura Medallion com deduplicação por ID e merge SCD Tipo 1",
				"Falhas de carga incremental, permissão e parsing de data diagnosticadas na ingestão alimentada por Kafka",
			],
		},
		stack: [
			{ label: { en: "Data Engineering", pt: "Engenharia de Dados" }, items: ["PySpark", "Databricks", "Parquet", "Medallion Architecture"] },
			{ label: { en: "Cloud", pt: "Cloud" }, items: ["GCP"] },
			{ label: { en: "Streaming", pt: "Streaming" }, items: ["Kafka"] },
		],
	},

	"duvens-analytics": {
		role: { en: "Backend / Computer Vision Developer — contract", pt: "Desenvolvedor Backend / Visão Computacional — contrato" },
		timeline: { en: "Feb 2026 – May 2026 · remote", pt: "Fev 2026 – Mai 2026 · remoto" },
		summary: {
			en: "Computer-vision solutions for Duvens Analytics, a maritime safety analytics platform delivered for Petrobras: detection workflows for fallen individuals, PPE compliance and danger-zone violations, built with Python, YOLO and Roboflow directly against real vessel camera footage.",
			pt: "Soluções de visão computacional para o Duvens Analytics, plataforma de análise de segurança marítima entregue para a Petrobras: fluxos de detecção de pessoas caídas, uso de EPI e violações de zonas de perigo, construídos com Python, YOLO e Roboflow diretamente sobre imagens reais de câmeras de embarcações.",
		},
		architecture: {
			en: [
				"Used Python, YOLO and Roboflow to build detection workflows for fallen individuals, PPE compliance and danger-zone violations from vessel camera footage.",
				"Integrated H.264 video decoding and FFmpeg-based processing with GPU-accelerated inference to keep the pipeline usable in an operational safety-monitoring context.",
				"Adapted detection logic to variable camera angles, lighting, occlusion and multi-person scenes typical of maritime footage.",
				"Translated safety rules (PPE required, danger zones) into maintainable application logic, working with engineering stakeholders to get it production-ready.",
			],
			pt: [
				"Usei Python, YOLO e Roboflow para construir fluxos de detecção de pessoas caídas, uso de EPI e violações de zona de perigo a partir de imagens de câmeras de embarcações.",
				"Integrei decodificação de vídeo H.264 e processamento baseado em FFmpeg com inferência acelerada por GPU, para manter o pipeline utilizável num contexto operacional de monitoramento de segurança.",
				"Adaptei a lógica de detecção para ângulos de câmera variáveis, iluminação, oclusão e cenas com múltiplas pessoas, típicos das imagens marítimas.",
				"Traduzi regras de segurança (uso obrigatório de EPI, zonas de perigo) em lógica de aplicação sustentável, trabalhando com stakeholders de engenharia para deixar a solução pronta para produção.",
			],
		},
		challenges: [
			{
				problem: {
					en: "Vessel footage constantly changes camera angle, lighting and occlusion, and scenes often have multiple people at once.",
					pt: "As imagens das embarcações mudam constantemente de ângulo de câmera, iluminação e oclusão, com cenas frequentemente com várias pessoas ao mesmo tempo.",
				},
				solution: {
					en: "Adapted the detection logic for these variable conditions and validated it against real vessel footage, rather than tuning against a single clean scenario.",
					pt: "Adaptei a lógica de detecção para essas condições variáveis e validei contra imagens reais das embarcações, em vez de ajustar para um único cenário limpo.",
				},
			},
		],
		results: {
			en: [
				"Detection workflows shipped for fallen-person, PPE compliance and danger-zone violations",
				"H.264/FFmpeg video processing integrated with GPU-accelerated inference",
				"Detection logic adapted for variable camera angle, lighting, occlusion and multi-person scenes",
			],
			pt: [
				"Fluxos de detecção entregues para pessoa caída, uso de EPI e violação de zona de perigo",
				"Processamento de vídeo H.264/FFmpeg integrado com inferência acelerada por GPU",
				"Lógica de detecção adaptada para variação de ângulo de câmera, iluminação, oclusão e múltiplas pessoas em cena",
			],
		},
		stack: [
			{ label: { en: "Computer Vision", pt: "Visão Computacional" }, items: ["YOLO", "Roboflow", "PyTorch", "OpenCV"] },
			{ label: { en: "Video", pt: "Vídeo" }, items: ["FFmpeg", "H.264", "GPU inference"] },
			{ label: { en: "Backend", pt: "Backend" }, items: ["Python"] },
		],
	},

	"noleak-defence": {
		role: { en: "Backend / Computer Vision Developer", pt: "Desenvolvedor Backend / Visão Computacional" },
		timeline: { en: "May 2024 – present · remote", pt: "Mai 2024 – atual · remoto" },
		summary: {
			en: "Long-running engagement keeping a video-intelligence product healthy in production: chasing down computer-vision failure cases in scenes with multiple people, fixing defects with regression tests attached, and keeping the messaging/container layer that feeds the pipeline observable.",
			pt: "Atuação contínua mantendo um produto de inteligência de vídeo saudável em produção: investigando casos de falha de visão computacional em cenas com múltiplas pessoas, corrigindo defeitos com testes de regressão, e mantendo observável a camada de mensageria/containers que alimenta o pipeline.",
		},
		architecture: {
			en: [
				"Investigated computer-vision failure cases in multi-person scenarios and fixed the underlying defects, adding unit tests and regression safeguards so a fix doesn't silently break later.",
				"Monitored containerized services and the messaging infrastructure that feeds the vision pipeline in production.",
				"Built message producers to validate messaging pipelines, integrations and processing consistency end to end.",
				"Improved container performance, increasing the throughput of messages actually processed by the pipeline.",
			],
			pt: [
				"Investiguei casos de falha de visão computacional em cenários com múltiplas pessoas e corrigi os defeitos, adicionando testes unitários e salvaguardas de regressão para que uma correção não quebre silenciosamente depois.",
				"Monitorei serviços containerizados e a infraestrutura de mensageria que alimenta o pipeline de visão em produção.",
				"Construí produtores de mensagem para validar pipelines de mensageria, integrações e consistência de processamento ponta a ponta.",
				"Melhorei a performance dos containers, aumentando a taxa de mensagens efetivamente processadas pelo pipeline.",
			],
		},
		challenges: [
			{
				problem: {
					en: "Multi-person scenes were a recurring source of computer-vision misdetections in production.",
					pt: "Cenas com múltiplas pessoas eram uma fonte recorrente de erros de detecção de visão computacional em produção.",
				},
				solution: {
					en: "Worked independently across debugging, testing and performance optimization to isolate the failure cases and fix them with regression coverage, instead of patching symptoms one report at a time.",
					pt: "Atuei de forma independente em debugging, testes e otimização de performance para isolar os casos de falha e corrigi-los com cobertura de regressão, em vez de remendar sintomas um chamado por vez.",
				},
			},
		],
		results: {
			en: [
				"Improved computer-vision accuracy in multi-person scenes",
				"Unit tests and regression safeguards added around fixed defects",
				"Higher message-processing throughput after container performance work",
				"Ongoing production support since May 2024",
			],
			pt: [
				"Melhoria da precisão de visão computacional em cenas com múltiplas pessoas",
				"Testes unitários e salvaguardas de regressão adicionados em torno dos defeitos corrigidos",
				"Maior taxa de processamento de mensagens após otimização dos containers",
				"Suporte contínuo em produção desde maio de 2024",
			],
		},
		stack: [
			{ label: { en: "Computer Vision", pt: "Visão Computacional" }, items: ["Python", "Model debugging", "Regression testing"] },
			{ label: { en: "Infra", pt: "Infra" }, items: ["Docker", "Containers", "RabbitMQ", "Kafka"] },
			{ label: { en: "Quality", pt: "Qualidade" }, items: ["Unit tests"] },
		],
	},

	"social-place": {
		role: { en: "Full Stack Developer", pt: "Desenvolvedor Full Stack" },
		timeline: { en: "Jan 2024 – Feb 2025 · Brazil", pt: "Jan 2024 – Fev 2025 · Brasil" },
		summary: {
			en: "A CRM built for segmented advertising, where the interesting part was making large record sets usable: fast search, sane pagination and analytics screens the commercial team could actually act on.",
			pt: "Um CRM construído para publicidade segmentada, em que a parte interessante era tornar grandes volumes de registros utilizáveis: busca rápida, paginação sensata e telas analíticas que o time comercial conseguia realmente usar.",
		},
		architecture: {
			en: [
				"Implemented REST endpoints and pagination to keep large record sets responsive instead of loading everything client-side.",
				"Optimized queries and search paths to improve performance when accessing records.",
				"Built analytics features that translated raw CRM data into something the commercial and operations teams could act on.",
			],
			pt: [
				"Implementei endpoints REST e paginação para manter grandes volumes de registros responsivos, em vez de carregar tudo no cliente.",
				"Otimizei consultas e caminhos de busca para melhorar a performance no acesso aos registros.",
				"Construí funcionalidades analíticas que transformaram dados brutos do CRM em algo que os times comercial e operacional conseguiam usar.",
			],
		},
		challenges: [],
		results: {
			en: [
				"REST endpoints, pagination and search optimization delivered for a production CRM",
				"Analytics functionality built to support commercial and operational decisions",
			],
			pt: [
				"Endpoints REST, paginação e otimização de busca entregues para um CRM em produção",
				"Funcionalidades analíticas construídas para apoiar decisões comerciais e operacionais",
			],
		},
		stack: [
			{ label: { en: "Backend", pt: "Backend" }, items: ["REST APIs", "SQL"] },
			{ label: { en: "Data", pt: "Dados" }, items: ["Pagination", "Search optimization", "Analytics"] },
		],
	},

	"vortex-labs": {
		role: { en: "Analyst / Frontend Developer", pt: "Analista / Desenvolvedor Frontend" },
		timeline: { en: "Feb 2024 – Mar 2025 · remote", pt: "Fev 2024 – Mar 2025 · remoto" },
		summary: {
			en: "Split role between requirements analyst and frontend developer: sat with clients to turn vague asks into technical flows, then documented the resulting APIs with Swagger and built the ReactJS/Redux interfaces that consumed them.",
			pt: "Papel dividido entre analista de requisitos e desenvolvedor frontend: conversei com clientes para transformar pedidos vagos em fluxos técnicos, documentei as APIs resultantes com Swagger e construí as interfaces ReactJS/Redux que as consumiam.",
		},
		architecture: {
			en: [
				"Ran requirements interviews and mapped technical flows and data integrations before any code was written.",
				"Documented APIs with Swagger/OpenAPI to standardize communication between frontend, backend and data services.",
				"Built dynamic ReactJS/Redux interfaces for responsive, data-driven applications.",
			],
			pt: [
				"Conduzi entrevistas de requisitos e mapeei fluxos técnicos e integrações de dados antes de qualquer código.",
				"Documentei APIs com Swagger/OpenAPI para padronizar a comunicação entre frontend, backend e serviços de dados.",
				"Construí interfaces dinâmicas em ReactJS/Redux para aplicações responsivas orientadas a dados.",
			],
		},
		challenges: [],
		results: {
			en: [
				"Requirements and technical flows mapped for client web platforms",
				"APIs standardized and documented via Swagger",
				"ReactJS/Redux interfaces delivered for responsive data consumption",
			],
			pt: [
				"Requisitos e fluxos técnicos mapeados para plataformas web de clientes",
				"APIs padronizadas e documentadas via Swagger",
				"Interfaces ReactJS/Redux entregues para consumo de dados responsivo",
			],
		},
		stack: [
			{ label: { en: "Frontend", pt: "Frontend" }, items: ["ReactJS", "Redux"] },
			{ label: { en: "API Docs", pt: "Docs de API" }, items: ["Swagger", "OpenAPI"] },
		],
	},

	zigurate: {
		role: { en: "Full Stack Developer", pt: "Desenvolvedor Full Stack" },
		timeline: { en: "Feb 2022 – Nov 2024 · remote", pt: "Fev 2022 – Nov 2024 · remoto" },
		summary: {
			en: "Nearly three years on Ruby on Rails management platforms, where the recurring theme was making the system safe to change: relational-database integrations, RabbitMQ queues to move heavy work off the request path, and automated tests guarding the business rules that mattered most.",
			pt: "Quase três anos em plataformas de gestão em Ruby on Rails, onde o tema recorrente era tornar o sistema seguro para mudar: integrações com bancos relacionais, filas RabbitMQ para tirar trabalho pesado do caminho da requisição, e testes automatizados protegendo as regras de negócio mais importantes.",
		},
		architecture: {
			en: [
				"Built management platforms in Ruby on Rails integrated with relational databases and external APIs.",
				"Implemented RabbitMQ queues for asynchronous processing, giving more control over data flow under load.",
				"Wrote automated tests to validate business rules and reduce regressions in critical functionality.",
			],
			pt: [
				"Construí plataformas de gestão em Ruby on Rails integradas a bancos de dados relacionais e APIs.",
				"Implementei filas com RabbitMQ para processamento assíncrono, com maior controle sobre os fluxos de dados.",
				"Criei testes automatizados para validar regras de negócio e reduzir regressões em funcionalidades críticas.",
			],
		},
		challenges: [],
		results: {
			en: [
				"RabbitMQ-based async processing delivered for critical workflows",
				"Automated test suite reducing regressions in core business rules",
				"Nearly 3 years of continuous delivery on the platform",
			],
			pt: [
				"Processamento assíncrono via RabbitMQ entregue para fluxos críticos",
				"Suíte de testes automatizados reduzindo regressões nas regras de negócio centrais",
				"Quase 3 anos de entrega contínua na plataforma",
			],
		},
		stack: [
			{ label: { en: "Backend", pt: "Backend" }, items: ["Ruby on Rails"] },
			{ label: { en: "Messaging", pt: "Mensageria" }, items: ["RabbitMQ"] },
			{ label: { en: "Quality", pt: "Qualidade" }, items: ["Automated tests"] },
		],
	},

	conexos: {
		role: { en: "Database Administrator", pt: "Administrador de Banco de Dados" },
		timeline: { en: "Sep 2021 – Dec 2022 · Brazil", pt: "Set 2021 – Dez 2022 · Brasil" },
		summary: {
			en: "Owned the database layer end to end: wrote the custom SQL behind operational and management reports, and went after the routines that were actually slow instead of throwing more hardware at the problem.",
			pt: "Responsável pela camada de banco de dados ponta a ponta: escrevi o SQL customizado por trás de relatórios operacionais e gerenciais, e fui atrás das rotinas que realmente eram lentas em vez de simplesmente adicionar mais hardware.",
		},
		architecture: {
			en: [
				"Developed custom SQL queries for operational and management reporting.",
				"Optimized data-access and load routines, reducing overall database load time by 65%.",
				"Managed large-scale data-migration processes with a focus on consistency, organization and availability of the data.",
			],
			pt: [
				"Desenvolvi consultas SQL customizadas para geração de relatórios operacionais e gerenciais.",
				"Otimizei rotinas de acesso e carregamento de dados, reduzindo o tempo de carregamento do banco em 65%.",
				"Gerenciei processos de migração de dados em larga escala, com foco em consistência, organização e disponibilidade.",
			],
		},
		challenges: [
			{
				problem: {
					en: "Database load times were slowing down reporting and day-to-day operations.",
					pt: "Os tempos de carregamento do banco estavam atrasando relatórios e a operação do dia a dia.",
				},
				solution: {
					en: "Profiled and rewrote the slow routines and queries directly, cutting load time by 65% instead of masking the symptom with caching alone.",
					pt: "Analisei e reescrevi diretamente as rotinas e consultas lentas, cortando o tempo de carregamento em 65% em vez de mascarar o sintoma só com cache.",
				},
			},
		],
		results: {
			en: [
				"65% reduction in database load time",
				"Large-scale data migrations delivered with consistency and availability preserved",
				"Custom SQL reporting adopted for operational and management decisions",
			],
			pt: [
				"Redução de 65% no tempo de carregamento do banco",
				"Migrações de dados em larga escala entregues preservando consistência e disponibilidade",
				"Relatórios SQL customizados adotados para decisões operacionais e gerenciais",
			],
		},
		stack: [
			{ label: { en: "Database", pt: "Banco de Dados" }, items: ["SQL", "Query optimization"] },
			{ label: { en: "Data", pt: "Dados" }, items: ["Data migration", "Reporting"] },
		],
	},

	scoutify: {
		role: { en: "Python Web Scraper Developer", pt: "Desenvolvedor Web Scraper Python" },
		timeline: { en: "Feb 2020 – Nov 2020 · United States, remote", pt: "Fev 2020 – Nov 2020 · Estados Unidos, remoto" },
		summary: {
			en: "Early-career remote engagement automating data collection for a US sports-industry client: scraping, cleaning and organizing company data into bases ready for downstream analysis.",
			pt: "Atuação remota no início de carreira automatizando a coleta de dados para um cliente do setor esportivo nos EUA: raspagem, limpeza e organização de dados de empresas em bases prontas para análise posterior.",
		},
		architecture: {
			en: [
				"Automated data collection and structuring for companies in the sports industry using Python.",
				"Organized bases with Pandas and Databricks, standardizing data for later analysis and use.",
				"Built repeatable ingestion flows to keep the data current without manual re-collection.",
			],
			pt: [
				"Automatizei a coleta e estruturação de dados de empresas do setor esportivo usando Python.",
				"Organizei bases utilizando Pandas e Databricks, padronizando os dados para análise e uso posterior.",
				"Construí fluxos de ingestão repetíveis para manter os dados atualizados sem recoleta manual.",
			],
		},
		challenges: [],
		results: {
			en: [
				"Automated collection pipeline delivered for a sports-industry dataset",
				"Repeatable ingestion and update flows built with Python, Pandas and Databricks",
			],
			pt: [
				"Pipeline de coleta automatizada entregue para base de dados do setor esportivo",
				"Fluxos repetíveis de ingestão e atualização construídos com Python, Pandas e Databricks",
			],
		},
		stack: [
			{ label: { en: "Automation", pt: "Automação" }, items: ["Python", "Web scraping"] },
			{ label: { en: "Data", pt: "Dados" }, items: ["Pandas", "Databricks"] },
		],
	},
};
