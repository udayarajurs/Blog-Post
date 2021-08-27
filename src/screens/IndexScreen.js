import React , { useContext } from 'react';
import { StyleSheet , View ,  Text , FlatList , Button , TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'; 


const IndexScreen = () => {
    const { state , addBlogPost } = useContext (Context)
    return(
        <View  style={styles.fullLayout}>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList 
                data={state}
                keyExtractor={ BlogPost => BlogPost.title }
                renderItem={ ({item}) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={ () => console.log(item.id)}>
                            <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>
                        </View>
                     
                    ); 
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10
    },
    title : {
        fontSize: 18
    },
    icon : {
        fontSize: 24
    },
    fullLayout:{
        flex: 1
    }

});

export default IndexScreen;