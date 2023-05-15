import './Navbar.css';
import HappyGaleriImage from '../../assets/happygaleri.svg';

function Navbar() {
  return (
    <nav className='container-fluid'>
        <div className='logo-body'>
            <img src={HappyGaleriImage} alt='HappyGaleriImage' />
            <header>
                HAPPY GALERİ
            </header>
        </div>
        <div className='d-flex'>
            <ul>
                <li>
                    <a href='www.google.com'>Hakkımızda</a>
                </li>
                <li>
                    <a href='www.google.com'>Sıkça Sorulan Sorular</a>
                </li>
                <li>
                    <a href='www.google.com'>Galeri</a>
                </li>
                <li>
                    <a href='www.google.com'>İletişim</a>
                </li>
                <li>
                    <a href='www.google.com'>Giriş Yap</a>
                </li>
                <li>
                    <a href='www.google.com'>Alışveriş (0)</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;