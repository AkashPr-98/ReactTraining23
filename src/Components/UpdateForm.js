import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FormContext } from './ContextForForm'

export default function UpdateForm() {

    const {userId} = useContext(FormContext)

    console.log("userId", userId);

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        getUserById()
    },
    // eslint-disable-next-line 
    [])

    function getUserById(){
        axios.get(`/finduser/${userId}`)
        .then(res => {
            console.log(res.data);
            setFname(res.data.first_name)
            setLname(res.data.last_name)
            setAge(res.data.age)
            setCity(res.data.city)
            setEmail(res.data.email)
            setPassword(res.data.password)
        }).catch(err => {
            console.log(err);
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        let newData = { first_name: fname, last_name: lname, age, city }
        axios.put(`/update/${userId}`, newData)
            .then(res => {
                console.log(res.data);
                alert(res.data.msg)
            })
            .catch(err => {
                console.log(err);
                alert(err.response.data.msg)
            })
    }

    return (
        <div className='container mt-4'>
            <form class="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">First name</label>
                    <input type="text" class="form-control" id="validationCustom01" value={fname} required
                        onChange={(e) => setFname(e.target.value)} />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="validationCustom02" value={lname} required
                        onChange={(e) => setLname(e.target.value)} />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">Email</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" value={email} required
                            onChange={(e) => setEmail(e.target.value)} 
                            disabled/>
                        <div class="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">City</label>
                    <input type="text" class="form-control" id="validationCustom03" value={city} required
                        onChange={(e) => setCity(e.target.value)} />
                    <div class="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom03" class="form-label">Age</label>
                    <input type="text" class="form-control" id="validationCustom04" value={age} required
                        onChange={(e) => setAge(e.target.value)} />
                    <div class="invalid-feedback">
                        Please provide a valid age.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom05" class="form-label">Password</label>
                    <input type="password" class="form-control" id="validationCustom05" value={password} required
                        onChange={(e) => setPassword(e.target.value)} 
                        disabled/>
                    <div class="invalid-feedback">
                        Please provide a valid password.
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    )
}
