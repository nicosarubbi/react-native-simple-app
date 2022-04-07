import * as React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { serviceGet } from '../hooks/service';
import { styles } from '../components/Styles';


export default function PageComment({ route }) {
  const { item } = route.params;
  const [errorMessage, setErrorMessage] = React.useState("")
  const [comments, setComments] = React.useState([])
  
  React.useEffect(() => {
    serviceGet(`/comments?postId=${item.id}`)   // filter items here:  serviceGet(`/comments`) 
    .then((res) => {
        console.log("response: ", res)
        // filter items here:
        // setComments(res.data.filter(item => item.userId != user.id))
        setComments(res.data)
    })
    .catch((e) => {
        setComments([])
        setErrorMessage(e.message)
    })
}, [])
  
console.log("Comments: : ", comments)
  return (
        <View style={styles.container}>
            <View style={styles.containerPost}>
                <Text style={styles.title}>Post = {item.title}</Text>
                <Text style={styles.error}>{errorMessage}</Text>
                <FlatList data={comments} renderItem={({item}) => (
                    <View style={styles.containerBlue}>
                        <Text style={styles.textBlue}>Name = {item.name}</Text>
                        <Text style={styles.textBlue}>email = {item.email}</Text>
                        <Text style={styles.textBlue}>Body = {item.body}</Text>
                    </View>
                 )} />
            </View>
        </View>
  );
}
