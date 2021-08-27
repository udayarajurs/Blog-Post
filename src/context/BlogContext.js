import createDataContext from "./createDataContext";




// const BlogContext = React.createContext();

const BlogReducer = ( state , action ) => {

    switch (action.type){
        case 'delect_blogPost':
            return state.filter( (blogPost) => blogPost.id !== action.payload)
        case 'add_blogPost':
            return [...state , {
                 id: Math.floor(Math.random() * 9999),
                 title: `Blog Post ${ state.length + 1}`}
                ];    
            default:
                return state;
    }
    // const addBlogPost = () => {
    //     SetBlogPosts( [...blogPosts , { title: `Blog Post ${ blogPosts.length + 1}`}]);
    // }

}


    const addBlogPost = disptch => {
        return () => {
            disptch({ type: 'add_blogPost' });
        }
    };

    const delectBlogPost = disptch => {
        return (id) => {
            disptch ({ type: 'delect_blogPost' , payload: id });
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
    { addBlogPost , delectBlogPost },
    []
);