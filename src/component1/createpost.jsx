import { useContext, useRef } from "react";
import { PostList } from "../store/post-list";
 
 const CreatePost=()=>{
  const {addPost}=useContext(PostList);
  const userIdElement=  useRef() 
  const postTitleElement= useRef()
  const  postBodyElement=useRef()
  const  tagsElement=useRef()
  const reactionsElement=useRef();
  const handlesubmit=(event)=>{
     event.preventDefault();
     const userId=userIdElement.current.value;
     const postTitle=postTitleElement.current.value;
     const  postBody=postBodyElement.current.value;
     const tags=tagsElement.current.value.split(" ");
     const reactions=reactionsElement.current.value;
     userIdElement.current.value=" ";
     postTitleElement.current.value= " ";
     postBodyElement.current.value=" ";
     tagsElement.current.value=" ";
     reactionsElement.current.value=" ";
  addPost(userId,postTitle,postBody,reactions,tags) ;
  }

  return <form className="create-post" onSubmit={handlesubmit}>
  <div className="mb-3">
  <label htmlFor="userId" className="form-label">Enter Your User Id here</label>
  <input type="text" className="form-control" id="user ID" ref={userIdElement} aria-describedby="emailHelp" placeholder="Your user id"/>
 
</div>
<div className="mb-3">
  <label htmlFor="title" className="form-label">Post Title</label>
  <input type="text" className="form-control"   ref={postTitleElement}id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="How are you today"/>
 
</div>
<div className="mb-3">
  <label htmlFor="title" className="form-label">Post Content</label>
  <textarea type="text"  ref={postBodyElement}
  rows="4" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tell us more about it"/>
 
</div>
<div className="mb-3">
  <label htmlFor="reactions" className="form-label">Number of Reactions</label>
  <input type="text" className="form-control"
  ref={reactionsElement} id="reactions" aria-describedby="emailHelp" placeholder="Enter the reactions"/>
 
</div>
<div className="mb-3">
  <label htmlFor="tags" className="form-label">Enter Your Hasgtags</label>
  <input type="text" className="form-control" id="tag" aria-describedby="emailHelp" 
  ref={tagsElement}  placeholder="Please enter tags"/>
 
</div>

<button type="submit" className="btn btn-primary">Post</button>
</form>
}
export default CreatePost;