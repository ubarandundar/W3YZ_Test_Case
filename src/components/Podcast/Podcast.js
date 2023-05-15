import { useEffect, useState } from 'react';
import './Podcast.css';

function Podcast() {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('https://w3yz.com/api/ch')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
        console.log(data);
    }, []);

  return (
    <div className='container-fluid'>
        <div className='podcast-body'>
            <div style={{marginBottom: '50px'}} className='row'>
                <div className='col-md-12 col-lg-6'>
                    <div className='podcast-header'>
                        Podcast
                    </div>
                    <div className='podcast-header-sub'>
                        Bu muhteşem müzede keşfedilecek o kadar çok
                        sanat eseri var ki! Bu yüzden en iyi şekilde.
                    </div>
                    <div className='podcast-header-parag'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </div>
                    <div className='podcast-spot'>
                        SPOTİFAY
                    </div>
                </div>
                <div className='col-md-12 col-lg-6 podcast-right-side'>
                    <div className='row'>
                        <div className='col-3 d-flex flex-column justify-content-between'>
                            <div>
                                {data && 
                                <img className='img-fluid' src={data.products[6].imagelist[0].url} alt={data.products[6].name} />}
                            </div>
                            <div>
                                {data && 
                                <img className='img-fluid' src={data.products[3].imagelist[0].url} alt={data.products[3].name} />}
                            </div>
                        </div>
                        <div className='col-3 d-flex flex-column justify-content-between'>
                            <div>
                                {data && 
                                <img className='img-fluid' src={data.products[7].imagelist[0].url} alt={data.products[7].name} />}
                            </div>
                            <div>
                                {data && 
                                <img className='img-fluid' src={data.products[6].imagelist[0].url} alt={data.products[6].name} />}
                            </div>
                        </div>
                        <div className='col-6 d-flex flex-column justify-content-between'>
                            <div className='mb-2'>
                                {data && 
                                <img className='img-fluid' src={data.products[9].imagelist[0].url} alt={data.products[9].name} />}
                            </div>
                            <div className='row mb-2'>
                                <div className='col-6'>
                                    <div>
                                        {data && 
                                        <img className='img-fluid' src={data.products[8].imagelist[0].url} alt={data.products[8].name} />}
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div>
                                        {data && 
                                        <img className='img-fluid' src={data.products[8].imagelist[0].url} alt={data.products[8].name} />}
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                            <div>
                                {data && 
                                <img className='img-fluid' src={data.products[4].imagelist[0].url} alt={data.products[4].name} />}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-12 pb-2 position-relative d-flex justify-content-center'>
                    <div>
                        {data && 
                        <img className='img-fluid' src={data.products[5].imagelist[0].url} alt={data.products[5].name} />}
                    </div>
                    <div className='european'>
                        EUROPEAN    
                    </div>
                    <div className='european-exp'>
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipiscing elit, sed do eiusmod tempor
                        <br />
                        incididunt ut labore et dolore magna.
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 pb-2 position-relative d-flex justify-content-center'>
                    <div>
                        {data && 
                        <img className='img-fluid' src={data.products[1].imagelist[0].url} alt={data.products[1].name} />}
                    </div>
                    <div className='european'>
                        EUROPEAN    
                    </div>
                    <div className='european-exp'>
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipiscing elit, sed do eiusmod tempor
                        <br />
                        incididunt ut labore et dolore magna.
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 pb-2 position-relative d-flex justify-content-center'>
                    <div>
                        {data && 
                        <img className='img-fluid' src={data.products[2].imagelist[0].url} alt={data.products[2].name} />}
                    </div>
                    <div className='european'>
                        EUROPEAN    
                    </div>
                    <div className='european-exp'>
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipiscing elit, sed do eiusmod tempor
                        <br />
                        incididunt ut labore et dolore magna.
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 pb-2 position-relative d-flex justify-content-center'>
                    <div>
                        {data && 
                        <img className='img-fluid' src={data.products[0].imagelist[0].url} alt={data.products[0].name} />}
                    </div>
                    <div className='european'>
                        EUROPEAN    
                    </div>
                    <div className='european-exp'>
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipiscing elit, sed do eiusmod tempor
                        <br />
                        incididunt ut labore et dolore magna.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Podcast;