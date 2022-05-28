import { 
  UPDATE_POSTDATA,
  LOADING
} from "./types";

export const updatePostData = (blogsData) => async dispatch =>{
  dispatch(setLoading());
  console.log("Update cart action Called ");
  await dispatch({
    type:UPDATE_POSTDATA , 
    payload:
    {
      blogsData
    }})
}
export const setLoading = () => {
  return{
      type: LOADING
  }
}