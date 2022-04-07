import * as React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { styles } from '../components/Styles';
import { servicePut } from '../hooks/service';


export default function ModifyUser({ route,  navigation }) {
  const { user } = route.params;
  const [name, setName] = React.useState(user.name)
  const [street, setStreet] = React.useState(user.address.street)
  const [suite, setSuite] = React.useState(user.address.suite)
  const [city, setCity] = React.useState(user.address.city)
  const [phone, setPhone] = React.useState(user.phone)
  const [errorMessage, setErrorMessage] = React.useState("")

  let onPress = () => {
    // hacemos un PUT para modificar el usuario
    servicePut(`/users/${user.id}`, {name, phone, address: {street, suite, city}})
    .then((res) => {
        // y volvemos a la pagina anterior
        navigation.navigate("PageUser", {user})
    }).catch((e) => {
        // o mostramos un error
        setErrorMessage(e.message)
    })
  } 

  return (
    <View style={styles.containerHome}>
      <Text style={styles.title} >Usuario: {user.username}</Text>
      <Text style={styles.label}>Id:</Text>
      <Text style={styles.text2}>{user.id}</Text>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Nombre" />
      <Text style={styles.label}>Domicilio:</Text>
      <TextInput style={styles.input} onChangeText={setStreet} value={street} placeholder="calle" />
      <TextInput style={styles.input} onChangeText={setSuite} value={suite} placeholder="numero" />
      <TextInput style={styles.input} onChangeText={setCity} value={city} placeholder="ciudad" />

      <Text style={styles.label}>Telefono:</Text>
      <TextInput style={styles.input} onChangeText={setPhone} value={phone} placeholder="telefono" />
      
      <Text style={styles.error}> {errorMessage}</Text>
      <View style={styles.button}>
        <Button title="Guardar" onPress={onPress} />
      </View>
    </View>
  );
}


