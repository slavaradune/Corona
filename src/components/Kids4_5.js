import React from 'react';
import '../App.css';
import Language from "../Language";
import AbstractExerciseComponent from "./AbstractExerciseComponent";
import Kids4_5ExTextHeb from '../content/excersice/Kids4_5ExTextHeb'
import Kids4_5ExTextRus from '../content/excersice/Kids4_5ExTextRus'
import ChallengeHeb from "../content/challenge/ChallengeHeb";
import ChallengeRus from "../content/challenge/ChallengeRus";

class Kids4_5 extends React.Component {
    render() {
        let DICT = Language.getDict();
        let extext = (Language.getLanguage() === 'IL') ? <Kids4_5ExTextHeb/> : <Kids4_5ExTextRus/>;
        let chtext = (Language.getLanguage() === 'IL') ? <ChallengeHeb/> : <ChallengeRus/>;
        return (
            <AbstractExerciseComponent
                exvideo={DICT.kids4_5_exvideo}
                extext={extext}
                chvideo={DICT.ch_video}
                chtext={chtext}
            />
        );
    }
}

export default Kids4_5;
