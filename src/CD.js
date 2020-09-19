import React from 'react'
import Countdown from 'react-countdown';
import Language from "./Language";

class CD extends React.Component{

    render() {
        let DICT = Language.getDict();

        let renderer = ({ days, hours, minutes, seconds, completed }, stringBuilder) => {
            if (completed) {
                return <React.Fragment>{DICT.time_elapsed}</React.Fragment>
            }
            return <React.Fragment>
                {DICT.left}
                {stringBuilder(days, hours, minutes, seconds)}
            </React.Fragment>;
        };


        let cd =  <Countdown date={DICT.end_date} renderer={(date) => renderer(date, DICT.timeStringBuilder)}/>;

        return (
            <div className="Countdown">
                <h4>
                    {cd}
                </h4>
            </div>
        )
    }
}

export default CD;