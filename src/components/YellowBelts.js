import React from 'react';
import '../App.css';
import Language from "../Language";
import AbstractExerciseComponent from "./AbstractExerciseComponent";
import YellowExTextHeb from '../content/excersice/YellowExTextHeb';
import YellowExTextRus from '../content/excersice/YellowExTextRus';
import ChallengeHeb from "../content/challenge/ChallengeHeb";
import ChallengeRus from "../content/challenge/ChallengeRus";

class YellowBelts extends React.Component {
    render() {
        let DICT = Language.getDict();
        let extext = (Language.getLanguage() === 'IL') ? <YellowExTextHeb/> : <YellowExTextRus/>;
        let chtext = (Language.getLanguage() === 'IL') ? <ChallengeHeb/> : <ChallengeRus/>;
        return (
            <AbstractExerciseComponent
                exvideo={DICT.yellow_exvideo}
                extext={extext}
                chvideo={DICT.ch_video}
                chtext={chtext}
            />
        );
    }
}

export default YellowBelts;
