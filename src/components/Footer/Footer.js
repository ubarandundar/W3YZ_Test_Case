import './Footer.css';

import FacebookImage from '../../assets/facebook.png';
import InstagramImage from '../../assets/instagram.png';
import TwitterImage from '../../assets/twitter.png';
import YoutubeImage from '../../assets/youtube.png';
import PinterestImage from '../../assets/pinterest.png';
import LinkedinImage from '../../assets/linkedin.png';

function Footer() {
  return (
    <footer className='footer-wrapper container-fluid'>
        <div className='row'>
            <div className='col-md-12 col-lg-12 col-xl-6 d-flex justify-content-center links-area'>
                <div className='row'>
                    <div className='col-sm-12 col-md-4 col-lg-4'>
                        <header>
                            HAKKIMIZDA
                        </header>
                        <ul>
                            <li>
                                <a href='www.google.com'>Galeri Hakkında</a>
                            </li>
                            <li>
                                <a href='www.google.com'>Ziyaret Kuralları</a>
                            </li>
                            <li>
                                <a href='www.google.com'>Bizi Desteklemek İsteyenler İçin</a>
                            </li>
                        </ul>
                    </div>
                    <div className='middle-column col-sm-12 col-md-4 col-lg-4'>
                        <header className='web-header'>
                        WEBSİTEMİZ
                        </header>
                        <ul>
                            <li>
                                <a className='web-sub' href='www.google.com'>Online bilet al</a>
                            </li>
                            <li>
                                <a className='web-sub' href='www.google.com'>Mağaza</a>
                            </li>
                            <li>
                                <a className='web-sub' href='www.google.com'>Koleksiyonlar</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4'>
                        <header>
                        CONTACT
                        </header>
                        <ul>
                            <li>
                                <a href='www.google.com'>Sıkça Sorulan Sorular</a>
                            </li>
                            <li>
                                <a href='www.google.com'>İletişime Geç</a>
                            </li>
                            <li>
                                <a href='www.google.com'>Bize Fikir Verin</a>
                            </li>
                            <li>
                                <a href='www.google.com'>Kariyer</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-1 middle-line'></div>
            <div className='d-none d-sm-block col-md-12 col-lg-12 col-xl-4 d-flex flex-column'>
                <div className='d-flex flex-row'>
                <header className='follow-header'>
                    Bizi Takip Et 
                </header>
                <div className='right-line'></div>
                </div>
                <div className='d-flex flex-row social-media'>
                    <a className='social-media-wrapper' href='wwww.google.com'>
                        <div className='social-media-body'>
                            <img src={FacebookImage} alt='FacebookImage' />
                        </div>
                    </a>
                    <a className='social-media-wrapper' href='wwww.google.com'>
                        <div className='social-media-body'>
                            <img src={InstagramImage} alt='FacebookImage' />
                        </div>
                    </a>
                    <a className='social-media-wrapper' href='wwww.google.com'>
                        <div className='social-media-body'>
                            <img src={TwitterImage} alt='FacebookImage' />
                        </div>
                    </a>
                    <a className='social-media-wrapper' href='wwww.google.com'>
                        <div className='social-media-body'>
                            <img src={YoutubeImage} alt='FacebookImage' />
                        </div>
                    </a>
                    <a className='social-media-wrapper' href='wwww.google.com'>
                        <div className='social-media-body'>
                            <img src={PinterestImage} alt='FacebookImage' />
                        </div>
                    </a>
                    <a className='social-media-wrapper' href='wwww.google.com'>
                        <div className='social-media-body'>
                            <img src={LinkedinImage} alt='FacebookImage' />
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className='bottom-line'></div>
        <div className='footer-bottom-side d-flex flex-row justify-content-center text-center'>
            <a href='www.google.com'>
                Legal Notice
            </a>
            <a href='www.google.com'>
                Privacy Policy
            </a>
            <a href='www.google.com'>
                Cookies
            </a>
        </div>
    </footer>
  )
}

export default Footer;