import { useState,createContext} from "react"

export const DrinkContext = createContext({
    drinkName:'',
    setDrinkName: ()=>{},
    drinkCarouselImgUrl:'',
    setDrinkCarouselImgUrl:()=>{}
})

export const DrinkProvider = ({children})=>{
    const [drinkName, setDrinkName] = useState('');
    const [drinkCarouselImgUrl, setDrinkCarouselImgUrl] = useState('');
    const value = {drinkName,setDrinkName, drinkCarouselImgUrl, setDrinkCarouselImgUrl}
    return(<DrinkContext.Provider value={value}>{children}</DrinkContext.Provider>)
}