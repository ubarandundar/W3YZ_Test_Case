import './Footer.css';

import FacebookImage from '../../assets/facebook.png';
import InstagramImage from '../../assets/instagram.png';
import TwitterImage from '../../assets/twitter.png';
import YoutubeImage from '../../assets/youtube.png';
import PinterestImage from '../../assets/pinterest.png';
import LinkedinImage from '../../assets/linkedin.png';

function Footer() {
  return (
    <footer className='container-fluid'>
        <div className='row'>
            <div className='col-7'>
                <div className='row'>
                    <div className='col-4'>
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
                    <div className='col-3'>
                        <header>
                        WEBSİTEMİZ
                        </header>
                        <ul>
                            <li>
                                <a href='www.google.com'>Online bilet al</a>
                            </li>
                            <li>
                                <a href='www.google.com'>Mağaza</a>
                            </li>
                            <li>
                                <a href='www.google.com'>Koleksiyonlar</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-3'>
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
            <div className='col-4 d-flex flex-column'>
                <div className='d-flex flex-row'>
                <header className='follow-header'>
                    Bizi Takip Et 
                </header>
                <div className='right-line'></div>
                </div>
                <div className='d-flex flex-row social-media'>
                    <a href='wwww.google.com'>
                        <div className='social-media-body'>
                            <img src={FacebookImage} alt='FacebookImage' />
                        </div>
                    </a>
                    <a href='wwww.google.com'>
                        <div className='social-media-body'>
                            <img src={InstagramImage} alt='FacebookImage' />
                        </div>
                    </a>
                    <a href='wwww.google.com'>
                        <div className='social-media-body'>
                            <img src={TwitterImage} alt='FacebookImage' />
                        </div>
                    </a>
                    <a href='wwww.google.com'>
                        <div className='social-media-body'>
                            <img src={YoutubeImage} alt='FacebookImage' />
                        </div>
                    </a>
                    <a href='wwww.google.com'>
                        <div className='social-media-body'>
                            <img src={PinterestImage} alt='FacebookImage' />
                        </div>
                    </a>
                    <a href='wwww.google.com'>
                        <div className='social-media-body'>
                            <img src={LinkedinImage} alt='FacebookImage' />
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className='bottom-line'></div>
        <div className='footer-bottom-side d-flex flex-row justify-content-center'>
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