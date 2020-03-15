import React from 'react';
import '../App.css';
import Language from "../Language";
import YouTubeVideo from "../YouTubeVideo";

class AbstractExerciseComponent extends React.Component {
    render() {
        let DICT = Language.getDict();
        return (
            <div className="Body">
                <h1 className="BodyHeader">{DICT.exercise}</h1>

                <YouTubeVideo
                    videoId={this.props.exvideo}
                />

                {this.props.extext}

                <h1 className="BodyHeader">{DICT.challenge}</h1>

                <YouTubeVideo
                    videoId={this.props.chvideo}
                />

                {this.props.chtext}

            </div>
        );
    }
}

export default AbstractExerciseComponent;
