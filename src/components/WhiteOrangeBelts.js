import React from 'react';
import '../App.css';
import Language from "../Language";
import AbstractExerciseComponent from "./AbstractExerciseComponent";
import WhiteOrangeExTextHeb from '../content/excersice/WhiteOrangeExTextHeb';
import WhiteOrangeExTextRus from '../content/excersice/WhiteOrangeExTextRus';
import WhiteOrangeChTextHeb from '../content/challenge/WhiteOrangeChTextHeb';
import WhiteOrangeChTextRus from '../content/challenge/WhiteOrangeChTextRus';

class WhiteOrangeBelts extends React.Component {
    render() {
        let DICT = Language.getDict();
        let extext = (Language.getLanguage() === 'IL') ? <WhiteOrangeExTextHeb/> : <WhiteOrangeExTextRus/>;
        let chtext = (Language.getLanguage() === 'IL') ? <WhiteOrangeChTextHeb/> : <WhiteOrangeChTextRus/>;
        return (
            <AbstractExerciseComponent
                exvideo={DICT.white_orange_exvideo}
                extext={extext}
                chvideo={DICT.white_orange_chvideo}
                chtext={chtext}
            />
        );
    }
}

export default WhiteOrangeBelts;
