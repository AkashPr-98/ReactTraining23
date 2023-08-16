
function About({abc, xyz, lmn, tuy}){
    return(
        <>
        <h1>This is my About Page which will be a child of Home component</h1>
        <p>{abc}</p>
        <p>{xyz}</p>
        <p>{lmn}</p>
        <p>{tuy.model}</p>
        </>
    )
}

export default About