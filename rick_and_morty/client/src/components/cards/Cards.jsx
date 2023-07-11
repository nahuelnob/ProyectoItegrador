import Card from "../card/Card";
import style from './cards.module.css';

/* export default function Cards({characters}) {
    const lista = characters.map((carta => {
      return <Card 
      
      id={carta.id}
      name={carta.name}
      status={carta.status}
      species={carta.species}
      gender={carta.gender}
      origin={carta.origin.name}
      image={carta.image}
      onClose={() => window.alert('Emulamos que se cierra la card')}
      />
      
   })) */

   export default function Cards(props) {

      const lista = props.characters.map((carta => {
         const {id, name, status, species, gender, origin, image} = carta
       
         return <Card 
        
        id={id}
        name={name}
        status={status}
        species={species}
        gender={gender}
        origin={origin.name}
        image={image}
        onClose={props.onClose}
        />
        
     }))

   return (
   <>
{/*       <button onClick={handleLogout} style={{width:'5rem', height:'2rem', borderRadius:'1rem', backgroundColor:'lightgreen'}}>LogOut</button> */}
      <div className={style.div}>
         <div className={style.divListaCards}>
         {lista}
         </div>
      </div>
      
   </>
   
   )
}



