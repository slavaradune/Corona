import {Consts, SupportedLanguages, Dicts} from "./Consts";

class Language{
    static getInstance() {
        if (Language.instance === undefined) {
            let lang = localStorage.getItem('language');
            if (lang === undefined || !Language.checkPossibleLanguages(lang)) {
                lang = Consts.default_language
            }
            Language.instance = new Language(lang)
        }
        return Language.instance;
    }

    constructor(lang){
        this.language = lang
    }

    static checkPossibleLanguages(lang) {
        return SupportedLanguages.includes(lang)
    }

    static changeLanguage(lang) {
        if (Language.checkPossibleLanguages(lang)) {
            Language.getInstance().setLanguage(lang)
        } else {
            console.warn('try to select unsupported language: ' + lang)
        }
    }

    static getDict(){
        return Dicts[Language.getLanguage()]
    }

    static getLanguage() {
        return Language.getInstance().getLang();
    }

    getLang() {
        return this.language;
    }

    setLanguage(lang) {
        localStorage.setItem('language', lang);
        this.language = lang
    }
}

export default Language