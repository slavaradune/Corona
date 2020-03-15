import React from 'react';
import '../App.css';
import Language from "../Language";
import AbstractExerciseComponent from "./AbstractExerciseComponent";
import BlueExTextHeb from '../content/excersice/BlueExTextHeb';
import BlueExTextRus from '../content/excersice/BlueExTextRus';
import BlueChTextHeb from '../content/challenge/BlueChTextHeb';
import BlueChTextRus from '../content/challenge/BlueChTextRus';

class BlueBelts extends React.Component {
    render() {
        let DICT = Language.getDict();
        let extext = (Language.getLanguage() === 'IL') ? <BlueExTextHeb/> : <BlueExTextRus/>;
        let chtext = (Language.getLanguage() === 'IL') ? <BlueChTextHeb/> : <BlueChTextRus/>;
        return (
            <AbstractExerciseComponent
                exvideo={DICT.blue_exvideo}
                extext={extext}
                chvideo={DICT.blue_chvideo}
                chtext={chtext}
            />
        );
    }
}

export default BlueBelts;
