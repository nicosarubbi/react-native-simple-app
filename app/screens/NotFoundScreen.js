import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from '../components/Styles';

export default function NotFoundScreen({ route,  navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}
