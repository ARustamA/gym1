import React from 'react'
import style from './Subscription.module.scss';
export const Table = () => {
   return (
      <div className={style.table}>

         <table className={style.tableFirst}>
            <tr className={style.tr}>
               <td className={style.firstTd}>Количество занятий</td>
               <td>1 тренировка</td>
               <td>4 тренировки</td>
               <td>8 тренировок</td>
               <td className={style.tdColor}>12 тренировок</td>
            </tr>
         </table>
         <table>

            <tr>
               <td className={style.firstTd}>Персональный тренинг с инструктором</td>
               <td>700 руб.</td>
               <td>2600 руб. <br /> (действителен в течении 3 недель)</td>
               <td>5200 руб.<br />
                  (действителен в
                  течении 6 недель)</td>
               <td >7200 руб.<br />
                  (действителен в
                  течении 10 недель)</td>
            </tr>

            <tr>
               <td className={style.firstTd}>Самостоятельные тренировки в тренажерном зале</td>
               <td>250 руб.</td>
               <td>-</td>
               <td>1500 руб.<br />
                  (действителен в течении 30 дней)</td>
               <td>2000 руб.<br />
                  (действителен в
                  течении 30 дней)</td>
            </tr>

            <tr>
               <td className={style.firstTd}>Зал групповых программ</td>
               <td>300 руб.</td>
               <td>-</td>
               <td>2000 руб.<br />
                  (действителен в
                  течении 30 дней)</td>
               <td>2750 руб.<br />
                  (действителен в течении 45 дней)</td>
            </tr>
         </table>

         <h3 className={style.h3Margin}>Абонемент по времени</h3>
         <table className={style.tableFirst}>
            <tr>
               <td className={style.firstTd}>Тип карты</td>
               <td>12 месяцев</td>
               <td className={style.tdColor}>6 месяцев</td>
               <td>3 месяца</td>
               <td>1 месяц</td>
            </tr>
         </table>
         <table>
            <tr>
               <td className={style.firstTd}>Индивидуальная,
                  полная без ограничения
                  в посещении / <span>8:00 – 23:00</span> </td>
               <td>18000 <br />
                  (+200 мин. солярия)</td>
               <td>12000</td>
               <td>7000</td>
               <td>2500</td>
            </tr>
            <tr>
               <td className={style.firstTd}>Индивидуальная,
                  дневная / <span>8:00 – 17:00</span></td>
               <td>-</td>
               <td>9500</td>
               <td>5500</td>
               <td>2000</td>
            </tr>
         </table>
      </div>
   )
}
