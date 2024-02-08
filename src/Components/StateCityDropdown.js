import React, { useEffect, useState } from 'react'

export default function StateCityDropdown() {

    const details = [
        {
            state: "Maharashtra",
            cities: ["Nashik", "Mumbai", "Nagpur", "Pune"]
        },
        {
            state: "Karnataka",
            cities: ["Bijapur", "Banglore", "Hubli", "Dharwad"]
        },
        {
            state: "Andhra Pradesh",
            cities: ["Hyderabad"]
        },
        {
            state: "Tamil Nadu",
            cities: ["Chennai", "Vishakapatnam"]
        },
    ]

    const [state, setState] = useState("")
    const [cities, setCities] = useState([])
    const [showCity, setShowCity] = useState("")

    useEffect(() => {
        const citiesArray = details.filter(a => a.state === state)
        setCities(citiesArray[0]?.cities)
    }, 
    // eslint-disable-next-line
    [state])

    return (
        <>
            <div className='d-flex justify-content-evenly mt-5'>
                <div>
                    <label htmlFor="">States : </label>
                    <select onChange={(e) => setState(e.target.value)} value={state}>
                        <option value="">Select a state</option>
                        {details.map((India) => {
                            return (
                                <option value={India.state}>{India.state}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="">City : </label>
                    <select onChange={(e) => setShowCity(e.target.value)} value={showCity}>
                        {cities?.map((city) => {
                            return (
                                <option value={city}>{city}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            {/* <p>{state}:{showCity}</p> */}
        </>
    )
}