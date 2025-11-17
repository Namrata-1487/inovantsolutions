import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
  fallbackLng: "en",
  interpolation: {
   escapeValue: false,
  },
  resources: {
   // ---------------- ENGLISH ----------------
   en: {
    translation: {
     navbar: {
      influencer: "Influencer",
      favourite: "Favourite",
      cart: "Cart",
      signup: "Sign up / Log in",
      language_en: "English",
      language_ar: "Arabic",
      language_hi: "Hindi",
      language_mr: "Marathi",
      languageAlt: "Language",
      logoAlt: "Zwara logo",
      toggle: "Toggle navigation"
     }
    }
   },

   // ---------------- ARABIC (RTL) ----------------
   ar: {
    translation: {
     navbar: {
      influencer: "المؤثر",
      favourite: "المفضلة",
      cart: "عربة التسوق",
      signup: "تسجيل / دخول",
      language_en: "الإنجليزية",
      language_ar: "العربية",
      language_hi: "الهندية",
      language_mr: "الماراثية",
      languageAlt: "اللغة",
      logoAlt: "شعار زوارا",
      toggle: "تبديل القائمة"
     }
    },

    // ---------------- HINDI ----------------
    hi: {
     translation: {
      navbar: {
       influencer: "इन्फ्लुएंसर",
       favourite: "पसंदीदा",
       cart: "कार्ट",
       signup: "साइन अप / लॉग इन",
       language_en: "अंग्रेज़ी",
       language_ar: "अरबी",
       language_hi: "हिंदी",
       language_mr: "मराठी",
       languageAlt: "भाषा",
       logoAlt: "ज़वारा लोगो",
       toggle: "नेविगेशन बदलें"
      }
     }
    },

    // ---------------- MARATHI ----------------
    mr: {
     translation: {
      navbar: {
       influencer: "इन्फ्लुएंसर",
       favourite: "आवडते",
       cart: "कार्ट",
       signup: "साइन अप / लॉग इन",
       language_en: "इंग्रजी",
       language_ar: "अरबी",
       language_hi: "हिंदी",
       language_mr: "मराठी",
       languageAlt: "भाषा",
       logoAlt: "झवारा लोगो",
       toggle: "नेव्हिगेशन बदला"
      }
     }
    }
   }
  }});

export default i18n;
