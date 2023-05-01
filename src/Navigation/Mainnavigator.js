import React from 'react';
import { Text, View, Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../Views/SplashScreen/splashscreen';
import VerifyOtp from '../Views/VerifyOtp/VerifyOtp';
import OnBoarding from '../Views/OnBoarding/OnBoarding';
import Login from '../Views/Login/Login';
import Dashboard from '../Views/Dashboard/Dashboard';
import Addcategory from '../Views/AddCategory/Addcategory';
import Allcategory from '../Views/Allcategory/Allcategory';
import Update from '../Views/Update/Update';
import Transaction from '../Views/Transaction/Transaction';
const Mainnavigator = () => {
    const Stack = createStackNavigator();
    // Main function to initiate the application
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="VerifyOtp" component={VerifyOtp} options={{ headerShown: false }} />
                <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown:false}} />
                <Stack.Screen name="Allcat" component={Allcategory} options={{ headerShown:false,}} />
                <Stack.Screen name="AddCategory" component={Addcategory} options={{ headerShown:false,}} />
                <Stack.Screen name="Update" component={Update} options={{headerShown:false,}} />
                <Stack.Screen name="Transaction" component={Transaction} options={{ headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
// exporting default App;
export default Mainnavigator;
