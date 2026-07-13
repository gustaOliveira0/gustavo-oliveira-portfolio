"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (typeof content)["en"] | (typeof content)["pt"];
}

export const content = {
	en: {
		nav: {
			about: "About",
			projects: "Projects",
			contact: "Contact",
			cv: "CV",
		},
		hero: {
			badge: "Open to Work (Remote)",
			title: "Full Stack Engineer | AI & Computer Vision",
			subtitle:
				"6+ years shipping backend, data and computer-vision systems in production — Python, YOLO/PyTorch computer vision for Petrobras maritime safety, PySpark/Databricks data pipelines, Ruby on Rails, Django and SQL/NoSQL.",
			cta: "View Projects",
			secondaryCta: "Contact Me",
			cvCta: "Download CV",
		},
		about: {
			title: "About Me",
			description:
				"I'm a Full Stack Engineer with 6+ years of professional experience across backend, data engineering and computer vision. I've built YOLO/PyTorch computer-vision pipelines for maritime safety monitoring at Petrobras, PySpark/Databricks data-ingestion pipelines on GCP, and production backends in Ruby on Rails, Django and Python with SQL/NoSQL, RabbitMQ/Kafka messaging and Docker/Kubernetes infrastructure. I started in IT in 2021 as a database administrator, cut a legacy database's load time by 65%, and have since moved through backend engineering into AI, computer vision and data engineering roles — always end-to-end, from requirements to production.",
			stats: [
				{ label: "Years of Exp.", value: "6+" },
				{ label: "Roles & Projects", value: "8" },
				{ label: "DB Load Time Cut", value: "65%" },
			],
		},
		projects: {
			title: "Featured Projects",
			subtitle:
				"Backend, data engineering and computer-vision work delivered across production systems.",
		},
		lab: {
			kicker: "// lab",
			title: "Frontend UI/UX Lab",
			subtitle:
				"A collection of high-fidelity interfaces demonstrating versatility in design and CSS mastery.",
		},
		contact: {
			kicker: "// contact",
			title: "Get in Touch",
			subtitle:
				"Open to remote roles and contract engagements in backend, data and computer vision. Reach out for collaborations, opportunities, or to say hello.",
		},
		footer: {
			tagline: "Crafted in Alegre, ES · Available worldwide",
		},
	},
	pt: {
		nav: {
			about: "Sobre",
			projects: "Projetos",
			contact: "Contato",
			cv: "CV",
		},
		hero: {
			badge: "Aberto a Oportunidades (Remoto)",
			title: "Engenheiro Full Stack | IA & Visão Computacional",
			subtitle:
				"6+ anos entregando sistemas de backend, dados e visão computacional em produção — visão computacional com Python, YOLO/PyTorch para segurança marítima na Petrobras, pipelines de dados com PySpark/Databricks, Ruby on Rails, Django e SQL/NoSQL.",
			cta: "Ver Projetos",
			secondaryCta: "Entrar em Contato",
			cvCta: "Baixar CV",
		},
		about: {
			title: "Sobre Mim",
			description:
				"Sou Engenheiro Full Stack com 6+ anos de experiência profissional em backend, engenharia de dados e visão computacional. Já construí pipelines de visão computacional com YOLO/PyTorch para monitoramento de segurança marítima na Petrobras, pipelines de ingestão de dados com PySpark/Databricks no GCP, e backends em produção com Ruby on Rails, Django e Python com SQL/NoSQL, mensageria RabbitMQ/Kafka e infraestrutura Docker/Kubernetes. Comecei em TI em 2021 como administrador de banco de dados, reduzi em 65% o tempo de carregamento de um banco legado, e desde então passei por backend, IA, visão computacional e engenharia de dados — sempre ponta a ponta, do requisito à produção.",
			stats: [
				{ label: "Anos de Exp.", value: "6+" },
				{ label: "Empresas & Projetos", value: "8" },
				{ label: "Redução Carga BD", value: "65%" },
			],
		},
		projects: {
			title: "Projetos em Destaque",
			subtitle:
				"Trabalho em backend, engenharia de dados e visão computacional entregue em sistemas de produção.",
		},
		lab: {
			kicker: "// lab",
			title: "Laboratório UI/UX Frontend",
			subtitle:
				"Uma coleção de interfaces de alta fidelidade demonstrando versatilidade em design e domínio de CSS.",
		},
		contact: {
			kicker: "// contato",
			title: "Vamos Conversar",
			subtitle:
				"Aberto a vagas remotas e contratos em backend, dados e visão computacional. Me chama pra colaborações, oportunidades ou só pra dar um oi.",
		},
		footer: {
			tagline: "Feito em Alegre, ES · Disponível pro mundo",
		},
	},
};

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>("en");

	return (
		<LanguageContext.Provider
			value={{ language, setLanguage, t: content[language] }}
		>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}
