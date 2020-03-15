import {DICT  as Hebrew} from './dicts/Hebrew'
import {DICT  as Russian} from './dicts/Russian'

const Consts = {
    default_language: 'IL'
};

const SupportedLanguages = ['IL', 'RU'];

const Dicts = {'IL': Hebrew, 'RU': Russian};

export {Consts, SupportedLanguages, Dicts};