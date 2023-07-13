import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Details from './src/screens/Details';
import {ProductProvider} from './src/contexts/ProductContext';
import ImagePicker from './src/screens/ImagePicker';

const Stack = createNativeStackNavigator();

const App = () => {
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
          <Stack.Screen name="ImagePicker" component={ImagePicker} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
};

export default App;
