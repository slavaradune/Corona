import React from 'react';

class YouTubeVideo extends React.Component {
    render() {

        let id = this.props.videoId;
        if (id) {
            if (id.includes('v=')){
                id = this.props.videoId.split('v=')[1];
                if (id.includes('&')) {
                    id = id.split('&')[0];
                }
            } else if (id.includes('youtu.be/')) {
                id = id.split('youtu.be/')[1];
            }
        }

        return (
            <div
                style={{textAlign: 'center'}}
            >
                <div className='Video'>
                    <iframe
                        allowfullscreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen"
                        msallowfullscreen="msallowfullscreen"
                        oallowfullscreen="oallowfullscreen"
                        webkitallowfullscreen="webkitallowfullscreen"
                        style={{
                            position: "relative",
                            top: 0,
                            width: "100%",
                            height: "100%"
                        }}
                        src={`https://www.youtube.com/embed/${id}`}
                        frameBorder="0"
                    />
                </div>
            </div>
        );
    }
}

export default YouTubeVideo;
