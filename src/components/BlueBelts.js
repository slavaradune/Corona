import React from 'react';
import '../App.css';
import Language from "../Language";
import AbstractExerciseComponent from "./AbstractExerciseComponent";
import BlueExTextHeb from '../content/excersice/BlueExTextHeb';
import BlueExTextRus from '../content/excersice/BlueExTextRus';
import ChallengeHeb from "../content/challenge/ChallengeHeb";
import ChallengeRus from "../content/challenge/ChallengeRus";

class BlueBelts extends React.Component {
    render() {
        let DICT = Language.getDict();
        let extext = (Language.getLanguage() === 'IL') ? <BlueExTextHeb/> : <BlueExTextRus/>;
        let chtext = (Language.getLanguage() === 'IL') ? <ChallengeHeb/> : <ChallengeRus/>;
        return (
            <AbstractExerciseComponent
                exvideo={DICT.blue_exvideo}
                extext={extext}
                chvideo={DICT.ch_video}
                chtext={chtext}
            />
        );
    }
}

export default BlueBelts;
