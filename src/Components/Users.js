import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FormContext } from './ContextForForm'
import { useNavigate } from 'react-router-dom'

function Users() {

    const navigate = useNavigate()

    const { setUserId } = useContext(FormContext)

    const [userData, setUserData] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    function getAllUsers() {
        axios.get('/allUsers')
            .then(res => {
                console.log(res.data.abc)
                setUserData(res.data.abc)
            })
            .catch(err => console.log(err))
    }

    function handleDelete(xyz) {
        axios.delete(`/dluser/${xyz}`)
            .then(res => {
                console.log(res.data);
                getAllUsers()
            }).catch(err => {
                console.log(err);
            })
    }

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
                        return (
                            <tr>
                                <td>{abc.first_name}</td>
                                <td>{abc.last_name}</td>
                                <td>{abc.email}</td>
                                <td>{abc.city}</td>
                                <td>{abc.age}</td>
                                <td className='d-flex justify-content-evenly'>
                                    <button className='btn btn-warning'
                                        onClick={() => {
                                            setUserId(abc._id)
                                            navigate('/update')
                                        }}>Update</button>
                                    <button className='btn btn-danger'
                                        onClick={() => handleDelete(abc._id)}>Delete</button>
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