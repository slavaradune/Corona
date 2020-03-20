import React from 'react';
import YouTube from 'react-youtube';

class YouTubeVideo extends React.Component {
    render() {
        const opts = {
            height: 'auto',
            width: 'auto',
            // position: 'relative',
            playerVars: {
                autoplay: 0
            }
        };
        return (
            <div
                style={{textAlign: 'center'}}
            >
                <div className='Video'>
                    <iframe
                        style={{
                            position: "relative",
                            top: 0,
                            width: "100%",
                            height: "100%"
                        }}
                        src={`https://www.youtube.com/embed/${this.props.videoId}`}
                        frameBorder="0"
                    />
                </div>
            </div>
        );
    }
}

export default YouTubeVideo;
