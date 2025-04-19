import i18n from 'i18next'
import languageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'

export enum Language {
  EN = 'en',
  ZH_HANT = 'zh-Hant'
}

export enum Namespace {
  COMMON = 'common',
  HOME = 'home'
}

const SUPPORTED_LNGS = Object.values(Language)
const DEFAULT_LNG = Language.EN
const NS = Object.values(Namespace)
const DEFAULT_NS = Namespace.COMMON

i18n
  .use(resourcesToBackend((lng: string, ns: string) => import(`../../public/locales/${lng}/${ns}.json`)))
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: SUPPORTED_LNGS,
    fallbackLng: DEFAULT_LNG,
    ns: NS,
    defaultNS: DEFAULT_NS,
    interpolation: { escapeValue: false, skipOnVariables: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

export { DEFAULT_LNG, DEFAULT_NS, NS, SUPPORTED_LNGS }
export default i18n
