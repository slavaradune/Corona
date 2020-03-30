import React from 'react';
import '../App.css';
import Language from "../Language";
import AbstractExerciseComponent from "./AbstractExerciseComponent";
import GreenExTextHeb from '../content/excersice/GreenExTextHeb';
import GreenExTextRus from '../content/excersice/GreenExTextRus';
import GreenChTextHeb from '../content/challenge/GreenChTextHeb';
import GreenChTextRus from '../content/challenge/GreenChTextRus';
import ChallengeHeb from "../content/challenge/ChallengeHeb";
import ChallengeRus from "../content/challenge/ChallengeRus";

class GreenBelts extends React.Component {
    render() {
        let DICT = Language.getDict();
        let extext = (Language.getLanguage() === 'IL') ? <GreenExTextHeb/> : <GreenExTextRus/>;
        let chtext = (Language.getLanguage() === 'IL') ? <ChallengeHeb/> : <ChallengeRus/>;
        return (
            <AbstractExerciseComponent
                exvideo={DICT.green_exvideo}
                extext={extext}
                chvideo={DICT.ch_video}
                chtext={chtext}
            />
        );
    }
}

export default GreenBelts;
