import { useState } from "react"
import SearchBar from "../searchBar/SearchBar"
import style from './navBar.module.css'
import { Link, NavLink } from "react-router-dom"

const Nav = (props) => {
    const handleLogout = () => {
        props.logout()
    }

    const [navBar, setNavBar] = useState(false)

    const handleNavBar = () => {
        setNavBar(true)
    }
    const escHandleNavBar = () => {
        setNavBar(false)
    }



    return (
        <div className={navBar ? style.navBar : style.navBar2}>
            <button onClick={navBar ? escHandleNavBar : handleNavBar} className={style.desp}>{navBar ? '<' : '>'}</button>
            <p className={style.user}>{props.email}</p>

            <NavLink to='/home' style={{textDecoration:'none'}}>
                <button className={style.btn}>Home</button>
            </NavLink>

            <NavLink to='/about' style={{textDecoration:'none'}}>
                <button className={style.btn}>About</button>
            </NavLink>
            
            <NavLink to='/favorites' style={{textDecoration:'none'}}>
                <button className={style.btn}>Favorites</button>
            </NavLink>

            <button className={style.btnLout} onClick={handleLogout} style={{textDecoration:'none'}}>LogOut</button>

        </div>

        
)
}

export default Nav

//Cosas que modifique, saque el coso para agregar del NAv
{/*             <SearchBar onSearch={onSearch}/> */}