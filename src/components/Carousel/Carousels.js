import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousels.css';

function Carousels () {

        return (
            <div className='carousel-wrapper container-fluid position-relative'>
                <div className='yeni-header'>Yeni Gelen Sanat
                    <br />
                    Eserlerini İnceleyin
                </div>
                <div className='ozel-header'>Özel Galerimiz</div>
            <Carousel
            autoPlay={true}
            showArrows={true}
            showThumbs={false}
            showIndicators={true}
            showStatus={false}
            >
            <div className='carousel-body'>
            </div>
            <div className='carousel-body'>
            </div>
            </Carousel>
            </div>
        );
};

export default Carousels;