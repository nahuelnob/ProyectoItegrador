import style from './title.module.css'
import { NavLink } from 'react-router-dom'

const Title = () => {
    return (
        <div className={style.div}>
            <NavLink to='/home' style={{textDecoration:'none'}}>
                <h1 className={style.titulo}>Rick<span className={style.span}> and  </span>Morty</h1>
            </NavLink>            
        </div>
    )
}
export default Title