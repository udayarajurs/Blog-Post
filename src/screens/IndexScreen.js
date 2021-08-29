import React , { useContext, useEffect } from 'react';
import { StyleSheet , View ,  Text , FlatList , Button , TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'; 


const IndexScreen = ( { navigation } ) => {
    const { state , delectBlogPost , getBlogPost } = useContext (Context)

    useEffect( () => {
        getBlogPost();

        const listener = navigation.addListener('didFocus' , () => {
            getBlogPost();
        });

        return () => {
            listener.remove();
        };
        
    }, [])

    return(
        <View  style={styles.fullLayout}>
            <FlatList 
                data={state}
                keyExtractor={ BlogPost => BlogPost.title }
                renderItem={ ({item}) => {
                    return (
                        <TouchableOpacity onPress={ () => navigation.navigate('Show' , { id: item.id })}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={ () => delectBlogPost(item.id)}>
                            <Feather style={styles.icon} name="trash"  />
                            </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                     
                    ); 
                }}
            />
        </View>
    );
};
IndexScreen.navigationOptions = ( { navigation }) => {

    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather style={styles.iconTwo} name="plus" size={30} />
          </TouchableOpacity>
        )
      };

}

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
    },
    iconTwo : {
        marginRight: 10
    }

});

export default IndexScreen;