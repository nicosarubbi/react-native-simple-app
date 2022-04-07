import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import ModalScreen from './screens/ModalScreen';
// import NotFoundScreen from './screens/NotFoundScreen';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import PageUser from './screens/PageUser';
import ListPosts from './screens/ListPosts';
import PageComment from './screens/PageComment';
import ListAlbum from './screens/ListAlbum';
import PagePhoto from './screens/PagePhoto';
import ModifyUser from './screens/ModifyUser';
import NewPost from './screens/NewPost';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page1">
        <Stack.Screen name="Page1" component={Page1} options={{ title:'Legajo 126998' }} />  
        <Stack.Screen name="Page2" component={Page2} options={{ title:'Page 2' }} />
        <Stack.Screen name="ListPosts" component={ListPosts} options={{ title:'Posts' }} />
        <Stack.Screen name="PageUser" component={PageUser} options={{ title:'Usuario' }} />
        <Stack.Screen name="PageComment" component={PageComment} options={{ title:'Comentario' }} />
        <Stack.Screen name="ListAlbum" component={ListAlbum} options={{ title:'Album' }} />
        <Stack.Screen name="PagePhoto" component={PagePhoto} options={{ title:'Fotos' }} />
        <Stack.Screen name="ModifyUser" component={ModifyUser} options={{ title:'Modificar' }} />
        <Stack.Screen name="NewPost" component={NewPost} options={{ title:'Nuevo Post' }} />
        
        {/* add component pages here */}

        {/* <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title:'Not Found' }}/>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
         */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
}
