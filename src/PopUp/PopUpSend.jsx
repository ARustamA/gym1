import React from 'react';
import style from './PopUpSend.module.scss';





export const PopUpSend = ({value, setValue, isValid, setIsValid}) => {
   
   
   const onChangeInput = (event => setValue(event.target.value))
   const phone = document.getElementById("phone");
   function validNumber() {
      const regular = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
      
      
      let isValidNumb = regular.test(value);
      setIsValid(isValidNumb);
   
      return isValid
   }
   

   function sendData () {
      validNumber() 
      
      
   }
   return (
      
      <div className={style.send}>
         <div className={style.content}>
            <h2>Остались вопросы?</h2>

            <span>Оставьте Ваш номер телефона
               и мы <span className={style.colorSpan}>обязательно с Вами свяжемся</span>
            </span>
            <div className={style.inputContent}>
               <input 
               type="text" 
               placeholder="Введите имя" 
               className={style.input}
               />
               <div className={style.content1}></div>
               <input 
                  className={style.input}
                  id='phone'
                  type="tel"
                  name="phone"
                  placeholder="Введите телефон в формате +7 xxx xxx xx xx"
                  minLength="12" maxLength="12"
                  value={value}
                  onChange={onChangeInput}
               />
               <div className={style.content2}></div>
               
            </div>
            <button onClick={()=>sendData()}></button>
            <p>Нажимая на кнопку вы соглашаетесь с политикой конфиденциальности</p>

         </div>

      </div>
   )
}
