import * as React from 'react';
import { Text, Button, View, FlatList} from 'react-native';

import { serviceGet } from '../hooks/service';
import { styles } from '../components/Styles';


export default function ListPosts({ route,  navigation }) {
    const { user } = route.params;
  
    const [errorMessage, setErrorMessage] = React.useState("")
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        // serviceGet(`/posts`)
        serviceGet(`/posts?userId=${user.id}`)   // filter items here
        .then((res) => {
            //console.log("response: ", res)
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
        navigation.navigate("PageComment", {item})
    }

    const onPressNew = () => {
        navigation.navigate("NewPost", { user })
    }

    console.log("items: ", items)
    return (
        <View style={styles.container}>
            <View style={styles.containerPost}>
                <Text style={styles.error}>{errorMessage}</Text>
                <FlatList data={items} renderItem={({item}) => (
                    <View style={styles.containerBlue}>
                        <Text style={styles. textBlue} onPress={() => onPressItem(item)}>{item.title}</Text>
                    </View>
                )} />
            </View>
            <View style={styles.button}>
                <Button title="Nuevo" onPress={onPressNew} />
            </View>
        </View>
    );
}
