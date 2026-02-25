import { ELocale, ETranslationKey } from "./types";
import type { Translations } from "./types";

export const TRANSLATIONS: Record<ELocale, Translations> = {
  [ELocale.En]: {
    [ETranslationKey.LocaleEn]: "EN",
    [ETranslationKey.LocaleRu]: "RU",
    [ETranslationKey.LocaleSp]: "SP",
    [ETranslationKey.LocaleDe]: "DE",
    [ETranslationKey.NavAbout]: "About",
    [ETranslationKey.NavExpirience]: "Expirience",
    [ETranslationKey.NavEducation]: "Education",
    [ETranslationKey.NavGithub]: "GitHub",
    [ETranslationKey.NavLinkedIn]: "LinkedIn",
    [ETranslationKey.NavLeetCode]: "LeetCode",
    [ETranslationKey.NavEmail]: "Gmail",
    [ETranslationKey.HeroHiIm]: "Hi, I'm",
    [ETranslationKey.HeroName]: "Oleksandr",
    [ETranslationKey.HeroSurname]: "Prytula",
    [ETranslationKey.HeroRole]: "Software Engineer | Full Stack WEB Developer",
    [ETranslationKey.HeroNeedMoreDetails]: "Need more details?",
    [ETranslationKey.HeroCvDownload]: "Download CV (PDF)",
    [ETranslationKey.AboutParagraph1]:
      "I’m a Software Engineer with over 10 years of hands-on experience in WEB development across next domains: e-Learning, e-Commerce / Marketplaces, Trading, Insurance and Health Care. I’ve contributed to products in various delivery models - from out-staffing to startups - adapting quickly to diverse workflows, business goals, and team dynamics. I’ve worked both independently and in teams of 3 to 20 engineers, often within international, distributed environments.",
    [ETranslationKey.AboutParagraph2]:
      "As a Full-Stack WEB developer, I deliver solutions from frontend interfaces to backend services and infrastructure. I’m experienced with monolithic and microservice architectures, REST / GraphQL APIs, databases like MySQL and MongoDB. I actively use Docker and implement CI /CD pipelines for automated deployment. Additionally, I use testing frameworks such as Playwright and Jest to ensure high code quality and reliability.",
    [ETranslationKey.AboutParagraph3]:
      "My responsibilities include product evaluation and planning, technical estimations, architecture design, and MVP scoping. I collaborate closely with stakeholders to define requirements, select appropriate technologies, and ensure maintainability. I also mentor junior developers, conduct code reviews, and support onboarding.",
    [ETranslationKey.AboutParagraph4]:
      "I’m committed to continuous learning and staying current with evolving technologies. I continue applying and expanding this knowledge through challenging production engineering tasks. I regularly solve complex programming and system design problems to sharpen my algorithmic thinking and technical skills.",
    [ETranslationKey.AboutParagraph5]:
      "Also I actively integrate AI-powered tools - such as automated code generation, intelligent testing frameworks, and performance optimization utilities - into my development workflows to boost productivity, reduce manual effort, and improve application scalability.",
  },
  [ELocale.Ru]: {
    [ETranslationKey.LocaleEn]: "EN",
    [ETranslationKey.LocaleRu]: "RU",
    [ETranslationKey.LocaleSp]: "SP",
    [ETranslationKey.LocaleDe]: "DE",
    [ETranslationKey.NavAbout]: "О себе",
    [ETranslationKey.NavExpirience]: "Опыт",
    [ETranslationKey.NavEducation]: "Образование",
    [ETranslationKey.NavGithub]: "GitHub",
    [ETranslationKey.NavLinkedIn]: "LinkedIn",
    [ETranslationKey.NavLeetCode]: "LeetCode",
    [ETranslationKey.NavEmail]: "Gmail",
    [ETranslationKey.HeroHiIm]: "КУ-КУ!",
    [ETranslationKey.HeroName]: "Александр",
    [ETranslationKey.HeroSurname]: "Притула",
    [ETranslationKey.HeroRole]: "Инженер-программист | Full-Stack WEB-разработчик",
    [ETranslationKey.HeroNeedMoreDetails]: "НУЖНО БОЛЬШЕ ДЕТАЛЕЙ?",
    [ETranslationKey.HeroCvDownload]: "Скачать CV (PDF)",
    [ETranslationKey.AboutParagraph1]:
      "Я инженер-программист с более чем 10-летним практическим опытом WEB-разработки в следующих доменах: e-Learning, e-Commerce / Marketplaces, Trading, Insurance и Health Care. Я участвовал в создании продуктов в разных моделях сотрудничества — от аутстаффинга до стартапов — быстро адаптируясь к различным процессам, бизнес-целям и командной динамике. Я работал как самостоятельно, так и в командах от 3 до 20 инженеров, часто в международной распределенной среде.",
    [ETranslationKey.AboutParagraph2]:
      "Как Full-Stack WEB-разработчик, я создаю решения от frontend-интерфейсов до backend-сервисов и инфраструктуры. У меня есть опыт работы с монолитной и микросервисной архитектурой, REST/GraphQL API, базами данных MySQL и MongoDB. Я активно использую Docker и внедряю CI /CD пайплайны для автоматизированного деплоя. Также я применяю фреймворки тестирования, такие как Playwright и Jest, чтобы обеспечивать высокое качество и надежность кода.",
    [ETranslationKey.AboutParagraph3]:
      "В мои обязанности входят оценка и планирование продукта, технические оценки, проектирование архитектуры и определение границ MVP. Я тесно взаимодействую со стейкхолдерами, чтобы формировать требования, выбирать подходящие технологии и обеспечивать поддерживаемость решений. Также я менторю junior-разработчиков, провожу code review и помогаю с онбордингом.",
    [ETranslationKey.AboutParagraph4]:
      "Я придерживаюсь принципа непрерывного обучения и слежу за развитием технологий. Я постоянно применяю и расширяю эти знания в сложных production-задачах. Я регулярно решаю комплексные задачи по программированию и системному дизайну, чтобы развивать алгоритмическое мышление и технические навыки.",
    [ETranslationKey.AboutParagraph5]:
      "Кроме того, я активно интегрирую AI-инструменты — такие как автоматизированная генерация кода, интеллектуальные фреймворки тестирования и утилиты оптимизации производительности — в рабочие процессы разработки, чтобы повышать продуктивность, снижать объем ручной работы и улучшать масштабируемость приложений.",
  },
  [ELocale.Sp]: {
    [ETranslationKey.LocaleEn]: "EN",
    [ETranslationKey.LocaleRu]: "RU",
    [ETranslationKey.LocaleSp]: "SP",
    [ETranslationKey.LocaleDe]: "DE",
    [ETranslationKey.NavAbout]: "Sobre mí",
    [ETranslationKey.NavExpirience]: "Experiencia",
    [ETranslationKey.NavEducation]: "Educación",
    [ETranslationKey.NavGithub]: "GitHub",
    [ETranslationKey.NavLinkedIn]: "LinkedIn",
    [ETranslationKey.NavLeetCode]: "LeetCode",
    [ETranslationKey.NavEmail]: "Correo",
    [ETranslationKey.HeroHiIm]: "HOLA!",
    [ETranslationKey.HeroName]: "Oleksandr",
    [ETranslationKey.HeroSurname]: "Prytula",
    [ETranslationKey.HeroRole]: "Ingeniero de software | Desarrollador Full Stack WEB",
    [ETranslationKey.HeroNeedMoreDetails]: "¿NECESITAS MÁS DETALLES?",
    [ETranslationKey.HeroCvDownload]: "Descargar CV (PDF)",
    [ETranslationKey.AboutParagraph1]:
      "Soy Ingeniero de Software con más de 10 años de experiencia práctica en desarrollo WEB en los siguientes dominios: e-Learning, e-Commerce / Marketplaces, Trading, Insurance y Health Care. He contribuido a productos en distintos modelos de colaboración, desde outstaffing hasta startups, adaptándome rápidamente a diferentes flujos de trabajo, objetivos de negocio y dinámicas de equipo. He trabajado tanto de forma independiente como en equipos de 3 a 20 ingenieros, a menudo en entornos internacionales y distribuidos.",
    [ETranslationKey.AboutParagraph2]:
      "Como desarrollador Full-Stack WEB, entrego soluciones desde interfaces frontend hasta servicios backend e infraestructura. Tengo experiencia con arquitecturas monolíticas y de microservicios, APIs REST/GraphQL y bases de datos como MySQL y MongoDB. Utilizo activamente Docker e implemento pipelines de CI /CD para despliegues automatizados. Además, uso frameworks de testing como Playwright y Jest para garantizar alta calidad y fiabilidad del código.",
    [ETranslationKey.AboutParagraph3]:
      "Mis responsabilidades incluyen evaluación y planificación de producto, estimaciones técnicas, diseño de arquitectura y definición del alcance del MVP. Colaboro estrechamente con stakeholders para definir requisitos, seleccionar tecnologías adecuadas y asegurar la mantenibilidad. También mentorizo a desarrolladores junior, realizo revisiones de código y apoyo el onboarding.",
    [ETranslationKey.AboutParagraph4]:
      "Estoy comprometido con el aprendizaje continuo y con mantenerme actualizado en tecnologías en evolución. Sigo aplicando y ampliando este conocimiento a través de tareas desafiantes de ingeniería en producción. Resuelvo regularmente problemas complejos de programación y diseño de sistemas para fortalecer mi pensamiento algorítmico y mis habilidades técnicas.",
    [ETranslationKey.AboutParagraph5]:
      "Además, integro activamente herramientas impulsadas por IA — como generación automática de código, frameworks de testing inteligentes y utilidades de optimización de rendimiento — en mis flujos de desarrollo para aumentar la productividad, reducir el trabajo manual y mejorar la escalabilidad de las aplicaciones.",
  },
  [ELocale.De]: {
    [ETranslationKey.LocaleEn]: "EN",
    [ETranslationKey.LocaleRu]: "RU",
    [ETranslationKey.LocaleSp]: "SP",
    [ETranslationKey.LocaleDe]: "DE",
    [ETranslationKey.NavAbout]: "Über mich",
    [ETranslationKey.NavExpirience]: "Erfahrung",
    [ETranslationKey.NavEducation]: "Ausbildung",
    [ETranslationKey.NavGithub]: "GitHub",
    [ETranslationKey.NavLinkedIn]: "LinkedIn",
    [ETranslationKey.NavLeetCode]: "LeetCode",
    [ETranslationKey.NavEmail]: "Gmail",
    [ETranslationKey.HeroHiIm]: "HALLO",
    [ETranslationKey.HeroName]: "Oleksandr",
    [ETranslationKey.HeroSurname]: "Prytula",
    [ETranslationKey.HeroRole]: "Softwareingenieur | Full-Stack WEB-Entwickler",
    [ETranslationKey.HeroNeedMoreDetails]: "MEHR DETAILS NÖTIG?",
    [ETranslationKey.HeroCvDownload]: "CV (PDF) herunterladen",
    [ETranslationKey.AboutParagraph1]:
      "Ich bin Softwareingenieur mit über 10 Jahren praktischer Erfahrung in der WEB-Entwicklung in folgenden Domänen: e-Learning, e-Commerce / Marketplaces, Trading, Insurance und Health Care. Ich habe zu Produkten in verschiedenen Delivery-Modellen beigetragen — von Outstaffing bis zu Startups — und mich schnell an unterschiedliche Arbeitsabläufe, Geschäftsziele und Teamdynamiken angepasst. Ich habe sowohl eigenständig als auch in Teams von 3 bis 20 Ingenieuren gearbeitet, häufig in internationalen, verteilten Umgebungen.",
    [ETranslationKey.AboutParagraph2]:
      "Als Full-Stack WEB-Entwickler liefere ich Lösungen von Frontend-Oberflächen bis hin zu Backend-Services und Infrastruktur. Ich habe Erfahrung mit monolithischen und Microservice-Architekturen, REST/GraphQL-APIs sowie Datenbanken wie MySQL und MongoDB. Ich nutze Docker aktiv und implementiere CI /CD-Pipelines für automatisierte Deployments. Außerdem setze ich Test-Frameworks wie Playwright und Jest ein, um hohe Codequalität und Zuverlässigkeit sicherzustellen.",
    [ETranslationKey.AboutParagraph3]:
      "Zu meinen Aufgaben gehören Produktevaluierung und -planung, technische Aufwandsabschätzungen, Architekturdesign und MVP-Abgrenzung. Ich arbeite eng mit Stakeholdern zusammen, um Anforderungen zu definieren, passende Technologien auszuwählen und Wartbarkeit sicherzustellen. Außerdem betreue ich Junior-Entwickler, führe Code-Reviews durch und unterstütze beim Onboarding.",
    [ETranslationKey.AboutParagraph4]:
      "Ich verfolge kontinuierliches Lernen und halte mich über technologische Entwicklungen auf dem Laufenden. Dieses Wissen wende ich in anspruchsvollen Production-Engineering-Aufgaben an und erweitere es fortlaufend. Ich löse regelmäßig komplexe Programmier- und Systemdesign-Probleme, um mein algorithmisches Denken und meine technischen Fähigkeiten zu schärfen.",
    [ETranslationKey.AboutParagraph5]:
      "Darüber hinaus integriere ich aktiv KI-gestützte Tools — wie automatische Codegenerierung, intelligente Test-Frameworks und Performance-Optimierungswerkzeuge — in meine Entwicklungsabläufe, um die Produktivität zu steigern, manuellen Aufwand zu reduzieren und die Skalierbarkeit von Anwendungen zu verbessern.",
  },
};
