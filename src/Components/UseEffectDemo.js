import { useEffect, useState } from "react"
import axios from 'axios'

function UseEffectDemo() {

    const [urlType, setUrlType] = useState("todos")
    const [resource, setResource] = useState([])

    /* 
    
    UseEffect is a react Hook which is used to perform certain side-effects in a component when the component mounts or values of some specified variables are changed.

    []: When we pass an empty array like this in an useEffect then whatever we write in the useEffect, is executed only once whenever a page loads or page is refreshed.

    [variables]: When we pass a variable or multiple variables in this array in useEffect then whatever we write in the useEffect, is by default called when the page loads and also when value of any variable passed in the array changes.

    */


    useEffect(() => {
        APICalling()
    }, [urlType])

    function APICalling() {
        axios.get(`https://jsonplaceholder.typicode.com/${urlType}`)
            .then(res => {
                console.log(`response from ${urlType}`, res.data)
                setResource(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <button type="button" className="btn btn-primary mt-5"
                onClick={() => setUrlType("posts")}>Posts</button>
            <button type="button" className="btn btn-info ms-5 mt-5"
                onClick={() => setUrlType("users")}>Users</button>
            <button type="button" className="btn btn-warning ms-5 mt-5"
                onClick={() => setUrlType("comments")}>Comments</button>
            <p className="mt-5">{urlType}</p>
            {urlType === 'posts' &&
                resource.map(a => {
                    return (
                        <div>
                            <h1>Title: {a.title}</h1>
                            <h1>Body: {a.body}</h1>
                        </div>
                    )
                })
            }

            {urlType === 'users' &&
                resource.map(a => {
                    return (
                        <div>
                            <h1>Username: {a.username}</h1>
                            <h1>Email: {a.email}</h1>
                        </div>
                    )
                })
            }

            {urlType === 'comments' &&
                resource.map(a => {
                    return (
                        <div>
                            <h1>Name: {a.name}</h1>
                            <h1>Email: {a.email}</h1>
                        </div>
                    )
                })
            }

            {urlType === 'todos' &&
                resource.map(a => {
                    return (
                        <div>
                            <h1>Title: {a.title}</h1>
                            <h1>IsCompleted: {(a.completed).toString()}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UseEffectDemo