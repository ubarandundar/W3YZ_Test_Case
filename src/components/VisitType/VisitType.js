import './VisitType.css';

import AileZiyaretImage from '../../assets/Vector.png';
import GrupZiyaretImage from '../../assets/Vector (5).png';
import ArastirmaZiyaretImage from '../../assets/Vector (1).png';
import EngelZiyaretImage from '../../assets/Vector (2).png';
import KurumsalZiyaretImage from '../../assets/Vector (3).png';
import SponsorZiyaretImage from '../../assets/Vector (4).png';
import ArrowImage from '../../assets/Arrow.png';

function VisitType() {
  return (
    <div style={{marginBottom: '180px'}} className='container'>
        <div className='row'>
            <div className='col-md-12 col-lg-6 pb-5 d-flex flex-column justify-content-center'>
                <div className='visit-header'>
                    Ziyaret Biçimini Seç
                </div>
                <div className='visit-parag'>
                    Bu Muhteşem Müzeyi Nasıl Keşfetmek İstersin?
                </div>
            </div>
            <div className='col-md-12 col-lg-6'>
                <div className='row'>
                    <div className='col-6 d-flex flex-column pe-5'>
                        <div style={{marginBottom: '95px'}} className='d-flex flex-row justify-content-between'>
                            <div className='d-flex flex-row'>
                                <img src={AileZiyaretImage} alt='VisitTypeImage' />
                                <div className='visit-exp'>
                                Aile ile ziyaret
                                </div>
                            </div>
                            <div className='arrow-body'>
                                <img className='arrow' src={ArrowImage} alt='VisitTypeImage' />
                            </div>
                        </div>
                        <div style={{marginBottom: '95px'}} className='d-flex flex-row justify-content-between'>
                            <div className='d-flex flex-row'>
                                <img src={GrupZiyaretImage} alt='VisitTypeImage' />
                                <div className='visit-exp'>
                                Grup olarak ziyaret
                                </div>
                            </div>
                            <div className='arrow-body'>
                                <img className='arrow' src={ArrowImage} alt='VisitTypeImage' />
                            </div>
                        </div>
                        <div className='d-flex flex-row justify-content-between'>
                            <div className='d-flex flex-row'>
                                <img src={ArastirmaZiyaretImage} alt='VisitTypeImage' />
                                <div className='visit-exp'>
                                Araştırma için ziyaret
                                </div>
                            </div>
                            <div className='arrow-body'>
                                <img className='arrow' src={ArrowImage} alt='VisitTypeImage' />
                            </div>
                        </div>
                    </div>
                    <div className='col-6 d-flex flex-column ps-5'>
                        <div style={{marginBottom: '95px'}} className='d-flex flex-row justify-content-between'>
                            <div className='d-flex flex-row'>
                                <img src={EngelZiyaretImage} alt='VisitTypeImage' />
                                <div className='visit-exp'>
                                Engelinize göre ziyaret
                                </div>
                            </div>
                            <div className='arrow-body'> 
                                <img className='arrow' src={ArrowImage} alt='VisitTypeImage' />
                            </div>
                        </div>
                        <div style={{marginBottom: '95px'}} className='d-flex flex-row justify-content-between'>
                            <div className='d-flex flex-row'>
                                <img src={KurumsalZiyaretImage} alt='VisitTypeImage' />
                                <div className='visit-exp'>
                                Kurumsal eğitim için ziyaret
                                </div>
                            </div>
                            <div className='arrow-body'>
                                <img className='arrow' src={ArrowImage} alt='VisitTypeImage' />
                            </div>
                        </div>
                        <div className='d-flex flex-row justify-content-between'>
                            <div className='d-flex flex-row'>
                                <img src={SponsorZiyaretImage} alt='VisitTypeImage' />
                                <div className='visit-exp'>
                                Sponsor olmak için ziyaret
                                </div>
                            </div>
                            <div className='arrow-body'>
                                <img className='arrow' src={ArrowImage} alt='VisitTypeImage' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VisitType;