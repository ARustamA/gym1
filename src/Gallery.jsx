import React from 'react'
import style from './Gallery.module.scss';
import Slider from './slider/Slider';

const Gallery = () => {
   return (
      <div id='gallery'>
         <div className={style.container}>
            <h2>Галерея</h2>
            <>
               <Slider />
               {/* <Slider /> */}
            </>




            <a href='#subscription' className={style.arrowDawn}>
               <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.75186 0.625054C2.05366 0.624465 2.34614 0.729574 2.57853 0.922137L9.50186 6.7088L16.4381 1.12881C16.5702 1.02151 16.7223 0.941387 16.8854 0.893038C17.0486 0.844688 17.2198 0.829067 17.389 0.847072C17.5583 0.865077 17.7223 0.916351 17.8716 0.997952C18.021 1.07955 18.1528 1.18987 18.2594 1.32255C18.3667 1.45468 18.4468 1.6067 18.4951 1.76989C18.5435 1.93308 18.5591 2.10421 18.5411 2.27346C18.5231 2.4427 18.4718 2.60672 18.3902 2.75608C18.3086 2.90545 18.1983 3.03721 18.0656 3.1438L10.3156 9.38255C10.0845 9.57253 9.79458 9.67639 9.4954 9.67639C9.19622 9.67639 8.90632 9.57253 8.67519 9.38255L0.925196 2.92422C0.794403 2.81579 0.686287 2.68262 0.60704 2.53233C0.527794 2.38205 0.478973 2.21761 0.463375 2.04843C0.447777 1.87926 0.46571 1.70866 0.516142 1.54642C0.566574 1.38419 0.648516 1.23349 0.757277 1.10297C0.877472 0.9548 1.029 0.835095 1.20097 0.752461C1.37294 0.669827 1.56107 0.626316 1.75186 0.625054Z" fill="#fff" />
               </svg>
            </a>
         </div>
      </div>
   )
}

export default Gallery