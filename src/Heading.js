import img from './images/my.jpg'
function Heading(){
    return(
        <>
        <h1><b>it's your web</b></h1>
        <div><img src={img}></img></div>
        </>
    )
}
export default Heading;