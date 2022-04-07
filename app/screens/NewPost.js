import * as React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { styles } from '../components/Styles';
import { servicePost } from '../hooks/service';


export default function NewPost({ route,  navigation }) {
  const { user } = route.params;
  const [title, setTitle] = React.useState("")
  const [body, setBody] = React.useState("")

  const [errorMessage, setErrorMessage] = React.useState("")

  let onPress = () => {
    // hacemos un POST para crear un nuevo objeto
    servicePost(`/posts`, {
        "userId": user.id,
        "title": title,
        "body": body,
    })
    .then((res) => {
        // y volvemos a la pagina anterior
        navigation.navigate("ListPosts", {user})
    }).catch((e) => {
        // o mostramos un error
        setErrorMessage(e.message)
    })
  } 

  return (
    <View style={styles.containerHome}>
      <Text style={styles.label}>Autor: {user.name}</Text>
      <Text style={styles.label}>Title:</Text>
      <TextInput style={styles.input} onChangeText={setTitle} value={title} placeholder="Titulo" />
      <Text style={styles.label}>Contenido:</Text>
      <TextInput style={styles.input} onChangeText={setBody} value={body} placeholder="Contenido" />
      
      <Text style={styles.error}> {errorMessage}</Text>
      <View style={styles.button}>
        <Button title="Guardar" onPress={onPress} />
      </View>
    </View>
  );
}


