// ── i18n shared across all pages ─────────────────────

const i18n = {
  en: {
    nav_home: "Home", nav_support: "Support", nav_privacy: "Privacy",
    download_now: "Download now",
    hero: "ArcBreaker is a fast arcade game where timing and precision matter. Break bricks, protect the lower half, collect power-ups and climb the leaderboard. Built for casual, quick sessions with Game Center integration for global and friends leaderboards.",
    shots_title: "Screenshots",
    cap_makepoints: "Make points", cap_control: "Control your half",
    cap_powerups: "Use power-ups", cap_levelup: "Level up",
    cap_leaderboards: "Leaderboards",
    support_heading: "Contact support",
    support_intro: "Use the form below to contact support. Your email app will open with a pre-filled message. If you prefer, you can also email us directly at info@hafenente.de.",
    form_heading: "Support form",
    form_label_text: "Support text",
    form_label_email: "Your email (optional)",
    form_label_version: "App version (from Credits, e.g. Version 1.2.3 (45))",
    form_label_device: "Device (optional)",
    form_label_ios: "iOS version (optional)",
    form_button: "Open email draft",
    form_note: "Note: this page does not store your data. The message is created on your device.",
  },
  de: {
    nav_home: "Start", nav_support: "Support", nav_privacy: "Datenschutz",
    download_now: "Jetzt laden",
    hero: "ArcBreaker ist ein schnelles Arcade-Spiel, bei dem Timing und Präzision zählen. Zerstöre Blöcke, schütze die untere Hälfte, sammle Power-ups und klettere in der Bestenliste. Für kurze Sessions – mit Game-Center-Integration.",
    shots_title: "Screenshots",
    cap_makepoints: "Punkte machen", cap_control: "Kontrolliere deine Hälfte",
    cap_powerups: "Power-ups nutzen", cap_levelup: "Level up",
    cap_leaderboards: "Bestenlisten",
    support_heading: "Support kontaktieren",
    support_intro: "Nutze das Formular unten, um den Support zu kontaktieren. Deine E-Mail-App öffnet sich mit einer vorausgefüllten Nachricht. Du kannst uns auch direkt schreiben: info@hafenente.de.",
    form_heading: "Support-Formular",
    form_label_text: "Beschreibung",
    form_label_email: "Deine E-Mail (optional)",
    form_label_version: "App-Version (aus Credits, z.B. Version 1.2.3 (45))",
    form_label_device: "Gerät (optional)",
    form_label_ios: "iOS-Version (optional)",
    form_button: "E-Mail-Entwurf öffnen",
    form_note: "Hinweis: Diese Seite speichert keine Daten. Die Nachricht wird auf deinem Gerät erstellt.",
  },
  es: {
    nav_home: "Inicio", nav_support: "Soporte", nav_privacy: "Privacidad",
    download_now: "Descargar",
    hero: "ArcBreaker es un juego arcade rápido donde el tiempo y la precisión importan. Rompe bloques, protege la mitad inferior, recoge potenciadores y sube en la clasificación.",
    shots_title: "Capturas",
    cap_makepoints: "Haz puntos", cap_control: "Controla tu mitad",
    cap_powerups: "Usa potenciadores", cap_levelup: "Sube de nivel",
    cap_leaderboards: "Clasificaciones",
    support_heading: "Contactar soporte",
    support_intro: "Usa el formulario para contactar al soporte. Tu app de correo se abrirá con un mensaje prellenado. También puedes escribirnos a info@hafenente.de.",
    form_heading: "Formulario de soporte",
    form_label_text: "Descripción",
    form_label_email: "Tu correo (opcional)",
    form_label_version: "Versión de la app (de Créditos, ej. Versión 1.2.3 (45))",
    form_label_device: "Dispositivo (opcional)",
    form_label_ios: "Versión de iOS (opcional)",
    form_button: "Abrir borrador de correo",
    form_note: "Nota: esta página no guarda tus datos. El mensaje se crea en tu dispositivo.",
  },
  fr: {
    nav_home: "Accueil", nav_support: "Assistance", nav_privacy: "Confidentialité",
    download_now: "Télécharger",
    hero: "ArcBreaker est un jeu d'arcade rapide où le timing et la précision comptent. Cassez des briques, protégez la moitié inférieure, récupérez des power-ups et grimpez dans le classement.",
    shots_title: "Captures d'écran",
    cap_makepoints: "Marquer des points", cap_control: "Contrôlez votre moitié",
    cap_powerups: "Utiliser des power-ups", cap_levelup: "Monter de niveau",
    cap_leaderboards: "Classements",
    support_heading: "Contacter le support",
    support_intro: "Utilisez le formulaire ci-dessous. Votre application mail s'ouvrira avec un message prérempli. Vous pouvez aussi nous écrire directement à info@hafenente.de.",
    form_heading: "Formulaire de support",
    form_label_text: "Description",
    form_label_email: "Votre e-mail (optionnel)",
    form_label_version: "Version de l'app (ex. Version 1.2.3 (45))",
    form_label_device: "Appareil (optionnel)",
    form_label_ios: "Version iOS (optionnel)",
    form_button: "Ouvrir le brouillon",
    form_note: "Remarque : cette page ne stocke pas vos données. Le message est créé sur votre appareil.",
  },
};

function _detectBrowserLang() {
  const l = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return i18n[l] ? l : 'en';
}

function getLang() {
  return localStorage.getItem('ab_lang') || _detectBrowserLang();
}

function applyI18n(lang) {
  const dict = i18n[lang] || i18n.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  // hero copy is set via id because it's dynamic
  const heroCopy = document.getElementById('heroCopy');
  if (heroCopy && dict.hero) heroCopy.textContent = dict.hero;
}

function setLang(lang) {
  localStorage.setItem('ab_lang', lang);
  applyI18n(lang);
}

// run immediately on load
applyI18n(getLang());
