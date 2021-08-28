import React, { useContext } from 'react';
import {  StyleSheet } from 'react-native';
import BlogPostFrom from '../Component/BlogPostFrom';
import { Context } from '../context/BlogContext';

const EditScreen = ( { navigation }) => {
   const { state , editBlogPost } = useContext(Context);
   const id = navigation.getParam('id');
   const blogPost = state.find(
   blogPost => blogPost.id === id
   );

    return <BlogPostFrom 
        initialValues={{ title: blogPost.title , content: blogPost.content}}
        onSubmit={(title , content) => {
            editBlogPost(id, title , content , () => navigation.pop());
        }}
    />
};

const Styles = StyleSheet.create({});

export default EditScreen;