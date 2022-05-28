import React, {useEffect, useState} from 'react';
import UserIcon from "../assets/usericon.png";
const ShowPost = ({post,publishComment,updateLikes,index}) => {
    const [comment,setComment] = useState("");
    const [personName,setPersonName] = useState("");
    console.log(post.commentData)
    return(
        <div>
            <div className='indi-post-cont'>
                <div className='upper-data-cont'>
                    <img className='indi-user-image' src={UserIcon}/>
                    <p>{post.by} . {post.date} . {post.created}</p>
                </div>
                <div className='indi-post-mid'>
                  <p className='indi-post-title'>{post.title}</p>
                  <p className='indi-post-desc'>{post.desc}</p>
                </div>
                <div className='indi-post-img-cont'>
                  <img className='indi-post-img' src={post.imageUrl} />
                </div>
                <div className='indi-content-cont'>
                    <p className='indi-post-content'>{post.content}</p>
                </div>
                <div className='post-bottom'>
                  <p className='post-views'>{post.views} views</p>
                  <p className='post-comm'>{post.comment} comments</p>
                  <p className='post-like' onClick={() => { updateLikes(index) }}>{post.likes} Likes</p>
                </div>
            </div>
            <div className='indi-post-comm-cont'>
                <p className='comments-head'>Comments</p>
                {post.commentData.map((comment,index) =>
                <div key={index} className="comment-cont">
                    <img className='user-image' src={UserIcon}/>
                    <div className='comment-data-cont'>
                        <p className='comment-name'>{comment.name} (member)</p>
                        <p className='comment'>{comment.comment}</p>
                    </div>
                </div>)}
                <div className='comment-box'>
                    <input value={personName} style={{width:"50%",marginTop:"1vw"}} onChange={(e) => setPersonName(e.target.value)} className='comment-input' placeholder='Mention your name...'/>
                    <input value={comment} onChange={(e) => setComment(e.target.value)} className='comment-input' placeholder='Write your comment here...'/>
                    <div
                        onClick={() => {
                            if(personName.length === 0 || comment.length === 0)
                            {
                                alert("Please Fill all Feilds...")
                            }
                            else
                            {
                                publishComment(comment,personName)
                                setComment("");
                                setPersonName('');
                            }
                        }} 
                        className='publish-butt' 
                        style={{backgroundColor:(comment.length > 0 && personName.length > 0)? "rgb(70, 98, 194)" : "grey"}}>
                        <p>Publish</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowPost;