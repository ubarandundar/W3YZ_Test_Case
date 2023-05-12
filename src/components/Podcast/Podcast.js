import './Podcast.css';
import FirstImage from '../../assets/image 704.png';
import SecondImage from '../../assets/image 706.png';
import ThirdImage from '../../assets/image 708.png';
import FourthImage from '../../assets/image 703.png';
import FifthImage from '../../assets/image 707.png';
import SixthImage from '../../assets/image 705.png';
import FirstBigImage from '../../assets/Rectangle 2937.png';
import SecondtBigImage from '../../assets/Rectangle 2939.png';
import ThirdBigImage from '../../assets/Rectangle 2938.png';
import FourthBigImage from '../../assets/Rectangle 2940.png';

function Podcast() {
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
                        <br />
                        sanat eseri var ki! Bu yüzden en iyi şekilde .
                    </div>
                    <div className='podcast-header-parag'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        <br />
                        tempor incididunt ut labore et dolore magna.
                    </div>
                    <div className='podcast-spot'>
                        SPOTİFAY
                    </div>
                </div>
                <div className='col-md-12 col-lg-6 podcast-right-side'>
                    <div className='row'>
                        <div className='col-3 d-flex flex-column justify-content-between'>
                            <div className='col-12 mb-4'>
                                <img className='img-fluid' src={FirstImage} alt='FirstImage' />
                            </div>
                            <div className='col-12'>
                                <img className='img-fluid' src={SecondImage} alt='SecondImage' />
                            </div>
                        </div>
                        <div className='col-3 d-flex flex-column justify-content-between'>
                            <div className='col-12 mb-2'>
                                <img className='img-fluid' src={ThirdImage} alt='ThirdImage' />
                            </div>
                            <div className='col-12 d-flex flex-column jusfity-content-between'>
                                <img className='img-fluid' src={FirstImage} alt='FirstImage' />
                            </div>
                        </div>
                        <div className='col-6 d-flex flex-column justify-content-between'>
                            <div className='col-12 mb-2'>
                                <img className='img-fluid' src={FourthImage} alt='FourthImage' />
                            </div>
                            <div className='row mb-2'>
                                <div className='col-6'>
                                    <img className='img-fluid' src={FifthImage} alt='FifthImage' />
                                </div>
                                <div className='col-6'>
                                    <img className='img-fluid' src={FifthImage} alt='FifthImage' />
                                </div>
                            </div>
                            <div className='col-12'>
                                <img className='img-fluid' src={SixthImage} alt='SixthImage' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-12 pb-2 position-relative d-flex justify-content-center'>
                    <img className='img-fluid' src={FirstBigImage} alt='FirstBigImage' />
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
                    <img className='img-fluid' src={SecondtBigImage} alt='SecondtBigImage' />
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
                    <img className='img-fluid' src={ThirdBigImage} alt='ThirdBigImage' />
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
                    <img className='img-fluid' src={FourthBigImage} alt='FourthBigImage' />
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