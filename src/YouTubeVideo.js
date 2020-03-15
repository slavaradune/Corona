import React from 'react';
import YouTube from 'react-youtube';

class YouTubeVideo extends React.Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 0
            }
        };
        return (
            <div className="Video">
                <YouTube
                    videoId={this.props.videoId}
                    opts={opts}/>
            </div>
        );
    }
}

export default YouTubeVideo;
