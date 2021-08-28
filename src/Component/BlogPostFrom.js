import React , { useState } from 'react';
import { Text , View , StyleSheet , Button , TextInput } from 'react-native';


const BlogPostFrom = ( { onSubmit , initialValues }) => {

    const [ title , setTitle ] = useState(initialValues.title);
    const [ content , setContent ] = useState(initialValues.content);

    return <View>
        <Text style={Styles.lable} >Enter Title:</Text>
        <TextInput style={Styles.input} value={title} onChangeText={ (text) => setTitle(text)} />
        <Text style={Styles.lable} >Enter Content:</Text>
        <TextInput style={Styles.input} value={content} onChangeText={ (text) => setContent(text)} />
        <Button 
        title="Save Blog Post" 
        onPress={ () => onSubmit( title , content )}
          />
    </View>
};

BlogPostFrom.defaultProps = {
    initialValues:{
        title: '',
        content: ''
    }
}

const Styles = StyleSheet.create({
    input:{
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 5,
        margin: 5,
        padding: 5
    },
    lable: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlogPostFrom;