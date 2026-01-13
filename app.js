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
      // Tagline hämtas från översättningar för det aktiva språket
      tagline: window.translations['sv'].hero.tagline,
      // Kort beskrivning som visas i hero‑sektionen, hämtad från översättningar
      heroDescription: window.translations['sv'].hero.description,
      // Segmenterad information till om‑mig‑sektionen. Varje objekt innehåller en titel och antingen stycken eller en lista.
      // aboutSections har flyttats till översättningar; se computed property `aboutSections`
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
      // Referens till översättningarna definierade i translations.js
      translations: window.translations
    };
  },

  computed: {
    // Dynamically derive the about sections based on the current language.
    aboutSections() {
      return this.translations[this.language].about.sections;
    }
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