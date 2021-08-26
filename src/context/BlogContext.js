import createDataContext from "./createDataContext";




// const BlogContext = React.createContext();

const BlogReducer = ( state , action ) => {

    switch (action.type){
        case 'add_blogPost':
            return [...state , { title: `Blog Post ${ state.length + 1}`}];    
            default:
                return state;
    }
    // const addBlogPost = () => {
    //     SetBlogPosts( [...blogPosts , { title: `Blog Post ${ blogPosts.length + 1}`}]);
    // }

}


    const addBlogPost = () => {
        disptch({ type: 'add_blogPost' });
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
    { addBlogPost },
    []
);