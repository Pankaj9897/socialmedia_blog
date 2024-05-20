
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './component1/header';
import Footer from "./component1/footer";
import Sidebaar from "./component1/sidebar";
import CreatePost from "./component1/createpost";
import Postlist from "./component1/postlist";
import { useState } from "react"; 
import PostList from "./store/post-list";

function App() {
  const [selectedtab ,setselectedtab]=useState("Home");

  return (
    <PostList>
    <div className="app-container">
      <Sidebaar selectedtab={selectedtab}
      setselectedtab={setselectedtab}></Sidebaar>
      <div className="container" >
      <Header></Header>
      {selectedtab==="Home"?( <Postlist></Postlist>) :(
        <CreatePost></CreatePost>)}
      
      <Footer></Footer>
      </div>
</div>
      </PostList>
  
  );
}

export default App;
