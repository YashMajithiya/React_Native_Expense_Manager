import React, { useState, useEffect } from 'react';
import { Box, Divider } from '@react-native-material/core';
import {
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  BackHandler,
  Alert,
  RefreshControl
} from 'react-native';
import auth from '@react-native-firebase/auth';
import colors from '../../Contants/colors';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import database from '@react-native-firebase/database';
import styles from './Dashboardstyle';
import moment from 'moment';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Consumer } from 'react-native-paper/lib/typescript/core/settings';

export default function Dashboard() {
  //Refreshing the Function
  React.useEffect(() => {
    
    const focusHandler = navigation.addListener('focus', () => {
      getDatabase()
    });
    return focusHandler;

    
  }, [navigation]);
  //Declaring Variables
  const navigation = useNavigation();
  const number = require('easy-number-formatter');
  const [list, setList] = useState(null);
  const [mess, setmess] = useState("");
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [Total, settotal] = useState(0);


  useEffect(() => {
    getDatabase();

  }, []);

  // const backActionHandler = () => {
  //   Alert.alert("Alert!", "Are you sure you want to go back?", [
  //     {
  //       text: "Cancel",
  //       onPress: () => null,
  //       style: "cancel"
  //     },
  //     { text: "YES", onPress: () => BackHandler.exitApp()
  //     () }
  //   ]);
  //   return true;
  // };
  const Logout = ()=> {
    Alert.alert('Logout!', 'Are you sure you want to Logout?', [
      {text: 'YES', onPress: () =>  auth()
      .signOut()
      .then(() =>navigation.navigate('OnBoarding'))},
      {
        text: 'Cancel',
        onPress: () => null, 
        style: 'cancel',
      },
    ]);
    return true;
  };
 
 
  //Method to  Fetch The Value from the database
  const getDatabase = async () => {
    setLoading(true);
    try {
      const data = await database()
        .ref('Addcategory')
        //Showing in the list The Database
        .on('value', tempData => {
          var data = [];
          //Setting the list as per neew data
          tempData.forEach(e => {
            data.push(e.toJSON());
          });
          if (data == "") setmess("Sorry Data not Found,Kindly Add Some Category")
          else setmess(" ")
          setList(data);
          setLoading(false);
        });
      } catch (err) {
        console.log(err);
    }
  }

  //   const getDatabase2=(All,Availablelimit,id)=>{
  //       const value1 = parseInt(All)
  //       const value2 = parseInt(Availablelimit); 
  //       settotal(value1 + value2);
  //       console.log("dcs",Total)
  //       Updateexp(Total,id)
  //     }

  // const Updateexp= (Total,id) => {
  //       const response = database()
  //         //Logic For if we Select the Card then only we will be able to Update the user 
  //         .ref(`Addcategory`)
  //         .update({
  //           Alllimit:Total,
  //         });
  // };

  //Method For Loader
  const loader = () => {
    return (
      <View style={styles.loadercard}>
        <ActivityIndicator style={styles.activityindicator} size="large" color={colors.BACKGROUND_COLOR} />
        <Text style={styles.loadingtext}>Loading...</Text>
      </View>)
  }

  if (!loading) {
    return (

        <View style={styles.main2}>

          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor={colors.BACKGROUND_COLOR}
          />

          <View style={styles.container}>
          <View style={styles.maincontainer2}>
          <View style={styles.right}>
          <View style={styles.viewstyle}>
          <Image source={require('../../../assets/check.png')} style={styles.img1} />
          </View>
                     <Text style={styles.cattext}>Expense Manager</Text>
                     </View>
                     <View style={styles.left}>
                  <Icon
                        onPress={()=>Logout()}
                        name="location-exit"
                        size={27}
                        color={colors.DEFAULT_WHITE}
                        style={styles.icon2} />
                  </View>
                  </View>
                  {list == "" ?
              <Text style={styles.messtext}>{mess}</Text>
              :
            <FlatList
              data={list}
              refreshControl={<RefreshControl progressBackgroundColor={colors.BACKGROUND_COLOR} refreshing={refreshing} onRefresh={getDatabase} />} 
              renderItem={item => {
                const cardIndex = item.item.category;
                const C = item.item.category;
                const id = item.item.id;
                const Limit = item.item.Limit;
                const img = item.item.image
                const texponse=item.item.texpense
                
                const Availablelimit=  item.item.Limit-item.item.texpense
                  return (
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => navigation.navigate('Transaction', { C, id, Limit, img,texponse,Availablelimit})}>
                        <View style={styles.maincontainer}>
                      <View style={styles.main}>
                        <Image
                          style={styles.img}
                          source={{ uri: `${item.item.image}` }} />
                          </View>
                        <View style={styles.categorymain}>
                          <Text style={styles.categorytext}>
                            {item.item.category}
                          </Text>
                          <View style={styles.datetext}>
                            <View style={styles.substyle}>
                            <Text
                            style={styles.Limittext}>
                           {'\u20B9'}{number.formatNumber(Availablelimit)} left of {'\u20B9'}{number.formatNumber(item.item.Limit)}
                          </Text>
                            </View>
                          </View>
                          </View>
                        <View style={styles.substyle1}>
                        <Text
                            style={styles.limit}>
                          {'\u20B9'}{number.formatNumber(item.item.texpense)}
                          </Text>
                          </View>

                          <View style={styles.righticon}>
                          <SimpleLineIcons size={14} name="arrow-right" color={colors.DEFAULT_GREY} />
                          </View>

                      </View >
          
                    </TouchableOpacity>
                  );
                
              }} />
            }
          </View>
          <View
            style={styles.iconmainview}>
            <View
              style={styles.iconstyle}>
              <Icon
                onPress={() => navigation.navigate('Allcat')}
                name="plus"
                size={40}
                color={colors.DEFAULT_WHITE}
                style={styles.icon} />
            </View>
          </View>
    
        </View>
    );
  } else {
    return loader()
  }
}
