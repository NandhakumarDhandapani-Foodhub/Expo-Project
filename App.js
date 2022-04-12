import Login from './src/Components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Show from './src/Components/Show';
import { Store } from './src/Store/Store';
import { Provider } from 'react-redux';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store= {Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Show' component={Show} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;