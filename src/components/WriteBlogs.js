import React, {useEffect, useState} from 'react';
import UserIcon from "../assets/usericon.png";
const WriteBlogs = ({publishPost}) => {
    const [heading,setHeading] = useState("");
    const [desc,setdesc] = useState("");
    const [imageUrl,setimageUrl] = useState("");
    const [content,setContent] = useState("");
    const [personName,setPersonName] = useState("");
    return(
        <div>
            <div className='create-post-box'>
                <p className='input-head-label'>Your Name-</p>
                <input value={personName} style={{width:"50%",marginTop:"1vw"}} onChange={(e) => setPersonName(e.target.value)} className='comment-input' placeholder='Mention your name...'/>
                <p className='input-head-label'>Post Heading-</p>
                <input value={heading} onChange={(e) => setHeading(e.target.value)} className='comment-input' placeholder='Write your Post Heading here...'/>
                <p className='input-head-label'>Post Description-</p>
                <input value={desc} onChange={(e) => setdesc(e.target.value)} className='comment-input' placeholder='Write your Post Description here...'/>
                <p className='input-head-label'>Post Image Url-</p>
                <input value={imageUrl} onChange={(e) => setimageUrl(e.target.value)} className='comment-input' placeholder='Write your Post ImageURL here...'/>
                <p className='input-head-label'>Post Content-</p>
                <input value={content} onChange={(e) => setContent(e.target.value)} className='comment-input' placeholder='Write your Post content here...'/>
                <div
                    onClick={() => {
                        if(personName.length === 0 || heading.length === 0 || desc.length === 0 || imageUrl.length === 0 || content.length === 0)
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
                                personName
                            }
                            publishPost(post)
                            setContent("");
                            setPersonName('');
                            setHeading("");
                            setdesc("");
                            setimageUrl("");
                        }
                    }} 
                    className='publish-butt' 
                    style={{backgroundColor:(heading.length > 0 && personName.length > 0 && desc.length > 0 && imageUrl.length > 0 && content.length > 0)? "rgb(70, 98, 194)" : "grey"}}>
                    <p>Publish</p>
                </div>
            </div>
        </div>
    )
}

export default WriteBlogs;