import { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousels.css';

function Carousels () {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('https://w3yz.com/api/ch')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);

        return (
            <div style={{marginBottom: '130px'}} className='container-fluid position-relative'>
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
            <ul>
                {data && data.products.map(item => (
                <li key={item.id}>
                <p>Name: {item.name}</p>
                <p>Brand: {item.brand}</p>
                <p>Created: {item.created_at}</p>
                <p>Updated: {item.created_at}</p>
                {item.imagelist.map(item => item.id )}
               
                </li>
                ))}
            </ul>
            </div>
            <div className='carousel-body'>
            <ul>
                {data && data.products.map(item => (
                <li key={item.id}>
                <p>Name: {item.name}</p>
                <p>Brand: {item.brand}</p>
                <p>Created: {item.created_at}</p>
                <p>Updated: {item.created_at}</p>
                </li>
                ))}
            </ul>
            </div>
            </Carousel>
            </div>
        );
};

export default Carousels;