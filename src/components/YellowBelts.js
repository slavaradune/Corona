import React from 'react';
import '../App.css';
import Language from "../Language";
import AbstractExerciseComponent from "./AbstractExerciseComponent";
import YellowExTextHeb from '../content/excersice/YellowExTextHeb';
import YellowExTextRus from '../content/excersice/YellowExTextRus';
import YellowChTextHeb from '../content/challenge/YellowChTextHeb';
import YellowChTextRus from '../content/challenge/YellowChTextRus';

class YellowBelts extends React.Component {
    render() {
        let DICT = Language.getDict();
        let extext = (Language.getLanguage() === 'IL') ? <YellowExTextHeb/> : <YellowExTextRus/>;
        let chtext = (Language.getLanguage() === 'IL') ? <YellowChTextHeb/> : <YellowChTextRus/>;
        return (
            <AbstractExerciseComponent
                exvideo={DICT.yellow_exvideo}
                extext={extext}
                chvideo={DICT.yellow_chvideo}
                chtext={chtext}
            />
        );
    }
}

export default YellowBelts;
