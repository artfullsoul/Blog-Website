import {UPDATE_POSTDATA,LOADING} from "../actions/types";
const initialState = {
    blogsData:[
        {
            by:"admin",
            date:"Dec 15, 2021",
            created:"1 min",
            imageUrl:"https://static.wixstatic.com/media/e32fd518921d4fc2a430ff518109eccd.png/v1/fill/w_460,h_345,fp_0.50_0.50,q_90,enc_auto/e32fd518921d4fc2a430ff518109eccd.webp",
            title:"Features of React",
            desc:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
            content:"Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content. Blogging gives your site a voice, so let your business’ personality shine through. Choose a great image to feature in your post or add a video for extra engagement. Are you ready to get started? Simply create a new post now. ",
            views:0,
            comment:0,
            commentData:[],
            likes:0
        },
        {
            by:"admin",
            date:"Dec 15, 2021",
            created:"1 min",
            imageUrl:"https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_460,h_345,fp_0.50_0.50,q_90,enc_auto/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
            title:"3.js as an Emmerging Feild in Web.",
            desc:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
            content:"Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content. Blogging gives your site a voice, so let your business’ personality shine through. Choose a great image to feature in your post or add a video for extra engagement. Are you ready to get started? Simply create a new post now. ",
            views:0,
            comment:0,
            commentData:[],
            likes:0
        },
        {
            by:"admin",
            date:"Dec 15, 2021",
            created:"1 min",
            imageUrl:"https://static.wixstatic.com/media/84bcc4ac73e5416fb9b9aa9231ccabaf.jpg/v1/fill/w_460,h_345,fp_0.50_0.50,q_90,enc_auto/84bcc4ac73e5416fb9b9aa9231ccabaf.webp",
            title:"Metaverse in Trens.",
            desc:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
            content:"Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content. Blogging gives your site a voice, so let your business’ personality shine through. Choose a great image to feature in your post or add a video for extra engagement. Are you ready to get started? Simply create a new post now. ",
            views:0,
            comment:0,
            commentData:[],
            likes:0
        },
        {
            by:"admin",
            date:"Dec 15, 2021",
            created:"1 min",
            imageUrl:"https://static.wixstatic.com/media/84770f_4177efdaeb1849cd90e492cfdb8709dc~mv2_d_7360_4912_s_4_2.jpg/v1/fill/w_460,h_345,fp_0.50_0.50,q_90,enc_auto/84770f_4177efdaeb1849cd90e492cfdb8709dc~mv2_d_7360_4912_s_4_2.webp",
            title:"React Native for Android and IOS Development.",
            desc:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
            content:"Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content. Blogging gives your site a voice, so let your business’ personality shine through. Choose a great image to feature in your post or add a video for extra engagement. Are you ready to get started? Simply create a new post now. ",
            views:0,
            comment:0,
            commentData:[],
            likes:0
        },
        {
            by:"admin",
            date:"Dec 15, 2021",
            created:"1 min",
            imageUrl:"https://static.wixstatic.com/media/84770f_4177efdaeb1849cd90e492cfdb8709dc~mv2_d_7360_4912_s_4_2.jpg/v1/fill/w_460,h_345,fp_0.50_0.50,q_90,enc_auto/84770f_4177efdaeb1849cd90e492cfdb8709dc~mv2_d_7360_4912_s_4_2.webp",
            title:"Why MERN Stack?",
            desc:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
            content:"Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content. Blogging gives your site a voice, so let your business’ personality shine through. Choose a great image to feature in your post or add a video for extra engagement. Are you ready to get started? Simply create a new post now. ",
            views:0,
            comment:0,
            commentData:[],
            likes:0
        }
    ],
    userReviews:[],
    loading: false
}


export default function (state = initialState, action)
{
    switch(action.type)
    {
        case UPDATE_POSTDATA:
        {
            console.log(`update review reducer called`)
            return{
                ...state,
                blogsData:action.payload.blogsData,
                loading:false
            }
        }
        case LOADING:
            return{
                ...state,
                loading:true
            } 
        default:
            return state;
    }
}