import { dropdownBtn, lang, selectLanguage } from "./languageSelector.js";

selectLanguage();
console.log(lang);

let nav = {
  en: {
    logo: `
            <a href="#home" class="logo">
              Beshoy
              <span>William</span>
            </a>`,
    links: `
            <div class="navbar-all">
              <div class="navlinks">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#timeline">Timeline</a>
                <a href="#services">Services</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
              `,
  },

  de: {
    logo: `
            <a href="#home" class="logo">
              Beshoy
              <span>William</span>
            </a>`,
    links: `
            <div class="navbar-all">
              <div class="navlinks">
                <a href="#home">HomePage</a>
                <a href="#about">Über</a>
                <a href="#skills">Fähigkeiten</a>
                <a href="#projects">Projekts</a>
                <a href="#timeline">Zeitlinie</a>
                <a href="#services">Services</a>
                <a href="#testimonials">Referenzen</a>
                <a href="#contact">Kontakt</a>
              </div>
            </div>`,
  },

  ar: {
    logo: `
            <a href="#home" class="logo">
              بيشوي
              <span>وليم</span>
            </a>`,
    links: `
            <div class="navbar-all">
              <div class="navlinks">
                <a href="#home">الصفحة الرئيسية</a>
                <a href="#about">المعلومات</a>
                <a href="#skills">المهارات</a>
                <a href="#projects">المشاريع</a>
                <a href="#timeline">السيرة الذاتية</a>
                <a href="#services">الخدمات</a>
                <a href="#testimonials">التعليقات</a>
                <a href="#contact">الاتصال</a>
              </div>
            </div>`,
  },
};

export function ChangeLanguage() {
  let translator;
  const dropDown = document.getElementById("nav-icon");

  // Changing the language from the language toggle button
  dropdownBtn.addEventListener("click", () => {
    if (lang == "de") {
      console.log("Selected Language: DE"); // German
      translator = new EOTranslator(nav, "de");
      document.body.style.direction = "ltr";

      // Translating the element
      translator.translateElement(logo);
      translator.translateElement(links);
    }
    if (lang == "ar") {
      console.log("Selected Language: Ar"); // English
      translator = new EOTranslator(nav, "ar");
      document.body.style.direction = "rtl";

      dropDown.style.right = "95%";

      // Translating the element
      translator.translateElement(logo);
      translator.translateElement(links);
    }
    if (lang == "en") {
      console.log("Selected Language: EN"); // English
      translator = new EOTranslator(nav, "en");
      document.body.style.direction = "ltr";

      dropDown.style.right = "0.75rem";

      // Translating the element
      translator.translateElement(logo);
      translator.translateElement(links);
    }
  });
}
