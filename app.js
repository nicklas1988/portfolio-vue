// Konfigurera Vue‑applikationen i en separat fil
const { createApp } = Vue;

createApp({
  data() {
    return {
      // Fullständigt namn som visas i hero‑sektionen
      name: 'Nicklas',
      // Initialer som används som logotyp uppe till vänster
      logo: 'NE',
      // Aktivt språk: 'sv' (svenska) eller 'en' (engelska)
      language: 'sv',
      tagline: 'Senior fullstackutvecklare & Scrum Master',
      // Kort beskrivning som visas i hero‑sektionen (svenskt standardvärde)
      heroDescription: 'Jag är en passionerad utvecklare som gillar nya problem, utmaningar och resultat och trivs i tvärfunktionella team.',
      // Segmenterad information till om‑mig‑sektionen. Varje objekt innehåller en titel och antingen stycken eller en lista.
      aboutSections: [
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
      ],
      // Lista över färdigheter och deras nivåer i procent för kompetenssektionen
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vue', level: 85 },
        { name: 'React', level: 85 },
        { name: 'Docker/Podman', level: 80 },
        { name: 'AWS & Azure', level: 75 },
        { name: 'CI/CD & DevOps', level: 85 }
      ],
      projects: [],
      contact: {
        name: '',
        email: '',
        message: ''
      },
      // Sociala länkar som visas horisontellt i hero‑sektionen
      socialLinks: [
        { icon: 'fab fa-github', url: 'https://github.com/nicklas1988', label: 'GitHub' },
        { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/', label: 'LinkedIn' },
        { icon: 'fas fa-envelope', url: 'mailto:nicklas@example.com', label: 'E‑post' }
      ]
      ,
      // Översättningar för olika språk
      translations: {
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
            contactSubmit: 'Skicka'
            ,
            description: 'Jag är en passionerad utvecklare som gillar nya problem, utmaningar och resultat och trivs i tvärfunktionella team.'
          },
          footer: {
            rights: 'Alla rättigheter förbehållna.'
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
            contactIntro: "I'm currently not looking for new opportunities, but my inbox is always open. If you have a question or just want to say hi, feel free to reach out!",
            contactSubmit: 'Send'
            ,
            description: 'I am a passionate developer who enjoys new challenges and results and thrives in cross‑functional teams.'
          },
          footer: {
            rights: 'All rights reserved.'
          }
        }
      }
    };
  },
  methods: {
    submitForm() {
      alert(`Tack för ditt meddelande, ${this.contact.name}! Jag återkommer snart.`);
      this.contact.name = '';
      this.contact.email = '';
      this.contact.message = '';
    }
    ,
    // Växla språk mellan svenska och engelska
    toggleLanguage() {
      this.language = this.language === 'sv' ? 'en' : 'sv';
      // Uppdatera tagline och beskrivning utifrån det valda språket
      const t = this.translations[this.language].hero;
      this.tagline = t.tagline;
      this.heroDescription = t.description;
    }
  }
}).mount('#app');