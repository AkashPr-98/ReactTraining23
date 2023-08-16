
/*const abc = {
    name: "Harshal",
    city: "Nashik"
}

const {name, city} = abc
console.log(name)
console.log(city)
*/

import About from './About'


function Home({name, age, profession, car}){
    return(
        <>
        <h1>This is Home Page</h1>
        <h1>This is my First Component</h1>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{profession}</h1>
        <h1>{car.brand}</h1>
        <About abc={name} xyz={age} lmn={profession} tuy={car}/>
        </>
    )
}

export default Home