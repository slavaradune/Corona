import {DICT  as Hebrew} from './dicts/Hebrew'
import {DICT  as Russian} from './dicts/Russian'

const Consts = {
    default_language: 'IL',
    server_url: 'https://corona-fighting-server.herokuapp.com',
    // server_url: 'http://localhost:5000',
    highlights: [
        "https://www.youtube.com/embed/HQB5Gnw4f_M",
        "https://www.youtube.com/embed/jnwtDAtfFzM",
        "https://www.youtube.com/embed/iH0qWDm5GOs",
        "https://www.youtube.com/embed/JbXLEJOW6aM",
        "https://www.youtube.com/embed/XLGJCpREuLA",
        "https://www.youtube.com/embed/Iv681yHG6Lo",
        "https://www.youtube.com/embed/pzKOeEQfOpA",
        "https://www.youtube.com/embed/HDx6jH9nEQ8",
        "https://www.youtube.com/embed/smNrIhb-WLg"]
};

const SupportedLanguages = ['IL', 'RU'];

const Dicts = {'IL': Hebrew, 'RU': Russian};

export {Consts, SupportedLanguages, Dicts};