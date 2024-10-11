import { getStorage, setStorage } from "../utils/helper.js";
import { lang, selectLanguage, listEl } from "./languageSelector.js";
import { Projects } from "./projects.js";
~selectLanguage();

console.log(listEl);

export let currentLang;

console.log(lang.includes("en"));
let nav = {
  en: {
    settingsColor: `<h3>Colors</h3>`,
    settingsNav: `<h3>Nav Fixed</h3>`,
    settingsBullets: `<h3>Nav Bullets</h3>`,
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
    homeContent: `
            <h1>Hi, It's <span>Beshoy</span></h1>
            <h3 class="text-animation">I'm a <span></span></h3>
            <p  clsass="animate__animated animate__bounce animate__delay-2s">
              I’m wrangling code and optimizing performance, I’m on a mission to
              create digital wonders. Let’s connect and build something amazing
              together!
              <i class="bx bx-rocket"></i>
              <i class="bx bxs-star"></i>
            </p>
    `,
    homeBtn: `
              <a href="#morphContact" class="btn" id="morphButton">
                Hire Me Now!
                <i class="bx bx-right-arrow-alt"></i>
              </a>
                          
            <div class="insulator-background"></div>

              <section id="morphContact" class="contact-section">
              <i class="fa-solid fa-x"></i>
                <h2>Contact Me</h2>
                <form>
                  <input type="text" placeholder="Your Name" required>
                  <input type="email" placeholder="Your Email" required>
                  <textarea placeholder="Your Message" required></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </section>

                <a href="https://beshoywill.github.io/CV/" class="btn">
                  View CV
                  <i class="bx bxs-right-arrow"></i>
                </a>
              </div>`,
    aboutTitle: `<h2 class="heading">About <span>Me</span></h2>`,
    aboutContent: `
              <h4>About Me</h4>
              <h3>2+ Years' Experience in Web Development</h3>
              <p>
                As a passionate Web Developer, I craft delightful user
                experiences. My code dances with interactivity, responsiveness,
                and pixel-perfect precision. Whether it’s building dynamic web
                applications or creating seamless UI components, I thrive on
                turning ideas into elegant interfaces.I’ve also dipped my toes
                into the ASP.NET backend world. From APIs to databases, I’ve
                explored the server-side magic. It’s like being a code
                architect—building the foundation that powers the visible magic.
              </p>

              <div class="experience-info">
                <div>
                  <p>User Experience Design UI/UX</p>
                  <p>Delight the user and make it work</p>
                </div>
                <div>
                  <p>User Experience Front End Development</p>
                  <p>Design and implementation of user interfaces.</p>
                </div>
                <div>
                  <p>Interaction Design - Animation</p>
                  <p>I like to move it move it</p>
                </div>
                <div>
                  <p>Backend Development - Data Flow</p>
                  <p>Craft Efficient Solutions</p>
                </div>
              </div>
              `,
    aboutBtn: `Download CV <i class="bx bx-download"></i>`,
    skillsTitle: `<h2 class="heading">My Ski<span>lls</span></h2>`,
    projectsTitle: `<h2 class="heading">My Proje<span>cts</span></h2>`,
    timelineTitle: `<h2 class="heading">Life Time<span>line</span></h2>`,
    servicesTitle: `<h2 class="heading">Servi<span>ces</span></h2>`,
    testimonialsTitle: `<h2 class="heading">Testimon<span>ials</span></h2>`,
    contactTitle: `<h2 class="heading">Contact <span>Me</span></h2>`,
    contactForm: `
              <form action="#">
            <div class="input-group wow fadeIn"
            data-wow-duration="2s">
              <div class="input-box">
                <div class="input-field field">
                  <input type="text" class="item" name="name" id="name" placeholder="Full Name" autocomplete="off"/>
                  <div class="error-txt">Full Name can't be blank</div>
                </div>
              <div class="input-field field">
                <input type="email" class="item" name="email" id="email" placeholder="Email" autocomplete="off"/>
                <div class="error-txt email">Email Address can't be blank</div>
              </div>
              </div>
              <div class="input-box">
                <div class="input-field field">
                  <input type="tel" class="item" name="phone" id="phone" placeholder="Phone Number" autocomplete="off"/>
                  <div class="error-txt">Phone Number can't be blank</div>
                </div>
                <div class="input-field field">
                  <input type="text" class="item" name="subject" id="subject" placeholder="Subject" autocomplete="off"/>
                  <div class="error-txt">Subject can't be blank</div>
                </div>
              </div>
            </div>

            <div class="input-group-2 wow fadeIn"
            data-wow-duration="2s">
              <div class="input-field field">
                <textarea
                name="message"
                id="message"
                cols="50"
                rows="10"
                placeholder="Your Message"
                class="item"
              ></textarea>
              <div class="error-txt">Message can't be blank</div>
              </div>

              <div class="btn-group">
                <button class="btn" type="sbmit">Send Message</button>
              </div>
            </div>
            </form>
    `,
    footerText: `
            <ul class="list">
              <li>
                <a href="#">FAQ</a>
              </li>

              <li>
                <a href="#">Services</a>
              </li>

              <li>
                <a href="#">About Me</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>

              <li>
                <a href="#">Testimonials</a>
              </li>
            </ul>
            
            <p class="copyright">© Beshoy William | All Rights Reserved</p>`,
  },

  de: {
    settingsColor: `<h3>Farben</h3>`,
    settingsNav: `<h3>Navigation fixiert</h3>`,
    settingsBullets: `<h3>Navigationspunkte</h3>`,
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
    homeContent: `
            <h1>Hallo, ich bin <span>Beshoy</span></h1>
            <h3 class="text-animation">Ich arbeite als <span></span></h3>
            <p class="animate__animated animate__bounce animate__delay-2s">
              Ich zähme Code und optimiere die Leistung. Ich habe es mir zur Aufgabe gemacht, digitale Wunder zu schaffen. Lass uns verbinden und gemeinsam etwas Großartiges erschaffen!
              <i class="bx bx-rocket"></i>
              <i class="bx bxs-star"></i>
            </p>
            `,
    homeBtn: `
            <a href="#morphContact" class="btn" id="morphButton">
              Stell mich jetzt ein!
              <i class="bx bx-right-arrow-alt"></i>
            </a>
              
            <div class="insulator-background"></div>

            <section id="morphContact" class="contact-section">
            <i class="fa-solid fa-x"></i>
              <h2>Kontaktieren Sie mich</h2>
              <form>
                <input type="text" placeholder="Ihr Name" required>
                <input type="email" placeholder="Ihre E-Mail" required>
                <textarea placeholder="Ihre Nachricht" required></textarea>
                <button type="submit">Nachricht senden</button>
              </form>
            </section>

            <a href="https://beshoywill.github.io/CV/" class="btn">
              Lebenslauf ansehen
              <i class="bx bxs-right-arrow"></i>
            </a>`,
    aboutTitle: `<h2 class="heading">Über <span>Mich</span></h2>`,
    aboutContent: `
            <h4>Über Mich</h4>
            <h3>Über 2 Jahre Erfahrung in der Webentwicklung</h3>
            <p>
              Als leidenschaftlicher Webentwickler schaffe ich wunderbare Benutzererlebnisse. 
              Mein Code bewegt sich mit Interaktivität, Reaktionsfähigkeit und pixelgenauer Präzision. 
              Egal, ob es darum geht, dynamische Webanwendungen zu erstellen oder nahtlose UI-Komponenten zu entwickeln, 
              ich liebe es, Ideen in elegante Schnittstellen zu verwandeln. 
              Ich habe auch erste Schritte in der ASP.NET-Backend-Welt gemacht. 
              Von APIs bis hin zu Datenbanken habe ich die Magie der Serverseite erkundet. 
              Es ist, als wäre ich ein Code-Architekt – der das Fundament baut, das die sichtbare Magie unterstützt.
            </p>

            <div class="experience-info">
              <div>
                <p>Benutzererfahrung Design UI/UX</p>
                <p>Den Benutzer begeistern und alles funktionieren lassen</p>
              </div>
              <div>
                <p>Benutzererfahrung Frontend-Entwicklung</p>
                <p>Design und Implementierung von Benutzeroberflächen.</p>
              </div>
              <div>
                <p>Interaktionsdesign - Animation</p>
                <p>Ich liebe es, Dinge in Bewegung zu bringen</p>
              </div>
              <div>
                <p>Backend-Entwicklung - Datenfluss</p>
                <p>Effiziente Lösungen entwickeln</p>
              </div>
            </div>`,
    aboutBtn: `Lebenslauf herunterladen <i class="bx bx-download"></i>`,
    skillsTitle: `<h2 class="heading">Meine Fä<span>higkeiten</span></h2>`,
    projectsTitle: `<h2 class="heading">Meine Proje<span>kte</span></h2>`,
    timelineTitle: `<h2 class="heading">Lebens<span>linie</span></h2>`,
    servicesTitle: `<h2 class="heading">Dienst<span>leistungen</span></h2>`,
    testimonialsTitle: `<h2 class="heading">Empfehlun<span>gen</span></h2>`,
    contactTitle: `<h2 class="heading">Kontaktieren Sie<span> mich</span></h2>`,
    contactForm: `
              <form action="#">
        <div class="input-group wow fadeIn" data-wow-duration="2s">
          <div class="input-box">
            <div class="input-field field">
              <input type="text" class="item" name="name" id="name" placeholder="Vollständiger Name" autocomplete="off"/>
              <div class="error-txt">Der vollständige Name darf nicht leer sein</div>
            </div>
            <div class="input-field field">
              <input type="email" class="item" name="email" id="email" placeholder="E-Mail" autocomplete="off"/>
              <div class="error-txt email">Die E-Mail-Adresse darf nicht leer sein</div>
            </div>
          </div>
          <div class="input-box">
            <div class="input-field field">
              <input type="tel" class="item" name="phone" id="phone" placeholder="Telefonnummer" autocomplete="off"/>
              <div class="error-txt">Die Telefonnummer darf nicht leer sein</div>
            </div>
            <div class="input-field field">
              <input type="text" class="item" name="subject" id="subject" placeholder="Betreff" autocomplete="off"/>
              <div class="error-txt">Der Betreff darf nicht leer sein</div>
            </div>
          </div>
        </div>

        <div class="input-group-2 wow fadeIn" data-wow-duration="2s">
          <div class="input-field field">
            <textarea name="message" id="message" cols="50" rows="10" placeholder="Ihre Nachricht" class="item"></textarea>
            <div class="error-txt">Die Nachricht darf nicht leer sein</div>
          </div>

          <div class="btn-group">
            <button class="btn" type="submit">Nachricht senden</button>
          </div>
        </div>
        </form>
    `,
    footerText: `
            <ul class="list">
              <li>
                <a href="#">FAQ</a>
              </li>

              <li>
                <a href="#">Dienstleistungen</a>
              </li>

              <li>
                <a href="#">Über mich</a>
              </li>

              <li>
                <a href="#">Kontakt</a>
              </li>

              <li>
                <a href="#">Empfehlungen</a>
              </li>
            </ul>
            
            <p class="copyright">© Beshoy William | Alle Rechte vorbehalten</p>`,
  },

  ar: {
    settingsColor: `<h3>الألوان</h3>`,
    settingsNav: `<h3>تثبيت شريط التنقل</h3>`,
    settingsBullets: `<h3>نقاط التنقل</h3>`,
    logo: `
            <a href="#home" class="logo">
              بيشوي
              <span>وليم</span>
            </a>`,
    links: `
            <div class="navbar-all">
              <div class="navlinks">
                <a href="#home" class="ar">الصفحة الرئيسية</a>
                <a href="#about" class="ar">المعلومات</a>
                <a href="#skills" class="ar">المهارات</a>
                <a href="#projects" class="ar">المشاريع</a>
                <a href="#timeline" class="ar">السيرة الذاتية</a>
                <a href="#services" class="ar">الخدمات</a>
                <a href="#testimonials" class="ar">التعليقات</a>
                <a href="#contact" class="ar">الاتصال</a>
              </div>
            </div>`,
    homeContent: `
            <h1>مرحبًا، أنا <span>بيشوي</span></h1>
            <h3 class="text-animation">أنا <span></span></h3>
            <p class="animate__animated animate__bounce animate__delay-2s">
              أنا عاشق للاكواد والبرمجة ومهمتي هي إنشاء عجائب في مجال الويب. دعنا نتواصل ونبني شيئًا مذهلًا معًا!
              <i class="bx bx-rocket"></i>
              <i class="bx bxs-star"></i>
            </p>
            `,
    homeBtn: `
        <a href="#morphContact" class="btn" id="morphButton">
          وظفني الآن!
          <i class="bx bx-right-arrow-alt"></i>
        </a>
              
            <div class="insulator-background"></div>

        <section id="morphContact" class="contact-section">
        <i class="fa-solid fa-x"></i>
          <h2>اتصل بي</h2>
          <form>
            <input type="text" placeholder="اسمك" required>
            <input type="email" placeholder="بريدك الإلكتروني" required>
            <textarea placeholder="رسالتك" required></textarea>
            <button type="submit">إرسال الرسالة</button>
          </form>
        </section>

            <a href="https://beshoywill.github.io/CV/" class="btn">
              عرض السيرة الذاتية
              <i class="bx bxs-left-arrow"></i>
            </a>
            `,
    aboutTitle: `<h2 class="heading">نبذة <span>عني</span></h2>`,
    aboutContent: `
    <h4 style="text-align: right">نبذة عني</h4>
    <h3 style="text-align: right">خبرة تزيد عن سنتين في تطوير الويب/h3>
    <p style="text-align: right">
      كمطور ويب شغوف، أصنع تجارب مستخدم رائعة. شيفرتي تتفاعل مع
      التفاعلية، الاستجابة، والدقة المثالية في التصميم. سواء كان
      بناء تطبيقات ويب ديناميكية أو إنشاء مكونات واجهة مستخدم سلسة،
      أزدهر في تحويل الأفكار إلى واجهات أنيقة. لقد استكشفت أيضًا
      عالم ASP.NET الخلفي. من APIs إلى قواعد البيانات، لقد غامرت في
      سحر السيرفر. إنه يشبه كوني مهندس برمجة، أبني الأساس الذي يدعم
      السحر المرئي.
    </p>

    <div class="experience-info" style="text-align: right">
      <div>
        <p>تصميم تجربة المستخدم UI/UX</p>
        <p>إبهار المستخدم وجعل كل شيء يعمل</p>
      </div>
      <div>
        <p>تطوير الواجهة الأمامية لتجربة المستخدم</p>
        <p>تصميم وتنفيذ واجهات المستخدم.</p>
      </div>
      <div>
        <p>تصميم التفاعل - الرسوم المتحركة</p>
        <p>أحب تحريك الأشياء</p>
      </div>
      <div>
        <p>التطوير الخلفي - تدفق البيانات</p>
        <p>بناء حلول فعّالة</p>
      </div>
    </div>
    `,
    aboutBtn: `تحميل السيرة الذاتية  <i class="bx bx-download"></i>`,
    skillsTitle: `<h2 class="heading">مهار<span>اتي</span></h2>`,
    projectsTitle: `<h2 class="heading">مشار<span>يعي</span></h2>`,
    timelineTitle: `<h2 class="heading">مسار حي<span>اتي</span></h2>`,
    servicesTitle: `<h2 class="heading">خدم<span>ات</span></h2>`,
    testimonialsTitle: `<h2 class="heading">الترشيح<span>ات</span></h2>`,
    contactTitle: `<h2 class="heading">تواصل <span>معي</span></h2>`,
    contactForm: `
              <form action="#">
            <div class="input-group wow fadeIn" data-wow-duration="2s">
            <div class="input-box">
              <div class="input-field field">
                <input style="text-align: right" type="text" class="item" name="name" id="name" placeholder="الاسم الكامل" autocomplete="off"/>
                <div class="error-txt" style="text-align: right">لا يمكن أن يكون الاسم الكامل فارغًا</div>
              </div>
              <div class="input-field field">
                <input style="text-align: right" type="email" class="item" name="email" id="email" placeholder="البريد الإلكتروني" autocomplete="off"/>
                <div class="error-txt email">لا يمكن أن يكون عنوان البريد الإلكتروني فارغًا</div>
              </div>
            </div>
            <div class="input-box">
              <div class="input-field field">
                <input style="text-align: right" type="tel" class="item" name="phone" id="phone" placeholder="رقم الهاتف" autocomplete="off"/>
                <div class="error-txt" style="text-align: right">لا يمكن أن يكون رقم الهاتف فارغًا</div>
              </div>
              <div class="input-field field">
                <input style="text-align: right" type="text" class="item" name="subject" id="subject" placeholder="الموضوع" autocomplete="off"/>
                <div class="error-txt" style="text-align: right">لا يمكن أن يكون الموضوع فارغًا</div>
              </div>
            </div>
          </div>

          <div class="input-group-2 wow fadeIn" data-wow-duration="2s">
            <div class="input-field field">
              <textarea name="message" id="message" cols="50" rows="10" placeholder="رسالتك" class="item"></textarea>
              <div class="error-txt" style="text-align: right">لا يمكن أن تكون الرسالة فارغة</div>
            </div>

            <div class="btn-group">
              <button class="btn" type="submit">إرسال الرسالة</button>
            </div>
          </div>
          </form>
    `,
    footerText: `
            <ul class="list">
              <li>
                <a href="#">الأسئلة الشائعة</a>
              </li>

              <li>
                <a href="#">الخدمات</a>
              </li>

              <li>
                <a href="#">نبذة عني</a>
              </li>

              <li>
                <a href="#">التواصل</a>
              </li>

              <li>
                <a href="#">الشهادات</a>
              </li>
            </ul>
            
            <p class="copyright">© بشوي ويليام | جميع الحقوق محفوظة</p>`,
  },
};

