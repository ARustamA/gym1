import React from 'react'
import style from './Main.module.scss';
import Menu from './Menu';



const Main = () => {
   const items=[
      {value:'О нас',href:"#about",id:1},
      {value:'Галерея',href:"#gallery",id:2},
      {value:'Абонементы',href:"#subscription",id:3},
      {value:'Тренеры',href:"#instructor",id:4},
      {value:'Контакты',href:"#information",id:5},

]
   return (
      <div className={style.containerMain}>

         <div className={style.header}>

            <a href='#' className={style.logo}></a>
            
            <nav id="nav" >
               {/* <li className={style.active}>
                  <a href="#about">О нас</a>
               </li>
               <li>
                  <a href="#gallery">Галерея</a>
               </li>
               <li>
                  <a href="#subscription">Абонементы</a>
               </li>
               <li>
                  <a href="#instructor">Тренеры</a>
               </li>
               <li>
                  <a href="#information">Контакты</a>
               </li> */}
            <div className={style.burgerBtn}>
               <span />
            </div>
            </nav>
            <Menu items={items} />
            
            <a href="tel:+74964161916" className={style.phone}>+7 (496) 416-19-16 </a>
         </div>
      
         <div className={style.content0}></div>
         <div className={style.content1}></div>
         <div className={style.content2}></div>
         <div className={style.content3}></div>
         <div className={style.content4}></div>
         <div className={style.content5}></div>
         <div className={style.title}>
            <h1>Фитнес клуб Пантеон</h1>
            <p>Лучше нас только боги</p>
            <button className={style.titleButton}>
            </button>
         </div>
         <a href="https://www.instagram.com/panteon_oz_official/" className={style.insta}>
            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M14.6686 10.9999V10.999C14.6686 10.1507 14.3744 9.32867 13.8363 8.67295C13.2982 8.01723 12.5493 7.56839 11.7173 7.40289C10.8854 7.23739 10.0217 7.36548 9.27361 7.76533C8.52549 8.16517 7.93914 8.81205 7.61448 9.59573C7.28981 10.3794 7.24691 11.2514 7.49309 12.0632C7.73926 12.875 8.25928 13.5763 8.96455 14.0476C9.66981 14.519 10.5167 14.7312 11.3609 14.6482C12.2051 14.5651 12.9944 14.1919 13.5943 13.5922C13.9347 13.2632 14.2052 12.8689 14.3898 12.4329C14.5744 11.997 14.6692 11.5283 14.6686 11.0549L14.6677 10.9971V10.9999H14.6686ZM16.6486 10.9999C16.6442 12.3001 16.1894 13.5587 15.3616 14.5614C14.5337 15.564 13.384 16.2489 12.1081 16.4993C10.8322 16.7497 9.50889 16.5503 8.36346 15.935C7.21803 15.3196 6.32121 14.3264 5.82564 13.1242C5.33006 11.9221 5.26636 10.5854 5.64536 9.34163C6.02436 8.09783 6.82265 7.02379 7.90437 6.3023C8.98609 5.5808 10.2844 5.25643 11.5783 5.38439C12.8723 5.51235 14.0819 6.08474 15.0014 7.00413C15.5235 7.51079 15.9385 8.11723 16.2216 8.78743C16.5048 9.45763 16.6503 10.1779 16.6495 10.9055L16.6486 11.0054V11.0008V10.9999ZM18.195 5.12771V5.12955C18.1951 5.43494 18.0893 5.73092 17.8957 5.96705C17.702 6.20319 17.4325 6.36486 17.1329 6.42453C16.8334 6.4842 16.5225 6.43817 16.2531 6.29429C15.9838 6.15041 15.7726 5.91757 15.6557 5.63546C15.5387 5.35334 15.5232 5.0394 15.6118 4.74713C15.7004 4.45487 15.8875 4.20235 16.1414 4.03262C16.3953 3.86289 16.7002 3.78644 17.0041 3.8163C17.308 3.84616 17.5922 3.98048 17.8082 4.19638C18.0429 4.42646 18.1886 4.7473 18.1886 5.10205V5.12863V5.12771H18.195ZM11.0084 1.97438L9.91296 1.96705C9.24929 1.96216 8.74543 1.96216 8.40137 1.96705C8.05732 1.97194 7.59654 1.9863 7.01904 2.01013C6.48279 2.02846 5.97404 2.08163 5.47629 2.16596L5.54321 2.1568C5.15362 2.22096 4.80804 2.31263 4.47712 2.43455L4.51654 2.42171C4.04905 2.60964 3.62392 2.88928 3.26622 3.24414C2.90853 3.599 2.62552 4.02189 2.43387 4.48788L2.42471 4.51263C2.30705 4.83467 2.21989 5.16704 2.16437 5.50538L2.15979 5.5393C2.07826 6.02096 2.02956 6.50761 2.01404 6.99588L2.01312 7.01513C1.98929 7.59324 1.97493 8.05402 1.97004 8.39746C1.96515 8.74091 1.96515 9.24477 1.97004 9.90905C1.97493 10.5733 1.97737 10.9385 1.97737 11.0045C1.97737 11.0705 1.97493 11.4356 1.97004 12.0999C1.96515 12.7642 1.96515 13.268 1.97004 13.6115C1.97493 13.9549 1.98929 14.4157 2.01312 14.9938C2.03146 15.53 2.08462 16.0388 2.16896 16.5365L2.15979 16.4696C2.22396 16.8592 2.31562 17.2048 2.43754 17.5357L2.42471 17.4963C2.61264 17.9638 2.89228 18.3889 3.24714 18.7466C3.602 19.1043 4.02489 19.3873 4.49087 19.579L4.51562 19.5881C4.80712 19.6972 5.15271 19.7889 5.50837 19.8485L5.54229 19.853C5.97221 19.9282 6.48096 19.9814 6.99796 19.9988L7.01721 19.9997C7.59532 20.0235 8.0561 20.0379 8.39954 20.0428C8.74298 20.0477 9.24685 20.0477 9.91112 20.0428L11.0001 20.0208L12.0955 20.0281C12.7592 20.033 13.2631 20.033 13.6071 20.0281C13.9512 20.0232 14.412 20.0089 14.9895 19.985C15.5257 19.9667 16.0345 19.9135 16.5322 19.8292L16.4653 19.8384C16.8549 19.7742 17.2005 19.6825 17.5314 19.5606L17.492 19.5735C17.9595 19.3855 18.3846 19.1059 18.7423 18.751C19.1 18.3962 19.383 17.9733 19.5746 17.5073L19.5838 17.4825C19.6929 17.191 19.7845 16.8455 19.8441 16.4898L19.8487 16.4559C19.9239 16.026 19.977 15.5172 19.9945 15.0002L19.9954 14.981C20.0192 14.4029 20.0336 13.9421 20.0385 13.5986C20.0433 13.2552 20.0433 12.7513 20.0385 12.087C20.0336 11.4228 20.0311 11.0576 20.0311 10.9916C20.0311 10.9256 20.0336 10.5605 20.0385 9.89621C20.0433 9.23193 20.0433 8.72807 20.0385 8.38463C20.0336 8.04119 20.0192 7.58041 19.9954 7.0023C19.977 6.46605 19.9239 5.9573 19.8395 5.45955L19.8487 5.52646C19.7906 5.16301 19.6975 4.806 19.571 4.46038L19.5838 4.4998C19.3959 4.0323 19.1162 3.60717 18.7614 3.24948C18.4065 2.89179 17.9836 2.60877 17.5176 2.41713L17.4929 2.40796C17.1708 2.2903 16.8385 2.20314 16.5001 2.14763L16.4662 2.14305C15.9848 2.06156 15.4985 2.01286 15.0105 1.9973L14.9913 1.99638C14.4132 1.97255 13.9524 1.95819 13.609 1.9533C13.2655 1.94841 12.7617 1.94841 12.0974 1.9533L11.0084 1.97438ZM22.002 10.9999C22.002 13.1864 21.9775 14.6999 21.9286 15.5401C21.972 16.3917 21.8359 17.2429 21.5292 18.0385C21.2226 18.8341 20.7522 19.5564 20.1485 20.1586C19.5448 20.7608 18.8214 21.2294 18.025 21.5341C17.2287 21.8389 16.3772 21.9729 15.5257 21.9275L15.5404 21.9284C14.7001 21.9773 13.1867 22.0017 11.0001 22.0017C8.81357 22.0017 7.30015 21.9773 6.45987 21.9284C5.60831 21.9717 4.75714 21.8356 3.96152 21.529C3.16591 21.2223 2.4436 20.7519 1.84141 20.1483C1.23922 19.5446 0.770575 18.8211 0.465856 18.0248C0.161136 17.2284 0.0271366 16.3769 0.072541 15.5255L0.0716243 15.5401C0.0227355 14.6999 -0.00170898 13.1864 -0.00170898 10.9999C-0.00170898 8.81332 0.0227355 7.29991 0.0716243 6.45963C0.0282948 5.60806 0.164369 4.75689 0.471028 3.96128C0.777687 3.16566 1.24809 2.44336 1.85175 1.84116C2.45541 1.23897 3.17886 0.770331 3.97522 0.465611C4.77158 0.160892 5.62308 0.0268924 6.47454 0.0722969L6.45987 0.0713802C7.30015 0.0224913 8.81357 -0.00195312 11.0001 -0.00195312C13.1867 -0.00195312 14.7001 0.0224913 15.5404 0.0713802C16.3919 0.0280507 17.2431 0.164125 18.0387 0.470784C18.8343 0.777443 19.5566 1.24784 20.1588 1.85151C20.761 2.45517 21.2297 3.17862 21.5344 3.97498C21.8391 4.77134 21.9731 5.62284 21.9277 6.4743L21.9286 6.45963C21.9775 7.2993 22.002 8.81271 22.002 10.9999Z" fill="white" />
            </svg>
         </a>
         <a href="https://vk.com/panteon_oz_official" className={style.vk}>
            <svg width="31" height="18" viewBox="0 0 31 18" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M29.3219 1.22988C29.0081 2.23263 28.549 3.18398 27.9594 4.05363L27.9831 4.01613C27.4231 4.94946 26.7544 6.0278 25.9769 7.25113C25.3102 8.21696 24.9573 8.71696 24.9181 8.75113C24.7399 8.97424 24.6247 9.24096 24.5844 9.52363L24.5831 9.53238C24.6149 9.78707 24.7332 10.0231 24.9181 10.2011L25.4181 10.7586C28.0931 13.5078 29.5977 15.4028 29.9319 16.4436C29.9952 16.6146 30.0156 16.7985 29.9912 16.9792C29.9668 17.1599 29.8983 17.3319 29.7919 17.4799L29.7944 17.4761C29.6685 17.6059 29.5151 17.7058 29.3455 17.7683C29.1759 17.8309 28.9943 17.8545 28.8144 17.8374H28.8194H25.5244C25.1031 17.8374 24.7156 17.6899 24.4119 17.4449L24.4156 17.4474C23.9819 17.0918 23.5838 16.6949 23.2269 16.2624L23.2156 16.2474C22.6398 15.5965 22.1289 15.0486 21.6831 14.6036C20.1981 13.192 19.1023 12.4861 18.3956 12.4861C18.1675 12.4657 17.9395 12.5254 17.7506 12.6549L17.7544 12.6524C17.6732 12.7541 17.6137 12.8713 17.5793 12.9968C17.5449 13.1223 17.5364 13.2535 17.5544 13.3824V13.3774C17.5058 13.9606 17.4899 14.5461 17.5069 15.1311V15.1099V16.5586C17.5424 16.7317 17.5302 16.9111 17.4716 17.0778C17.4131 17.2444 17.3103 17.3921 17.1744 17.5049L17.1731 17.5061C16.5401 17.7921 15.8432 17.9072 15.1519 17.8399L15.1681 17.8411C13.2759 17.8087 11.4283 17.2607 9.82437 16.2561L9.86812 16.2811C8.0186 15.1661 6.43332 13.6627 5.22187 11.8749L5.18812 11.8224C4.01216 10.2542 2.97848 8.58427 2.09937 6.83238L2.01187 6.63988C1.42607 5.50543 0.911324 4.33568 0.470615 3.13738L0.395615 2.90613C0.191284 2.28405 0.0612151 1.64 0.00811523 0.987383L0.00561523 0.956133C0.00561523 0.324466 0.377282 0.00863307 1.12062 0.00863307H4.40812C4.74047 -0.0173979 5.0704 0.083054 5.33187 0.289883L5.32937 0.287383C5.57937 0.561133 5.76437 0.897382 5.85562 1.27238L5.85937 1.28738C6.40248 2.84278 7.06573 4.35358 7.84312 5.80613L7.75937 5.63488C8.32123 6.77616 9.00119 7.8554 9.78812 8.85488L9.75937 8.81613C10.426 9.63446 10.946 10.0436 11.3194 10.0436L11.3594 10.0449C11.4473 10.045 11.5336 10.022 11.6098 9.97808C11.6859 9.93419 11.7492 9.871 11.7931 9.79488L11.7944 9.79238C11.914 9.47908 11.9615 9.14281 11.9331 8.80863V8.81613V3.96738C11.9097 3.41763 11.7736 2.87855 11.5331 2.38363L11.5431 2.40738C11.3973 2.09284 11.2079 1.80039 10.9806 1.53863L10.9844 1.54363C10.7748 1.33437 10.6384 1.06296 10.5956 0.769883L10.5944 0.762383C10.5944 0.549883 10.6919 0.358633 10.8444 0.233633L10.8456 0.232383C11.0026 0.0886562 11.2078 0.00922891 11.4206 0.00988297H16.6131C16.7435 -0.00532883 16.8755 0.0120629 16.9975 0.0604974C17.1195 0.108932 17.2275 0.186894 17.3119 0.287383L17.3131 0.288633C17.471 0.580352 17.5401 0.911884 17.5119 1.24238V1.23613V7.70238C17.492 7.95742 17.5513 8.21238 17.6819 8.43238L17.6794 8.42738C17.7251 8.4958 17.7871 8.55188 17.8597 8.59069C17.9323 8.6295 18.0133 8.64982 18.0956 8.64988H18.0969C18.3077 8.63618 18.511 8.56626 18.6856 8.44738L18.6819 8.44988C19.0219 8.21613 19.3144 7.94988 19.5681 7.64863L19.5731 7.64238C20.3454 6.7686 21.0377 5.82733 21.6419 4.82988L21.6906 4.74238C22.1206 4.02988 22.5856 3.15238 23.0069 2.25113L23.0844 2.06738L23.6419 0.952382C23.74 0.664089 23.9294 0.415583 24.1813 0.244419C24.4332 0.0732548 24.7339 -0.0112648 25.0381 0.00363283H25.0344H28.3231C29.2114 0.00363283 29.5448 0.412383 29.3231 1.22988H29.3219Z" fill="#fff" />
            </svg>

         </a>
         <a href='#about' className={style.arrowDawn}>
            <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1.75186 0.625054C2.05366 0.624465 2.34614 0.729574 2.57853 0.922137L9.50186 6.7088L16.4381 1.12881C16.5702 1.02151 16.7223 0.941387 16.8854 0.893038C17.0486 0.844688 17.2198 0.829067 17.389 0.847072C17.5583 0.865077 17.7223 0.916351 17.8716 0.997952C18.021 1.07955 18.1528 1.18987 18.2594 1.32255C18.3667 1.45468 18.4468 1.6067 18.4951 1.76989C18.5435 1.93308 18.5591 2.10421 18.5411 2.27346C18.5231 2.4427 18.4718 2.60672 18.3902 2.75608C18.3086 2.90545 18.1983 3.03721 18.0656 3.1438L10.3156 9.38255C10.0845 9.57253 9.79458 9.67639 9.4954 9.67639C9.19622 9.67639 8.90632 9.57253 8.67519 9.38255L0.925196 2.92422C0.794403 2.81579 0.686287 2.68262 0.60704 2.53233C0.527794 2.38205 0.478973 2.21761 0.463375 2.04843C0.447777 1.87926 0.46571 1.70866 0.516142 1.54642C0.566574 1.38419 0.648516 1.23349 0.757277 1.10297C0.877472 0.9548 1.029 0.835095 1.20097 0.752461C1.37294 0.669827 1.56107 0.626316 1.75186 0.625054Z" fill="#fff" />
            </svg>
         </a>
      </div>

   )
}

export default Main