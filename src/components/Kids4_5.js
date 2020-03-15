import React from 'react';
import '../App.css';
import Language from "../Language";
import AbstractExerciseComponent from "./AbstractExerciseComponent";
import Kids4_5ExTextHeb from '../content/excersice/Kids4_5ExTextHeb'
import Kids4_5ExTextRus from '../content/excersice/Kids4_5ExTextRus'
import Kids4_5ChTextHeb from "../content/challenge/Kids4_5ChTextHeb";
import Kids4_5ChTextRus from "../content/challenge/Kids4_5ChTextRus";

class Kids4_5 extends React.Component {
    render() {
        let DICT = Language.getDict();
        let extext = (Language.getLanguage() === 'IL') ? <Kids4_5ExTextHeb/> : <Kids4_5ExTextRus/>;
        let chtext = (Language.getLanguage() === 'IL') ? <Kids4_5ChTextHeb/> : <Kids4_5ChTextRus/>;
        return (
            <AbstractExerciseComponent
                exvideo={DICT.kids4_5_exvideo}
                extext={extext}
                chvideo={DICT.kids4_5_chvideo}
                chtext={chtext}
            />
        );
    }
}

export default Kids4_5;
