import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Users() {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        axios.get('/allUsers')
            .then(res => {
                console.log(res.data.abc)
                setUserData(res.data.abc)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h1>This is User's Data Page</h1>
            <table className='table table-primary mt-5'>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Age</th>
                    <th>Action</th>
                </thead>

                <tbody>
                    {userData.map(abc => {
                        return(
                            <tr>
                                <td>{abc.first_name}</td>
                                <td>{abc.last_name}</td>
                                <td>{abc.email}</td>
                                <td>{abc.city}</td>
                                <td>{abc.age}</td>
                                <td className='d-flex justify-content-evenly'>
                                    <button className='btn btn-warning'>Update</button>
                                    <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Users