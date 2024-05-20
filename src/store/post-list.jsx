import { createContext, useReducer } from "react";
export const PostList=createContext({
  postList:[],
  addPost:()=>{},
  deletePost:()=>{},
  initialpost:()=>{},
});
const postListReducer=(currPostList,action)=>{
  let newPostList=currPostList;
  if (action.type==="DELETE_POST"){
    newPostList=currPostList.filter((post)=>post.id!==action.payload.postId);
  }
else if(action.type==="initialpost"){
  newPostList=action.payload.posts;
}
else if(action.type==="Add_Post"){
 newPostList=[action.payload,...currPostList]
  }
  return newPostList;
}
const PostListProvider=({children})=>{
const [postList,dispatchPostList]=useReducer(postListReducer,[]);
     
const addPost = (userId,postTitle,postBody,reactions,tags) =>{ dispatchPostList({
  type:'Add_Post',
    
  payload:{
    id:Date.now(), 
    title:postTitle,
    reactions:reactions, 
    body:postBody,
    userId:userId,
    tags:tags,


  }
})
}
const initialpost = (posts) =>{ dispatchPostList({
  type:'initialpost',
    
  payload:{
    posts,


  }
})
}

const deletePost=(postId)=>{
dispatchPostList({
  type:"DELETE_POST",
  payload:{
    postId,
  }
})
}


     return <PostList.Provider value={{postList ,addPost,deletePost,initialpost}}>{children}</PostList.Provider>
}


export default PostListProvider;