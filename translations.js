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
  }
};