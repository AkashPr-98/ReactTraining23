import axios from 'axios';
import { Link } from 'react-router-dom'

function Navbar({onLogout}) {

    function handleSubmit() {
        axios.get('/logout')
            .then(res => {
                console.log(res.data);
                alert("User logged out successfully")
                onLogout()
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Registration</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/update">Update</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user">User Info</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"
                                onClick={() => handleSubmit()}>Logout</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/events">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/effectdemo">UseEffectDemo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/statedemo">UseStateDemo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// function ContactUs() {
//     return (
//         <h1>This is ContactUs Page in Navbar</h1>
//     )
// }

export default Navbar
// export { ContactUs }