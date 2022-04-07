import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../components/Styles';


export default function PageUser({ route,  navigation }) {
  const { user } = route.params;

  let onPress = () => {
    navigation.navigate("ModifyUser", { user })
  } 

  return (
    <View style={styles.containerHome}>
      <Text style={styles.title} >Usuario: {user.username}</Text>
      <Text style={styles.label}>Id:</Text>
      <Text style={styles.text2}>{user.id}</Text>
      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.text2}>{user.name}</Text>
      <Text style={styles.label}>Domicilio:</Text>
      <Text style={styles.text2}>{user.address.street}, {user.address.suite}</Text>
      <Text style={styles.label}>Ciudad:</Text>
      <Text style={styles.text2}>{user.address.city}, {user.address.zipcode}</Text>
      <Text style={styles.label}>Telefono:</Text>
      <Text style={styles.text2}>{user.phone}</Text>
      <Text style={styles.label}>website:</Text>
      <Text style={styles.text2}>{user.website}</Text>
      
      <View style={styles.button}>
        <Button title="Modificar" onPress={onPress} />
      </View>
    </View>
  );
}


