import React, { useContext } from 'react';
import {  StyleSheet } from 'react-native';
import BlogPostFrom from '../Component/BlogPostFrom';
import { Context } from '../context/BlogContext';

const EditScreen = ( { navigation }) => {
   const { state } = useContext(Context);

   const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
   );

    return <BlogPostFrom 
        initialValues={{ title: blogPost.title , content: blogPost.content}}
        onSubmit={(title , content) => {
            console.log(title , content);
        }}
    
    />
};

const Styles = StyleSheet.create({});

export default EditScreen;