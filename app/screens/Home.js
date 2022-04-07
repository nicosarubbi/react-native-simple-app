import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../components/Styles';


export default function Home({ route,  navigation }) {
  const { user } = route.params;

  let onUsernamePress = () => {
    navigation.navigate("PageUser", { user })
  }
  let onPressPost = () => {
    navigation.navigate("ListPosts", { user })
  } 

  let onPressAlbum = () => {
    navigation.navigate("ListAlbum", { user })
  } 

  return (
    <View style={styles.containerHome}>
      <Text style={styles.title} onPress={onUsernamePress}>Usuario: {user.username}</Text>
      
      <View style={styles.button}>
          <Button title="Post" onPress={onPressPost}/> 
      </View>

      <View style={styles.button}>
          <Button title="Album" onPress={onPressAlbum}/> 
      </View>
    </View>
  );
}


