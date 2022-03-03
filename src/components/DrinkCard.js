import { Link } from "react-router-dom"

const DrinkCard = ({id, name, image, info, glass}) => {
    return(
       <article className="drinks-card">
           <div className="img-container">
               <img src={image} alt={name} />
           </div>
           <div className="drink-body">
               <h3>{name}</h3>
               <h4>{glass}</h4>
               <p>{info}</p>
               <Link to={`/drink/${id}`} className="btn"> Details</Link>
           </div>
       </article> 
    )
}
export default DrinkCard