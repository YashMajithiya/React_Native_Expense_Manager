import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView
} from 'react-native';
import { TextInput, } from '@react-native-material/core';
import Buttons from '../../Components/Buttons';
import colors from '../../Contants/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './LoginStyles';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [mobileNo, setMobileNo] = useState('');
  const navigation = useNavigation();
  const verify = () => {
    if (mobileNo != "") {
      if(mobileNo.length>9){
      const mobile = '+91' + mobileNo;
      console.log(mobile)
      navigation.navigate('VerifyOtp', { mobile })
      alert("Kindly Share the OTP")
    }else{
      alert("kindly check entered Mobile Number it's not in Correct Format")}
  }
    else {
      alert("Please Enter Mobile Number")
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={colors.BACKGROUND_COLOR}
      />
      <SafeAreaView style={styles.headerWrapper}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>Send Code</Text>
          </View>
          <View style={styles.imgcontainer} />
        </View>
        <View style={styles.img}>
          <Image
            source={require('../../../assets/Payment.png')}
            style={styles.imgstyle}
          />
        </View>
      </SafeAreaView>
        <View  >
          <TextInput variant="outlined" placeholder='Please Enter Phone Number'
            style={styles.mobilenoinput}
            keyboardType='number-pad'
            maxLength={10}
            onChangeText={value => setMobileNo(value)}
          />
          </View>
          <View
            style={styles.btnmainview}>
            <Buttons
              btn_text="Submit"
              on_press={() => verify()}
              style={styles.btnview}
            />
          </View>
    </View>
  );
};
