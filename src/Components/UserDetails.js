import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function UserDetails() {

    const [user, setUser] = useState("")

    useEffect(() => {
        axios.get('/find')
            .then(res => {
                console.log(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <h1>First Name: </h1>
        </div>
    )
}
