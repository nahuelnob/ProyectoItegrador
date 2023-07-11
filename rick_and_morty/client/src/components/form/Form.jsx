import { useState } from "react"
import validation from "./validation"
import style from './form.module.css'

const Form = (props /* Este es el {login=login} */) => {
    const {login} = props
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })
    
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]:event.target.value})
        setErrors(validation({...userData, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
        setErrors(validation(userData))

        const errores = Object.values(errors)

/*         ! errores.length ? alert("Login exitoso") && 
        setUserData({name: '',email: '',message: '', }) && 
        setErrors({name: '',email: '',message: '', }) 
        : alert("Debe llenar todos los campos"); */
    }


    return (
    <div className={style.div}>
        <form onSubmit={handleSubmit} className={style.form}>
        <h1 className={style.titulo}>Rick and Morty</h1>
            <label className={style.label}htmlFor="email"> Email </label>
            <input className={style.input}
            type="text"
            name="email"
            value={userData.email}
            placeholder="ingrese su email..."
            onChange={handleChange}
            />
            <p style={{color:'white',}}>{errors.email}</p>

            <label htmlFor="password" className={style.label}> Password </label>
            <input 
            className={style.input}
            type="password"
            name="password"
            placeholder="contraseña..."
            value={userData.password}
            onChange={handleChange}
            />
            <p style={{color:'white',}}>{errors.password}</p>

            <button type="submit" className={style.button}> Submit </button>

        </form>

    </div>
    )
}

export default Form