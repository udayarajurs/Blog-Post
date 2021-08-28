import React , { useContext, useState } from 'react';
import { Text , View , StyleSheet , Button , TextInput } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostFrom from '../Component/BlogPostFrom';

const CreateScreens = ( { navigation }) => {
    const { addBlogPost } = useContext(Context);

    return <BlogPostFrom onSubmit={ ( title , content ) => {
        addBlogPost( title , content , () => {
            navigation.navigate('Index');
        })
    }}/>
};

const Styles = StyleSheet.create({});

export default CreateScreens;