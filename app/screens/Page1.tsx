import * as React from 'react';
import { Text, View, Button, TextInput, CheckBox } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import { styles } from '../components/Styles';
import { serviceGet } from '../hooks/service';
import { getData, storeData } from '../hooks/useCachedResources';


export default function Page1({ route,  navigation }) {
  let params = route.params;

  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [rememberme, setRememberme] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")

  React.useEffect(() => {
    getData('rememberUser', {})
    .then((data) => {
      if (data && data.username) {
        setRememberme(true)
        setUsername(data.username)
        setPassword(data.password)
      }
    })
  }, [])

  let validatePassword = (user) => {
    return user.email == password
  }

  let onPressOk = () => {
    serviceGet(`/users?username=${username}`)
    .then((res) => {
      let user = res.data[0]
      if (user && validatePassword(user)) {
        if (rememberme) {
          storeData('rememberUser', {"username": username, "password": password})
        } else {
          storeData('rememberUser', {})
        }
        navigation.navigate("Page2", {user})
      } else {
        setErrorMessage("usuario o contraseña inválido")
      }
    })
    .catch((error) => setErrorMessage(error))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>User Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="ingrese el nombre de usuario"
      />
      <Text style={styles.label}>Password </Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
      />
    
      <Text style={styles.error}> {errorMessage}</Text>
      <View style={styles.button}>
        <Button title="Aceptar" onPress={onPressOk} />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox style={styles.checkbox} value={rememberme} onValueChange={setRememberme} /><p>Recordarme</p>
      </View>
      
      <View style={styles.separator} />
    </View>
);
}

