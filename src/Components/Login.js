import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        let newData = { email, password }
        axios.post('/login', newData)
            .then(res => {
                console.log(res.data);
                alert("Form submitted successfully")
                navigate('/user')

            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='container mt-4'>
            <form class="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>
                <div class="col-md-12">
                    <label for="validationCustomUsername" class="form-label">Email</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" value={email} required
                            onChange={(e) => setEmail(e.target.value)} />
                        <div class="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="validationCustom05" class="form-label">Password</label>
                    <input type="password" class="form-control" id="validationCustom05" value={password} required
                        onChange={(e) => setPassword(e.target.value)} />
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