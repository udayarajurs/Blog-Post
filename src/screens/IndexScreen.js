import React , { useContext } from 'react';
import { StyleSheet , View ,  Text , FlatList , Button } from 'react-native';
import BlogContext from '../context/BlogContext';


const IndexScreen = () => {
    const { data , addBlogPost } = useContext (BlogContext)
    return(
        <View>
            <Text>HI thare.....</Text>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList 
                data={data}
                keyExtractor={ BlogPost => BlogPost.title }
                renderItem={ ({item}) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    );
};

const style = StyleSheet.create({});

export default IndexScreen;