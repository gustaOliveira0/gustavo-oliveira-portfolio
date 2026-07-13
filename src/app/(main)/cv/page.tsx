"use client";

import {
	Mail,
	Github,
	MapPin,
	Phone,
	Download,
	Printer,
	ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

type SkillRowData = { label: string; value: string };
type JobData = {
	company: string;
	companyMeta?: string;
	title: string;
	period: string;
	location: string;
	bullets: string[];
};
type ProjectData = { title: string; url?: string; description: string };

type CVContent = {
	role: string;
	back: string;
	download: string;
	print: string;
	pdfHref: string;
	openToRemote: string;
	sections: {
		summary: string;
		skills: string;
		experience: string;
		projects: string;
		education: string;
	};
	summary: string;
	skills: SkillRowData[];
	jobs: JobData[];
	projects: ProjectData[];
	projectsFootnote: string;
	educationSchool: string;
	educationPeriod: string;
	educationDegree: string;
};

const cv: Record<"en" | "pt", CVContent> = {
	en: {
		role: "Full Stack Engineer · AI & Computer Vision (Python, YOLO/PyTorch, Databricks, Ruby on Rails)",
		back: "Back to portfolio",
		download: "Download PDF",
		print: "Print",
		pdfHref: "/cv/Gustavo-Oliveira-CV-EN.pdf",
		openToRemote: "Open to Remote",
		sections: {
			summary: "Summary",
			skills: "Technical Skills",
			experience: "Experience",
			projects: "Selected Projects",
			education: "Education",
		},
		summary:
			"Full Stack Engineer with 6+ years of professional experience across backend, computer vision, AI and data engineering. Built YOLO/PyTorch computer-vision pipelines for Petrobras maritime safety (Duvens Analytics) — detecting fallen individuals, PPE compliance and danger-zone violations from vessel camera footage — and currently build PySpark/Databricks ingestion pipelines on GCP (Medallion architecture, 62 parametrized notebooks). Production backend experience in Ruby on Rails, Django/Python and Node.js, with SQL/NoSQL databases, RabbitMQ/Kafka messaging, Docker/Kubernetes and CI/CD. Started in IT in 2021 as a database administrator, cutting database load time by 65% through query and routine optimization. Fluent English, native Portuguese, remote-first.",
		skills: [
			{
				label: "Languages",
				value: "Python, SQL, Ruby, JavaScript / TypeScript (working knowledge)",
			},
			{
				label: "AI & Computer Vision",
				value:
					"LLMs, Generative AI, Azure OpenAI, RAG, AI Agents, Prompt Engineering, YOLO, PyTorch, TensorFlow, OpenCV, Roboflow",
			},
			{
				label: "Data & ML Engineering",
				value: "PySpark, Databricks, Pandas, Parquet, Medallion Architecture",
			},
			{
				label: "Backend",
				value:
					"Django, Ruby on Rails, Node.js, REST APIs, GraphQL, Swagger / OpenAPI",
			},
			{
				label: "Databases",
				value: "SQL, PostgreSQL, MySQL, Oracle, MongoDB, NoSQL",
			},
			{
				label: "Messaging, Cloud & DevOps",
				value:
					"Kafka, RabbitMQ, Docker, Kubernetes, Terraform, CI/CD, AWS, GCP, Azure, Apache Airflow (working knowledge)",
			},
			{
				label: "Frontend (working knowledge)",
				value: "TypeScript, JavaScript, ReactJS, Redux, Angular",
			},
			{
				label: "Languages (spoken)",
				value: "Portuguese (Native), English (Advanced / C1)",
			},
		],
		jobs: [
			{
				company: "Databricks Project",
				title: "Junior Data Engineer",
				period: "June 2026 — Present",
				location: "Remote",
				bullets: [
					"Ingest historical Salesforce data into Databricks (GCP) using PySpark and Parquet files, supporting Landing → Bronze loads in a Medallion architecture with ID-based deduplication, metadata tracking and Type-1 SCD merges.",
					"Investigate failures in incremental loads, permission issues and date-parsing problems on ingestion fed by upstream Kafka pipelines.",
					"Built 62 parametrized notebooks covering the different Salesforce objects.",
				],
			},
			{
				company: "TELNAV",
				companyMeta: "Computer Vision Systems",
				title: "Backend Developer",
				period: "February 2026 — May 2026",
				location: "Remote, Contract",
				bullets: [
					"Developed computer-vision solutions for Duvens Analytics, a maritime safety analytics platform delivered for Petrobras, using Python, YOLO and Roboflow.",
					"Built detection workflows for fallen individuals, PPE compliance and danger-zone violations in real vessel camera footage.",
					"Integrated H.264 video processing and FFmpeg-based workflows with GPU-accelerated inference for operational safety monitoring.",
					"Adapted detection logic for variable camera angles, lighting, occlusion and multiple people in the scene.",
				],
			},
			{
				company: "Noleak Defence",
				companyMeta: "Computer Vision Systems",
				title: "Backend Developer",
				period: "May 2024 — Present",
				location: "Remote",
				bullets: [
					"Investigated failure cases and improved computer-vision accuracy in multi-person scenarios.",
					"Fixed application and vision-pipeline defects while adding unit tests and regression safeguards.",
					"Monitored containerized services and messaging infrastructure supporting production workloads.",
					"Built message producers and validation components for messaging pipelines, improving throughput and processing efficiency.",
				],
			},
			{
				company: "Social Place Tecnologia",
				title: "Full Stack Developer",
				period: "January 2024 — February 2025",
				location: "Brazil",
				bullets: [
					"Developed backend APIs and analytical CRM features for targeted advertising, including pagination and search optimization.",
					"Built data-driven functionality to support operational and business decision-making.",
				],
			},
			{
				company: "Vortex Labs Solutions",
				title: "Analyst / Frontend Developer",
				period: "February 2024 — March 2025",
				location: "Remote",
				bullets: [
					"Mapped technical requirements, data flows and integrations to support web-platform development.",
					"Documented APIs with Swagger and standardized communication between frontend, backend and data services.",
					"Built dynamic interfaces with ReactJS and Redux for responsive, data-driven applications.",
				],
			},
			{
				company: "Zigurate",
				title: "Full Stack Developer",
				period: "February 2022 — November 2024",
				location: "Remote",
				bullets: [
					"Built management platforms in Ruby on Rails integrated with relational databases and APIs.",
					"Implemented RabbitMQ queues for asynchronous processing and greater control over data flow.",
					"Wrote automated tests to validate business rules and reduce regressions in critical features.",
				],
			},
			{
				company: "Conexos",
				title: "Database Administrator",
				period: "September 2021 — December 2022",
				location: "Brazil",
				bullets: [
					"Developed custom SQL queries for operational and management reporting.",
					"Optimized data-access and load routines, reducing database load time by 65%.",
					"Managed large-scale data-migration processes with a focus on consistency, organization and availability.",
				],
			},
			{
				company: "Scoutify",
				title: "Python Web Scraper",
				period: "February 2020 — November 2020",
				location: "United States, Remote",
				bullets: [
					"Automated data collection and structuring for sports-industry companies using Python.",
					"Organized datasets with Pandas and Databricks, standardizing data for analysis and later use.",
				],
			},
		],
		projects: [
			{
				title: "Salesforce → Databricks Ingestion",
				description:
					"PySpark/Parquet pipelines into a Landing → Bronze Medallion architecture on GCP, with ID deduplication and Type-1 SCD merges; 62 parametrized notebooks.",
			},
			{
				title: "Duvens Analytics (Petrobras)",
				description:
					"Computer vision with YOLO and Roboflow for maritime safety — fallen-person, PPE compliance and danger-zone detection from vessel camera footage.",
			},
			{
				title: "Noleak Defence",
				description:
					"Ongoing computer-vision and backend production support — container/messaging monitoring, defect fixes with regression tests.",
			},
			{
				title: "Social Place CRM",
				description:
					"REST endpoints, pagination and analytics features for a segmented-advertising CRM.",
			},
			{
				title: "Vortex Labs Solutions",
				description:
					"Requirements analysis, Swagger-documented APIs and ReactJS/Redux interfaces for web platforms.",
			},
			{
				title: "Zigurate",
				description:
					"Ruby on Rails management platforms with RabbitMQ asynchronous processing and automated tests.",
			},
			{
				title: "Conexos",
				description:
					"65% database load-time reduction via SQL query and routine optimization, plus large-scale data migrations.",
			},
			{
				title: "Scoutify",
				description:
					"Automated Python/Pandas/Databricks data collection for a US sports-industry client.",
			},
		],
		projectsFootnote: "Full portfolio: ",
		educationSchool: "Instituto Federal do Espírito Santo",
		educationPeriod: "2020 — 2023",
		educationDegree:
			"Associate's Degree in Systems Analysis and Development (CST — Análise e Desenvolvimento de Sistemas).",
	},
	pt: {
		role: "Engenheiro Full Stack · IA & Visão Computacional (Python, YOLO/PyTorch, Databricks, Ruby on Rails)",
		back: "Voltar ao portfólio",
		download: "Baixar PDF",
		print: "Imprimir",
		pdfHref: "/cv/Gustavo-Oliveira-CV-PT.pdf",
		openToRemote: "Aberto a Remoto",
		sections: {
			summary: "Resumo",
			skills: "Habilidades Técnicas",
			experience: "Experiência Profissional",
			projects: "Projetos Selecionados",
			education: "Formação",
		},
		summary:
			"Engenheiro Full Stack com 6+ anos de experiência profissional em backend, visão computacional, IA e engenharia de dados. Construí pipelines de visão computacional com YOLO/PyTorch para segurança marítima na Petrobras (Duvens Analytics) — detectando pessoas caídas, uso de EPI e violações de zonas de perigo em câmeras de embarcações — e atualmente construo pipelines de ingestão PySpark/Databricks no GCP (arquitetura Medallion, 62 notebooks parametrizados). Experiência em backend de produção com Ruby on Rails, Django/Python e Node.js, com bancos SQL/NoSQL, mensageria RabbitMQ/Kafka, Docker/Kubernetes e CI/CD. Comecei em TI em 2021 como administrador de banco de dados, reduzindo o tempo de carregamento do banco em 65% por meio de otimização de consultas e rotinas. Inglês fluente, português nativo, remoto por padrão.",
		skills: [
			{
				label: "Linguagens",
				value: "Python, SQL, Ruby, JavaScript / TypeScript (conhecimento)",
			},
			{
				label: "IA & Visão Computacional",
				value:
					"LLMs, IA Generativa, Azure OpenAI, RAG, AI Agents, Prompt Engineering, YOLO, PyTorch, TensorFlow, OpenCV, Roboflow",
			},
			{
				label: "Dados & Engenharia de ML",
				value: "PySpark, Databricks, Pandas, Parquet, Arquitetura Medallion",
			},
			{
				label: "Backend",
				value:
					"Django, Ruby on Rails, Node.js, APIs REST, GraphQL, Swagger / OpenAPI",
			},
			{
				label: "Bancos de Dados",
				value: "SQL, PostgreSQL, MySQL, Oracle, MongoDB, NoSQL",
			},
			{
				label: "Mensageria, Cloud & DevOps",
				value:
					"Kafka, RabbitMQ, Docker, Kubernetes, Terraform, CI/CD, AWS, GCP, Azure, Apache Airflow (conhecimento)",
			},
			{
				label: "Frontend (conhecimento)",
				value: "TypeScript, JavaScript, ReactJS, Redux, Angular",
			},
			{
				label: "Idiomas",
				value: "Português (Nativo), Inglês (Avançado / C1)",
			},
		],
		jobs: [
			{
				company: "Projeto Databricks",
				title: "Engenheiro de Dados Jr.",
				period: "Junho 2026 — Atual",
				location: "Remoto",
				bullets: [
					"Ingestão de dados históricos do Salesforce no Databricks (GCP) com PySpark e arquivos Parquet, apoiando cargas Landing → Bronze na arquitetura Medallion, com deduplicação por ID, metadados e MERGE SCD Tipo 1.",
					"Investigação de falhas em cargas incrementais, permissões e parsing de datas na ingestão proveniente de pipelines Kafka.",
					"Criação de 62 notebooks parametrizados para os diferentes objetos do Salesforce.",
				],
			},
			{
				company: "TELNAV",
				companyMeta: "Sistemas de Visão Computacional",
				title: "Desenvolvedor Backend",
				period: "Fevereiro 2026 — Maio 2026",
				location: "Remoto, Contrato",
				bullets: [
					"Desenvolvimento de soluções de visão computacional para o Duvens Analytics, plataforma de análise de segurança marítima entregue para a Petrobras, com Python, YOLO e Roboflow.",
					"Construção de fluxos de detecção de pessoas caídas, uso de EPI e violações de zonas de perigo em imagens reais de câmeras de embarcações.",
					"Integração de processamento de vídeo H.264 e fluxos baseados em FFmpeg com inferência acelerada por GPU para monitoramento operacional de segurança.",
					"Adaptação da lógica de detecção para ângulos de câmera variáveis, iluminação, oclusão e múltiplas pessoas em cena.",
				],
			},
			{
				company: "Noleak Defence",
				companyMeta: "Sistemas de Visão Computacional",
				title: "Desenvolvedor Backend",
				period: "Maio 2024 — Atual",
				location: "Remoto",
				bullets: [
					"Investigação de casos de falha e melhoria da precisão de visão computacional em cenários com múltiplas pessoas.",
					"Correção de defeitos em aplicação e pipeline de visão, com adição de testes unitários e salvaguardas de regressão.",
					"Monitoramento de serviços containerizados e infraestrutura de mensageria que suportam cargas de trabalho em produção.",
					"Construção de produtores de mensagem e componentes de validação para pipelines de mensageria, melhorando throughput e eficiência de processamento.",
				],
			},
			{
				company: "Social Place Tecnologia",
				title: "Desenvolvedor Full Stack",
				period: "Janeiro 2024 — Fevereiro 2025",
				location: "Brasil",
				bullets: [
					"Desenvolvimento de APIs de backend e funcionalidades analíticas de CRM para publicidade segmentada, incluindo paginação e otimização de buscas.",
					"Construção de funcionalidades orientadas a dados para apoiar decisões operacionais e comerciais.",
				],
			},
			{
				company: "Vortex Labs Solutions",
				title: "Analista / Desenvolvedor Frontend",
				period: "Fevereiro 2024 — Março 2025",
				location: "Remoto",
				bullets: [
					"Mapeamento de requisitos técnicos, fluxos de dados e integrações para apoiar o desenvolvimento de plataformas web.",
					"Documentação de APIs com Swagger e padronização da comunicação entre frontend, backend e serviços de dados.",
					"Desenvolvimento de interfaces dinâmicas com ReactJS e Redux para aplicações responsivas orientadas a dados.",
				],
			},
			{
				company: "Zigurate",
				title: "Desenvolvedor Full Stack",
				period: "Fevereiro 2022 — Novembro 2024",
				location: "Remoto",
				bullets: [
					"Construção de plataformas de gestão em Ruby on Rails integradas a bancos de dados relacionais e APIs.",
					"Implementação de filas RabbitMQ para processamento assíncrono e maior controle sobre o fluxo de dados.",
					"Criação de testes automatizados para validar regras de negócio e reduzir regressões em funcionalidades críticas.",
				],
			},
			{
				company: "Conexos",
				title: "Administrador de Banco de Dados",
				period: "Setembro 2021 — Dezembro 2022",
				location: "Brasil",
				bullets: [
					"Desenvolvimento de consultas SQL customizadas para relatórios operacionais e gerenciais.",
					"Otimização de rotinas de acesso e carregamento de dados, reduzindo o tempo de carregamento do banco em 65%.",
					"Gestão de processos de migração de dados em larga escala, com foco em consistência, organização e disponibilidade.",
				],
			},
			{
				company: "Scoutify",
				title: "Web Scraper Python",
				period: "Fevereiro 2020 — Novembro 2020",
				location: "Estados Unidos, Remoto",
				bullets: [
					"Automação da coleta e estruturação de dados de empresas do setor esportivo com Python.",
					"Organização de bases com Pandas e Databricks, padronizando dados para análise e uso posterior.",
				],
			},
		],
		projects: [
			{
				title: "Ingestão Salesforce → Databricks",
				description:
					"Pipelines PySpark/Parquet numa arquitetura Medallion Landing → Bronze no GCP, com deduplicação por ID e merges SCD Tipo 1; 62 notebooks parametrizados.",
			},
			{
				title: "Duvens Analytics (Petrobras)",
				description:
					"Visão computacional com YOLO e Roboflow para segurança marítima — detecção de pessoa caída, uso de EPI e zona de perigo em imagens de embarcações.",
			},
			{
				title: "Noleak Defence",
				description:
					"Suporte contínuo em produção de visão computacional e backend — monitoramento de containers/mensageria, correção de defeitos com testes de regressão.",
			},
			{
				title: "Social Place CRM",
				description:
					"Endpoints REST, paginação e funcionalidades analíticas para um CRM de publicidade segmentada.",
			},
			{
				title: "Vortex Labs Solutions",
				description:
					"Análise de requisitos, APIs documentadas com Swagger e interfaces ReactJS/Redux para plataformas web.",
			},
			{
				title: "Zigurate",
				description:
					"Plataformas de gestão em Ruby on Rails com processamento assíncrono via RabbitMQ e testes automatizados.",
			},
			{
				title: "Conexos",
				description:
					"Redução de 65% no tempo de carregamento do banco via otimização de consultas e rotinas SQL, além de migrações de dados em larga escala.",
			},
			{
				title: "Scoutify",
				description:
					"Coleta automatizada de dados com Python/Pandas/Databricks para cliente do setor esportivo nos EUA.",
			},
		],
		projectsFootnote: "Portfólio completo: ",
		educationSchool: "Instituto Federal do Espírito Santo",
		educationPeriod: "2020 — 2023",
		educationDegree:
			"Curso Superior de Tecnologia (CST) em Análise e Desenvolvimento de Sistemas.",
	},
};

export default function CVPage() {
	const { language } = useLanguage();
	const c = cv[language];

	const handlePrint = () => {
		if (typeof window !== "undefined") {
			window.print();
		}
	};

	return (
		<div className="min-h-screen bg-secondary/10 pt-28 pb-12 print:bg-white print:pt-0 print:pb-0">
			<div className="mx-auto max-w-3xl px-4 print:px-0">
				{/* Action bar — hidden on print */}
				<div className="no-print mb-6 flex items-center justify-between">
					<Button variant="ghost" size="sm" asChild>
						<Link href="/" className="gap-2">
							<ArrowLeft className="h-4 w-4" />
							{c.back}
						</Link>
					</Button>
					<div className="flex items-center gap-2">
						<Button variant="ghost" size="sm" onClick={handlePrint} className="gap-2">
							<Printer className="h-4 w-4" />
							{c.print}
						</Button>
						<Button size="sm" asChild className="gap-2">
							<a href={c.pdfHref} download>
								<Download className="h-4 w-4" />
								{c.download}
							</a>
						</Button>
					</div>
				</div>

				<article className="cv-document rounded-lg border bg-card p-10 shadow-sm print:rounded-none print:border-none print:bg-white print:p-0 print:shadow-none">
					{/* Header */}
					<header className="cv-header mb-7 border-b pb-5 print:border-b-2 print:border-black">
						<h1 className="text-4xl font-bold tracking-tight print:text-3xl print:text-black">
							Gustavo Oliveira
						</h1>
						<p className="mt-1 text-lg text-muted-foreground print:text-base print:text-gray-700">
							{c.role}
						</p>
						<div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground print:text-[10pt] print:text-black">
							<a
								href="mailto:songustavo17@gmail.com"
								className="inline-flex items-center gap-1.5 hover:text-primary print:text-black"
							>
								<Mail className="h-3.5 w-3.5" aria-hidden="true" />
								songustavo17@gmail.com
							</a>
							<a
								href="tel:+5528999925373"
								className="inline-flex items-center gap-1.5 hover:text-primary print:text-black"
							>
								<Phone className="h-3.5 w-3.5" aria-hidden="true" />
								+55 (28) 99992-5373
							</a>
							<span className="inline-flex items-center gap-1.5 print:text-black">
								<MapPin className="h-3.5 w-3.5" aria-hidden="true" />
								Alegre, Espírito Santo, Brazil · {c.openToRemote}
							</span>
							<a
								href="https://github.com/gustaOliveira0"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 hover:text-primary print:text-black"
							>
								<Github className="h-3.5 w-3.5" aria-hidden="true" />
								github.com/gustaOliveira0
							</a>
						</div>
					</header>

					{/* Summary */}
					<Section title={c.sections.summary}>
						<p className="text-sm leading-relaxed text-foreground/90 print:text-[11pt] print:text-black">
							{c.summary}
						</p>
					</Section>

					{/* Skills */}
					<Section title={c.sections.skills}>
						<dl className="grid grid-cols-1 gap-y-1.5 text-sm sm:grid-cols-[max-content_1fr] sm:gap-x-6 print:text-[10.5pt] print:text-black">
							{c.skills.map((s) => (
								<SkillRow key={s.label} label={s.label} value={s.value} />
							))}
						</dl>
					</Section>

					{/* Experience */}
					<Section title={c.sections.experience}>
						<div className="space-y-5">
							{c.jobs.map((job) => (
								<Job key={job.company} {...job} />
							))}
						</div>
					</Section>

					{/* Selected Projects */}
					<Section title={c.sections.projects}>
						<ul className="space-y-2 text-sm print:text-[10.5pt] print:text-black">
							{c.projects.map((p) => (
								<ProjectLine key={p.title} {...p} />
							))}
						</ul>
						<p className="mt-3 text-xs text-muted-foreground print:text-[9.5pt] print:text-gray-700">
							{c.projectsFootnote}
							<a
								href="https://github.com/gustaOliveira0"
								className="underline hover:text-primary print:text-black"
							>
								github.com/gustaOliveira0
							</a>
						</p>
					</Section>

					{/* Education */}
					<Section title={c.sections.education}>
						<div>
							<div className="flex flex-wrap items-baseline justify-between gap-x-4">
								<h3 className="font-semibold print:text-black">
									{c.educationSchool}
								</h3>
								<span className="text-xs text-muted-foreground print:text-[10pt] print:text-gray-700">
									{c.educationPeriod}
								</span>
							</div>
							<p className="text-sm text-foreground/85 print:text-[10.5pt] print:text-black">
								{c.educationDegree}
							</p>
						</div>
					</Section>
				</article>
			</div>
		</div>
	);
}

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="cv-section mb-7 print:mb-5">
			<h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground print:mb-2 print:text-[10pt] print:text-black">
				{title}
			</h2>
			{children}
		</section>
	);
}

