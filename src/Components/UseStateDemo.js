import { useState } from "react"

function UseStateDemo() {

    /*
        Below I have used an useState Hook.
        We have two elements here abc and xyz.
        The first element abc is actual variable
        and the second element xyz is a function.

        So whenever I need to change the value of variable abc I cannot direclty change it, instead I have to use the function xyz in order to change(update) the value of abc 
    */
    
    // const [abc, xyz] = useState("")
    const [fname, setFname] = useState("Akash")
    const [count, setCount] = useState(0)

    return (
        <>
        <div className="mt-5">
            <button type="button" className="btn btn-secondary me-3"
            onClick={() => setCount(count+1)}>+</button>
                <span>{count}</span>
            <button type="button" className="btn btn-secondary ms-3"
            onClick={() => setCount(count-1)}>-</button>
        </div>
            <form className="row g-3 needs-validation container ms-5 mt-5" novalidate>
                <button type="button" className="btn btn-danger"
                onClick={() => {
                   const name = prompt("Please enter your name")
                   setFname(name)
                }}>Button1</button>
                {/* <button type="button" className="btn btn-success" onClick={() => setFname("NandKishor")}>Button2</button> */}
                <h1>{fname}</h1>
                <div className="col-md-4">
                    <label for="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" value="Mark" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" value="Otto" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustomUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="validationCustom03" className="form-label">City</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                </div>
                <div className="col-md-3">
                    <label for="validationCustom04" className="form-label">State</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div className="col-md-3">
                    <label for="validationCustom05" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="validationCustom05" required />
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label" for="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </>
    )
}

export default UseStateDemo