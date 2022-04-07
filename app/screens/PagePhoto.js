import * as React from 'react';
import { Text, View, TouchableOpacity, FlatList , Image} from 'react-native';
import { serviceGet } from '../hooks/service';
import { styles } from '../components/Styles';


export default function PagePhoto({ route }) {
    const { item } = route.params;
    const [errorMessage, setErrorMessage] = React.useState("")
    const [items, setItems]  = React.useState([])
  
    React.useEffect(() => {
        serviceGet(`/photos?albumId=${item.id}`)   // filter items here:  serviceGet(`/comments`) 
        .then((res) => {
            console.log("response: ", res)
            // filter items here:
            // setComments(res.data.filter(item => item.userId != user.id))
            setItems(res.data)
        })
        .catch((e) => {
            setItems([])
            setErrorMessage(e.message)
        })
    }, [])
  
    console.log("Photos: : ", items)
    return (
        <View style={styles.container}>
            <View style={styles.containerPost}>
                <Text style={styles.title}>Album = {item.title}</Text>
                <Text style={styles.error}>{errorMessage}</Text>
                <FlatList data={items} renderItem={({item}) => (
                    <View style={styles.containerBlue}>
                        <Text style={styles.textBlue}>Title = {item.title}</Text>
                        <Image source={{uri: item.url}}      
                            style={styles.tinyLogo}
                        />
                    </View>
                )} />
            </View>
        </View>
  );
}
