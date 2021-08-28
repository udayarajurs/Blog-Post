import React , { useContext, useState } from 'react';
import { Text , View , StyleSheet , Button , TextInput } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreens = ( { navigation }) => {
    const [ title , setTitle ] = useState('');
    const [ content , setContent ] = useState('');
    const { addBlogPost } = useContext(Context);

    return <View>
        <Text style={Styles.lable} >Enter Title:</Text>
        <TextInput style={Styles.input} value={title} onChangeText={ (text) => setTitle(text)} />
        <Text style={Styles.lable} >Enter Content:</Text>
        <TextInput style={Styles.input} value={content} onChangeText={ (text) => setContent(text)} />
        <Button
        onPress={ () => addBlogPost ( title , content , () => {
            navigation.navigate('Index')
        })} 
        title="Add Blog Post" 
        />
    </View>
};

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

export default CreateScreens;