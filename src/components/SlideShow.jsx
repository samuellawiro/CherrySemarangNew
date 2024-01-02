import React, { useState } from 'react';
import './SlideShow.css';
import Omoda5 from '../assets/Logo And Car/Omoda5Car.webp';
import Omoda5Logo from '../assets/Logo And Car/Omoda5Logo.webp';
import RightButton from '../assets/Button/130885.png';
import LeftButton from '../assets/Button/RoundLeftButton.svg';
import OrderNowButton from '../assets/Button/BookingTestDriveButton.png';
import Tiggo8Pro from '../assets/Logo And Car/Tiggo8Pro.webp';
import Tiggo8ProLogo from '../assets/Logo And Car/Tiggo8Logo.webp';
import Tiggo7Pro from'../assets/Logo And Car/Tiggo7Pro.webp';
import Tiggo7ProLogo from '../assets/Logo And Car/Tiggo7ProLogo.webp';
import Omoda5GT from '../assets/Logo And Car/omoda5GT.webp';
import Omoda5GTLogo from '../assets/Logo And Car/Omoda5GTLogo.webp';
import { CARSINFO  } from '../data';
export default function SlideShow() {
  
  
  const[curCarImage,setCurCarImage] = useState(Omoda5);  
  const[curLogoImage,setCurLogoImage] = useState(Omoda5Logo);   
  const[curCarInfo , setCarInfo] = useState ("Omoda5");

  const[prevLogoImage,setPrevLogoImage] = useState(Tiggo8ProLogo);
  const[prevCarImage,setPrevCarImage] = useState(Tiggo8Pro);  
  const[prevCarInfo , setPrevCarInfo] = useState ("Tiggo8Pro"); 

  const[nextLogoImage,setNextLogo] = useState(Tiggo7ProLogo);
  const[nextCarImage,setNextCarImage] = useState(Tiggo7Pro); 
  const[nextCarInfo , setNextCarInfo] = useState ("Tiggo7Pro");
  
  const[forthCar,setForthCar] = useState(Omoda5GT);
  const[forthCarLogo,setForthCarLogo] = useState(Omoda5GTLogo); 
  const[forthCarInfo , setForthCarInfo] = useState ("Omoda5GT");
 
  const[tempLogo,setTempLogo] = useState(null);
  const[tempCarImage,setTempCarImage] = useState(null); 
  const[tempCarInfo , setTempCarInfo] = useState (null);

  
  
  
 
  function clickerHandleRight(){
    setCurCarImage(prevCarImage);
    setTempLogo(prevLogoImage);
    setTempCarInfo(prevCarInfo);


    setPrevCarImage(curCarImage);
    setPrevLogoImage(curLogoImage);
    setPrevCarInfo(curCarInfo);
  
    setCurCarImage(nextCarImage);
    setCurLogoImage(nextLogoImage);
    setCarInfo(nextCarInfo);

    setNextCarImage(forthCar);
    setNextLogo(forthCarLogo);
    setNextCarInfo(forthCarInfo);

    setForthCar(prevCarImage);
    setForthCarLogo(prevLogoImage);
    setForthCarInfo(prevCarInfo);
 
    console.log(forthCarInfo)
    console.log (curCarImage);
  }
    return (
       
    <div className='contentWrapper'>
     
       
      {/* Use media queries to conditionally show/hide elements based on screen resolution */}
      <div className='boxPrevImage hideOnMobile'>
        <div className='carImage'>
            <img src={nextCarImage} alt='asdasd' />
            </div>
            <div className='logoImage'>
                <img src={nextLogoImage} />
                </div>
      </div>

      <div className='boxCurrentImage'>
        <div className='carImage'><img src={curCarImage} alt='asdasd' /></div>
        <div className='logoImage'><img src={curLogoImage} /></div>
        <div className='currentImageList'>
          <h2>Spesifikasi:</h2>
          <p>{CARSINFO[curCarInfo].description}</p>
          <p>{CARSINFO[curCarInfo].price}</p>
          </div>
        <div className='orderNow'><button><img src={OrderNowButton}/></button></div>
      </div>

      <div className='boxNextImage hideOnMobile'>
        <div className='carImage'>
            <img src={prevCarImage} alt='asdasd' />
            </div>
            <div className='logoImage'>
                <img src={prevLogoImage} />
                </div>
     </div>


      <div className='boxButton' onClick = {clickerHandleRight}><button><img src={RightButton}/></button></div>
    </div>
  );
}
