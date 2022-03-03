import { useGlobalContext } from "../context"
import DrinkCard from "./DrinkCard"
import Loading from "./Loading"

const DrinkList = () => {
    const { loading, drinks } = useGlobalContext()
    
    if (loading) {
        return <Loading/>
    }
    if (!drinks.length) {
        return <h1>No drinks with this name!</h1>
    }
    return (
<section className="card-container">
        {
            drinks.map(item => {
                return <DrinkCard key={item.id}{...item}/>
            })
        }
</section >
)
}
export default DrinkList