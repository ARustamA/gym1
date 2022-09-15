import React from 'react';
import style from './PopUpSend.module.scss';
import { useForm } from "react-hook-form";

export const PopUpSend2 = ({ value, setValue, setIsValid }) => {

   const { register, formState: { errors, isValid }, handleSubmit, reset,
   } = useForm({ mode: 'onBlur' });

   const onSubmit = (data) => {
      alert(JSON.stringify(data));
      reset();
      setValue('');
      
      isValid && setIsValid(true);
   }

   const onChangeInput = (event => setValue(event.target.value))

   // const phone = document.getElementById("phone");

   // function validNumber() {
   //    const regular = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
   //    let isValidNumb = regular.test(value);
   //    setIsValid(isValidNumb);
   //    return isValid
   // }
   // function sendData() {
   //    validNumber()
   // }
   return (

      <div className={style.send}>
         <div className={style.content}>
            <h2>Остались вопросы?</h2>

            <span>Оставьте Ваш номер телефона
               и мы <span className={style.colorSpan}>обязательно с Вами свяжемся</span>
            </span>

            <form onSubmit={handleSubmit(onSubmit)} className={style.inputContent} >
               <input
                  type="text"
                  {...register('name', { required: "Поле обязательно к заполнению!" })}
                  placeholder="Введите имя"
                  className={errors?.name ? style.inputError : style.input}
                  minLength="4"
               />
               <div className={style.content1}></div>

               <input
                  type="tel"
                  {...register('number',
                     {
                        required: true,
                        pattern: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,

                     })}

                  maxLength={11}
                  className={errors?.number ? style.input : style.inputError}
                  placeholder="Введите телефон в формате 8xxxxxxxxxx"
                  value={value}
                  onChange={onChangeInput}
               />
               
               <input type="submit" className={style.but} value="Оставить данные" />
               <div className={style.content2}></div>
            </form>

            {/* <button onClick={()=>sendData()}></button> */}
            <p>Нажимая на кнопку вы соглашаетесь с политикой конфиденциальности</p>

         </div>

      </div>
   )
}
