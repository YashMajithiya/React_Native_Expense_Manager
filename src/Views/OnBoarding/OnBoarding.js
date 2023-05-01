import React from 'react';
import { useState } from 'react';
import {
  StatusBar,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import Buttons from '../../Components/Buttons';
import colors from '../../Contants/colors';
import styles from './OnBoardingstyle';

const OnBoarding = ({ navigation }) => {
  return (
    <View
      style={styles.container}>
      {/* Adding status bar for the On Boarding Sceen */}
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={colors.BACKGROUND_COLOR}
      />
      {/* Shows the Image on On Boarding Screen */}
      <View
        style={styles.vimg}>
        <ImageBackground
          source={require('../../../assets/expense.png')}
          style={styles.imgconatiner}
        />
      </View>
      <View
        style={styles.img}>
        {/* Another Class for text and tagline of product */}
        <View
          style={styles.tagline}>
          {/* Product Name */}
          <Text
            style={styles.productname}>
            Expense Manager
          </Text>
          {/* Product Tagline */}
          <Text
            style={styles.text}>
            Make money work in your favor.
          </Text>
        </View>
        <View
          style={styles.btnmainview}>
          <Buttons
            btn_text="Get Started"
            on_press={() => navigation.navigate('Login')}
            style={styles.btn}
          />
        </View>
      </View>
    </View>
  );
};
export default OnBoarding;
