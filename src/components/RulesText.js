import React from 'react';
import '../App.css';
import Language from "../Language";
import RulesTextHeb from "../content/RulesTextHeb";
import RulesTextRus from "../content/RulesTextRus";

class RulesText extends React.Component {


    render() {
        let lang = Language.getLanguage();
        let textComponent = (lang === 'IL') ? <RulesTextHeb/> : <RulesTextRus/>;
        return (
            <div className='BodyText'>
                {textComponent}
            </div>
        );
    }
}

export default RulesText;
