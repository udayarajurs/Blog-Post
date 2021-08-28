import React , { useContext } from 'react';
import { Text , View , StyleSheet , TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const ShowScreens = ( { navigation }) => {
    const { state } = useContext(Context)
    const blogPost = state.find(
         blogPost => blogPost.id === navigation.getParam('id')
         );

    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
};



ShowScreens.navigationOptions = ( { navigation }) => {

    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit' , { id: navigation.getParam('id')}) }>
             <EvilIcons style={Styles.icon} name="pencil" size={35} />
          </TouchableOpacity>
        )
      };

}






const Styles = StyleSheet.create({
    icon: {
        marginRight: 10
    }
});

export default ShowScreens;