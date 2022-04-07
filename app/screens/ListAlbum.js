import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { serviceGet } from '../hooks/service';
import { styles } from '../components/Styles';


export default function ListAlbum({ route,  navigation }) {
    const { user } = route.params;
  
    const [errorMessage, setErrorMessage] = React.useState("")
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        serviceGet(`/albums?userId=${user.id}`)   // filter items here:  serviceGet(`/posts`) 
        .then((res) => {
            // console.log("response: ", res)
            // filter items here:
            // setItems(res.data.filter(item => item.userId != user.id))
            setItems(res.data)
        })
        .catch((e) => {
            setItems([])
            setErrorMessage(e.message)
        })
    }, [])
  
    const onPressItem = (item) => {
        navigation.navigate("PagePhoto", {item})
    }

    console.log("items: ", items)
    return (
        <View style={styles.container}>
            <View style={styles.containerPost}>
                <Text style={styles.error}>{errorMessage}</Text>
                <FlatList data={items} renderItem={({item}) => (
                    <View  style={styles.containerBlue}>
                        <Text style={styles.textBlue} onPress={() => onPressItem(item)} >{item.title}</Text>
                    </View>
                )} />
            </View>
        </View>
    );
}