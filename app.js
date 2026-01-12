// Konfigurera Vue‑applikationen i en separat fil
const { createApp } = Vue;

createApp({
  data() {
    return {
      name: 'Nicklas',
      tagline: 'Senior fullstackutvecklare & Scrum Master',
      // En utförlig beskrivning av Nicklas som senior utvecklare och scrum master.
      about: 'Jag är en passionerad och lösningsorienterad utvecklare med över 12 års erfarenhet av systemutveckling och DevOps. Jag trivs med nya problem, utmaningar och att leverera resultat.\n\n'
        + 'Min bakgrund omfattar fullstackutveckling, med särskild tyngd inom Java, JavaScript/TypeScript, React och Vue. Jag har arbetat både som utvecklare och scrum master och tar ansvar genom hela utvecklingskedjan – från kravanalys och design, via utveckling och testautomation till driftsättning.\n\n'
        + 'Jag har gedigen erfarenhet av mikrotjänst- och containerbaserade lösningar, CI/CD, molnplattformar (AWS, Azure), integrationer och säkerhetsklassade system. Jag värdesätter samarbetet i agila team, har ett starkt säkerhetstänk och arbetar gärna med metoder som Scrum, Kanban och SAFe.\n\n'
        + 'Som person är jag nyfiken, strukturerad och målinriktad. Jag är bra på att förstå problem och hitta hållbara lösningar, och jag lyfter hellre teamet än mig själv. På fritiden experimenterar jag med smarta hemlösningar, IoT och olika Linux‑baserade miljöer, vilket gör att jag ständigt lär mig nya tekniker och verktyg.',
      projects: [],
      contact: {
        name: '',
        email: '',
        message: ''
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
  }
}).mount('#app');
