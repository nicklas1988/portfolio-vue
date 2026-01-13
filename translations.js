/*
  This file contains the translations used by the portfolio site.
  It attaches a `translations` object to the global `window` object so that
  other scripts (like app.js) can access localized strings without
  bundling or module loading. Languages supported: Swedish ('sv') and
  English ('en').
*/

window.translations = {
  sv: {
    nav: {
      about: 'Om mig',
      skills: 'Kompetenser & Tekniker',
      projects: 'Projekt',
      contact: 'Kontakt',
      cv: 'CV'
    },
    projects: {
      noProjects: 'Inga projekt att visa ännu.'
    },
    hero: {
      preTitle: 'Hej, mitt namn är',
      tagline: 'Senior fullstackutvecklare & Scrum Master',
      contactButton: 'Kontakta mig',
      nextSectionHeading: 'Vad är nästa steg?',
      contactIntro: 'Även om jag inte aktivt söker nya möjligheter, är min inkorg alltid öppen. Har du en fråga eller vill du bara säga hej? Hör gärna av dig!',
      contactSubmit: 'Skicka',
      description: 'Jag är en passionerad utvecklare som gillar nya problem, utmaningar och resultat och trivs i tvärfunktionella team.'
    },
    footer: {
      rights: 'Alla rättigheter förbehållna.'
    }
    ,
    // Om‑mig‑sektionen: rubriker och innehåll på svenska
    about: {
      sections: [
        {
          title: 'Profil',
          paragraphs: [
            'Nicklas är en passionerad utvecklare som gillar nya problem, utmaningar och resultat. Han arbetar väl i team och har både jobbat som utvecklare och Scrum Master.',
            'Med över 12 års erfarenhet inom fullstackutveckling, framför allt i Java och React, trivs han i komplexa system och säkerhetsklassade miljöer med fokus på mikrotjänster, CI/CD, testautomatisering och DevOps.',
            'Han är lösningsorienterad, strukturerad och målmedveten med en stark förmåga att analysera problem och hitta bra lösningar, och arbetar lika bra självständigt som i team.'
          ]
        },
        {
          title: 'Tekniker & Kompetenser',
          list: [
            'Java, JavaScript, TypeScript, Vue, React',
            'Spring Boot, Quarkus, Terraform, Maven',
            'PostgreSQL, Oracle PL/SQL, REST‑API',
            'AWS, Azure, OpenShift, Docker/Podman, Kustomize',
            'DevOps, CI/CD, GitHub Actions',
            'TDD/BDD, Postman, SoapUI'
          ],
          paragraphs: []
        },
        {
          title: 'Urval av uppdrag',
          paragraphs: [
            'SDG OOTS (2023–pågående): Systemutvecklare, testare & Scrum Master i EU‑projektet för automatiserat bevisutbyte.',
            'Telia Company – C2B Services (2019–2023): Utveckling av mikrotjänster och integrationer med fokus på CI/CD och DevOps.',
            'Telia Enable Zone (2018–2019): Utveckling av AWS Lambda‑funktioner och React‑frontend för mikrotjänster.',
            'Telia NICE (2015–2018): Förvaltning och utveckling av fiberinventerings‑system.',
            'Teracom FM‑radio (2011–2015): Systemingenjör och utvecklare för FM‑radio‑kedjan i Sverige.'
          ]
        }
      ]
    }
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills & Technologies',
      projects: 'Projects',
      contact: 'Contact',
      cv: 'Resume'
    },
    projects: {
      noProjects: 'No projects to display yet.'
    },
    hero: {
      preTitle: 'Hi, my name is',
      tagline: 'Senior full‑stack developer & Scrum Master',
      contactButton: 'Contact me',
      nextSectionHeading: "What's Next?",
      contactIntro: 'Even though I am not actively looking for new opportunities, my inbox is always open. Have a question or just want to say hello? Feel free to reach out!',
      contactSubmit: 'Send',
      description: 'I am a passionate developer who loves new problems, challenges and results and thrives in cross‑functional teams.'
    },
    footer: {
      rights: 'All rights reserved.'
    }
    ,
    // About section: headings and content in English
    about: {
      sections: [
        {
          title: 'Profile',
          paragraphs: [
            'Nicklas is a passionate developer who enjoys new problems, challenges and results. He works well in teams and has worked both as a developer and Scrum Master.',
            'With over 12 years of full‑stack development experience, primarily in Java and React, he thrives in complex and security‑classified environments focusing on microservices, CI/CD, test automation and DevOps.',
            'He is solutions oriented, structured and goal‑driven with a strong ability to analyse problems and find good solutions, and works just as well independently as in a team.'
          ]
        },
        {
          title: 'Technologies & Skills',
          list: [
            'Java, JavaScript, TypeScript, Vue, React',
            'Spring Boot, Quarkus, Terraform, Maven',
            'PostgreSQL, Oracle PL/SQL, REST‑API',
            'AWS, Azure, OpenShift, Docker/Podman, Kustomize',
            'DevOps, CI/CD, GitHub Actions',
            'TDD/BDD, Postman, SoapUI'
          ],
          paragraphs: []
        },
        {
          title: 'Selected assignments',
          paragraphs: [
            'SDG OOTS (2023–present): Systems developer, tester & Scrum Master in the EU project for automated evidence exchange.',
            'Telia Company – C2B Services (2019–2023): Development of microservices and integrations focusing on CI/CD and DevOps.',
            'Telia Enable Zone (2018–2019): Development of AWS Lambda functions and a React frontend for microservices.',
            'Telia NICE (2015–2018): Maintenance and development of a fibre inventory system.',
            'Teracom FM radio (2011–2015): Systems engineer and developer for Sweden’s FM radio chain.'
          ]
        }
      ]
    }
  }
};