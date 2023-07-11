import { useState } from "react"
import { useDispatch } from "react-redux"

// Apuntes integracion
const Card = (props) => {

const {id, name, image, etc} = props

const [isFav, SetIsFav] = useState(false)

const handleFavorite = () => {
    if(isFav){
        props.removeFav(id);
        SetIsFav(false)
    } else {
        props.addFav(props)
        SetIsFav(true)
    }
}
}
// COPIO EL CODIGO DEL CORAZON

const mapDispatchToProps = (dispatch) => {
    return {
        add: (character) => dispatch(addFav(character)),
        removeFav: (id) => dispatch(removeFav(id)),
    }
}

//Pegar el useEffect

const mapStatetoProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

/////////////////////////////////////////
//con hooks

const dispatch = useDispatch()

const handleFavorite = () => {
    if(isFav){
        dispatch(removeFav(id));
        SetIsFav(false)
    } else {
        dispatch(addFav(props))
        SetIsFav(true)
    }
}

// con selector interactuamos con el estado
const myFav = useSelector((state) => state.myFavorites)
/////////////////////////////////////////
