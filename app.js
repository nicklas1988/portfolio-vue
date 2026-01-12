// Konfigurera Vue‑applikationen i en separat fil
const { createApp } = Vue;

createApp({
  data() {
    return {
      name: 'Nicklas',
      tagline: 'Senior fullstackutvecklare & Scrum Master',
   kutvecklare & Scrum Master',
      aboutSections: [
        {
          title: 'Profil',
          paragraphs: [
            'Jag är en passionerad och lösningsorienterad utvecklare med över 12 års erfarenhet av systemutveckling och DevOps. Jag trivs med nya problem, utmaningar och att leverera resultat.',
            'Jag har arbetat både som utvecklare och scrum master och tar ansvar genom hela utvecklingskedjan – från kravanalys och design, via utveckling och testautomation till driftsättning.',
            'Jag värdesätter samarbetet i agila team och jag lyfter hellre teamet än mig själv. På fritiden experimenterar jag med smarta hemlösningar, IoT och olika Linux‑baserade miljöer för att ständigt utvecklas.'
          ]
        },
        {
          title: 'Tekniker & Kompetenser',
          paragraphs: [
            'Jag behärskar hela utvecklingskedjan och har gedigen erfarenhet av mikrotjänst- och containerbaserade lösningar, CI/CD, molnplattformar, integrationer och säkerhetsklassade system.'
          ],
          list: [
            'Java, JavaScript, TypeScript, React, Vue',
            'Spring Boot, Quarkus, Maven',
            'PostgreSQL, Oracle PL/SQL',
            'AWS, Azure, OpenShift',
            'Docker, Podman, Kustomize',
            'CI/CD (GitHub Actions, Jenkins, GitLab CI)',
            'Testautomation (JUnit, Mockito, Cypress, Wiremock)',
            'TDD/BDD',
            'REST & SOAP API',
            'Linux & Bash‑scripting'
          ]
        },
        {
          title: 'Urval av uppdrag',
          paragraphs: [
            '2023–pågående – Digg SDG OOTS: Jag arbetar som systemutvecklare, testare och scrum master. Jag utvecklar mikrotjänstbaserade lösningar, skriver automatiska tester och ansvarar för konfiguration i Podman, Docker, Kustomize och OpenShift. Jag representerar även Sverige i EU‑arbetsgrupper.',
            '2019–2023 – Telia Company (C2B Services): Jag skapade och underhöll mikrotjänster för Telias backendtjänster. Rollen inkluderade kravinsamling, utveckling, integrationer, DevOps och arbete med automatiserade CI/CD‑miljöer.',
            '2018–2019 – Telia Enable Zone: Utvecklade mikrotjänster i AWS med Java och Lambda samt frontend i React. Jag jobbade med Terraform för CI/CD och ansvarade för hela stacken från databas till frontend.',
            '2015–2018 – Telia NICE: Utvecklade och förvaltade ett fiberinventory-system med Java och Oracle PL/SQL. Jag arbetade i hela utvecklingskedjan och fokuserade på integrationer och testautomatisering.',
            '2011–2015 – Teracom – FM‑radio: Som systemingenjör ansvarade jag för systemutveckling och kvalitetssäkring av Sveriges FM‑radionät. Jag samarbetade med leverantörer och kunder, utvecklade nya funktioner och höll utbildningar för driftpersonal.'
          ]
        }
      ],
      projects: [],
      contact: {
        name: '',
        email: '',
        message: ''
      }

    submitForm() {
      alert(`Tack för ditt meddelande, ${this.contact.name}! Jag återkommer snart.`);
      this.contact.name = '';
      this.contact.email = '';
      this.contact.message = '';
    }
  }
}).mount('#app');
