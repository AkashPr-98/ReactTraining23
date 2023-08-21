import { useContext } from "react"
import { MyContext } from "./UseContextDemo"

function About({ abc, xyz, lmn, tuy }) {

    const { name, age, profession, carName } = useContext(MyContext)

    return (
        <>
        {/* <h1>This is my About Page which will be a child of Home component</h1> */}
        {/* <p>{abc}</p>
        <p>{xyz}</p>
        <p>{lmn}</p>
        <p>{tuy.model}</p> */}
        <div className="mt-5">
            <p>Name in About: {name}</p>
            <p>Age in About: {age}</p>
            <p>Profession in About: {profession}</p>
            <p>My Car is: {carName}</p>
        </div>
        </>
    )
}

export default About