import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {Consts} from './Consts';

class VideosCarousel extends React.Component {
    render() {
        return(

            <div style ={{textAlign: 'center'}}>
                <div className="VideosCarousel">
                    <Carousel  showThumbs={false} infiniteLoop autoPlay centerMode centerSlidePercentage={50}>

                        {Consts.highlights.map((standing) =>
                            (
                                <iframe id="1" style={{
                                    // position: "relative",
                                    top: 0,
                                    width: "60%",
                                    height: "100%"
                                }} src={standing}
                                        frameBorder={0}/>


                            ))}

                    </Carousel>
                </div>
            </div>
        )
    }
}
export default VideosCarousel;