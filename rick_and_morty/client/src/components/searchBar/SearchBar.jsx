import style from './searchBar.module.css';
import { useState } from 'react';
import { NavLink, NavNavLink } from 'react-router-dom';

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');
   
   const handleChange = (event) => {
      setId('')
      setId(event.target.value)
   }

   const randomChange =  Math.floor(Math.random() * 827)
   


   return (
      <div className={style.div}>            
         
         <input className={style.input} type='text' placeholder="Agregar personaje por id  ..." onChange={handleChange}/>

         <button className={style.btn} onClick={()=>onSearch(id)}>Agregar</button>

         <button className={style.btnRandom} onClick={()=>onSearch(randomChange)} > Random </button>

      </div>
   );
}

/////////////////////////////////

//Aca saque el nav
         {/*          <NavLink to='/home' style={{textDecoration:'none'}}>
                     <button className={style.btnHome}>Home</button>
                  </NavLink>
         
                  <NavLink to='/about' style={{textDecoration:'none'}}>
                     <button className={style.btnAbout}>About</button>
                  </NavLink>
                  
                  <NavLink to='/favorites' style={{textDecoration:'none'}}>
                     <button className={style.btnAbout}>Favorites</button>
                  </NavLink> */}