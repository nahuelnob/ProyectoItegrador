import SearchBar from "../searchBar/SearchBar"
import style from './navBar.module.css'
import { Link, NavLink } from "react-router-dom"

const Nav = (props) => {
    const handleLogout = () => {
        props.logout()
    }

    return (
        <div className={style.navBar}>
            <button className={style.btnDesp}>→</button>
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