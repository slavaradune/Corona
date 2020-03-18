import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {Consts} from './Consts';

class VideosCarousel extends React.Component {
    render() {
        return(
            <div className="VideosCarousel">
                <Carousel showArrows={true} showThumbs={false}>
                    {Consts.highlights.map((standing) =>
                        (
                            <div>
                                <iframe id="1" width="560" height="315" src={standing} />
                            </div>
                        ))}
                </Carousel>
            </div>
        )
    }
}
export default VideosCarousel;