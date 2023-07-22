import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Details from './src/screens/Details';
import ImagePicker from './src/screens/ImagePicker';

import {ProductProvider} from './src/contexts/ProductContext';

import { LogBox } from 'react-native'; 

const Stack = createNativeStackNavigator();

const App = () => {
  
  useEffect(() => {
    LogBox.ignoreAllLogs(true)
  }, [])
 
  return (
    <ProductProvider>
      <NavigationContainer initialRouteName="Home">
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen
            name="ImagePicker"
            component={ImagePicker}
            options={{title: 'Image Picker'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
};

export default App;
