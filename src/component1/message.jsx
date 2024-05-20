const Welcome= ( {ongetpost})=>{
  return <center className="welcome-message">
    <h1>there is not any messages</h1> 
  <button  onClick={ongetpost}type="button" className="btn btn-primary" >Get Post from server</button>
  </center>
}
export default  Welcome;