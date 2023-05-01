import React, { useEffect } from 'react';
import Auth from '@react-native-firebase/auth';
import { StackActions, useNavigation } from '@react-navigation/native';
import { Image, View, Text,StatusBar } from 'react-native';
import styles from './SplashScreenStyles';
import colors from '../../Contants/colors';
const Splash = () => {
  const navigation = useNavigation();
     useEffect(() => {
        setTimeout(() => {
            Auth().onAuthStateChanged(user => {
                const routeName = user !== null ? 'Dashboard' : 'OnBoarding';
                navigation.dispatch(StackActions.replace(routeName));
            });
        }, 3000);
        return () => { };
    }, []);
  return (
    
    <View
    
      // Adding static style for the splash screen
      style={styles.container}>
 
      {/* Adding status bar for the Splash Sceen */}
      {/* This is the main Logo Image */}
      <Image
        source={require('../../../assets/check.png')}
        style={styles.img}
      />
          <StatusBar
        barStyle="light-content"
        hidden={true}
      />
      {/* Company Tag or Product Name */}
      <Text
        style={styles.text}>
        Expense Manager
      </Text>
    </View>
  );
};
// Exporting the main class Splash
export default Splash;
