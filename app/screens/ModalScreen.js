import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { styles } from '../components/Styles';


export default function ModalScreen({ route,  navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} />

      <StatusBar style={'auto'} />
    </View>
  );
}
