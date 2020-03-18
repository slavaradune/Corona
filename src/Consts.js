import {DICT  as Hebrew} from './dicts/Hebrew'
import {DICT  as Russian} from './dicts/Russian'

const Consts = {
    default_language: 'IL',
    server_url: 'https://corona-fighting-server.herokuapp.com',
    highlights: ["https://www.youtube.com/embed/smNrIhb-WLg"]
};

const SupportedLanguages = ['IL', 'RU'];

const Dicts = {'IL': Hebrew, 'RU': Russian};

export {Consts, SupportedLanguages, Dicts};