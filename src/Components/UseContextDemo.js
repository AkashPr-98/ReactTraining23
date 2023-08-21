import { createContext, useState } from "react"

const MyContext = createContext()

function UseContextDemo({children}){

    const [carName, setCarName] = useState("")

    const evenNumbers = [2, 4, 20, 52, 56, 42]

    const name = "Akash"
    const age = 25
    const profession = "Developer"
  
    const newCar = {
      brand: "Tata",
      model: "Nexon"
    }

    return(
        <MyContext.Provider 
        value={{evenNumbers, name, age, profession, newCar, carName, setCarName}}>
            {children}
        </MyContext.Provider>
    )
}

export default UseContextDemo
export {MyContext}