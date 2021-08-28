import createDataContext from "./createDataContext";




// const BlogContext = React.createContext();

const BlogReducer = ( state , action ) => {

    switch (action.type){
        case 'edit_blogpost':
            return state.map( (blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost ;
            })
        case 'delect_blogPost':
            return state.filter( (blogPost) => blogPost.id !== action.payload)
        case 'add_blogPost':
            return [...state , {
                 id: Math.floor(Math.random() * 9999),
                 title: action.payload.title,
                 content: action.payload.content,
            }
                ];    
            default:
                return state;
    }
    // const addBlogPost = () => {
    //     SetBlogPosts( [...blogPosts , { title: `Blog Post ${ blogPosts.length + 1}`}]);
    // }

}


    const addBlogPost = disptch => {
        return ( title , content  , callBack ) => {
            disptch({ type: 'add_blogPost' , payload: { title , content }});
            callBack();
        }
        if(callBack){
            callBack();
        }
    };

    const delectBlogPost = disptch => {
        return (id) => {
            disptch ({ type: 'delect_blogPost' , payload: id });
        };
    };

    const editBlogPost = disptch => {
        return( id, title , content , callBack ) => {
            disptch({ 
                type: 'edit_blogpost',
                payload: { id , title , content } 
            }); 

                if(callBack){
                    callBack();
                }    
        };

    };

// const BlogPosts = [
//     { title : 'Blog Post #1' },
//     { title : 'Blog Post #2' }
// ];

// export const BlogProvider = ( { children } ) => {

//     const [ blogPosts , disptch ] = useReducer( BlogReducer , [] );

//     const addBlogPost = () => {
//         disptch({ type: 'add_blogPost' });
//     };

    
//     return <BlogContext.Provider value={{ data: blogPosts , addBlogPost }}>
//         {children}
//     </BlogContext.Provider>;
// };

export const { Context , Provider } = createDataContext(
    BlogReducer ,
    { addBlogPost , delectBlogPost , editBlogPost },
    [ { title: 'TEST POST ' , content: 'TEST CONTENT' , id: 1}] // demo data for tesing 
);