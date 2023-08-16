
function ArrayMethods() {

    const arr = ["Akash", "Vikas", "NandKishor"]

    const randNo = [20, 52, 85, 45, 32, 25, 55, 65]

    // const myStyle = {
    //     color: 'green',
    //     fontSize: '80px'
    // }

    const details = [
        {
            fname: "Harshal",
            age: 23
        },
        {
            fname: "Akash",
            age: 25
        },
        {
            fname: "Piyush",
            age: 22
        }
    ]

    return (
        <>
            {arr.map(a => {
                return (
                    <h1 className='text-danger'>{a}</h1>
                )
            })}
            {randNo.filter(c => c < 50).map(no => {
                return (
                    <h2>Numbers less than 50 : {no}</h2>
                )
            })}
            {
                details.map(detail => {
                    return (
                        <div>
                            <h4>Name: {detail.fname}</h4>
                            <h4>Age: {detail.age}</h4>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ArrayMethods