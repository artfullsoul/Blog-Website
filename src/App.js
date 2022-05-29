import './App.css';
import React, {useEffect, useState} from 'react';
import {updatePostData} from "./actions/itemsAction.js"
import {connect} from "react-redux";
import ShowPost from './components/ShowPost';
import UserIcon from "./assets/usericon.png";
import WriteBlogs from './components/WriteBlogs';
import ModifyBlogs from "./components/ModifyBlogs.js";

function App(props) {
  const [posts,setPosts] = useState(props.item.blogsData?props.item.blogsData:[]);
  const [selectedPost,setSelectedPost] = useState(null);
  const [selectedIndex,setSelectedIndex] = useState(null);
  const [selectedNav,setSelectedNav] = useState("All Blogs")
  
  useEffect(() => {
    console.log(props)
  },[])

  const publishComment = (comment,name) =>  //FUNCTION TO ADD COMMENTS TO POST
  {
    var tempArr  = posts;
    var findIndex = null;
    tempArr.find((post,index) => {
      console.log(post+"==="+selectedPost)
      if(post === selectedPost)
        findIndex=index
    })
    console.log("Find index",findIndex)
    tempArr[findIndex].commentData.push({name,comment});
    tempArr[findIndex].comment = tempArr[findIndex].commentData.length;
    // setPosts(tempArr);
    // var tempPost = selectedPost;
    // tempPost.commentData.push({name,comment})
    // setSelectedPost(tempPost);
    props.updatePostData(tempArr);
  }

  const updateView = (index) => { //FUNCTION TO KEEP A CHECK ON VIEWS
    var tempArr = posts;
    tempArr[index].views = tempArr[index].views + 1;
    props.updatePostData(tempArr);
  }

  const updateLikes = (index) => {  //FUNCTION TO INCREMENT LIKES
    var tempArr = posts;
    tempArr[index].likes = tempArr[index].likes + 1;
    props.updatePostData(tempArr);
  }

  const publishPost = (post) => { //FUNCTION TO CREATE A NEW POST
    console.log(post)
    const newPostData ={
        by:post.personName?post.personName:"Admin",
        date:"Dec 15, 2021",
        created:"1 min",
        imageUrl:post.imageUrl,
        title:post.heading,
        desc:post.desc,
        content:post.content,
        views:0,
        comment:0,
        commentData:[],
        likes:0
      }
    var tempArr = posts;
    tempArr.push(newPostData);
    props.updatePostData(tempArr);
    alert("Blog Published Successfully!!");
    setSelectedNav("All Blogs")
  }

  const deletePost = (index) => { //FUNCTION TO DELETE A POST
    var tempArr = posts;
    tempArr.splice(index,1);
    props.updatePostData(tempArr);
  }

  const modifyPost = (post,index) => {  //FUNCTION TO MODIFY EXISTING POST
    var tempArr = posts;
    tempArr[index].title = post.heading;
    tempArr[index].desc = post.desc;
    tempArr[index].content = post.content;
    tempArr[index].imageUrl = post.imageUrl;
    props.updatePostData(tempArr);
    alert("Blog Updated Successfully!!");
  }
  return (
      <div className='main-page'>

        {/* NAVBAR */}
        <div className='navbar' style={{boxShadow:selectedNav === "All Blogs"?"none":" 0px 8px 16px #eee"}}>
          <p className='nav-label'>MY-BLOGS</p>
          <div className='nav-links-cont'>
            <p className='nav-links' style={{borderBottom: selectedNav === "All Blogs" ? "1px solid grey" : "0px solid grey"}} onClick={() => { setSelectedPost(null); setSelectedNav("All Blogs")}}>All Blogs</p>
            <p className='nav-links' style={{borderBottom: selectedNav === "New Blog" ? "1px solid grey" : "0px solid grey"}} onClick={() => { setSelectedPost(null); setSelectedNav("New Blog")}}>New Blogs</p>
            <p className='nav-links' style={{borderBottom: selectedNav === "Modidfy Blog" ? "1px solid grey" : "0px solid grey"}} onClick={() => { setSelectedPost(null); setSelectedNav("Modidfy Blog")}}>Modify Blogs</p>
          </div>
        </div>

        {/* MAINSECTION IMAGE BANNER */}
        {(selectedPost === null && selectedNav === "All Blogs") && <div className='mid-sec'>
          <div className='main-img-cont'>
            {/* <img className='main-img' src="https://store.hp.com/app/assets/images/uploads/prod/7-best-home-office-setup-ideas-for-telecommuting-hero1583446006576710.jpg"/> */}
            <div className='main-tagline-cont'>
              <p className='main-tagline'>A PLACE WHERE <b>ART</b> MEET <b>SCIENCE.</b></p>
            </div>
          </div>
        </div>}

        {/* BLOG POSTS */}
        <div className='blog-post-cont'>

          {(selectedPost === null && selectedNav === "All Blogs") && posts.map((post,index) => {
            return(
              <div className='post-cont' onClick={() => {
                updateView(index);
                setSelectedPost(post); 
                setSelectedIndex(index)
                setSelectedNav("")}}>
                <div className='post-img-cont'>
                  <img className='post-img' src={post.imageUrl} />
                </div>
                <div className='post-data-cont'>
                  <div className='post-upp'>
                    <p className='post-by'>{post.by}</p>
                    <p className='post-date'>{post.date} . {post.created}</p>
                  </div>
                  <div className='post-mid'>
                    <p className='post-title'>{post.title}</p>
                    <p className='post-desc'>{post.desc}</p>
                  </div>
                  <div className='post-bottom'>
                    <p className='post-views'>{post.views} views</p>
                    <p className='post-comm'>{post.comment} comments</p>
                    <p className='post-like' >{post.likes} Likes</p>
                  </div>
                </div>
              </div>
            )
          })}

          {selectedPost !== null && <ShowPost post={selectedPost} publishComment={publishComment} updateLikes={updateLikes} index={selectedIndex}/>}
          {(selectedPost === null && selectedNav === "New Blog") && <WriteBlogs publishPost={publishPost}/>}
          {(selectedPost === null && selectedNav === "Modidfy Blog") && <ModifyBlogs post={posts} modifyPost={modifyPost} deletePost={deletePost}  updateLikes={updateLikes} index={selectedIndex}/>}
        </div>

      </div>
  );
}
const mapStateToProps = (state) => {
  return({
      //Here State.post is 
      //Coming From -> "./reducers/index.js"
      //where "item" is defined under combineReducers
      item:state.item
  })
}
export default connect(mapStateToProps, {updatePostData})(App);