import React from 'react'
import Countdown from 'react-countdown';
import Language from "./Language";

class CD extends React.Component{

    render() {
        let DICT = Language.getDict();

        const Completionist = () => <span>{DICT.time_elapsed}</span>;

        const renderer = ({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
                // Render a completed state
                return <Completionist />;
            } else {
                // Render a countdown
                let seconds_str = "" + seconds;
                let minutes_str = "" + minutes;
                let hours_str = "" + (hours + 24 * days);
                if (seconds < 10){
                    seconds_str = "0" + seconds_str;
                }
                if (minutes < 10){
                    minutes_str = "0" + minutes_str;
                }
                if (hours + 24 * days < 10){
                    hours_str = "0" + hours_str;
                }

                return <span>{hours_str}:{minutes_str}:{seconds_str}</span>;
            }
        };

        return (
            <div className="Countdown">
                {DICT.time_till_the_end}
                <Countdown date={DICT.end_date} renderer={renderer}/>
            </div>
        )
    }
}

export default CD;