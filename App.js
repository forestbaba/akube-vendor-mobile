import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './app/screen/MenuList';
import SubProductList from './app/screen/SubMenuList';
import AddCategoryForm from './app/screen/AddCategoryForm';
import AddCategoryItemForm from './app/screen/AddCategoryItemForm';
import Login from './app/screen/Auth/Login';
import Signup from './app/screen/Auth/Signup';
import ForgotPassword from './app/screen/Auth/ForgotPassword';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Next')}><Text>Next</Text></TouchableOpacity>
    </View>
  );
}
function NextScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NextScreen </Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={ProductList} />
        <Stack.Screen name="subproduct" component={SubProductList} />
        <Stack.Screen name="addcategoryform" component={AddCategoryForm} />
        <Stack.Screen name="addcategoryitemform" component={AddCategoryItemForm} />
        <Stack.Screen name="Next" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;