export function ChangeLanguage() {
  let translator;
  const dropDown = document.getElementById("nav-icon");
  const aboutSection = document.getElementById("about");

  const savedlang = getStorage("selectedLanguage").split("-")[0];

  console.log(lang.includes(savedlang));

  const savedLang = getStorage("selectedLanguage");
  currentLang = savedLang ? savedLang.split("-")[0] : "en"; // Default to "en" if nothing is saved
  console.log("Current language from localStorage:", currentLang);

  // Initial language setup
  updateLanguage(currentLang);

  // console.log(listEl);

  // Changing the language from the language toggle button
  document.addEventListener("localeSelected", function (event) {
    // Check if a language is stored in localStorage
    console.log("localStorage: ", getStorage("selectedLanguage").split("-")[0]);

    const selectedLocale = event.detail.locale;
    console.log("Selected locale:", selectedLocale);

    currentLang = selectedLocale.split("-")[0]; // Get language part before "-"

    setStorage("selectedLanguage", selectedLocale);

    updateLanguage(currentLang);
  });

  function updateLanguage(lang) {
    if (lang == "de") {
      // console.log("Selected Language: DE"); // German
      translator = new EOTranslator(nav, "de");
      document.body.style.direction = "ltr";

      dropDown.style.right = "0.5rem";

      // Translating the element
      translator.translateDOM(settingsColor, settingsBullets, settingsNav);
      translator.translateDOM(logo);
      translator.translateDOM(links);
      translator.translateDOM(homeContent);
      translator.translateDOM(aboutContent);
      translator.translateElement(aboutBtn);
      translator.translateDOM(skillsTitle);
      translator.translateDOM(projectsTitle);
      translator.translateDOM(timelineTitle);
      translator.translateDOM(servicesTitle);
      translator.translateDOM(footerText);
    }
    if (lang == "ar") {
      console.log("Selected Language: Ar"); // English
      translator = new EOTranslator(nav, "ar");
      document.body.style.direction = "rtl";

      dropDown.style.right = "calc(-20px + 97%)";

      // Translating the element
      translator.translateDOM(settingsColor);
      translator.translateDOM(settingsNav);
      translator.translateDOM(settingsBullets);
      translator.translateDOM(logo);
      translator.translateDOM(links);
      translator.translateDOM(homeContent);
      translator.translateDOM(aboutContent);
      translator.translateElement(aboutBtn);
      translator.translateDOM(skillsTitle);
      translator.translateDOM(projectsTitle);
      translator.translateDOM(timelineTitle);
      translator.translateDOM(servicesTitle);
      translator.translateDOM(footerText);
    }
    if (lang == "en") {
      console.log("Selected Language: EN"); // English
      translator = new EOTranslator(nav, "en");
      document.body.style.direction = "ltr";

      dropDown.style.right = "0.5rem";

      // Translating the element
      translator.translateDOM(settingsColor);
      translator.translateDOM(settingsNav);
      translator.translateDOM(settingsBullets);
      translator.translateDOM(logo);
      translator.translateDOM(links);
      translator.translateDOM(homeContent);
      translator.translateDOM(aboutContent);
      translator.translateElement(aboutBtn);
      translator.translateDOM(skillsTitle);
      translator.translateDOM(projectsTitle);
      translator.translateDOM(timelineTitle);
      translator.translateDOM(servicesTitle);
      translator.translateDOM(footerText);
    }
  }
}
