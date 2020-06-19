import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogpost':
      return action.payload

    case 'edit_blogpost':
      return state.map((blogPost)=>{
        if (blogPost.id === action.payload.id){
          return action.payload
        } else {
          return blogPost
        }

        /*return blogPost.id === action.payload.id
          ? action.payload
          : return blogPost*/
      })

    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload)

    /*case 'add_blogpost':
      return [
        ...state, 
        {
          id: Math.floor(Math.random() * 9999), 
          title: action.payload.title,
          content: action.payload.content,
        }];*/
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogpost', {title, content})
    
    //dispatch({ type: 'add_blogpost', payload: { title, content} });
    if (callback){
      callback()
    } 
  };
};
const deleteBlogPost = dispatch =>{
  return async (id)=>{
    await jsonServer.delete(`/blogpost${id}`)
    dispatch({type:'delete_blogpost', payload: id})
  }
}
const editBlogPost = dispatch =>{
  return async (id, title, content, callback)=>{
    await jsonServer.put(`/blogpost/${id}`, {title, content})
    
    dispatch({
      type: 'edit_blogpost',
      payload: {id, title, content}
    })
    if (callback){
      callback()
    }  
  }
}

const getBlogPost = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogpost');

    dispatch({ type: 'get_blogpost', payload: response.data });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost, getBlogPost},
  []
  //[{title:'TEST TITLE', content:'TESTE CONTENT', id:1}]
);