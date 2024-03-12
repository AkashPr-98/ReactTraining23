import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function UserDetails() {

    const [user, setUser] = useState("")

    useEffect(() => {
        axios.get('/find')
            .then(res => {
                console.log("user Details", res.data);
                setUser(res.data)
            }).catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <h3 className='mt-5'>First Name: {user.first_name}</h3>
            <h3 className='mt-5'>Last Name: {user.last_name}</h3>
            <h3 className='mt-5'>Age: {user.age}</h3>
            <h3 className='mt-5'>City: {user.city}</h3>
            <h3 className='mt-5'>Email: {user.email}</h3>
        </div>
    )
}
