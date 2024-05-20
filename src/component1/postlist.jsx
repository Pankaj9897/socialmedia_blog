 import { useContext } from "react"; 
  import Card from "./card";
 import { PostList as pldata } from "../store/post-list";
import Welcome from "./message";
 const PostList=()=>{
 const {postList ,initialpost}= useContext(pldata);
 const handleongetpost =()=>{
  fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(data=>{
    initialpost(data.posts);})
  };
 

  return<>
  {postList.length==0 && (<Welcome ongetpost={handleongetpost}/>)}
  {postList.map((post)=>(< Card key={post.id} post={post}/>))}
</>
  } 
  export default PostList;
