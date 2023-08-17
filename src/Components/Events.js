
function Events() {

    function showResult(a, b){
        alert(a+b)
    }

    function showName(){
        alert("I am Akash")
        console.log("I am a developer");
    }

    return (
        <>
            <h1>This is Events Page</h1>
            <button type="button" className="btn btn-info"
            onClick={() => showResult(5,6)}>Click Here!</button>
            <br />
            <button type="button" className="btn btn-warning mt-3"
            onMouseEnter={showName}>Click on this button!</button>
        </>
    )
}

export default Events