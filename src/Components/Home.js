
/*const abc = {
    name: "Harshal",
    city: "Nashik"
}

const {name, city} = abc
console.log(name)
console.log(city)
*/

import { useContext } from 'react'
import About from './About'
import { MyContext } from './UseContextDemo'
import { useNavigate } from 'react-router-dom'


function Home({ name, age, profession, car }) {

        const { evenNumbers, newCar, setCarName } = useContext(MyContext)

        const navigate = useNavigate()

        return (
            <>
                {/* <h1>This is Home Page</h1>
            <h1>This is my First Component</h1> */}
                <h1>First Even Number: {evenNumbers[0]}</h1>
                <h1>NewCar in Home: {newCar.brand}</h1>
                <button type="button" className='btn btn-info'
                    onClick={() => setCarName("TATA ALTROZ")}>Set My Car</button>
                {/* <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{profession}</h1>
            <h1>{car.brand}</h1> */}
                {/* <About abc={name} xyz={age} lmn={profession} tuy={car}/> */}
                <About />
                <button type="button" className='btn btn-warning'
                onClick={() => navigate('/statedemo')}>
                    Redirect to UseStateDemo Page!
                </button>
            </>
        )
    }

export default Home