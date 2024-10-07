import { getStorage, setStorage } from "../utils/helper.js";

export let lang;
export let dropdownBtn;
export let listEl;

export function selectLanguage() {
  const locales = ["en-GB", "ar-SA", "de-DE"];

  function getFlagSrc(countryCode) {
    return /^[A-Z]{2}$/.test(countryCode)
      ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png`
      : "";
  }

  dropdownBtn = document.getElementById("dropdown-btn");
  const dropdownContent = document.getElementById("dropdown-content");

  // Function to set the selected language in the dropdown
  function setSelectedLocale(locale) {
    const intlLocale = new Intl.Locale(locale);
    const langName = new Intl.DisplayNames([locale], {
      type: "language",
    }).of(intlLocale.language);
    lang = intlLocale.language;

    // Save selected language to local storage
    setStorage("selectedLanguage", locale);

    // Clear the current dropdown content and populate with other locales
    dropdownContent.innerHTML = "";

    const otherLocales = locales.filter((loc) => loc !== locale);
    otherLocales.forEach((otherLocale) => {
      const otherIntlLocale = new Intl.Locale(otherLocale);
      const otherLangName = new Intl.DisplayNames([otherLocale], {
        type: "language",
      }).of(otherIntlLocale.language);

      listEl = document.createElement("li");
      listEl.innerHTML = `${otherLangName}<img src="${getFlagSrc(
        otherIntlLocale.region
      )}" />`;
      listEl.value = otherLocale;

      listEl.addEventListener("mousedown", function () {
        setSelectedLocale(otherLocale);

        // Dispatch custom event with the selected locale
        const localeSelectedEvent = new CustomEvent("localeSelected", {
          detail: {
            locale: otherLocale,
          },
        });
        document.dispatchEvent(localeSelectedEvent);
      });

      dropdownContent.appendChild(listEl);
    });

    // Set the selected locale in the dropdown button
    dropdownBtn.innerHTML = `<img src="${getFlagSrc(
      intlLocale.region
    )}" />${langName}<span class="arrow-down"></span>`;
  }

  // Check if a language is stored in localStorage
  const savedLocale = getStorage("selectedLanguage");

  if (savedLocale && locales.includes(savedLocale)) {
    // Use the saved language from localStorage
    setSelectedLocale(savedLocale);
  } else {
    // Fallback: set the first locale or the browser language
    setSelectedLocale(locales[0]);
    const browserLang = new Intl.Locale(navigator.language).language;
    for (const locale of locales) {
      const localeLang = new Intl.Locale(locale).language;
      if (localeLang === browserLang) {
        setSelectedLocale(locale);
      }
    }
  }
}
