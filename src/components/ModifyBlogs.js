import React, {useEffect, useState} from 'react';

const ModifyBlog = ({post,modifyPost,deletePost,updateLikes,index}) => {
    const [heading,setHeading] = useState("");
    const [desc,setdesc] = useState("");
    const [imageUrl,setimageUrl] = useState("");
    const [content,setContent] = useState("");
    const [postIndex,setPostIndex] = useState(null);
    const [editPost,setEditPost] = useState(false);
    return(
        <div className='modify-cont'>
            {!editPost && post.map((post,index) => {
                return(
                  <div className='post-cont' key={index}>
                    <div className='post-img-cont'>
                      <img className='post-img' src={post.imageUrl} />
                    </div>
                    <div className='post-data-cont'>
                      <div className='modify-post-upp'>
                        <div className='modify-upp-sec1'>
                            <p className='post-by'>{post.by}</p>
                            <p className='post-date'>{post.date} . {post.created}</p>
                        </div>
                        <div className='modify-upp-sec2'>
                            <div className='edit-butt' onClick={() => {
                                setHeading(post.title);
                                setdesc(post.desc);
                                setimageUrl(post.imageUrl);
                                setContent(post.content);
                                setEditPost(true);
                                setPostIndex(index)
                            }}>
                                <p>Edit</p>
                            </div>
                            <div className='delete-butt' onClick={() => deletePost(index)}>
                                <p>Delete</p>
                            </div>
                        </div>
                      </div>
                      <div className='post-mid'>
                        <p className='post-title'>{post.title}</p>
                        <p className='post-desc'>{post.desc}</p>
                      </div>
                      <div className='post-bottom'>
                        <p className='post-views'>{post.views} views</p>
                        <p className='post-comm'>{post.comment} comments</p>
                        <p className='post-like' onClick={() => { updateLikes(index) }}>{post.likes} Likes</p>
                      </div>
                    </div>
                  </div>
                )
            })}
            {editPost && 
                <div className='create-post-box'>
                    <p className='input-head-label'>Post Heading-</p>
                    <input value={heading} onChange={(e) => setHeading(e.target.value)} className='comment-input' placeholder='Write your Post Heading here...'/>
                    <p className='input-head-label'>Post Description-</p>
                    <input value={desc} onChange={(e) => setdesc(e.target.value)} className='comment-input' placeholder='Write your Post Description here...'/>
                    <p className='input-head-label'>Post Image Url-</p>
                    <input value={imageUrl} onChange={(e) => setimageUrl(e.target.value)} className='comment-input' placeholder='Write your Post ImageURL here...'/>
                    <p className='input-head-label'>Post Content-</p>
                    <input value={content} onChange={(e) => setContent(e.target.value)} className='comment-input' placeholder='Write your Post content here...'/>
                    <div className='modify-bottom-butt'>
                        <div className='cancel-modify-butt' onClick={() => setEditPost(false)}>
                            <p>Cancel</p>
                        </div>
                        <div
                            onClick={() => {
                                if(heading.length === 0 || desc.length === 0 || imageUrl.length === 0 || content.length === 0)
                                {
                                    alert("Please Fill all Feilds...")
                                }
                                else
                                {
                                    var post={
                                        heading,
                                        desc,
                                        imageUrl,
                                        content,
                                    }
                                    modifyPost(post,postIndex)
                                    setContent("");
                                    setHeading("");
                                    setdesc("");
                                    setimageUrl("");
                                    setPostIndex(null)
                                    setEditPost(false)
                                }
                            }} 
                            className='publish-butt' 
                            style={{backgroundColor:(heading.length > 0 &&  desc.length > 0 && imageUrl.length > 0 && content.length > 0)? "rgb(70, 98, 194)" : "grey"}}>
                            <p>Update</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ModifyBlog;