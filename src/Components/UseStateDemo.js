import { useState } from "react"

function UseStateDemo() {

    /*
        Below I have used an useState Hook.
        We have two elements here abc and xyz.
        The first element abc is actual variable
        and the second element xyz is a function.

        So whenever I need to change the value of variable abc I cannot directly change it, instead I have to use the function xyz in order to change(update) the value of abc 
    */

    /*e.target.value returns us the value of the targeted input field i.e it returns the value of whatever we type in the input field. Suppose, if I type Akash in an input field then value(e.target.value) of that
    input field will return the value Akash
    */

    // const [abc, xyz] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")

    const [userData, setUserData] = useState({})
    // const [count, setCount] = useState(0)

    function handleSubmit(e){
        e.preventDefault()
        setUserData({
            abc: fname,
            def: lname,
            ghi: email,
            jkl: city,
            mno: state,
            xyz: zip
        })
    }

    return (
        <>
            {/* <div className="mt-5">
                <button type="button" className="btn btn-secondary me-3"
                    onClick={() => setCount(count + 1)}>+</button>
                <span>{count}</span>
                <button type="button" className="btn btn-secondary ms-3"
                    onClick={() => setCount(count - 1)}>-</button>
                <button type="button" className="btn btn-danger"
                    onClick={() => {
                        const name = prompt("Please enter your name")
                        setFname(name)
                    }}>Button1</button>
                <button type="button" className="btn btn-success" onClick={() => setFname("NandKishor")}>Button2</button>
                <button type="button" className="btn btn-secondary" onClick={() => setFname("Vikas")}>Button3</button>
                <h1>{fname}</h1>
            </div> */}
            <form className="row g-3 needs-validation container ms-5 mt-5" novalidate
            onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label for="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" value={fname} required 
                    onChange={(e) => {
                        setFname(e.target.value)
                        console.log("e.target.value", e.target.value);
                    }}/>
                    {/* <p>{fname}</p> */}
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" value={lname} required 
                    onChange={(e) => setLname(e.target.value)}/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustomUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}/>
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="validationCustom03" className="form-label">City</label>
                    <input type="text" className="form-control" id="validationCustom03" required 
                    onChange={(e) => setCity(e.target.value)}
                    value={city}/>
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-3">
                    <label for="validationCustom04" className="form-label">State</label>
                    <select className="form-select" id="validationCustom04" required
                    onChange={(e) => {
                        setState(e.target.value)
                        console.log("e.target.value of selected option", e.target.value);
                    }}
                    value={state}>
                        <option selected disabled value="">Choose...</option>
                        <option value="MH">Maharashtra</option>
                        <option value="UP">Uttar Pradesh</option>
                        <option value="MP">Madhya Pradesh</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div className="col-md-3">
                    <label for="validationCustom05" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="validationCustom05" required 
                    onChange={(e) => setZip(e.target.value)}
                    value={zip}/>
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>

            <table className="table table-primary mt-5">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{userData.abc}</td>
                        <td>{userData.def}</td>
                        <td>{userData.ghi}</td>
                        <td>{userData.jkl}</td>
                        <td>{userData.mno}</td>
                        <td>{userData.xyz}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default UseStateDemo