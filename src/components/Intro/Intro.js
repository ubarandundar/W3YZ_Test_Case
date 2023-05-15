import './Intro.css';
import IntroImage from '../../assets/Rectangle 1.png';

function Intro() {
  return (
    <div className='intro container position-relative'>
        <div className='intro-body'>
            <img src={IntroImage} alt='IntroImage' />
            <div className='intro-inside'>
                <div className='inside-header'>
                    Çocuklar için sanat
                    <br className='inside-br' />
                    eğitimi
                </div>
                <span>
                    Ücretsiz aile etkinliklerimizde bir sanat dünyası
                    <br />
                    oyunu oynayın, çocuklarınızla yaratın ve
                    <br />
                    keşfedin
                </span>
            </div>
        </div>
        <div className='welcome'>
            <div className='welcome-header'>
                Happy Galeri’ye Hoşgeldiniz 
            </div>
            <div className='welcome-parag'>
                Bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki! Bu yüzden en iyi
                şekilde yararlanmak için ziyaretinizi önceden planlayın. Temaya dayalı bir turu takip
                etmek için neden ziyaretçi parkurlarımızdan birini seçmiyorsunuz? Molaya ihtiyacınız
                olduğunda, müzenin dinlendirici bahçelerinden daha iyi neresi var?
            </div>
        </div>
    </div>
  )
}

export default Intro;