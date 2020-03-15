import React from 'react';
import '../App.css';
import Language from "../Language";
import YouTubeVideo from "../YouTubeVideo";
import RulesText from "./RulesText";

class Rules extends React.Component {
    render() {
        let DICT = Language.getDict();
        return (
            <div className="Body">
                <h1 className="BodyHeader">{DICT.rules}</h1>

                <YouTubeVideo
                    videoId={DICT.rules_video_id}
                    />

                <RulesText/>

            </div>
        );
    }
}

export default Rules;
