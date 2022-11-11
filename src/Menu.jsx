import React from 'react'
import style from './Main.module.scss';
export const Menu = ({ items }) => {
   
   return (
      <div className={style.menu}>
         <div className={style.blur}></div>
      
         <ul>
            {items.map(item=>
               <li key={item.id}>
                  <a href={item.href}>{item.value}</a>
               </li>
            )}
         </ul>

      </div>
   )
}
