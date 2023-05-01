import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  SafeAreaView
} from 'react-native';
import Colors from '../../Contants/colors';
import Buttons from '../../Components/Buttons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './VerifyOtpStyle';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const VerifyOtp = ({
  route: {
    params: { mobile },
  },
}) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();
  const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' });
  const votp = (otp[1] + otp[2] + otp[3] + otp[4] + otp[5] + otp[6])
  const [confirmData, setConfirmData] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    sendOtp();
  }, []);

  const sendOtp = async () => {
    try {
      const response = await auth().signInWithPhoneNumber(mobile);
      console.log(response)
      setConfirmData(response);
    } catch (err) {
      alert(err);
    }
  };
  const submitOtp = async () => {
    try {
      const response = await confirmData.confirm(votp);
      navigation.navigate('Dashboard');
    } catch (err) {
      alert('Sorry,The OTP is Incorrect');
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.BACKGROUND_COLOR}
      />
      <SafeAreaView style={styles.headerWrapper}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>OTP Verification</Text>
          </View>
          <View style={{ width: 20 }} />
        </View>
        <View style={styles.img}>
          <Image
            source={require('../../../assets/Verified.png')}
            style={styles.imgmain}
          />

        </View>
      </SafeAreaView>
      <KeyboardAwareScrollView>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.content}>
          Enter the OTP number just sent you at :{mobile}
        </Text>
        <Text style={styles.phoneNumberText}
        />
        <View style={styles.otpContainer}>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              onChangeText={text => {
                setOtp({ ...otp, 1: text });
                text && secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
              onChangeText={text => {
                setOtp({ ...otp, 2: text });
                text ? thirdInput.current.focus() : firstInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
              onChangeText={text => {
                setOtp({ ...otp, 3: text });
                text ? fourthInput.current.focus() : secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              onChangeText={text => {
                setOtp({ ...otp, 4: text });
                text ? fifthInput.current.focus() : thirdInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fifthInput}
              onChangeText={text => {
                setOtp({ ...otp, 5: text });
                text ? sixthInput.current.focus() : fourthInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={sixthInput}
              onChangeText={text => {
                setOtp({ ...otp, 6: text });
                !text && fifthInput.current.focus();
              }}
            />
          </View>
        </View>
        <View >
          <Text onPress={()=>sendOtp()} style={styles.resendtext}>Resend Code?</Text>
        </View>
        <View
          style={styles.btnmain}>
          <Buttons
            btn_text="Verify"
            on_press={() => submitOtp()}
            style={styles.btnstyle}
          >
          </Buttons>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default VerifyOtp


