import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext()
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

//AppProvider
const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState("a")
    const [drinks, setDrinks] = useState([])

    //fetching drinks
    const fetchDrinks = async () => {
        setLoading()
        try {
            const res = await fetch(`${url}${searchText}`)
            const data = await res.json()
            const { drinks } = data
            console.log(drinks)

            if (drinks) {
                //Drink items
                const newDrinks = drinks.map(item => {
const {idDrink, strDrink, strDrinkThumb,strAlcoholic,strGlass} = item;
                
                    return {
                        id: idDrink,
                        name: strDrink,
                        glass: strGlass,
                        info: strAlcoholic,
                        image: strDrinkThumb
                    }
                })
                setDrinks(newDrinks)
                //No drinks
            } else {
                setDrinks([])
            }
            setLoading(false)
        }

        //Error
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => { fetchDrinks() }, [searchText])

    return <AppContext.Provider value={{ loading, drinks, setSearchText }}>{children}</AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {
    AppContext,
    AppProvider
}