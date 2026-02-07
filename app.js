const { createApp } = Vue;

createApp({
  data() {
    const lang = 'sv';
    const t = window.translations[lang];
    return {
      name: 'Nicklas',
      logo: 'NE',
      language: lang,
      tagline: t.hero.tagline,
      heroDescription: t.hero.description,
      navScrolled: false,
      mobileMenuOpen: false,
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
      contact: {
        name: '',
        email: '',
        message: ''
      },
      socialLinks: [
        { icon: 'fab fa-github', url: 'https://github.com/nicklas1988', label: 'GitHub' },
        { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/', label: 'LinkedIn' },
        { icon: 'fas fa-envelope', url: 'mailto:nicklas@example.com', label: 'E-post' }
      ],
      translations: window.translations
    };
  },

  computed: {
    aboutSections() {
      return this.translations[this.language].about.sections;
    },
    featuredProjects() {
      const t = this.translations[this.language].projects;
      return [
        {
          title: 'SDG OOTS',
          description: t.sdgOots,
          tech: ['Java', 'Spring Boot', 'Quarkus', 'OpenShift', 'CI/CD', 'TDD/BDD'],
          github: null,
          external: null,
          imagePlaceholder: 'SDG OOTS – EU Evidence Exchange'
        },
        {
          title: 'Telia C2B Services',
          description: t.teliaC2b,
          tech: ['Java', 'Spring Boot', 'Docker', 'Kubernetes', 'GitHub Actions', 'PostgreSQL'],
          github: null,
          external: null,
          imagePlaceholder: 'Telia C2B Services'
        },
        {
          title: 'Telia Enable Zone',
          description: t.teliaEnableZone,
          tech: ['AWS Lambda', 'React', 'JavaScript', 'API Gateway', 'DynamoDB'],
          github: null,
          external: null,
          imagePlaceholder: 'Telia Enable Zone'
        }
      ];
    },
    otherProjects() {
      const t = this.translations[this.language].projects;
      return [
        {
          title: 'oots-codelist',
          description: t.ootsCodelist,
          tech: ['Java', 'Spring Boot', 'REST API'],
          github: 'https://github.com/nicklas1988/oots-codelist',
          external: null
        },
        {
          title: 'oots-requester',
          description: t.ootsRequester,
          tech: ['Java', 'Spring Boot', 'REST API'],
          github: 'https://github.com/nicklas1988/oots-intermediary-platform',
          external: null
        },
        {
          title: 'Go-e Dynamic Loadbalancer',
          description: t.goECharger,
          tech: ['Home Assistant', 'YAML', 'Automation'],
          github: 'https://github.com/nicklas1988/Go-e-Homeassistant-dynamic-loadbalancer',
          external: null
        }
      ];
    }
  },

  methods: {
    submitForm() {
      const msg = this.language === 'sv'
        ? `Tack för ditt meddelande, ${this.contact.name}! Jag återkommer snart.`
        : `Thank you for your message, ${this.contact.name}! I'll get back to you soon.`;
      alert(msg);
      this.contact.name = '';
      this.contact.email = '';
      this.contact.message = '';
    },
    toggleLanguage() {
      this.language = this.language === 'sv' ? 'en' : 'sv';
      const t = this.translations[this.language].hero;
      this.tagline = t.tagline;
      this.heroDescription = t.description;
    },
    handleScroll() {
      this.navScrolled = window.scrollY > 50;
    },
    initRevealObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
      });
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
    this.$nextTick(() => {
      this.initRevealObserver();
    });
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}).mount('#app');
