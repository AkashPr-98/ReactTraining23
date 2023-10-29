import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Registration() {

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [password, setPassword] = useState("")
    const [photo, setPhoto] = useState(null)
    const [base64, setBase64] = useState(null)
    const [userPhoto, setUserPhoto] = useState("")

    useEffect(() => {
        axios.get('/allUsers')
        .then(res => {
            console.log(res.data.abc)
            const oneData = res.data.abc.filter(a => a.last_name === "Sharma")
            console.log("oneData", oneData);
            setUserPhoto(oneData[0].photo)
        })
        .catch(err => console.log(err))
    }, [])

    function handleFileChange(e) {
        const file = e.target.files[0]
        setPhoto(file)

        if(file){
            const reader = new FileReader()
            reader.onload = (e) => {
                const base64 = e.target.result
                setBase64(base64)
            }
            reader.readAsDataURL(file)
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        let newData = {first_name:fname, last_name:lname, age, email, city, password, photo:base64}
        axios.post('/register', newData)
        .then(res => {
            console.log(res.data);
            alert("Form submitted successfully")
        })
        .catch(err => {
            console.log(err);
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
                            onChange={(e) => setEmail(e.target.value)} />
                        <div class="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom03" class="form-label">City</label>
                    <input type="text" class="form-control" id="validationCustom03" value={city} required 
                    onChange={(e) => setCity(e.target.value)}/>
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
                    onChange={(e) => setPassword(e.target.value)} />
                    <div class="invalid-feedback">
                        Please provide a valid password.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom06" class="form-label">Upload photo</label>
                    <input type="file" class="form-control" id="validationCustom06" required 
                    onChange={handleFileChange} />
                    <div class="invalid-feedback">
                        Please provide a valid password.
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>

            <img src={userPhoto} alt="" className='img-fluid mt-5'/>
        </div>
    )
}