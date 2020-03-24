import React from 'react';
import '../App.css';
import Language from "../Language";
import YouTubeVideo from "../YouTubeVideo";
import RulesText from "./RulesText";
import VideosCarousel from "../VideosCarousel";

class Stretching extends React.Component {
    render() {
        let DICT = Language.getDict();
        return (
            <div className="Body">
                <h1 className="BodyHeader">{DICT.stretching}</h1>

                <YouTubeVideo
                    videoId={DICT.stretching_id}
                    />
            </div>
        );
    }
}

export default Stretching;