function SkillRow({ label, value }: { label: string; value: string }) {
	return (
		<>
			<dt className="font-semibold print:text-black">{label}</dt>
			<dd className="text-foreground/85 print:text-black">{value}</dd>
		</>
	);
}

function Job({
	company,
	companyMeta,
	title,
	period,
	location,
	bullets,
}: JobData) {
	return (
		<div className="cv-job">
			<div className="flex flex-wrap items-baseline justify-between gap-x-4">
				<h3 className="font-semibold print:text-black">
					{title}{" "}
					<span className="font-normal text-foreground/70 print:text-black">
						· {company}
					</span>
					{companyMeta && (
						<span className="font-normal text-muted-foreground print:text-gray-700">
							{" "}
							({companyMeta})
						</span>
					)}
				</h3>
				<span className="text-xs text-muted-foreground print:text-[10pt] print:text-gray-700">
					{period} · {location}
				</span>
			</div>
			<ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/85 print:text-[10.5pt] print:text-black">
				{bullets.map((b, i) => (
					<li key={i}>{b}</li>
				))}
			</ul>
		</div>
	);
}

function ProjectLine({ title, url, description }: ProjectData) {
	return (
		<li>
			<span className="font-semibold print:text-black">{title}</span>
			{url && (
				<>
					{" — "}
					<a
						href={`https://${url}`}
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary underline-offset-2 hover:underline print:text-black"
					>
						{url}
					</a>
				</>
			)}
			<span className="text-foreground/85 print:text-black">
				{" "}
				— {description}
			</span>
		</li>
	);
}
