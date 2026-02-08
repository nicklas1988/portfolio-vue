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
        { name: 'CI/CD & DevOps', level: 90 },
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Vue', level: 85 },
        { name: 'React', level: 85 },
        { name: 'Docker/Podman', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'AI-agenter & LLM', level: 75 },
        { name: 'AWS & Azure', level: 75 }
      ],
      socialLinks: [
        { icon: 'fab fa-github', url: 'https://github.com/nicklas1988', label: 'GitHub' },
        { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/', label: 'LinkedIn' },
        { icon: 'fas fa-envelope', url: 'mailto:nicklas@example.com', label: 'E-post' }
      ],
      translations: window.translations
    };
  },

  computed: {
    navLinks() {
      const t = this.translations[this.language].nav;
      return [
        { name: t.about, href: '#about' },
        { name: t.skills, href: '#skills' },
        { name: t.projects, href: '#projects' },
        { name: t.contact, href: '#contact' }
      ];
    },
    aboutSections() {
      return this.translations[this.language].about.sections;
    },
    techList() {
      const section = this.aboutSections.find(s => s.list && s.list.length);
      return section ? section.list : [];
    },
    featuredProjects() {
      const t = this.translations[this.language].projects;
      return [
        {
          title: 'SDG OOTS',
          description: t.sdgOots,
          tech: ['Java', 'Quarkus', 'OpenShift', 'CI/CD', 'TDD/BDD'],
          github: null,
          external: null
        },
        {
          title: 'Telia C2B Services',
          description: t.teliaC2b,
          tech: ['Java', 'Spring Boot', 'Docker', 'Kubernetes', 'GitHub Actions', 'PostgreSQL'],
          github: null,
          external: null
        },
        {
          title: 'Telia Enable Zone',
          description: t.teliaEnableZone,
          tech: ['AWS Lambda', 'React', 'JavaScript', 'API Gateway', 'DynamoDB'],
          github: null,
          external: null
        }
      ];
    },
    otherProjects() {
      const t = this.translations[this.language].projects;
      return [
        {
          title: 'oots-codelist',
          description: t.ootsCodelist,
          tech: ['Java', 'Quarkus', 'REST API'],
          github: 'https://github.com/nicklas1988/oots-codelist',
          external: null
        },
        {
          title: 'oots-requester',
          description: t.ootsRequester,
          tech: ['Java', 'Quarkus', 'REST API'],
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

            // Animate skill bars when they become visible
            if (entry.target.classList.contains('reveal-left')) {
              const bar = entry.target.querySelector('.skill-level');
              if (bar) {
                const targetWidth = bar.style.getPropertyValue('--target-width');
                if (targetWidth) {
                  bar.style.width = targetWidth;
                }
              }
            }
          }
        });
      }, { threshold: 0.1 });

      const selectors = '.reveal, .reveal-scale, .reveal-left, .reveal-up-sm, .reveal-card, .reveal-project';
      document.querySelectorAll(selectors).forEach((el) => {
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
