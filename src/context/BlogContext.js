import React , { useState } from 'react';

const BlogContext = React.createContext();





// const BlogPosts = [
//     { title : 'Blog Post #1' },
//     { title : 'Blog Post #2' }
// ];

export const BlogProvider = ( { children } ) => {

    const [ blogPosts , SetBlogPosts ] = useState([]);

    const addBlogPost = () => {
        SetBlogPosts( [...blogPosts , { title: `Blog Post ${ blogPosts.length + 1}`}]);
    }
    
    return <BlogContext.Provider value={{ data: blogPosts , addBlogPost }}>
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;