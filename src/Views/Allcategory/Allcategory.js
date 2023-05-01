import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
  FlatList,
  Text,
  Alert,
  Image,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import colors from '../../Contants/colors';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Allcategorystyle';
import Swipeout from 'react-native-swipeout';

export default function Allcategory() {
  //For Refreshing the function
  React.useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      getDatabase()
    });
    return focusHandler;
  }, [navigation]);
  //Declaring Variables
  const navigation = useNavigation();
  const [mess, setmess] = useState("");
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [list, setList] = useState(null);
  useEffect(() => {
    getDatabase();
  }, []);
  //Method to get the Database data
  const getDatabase = async () => {
    try {
      setLoading(true);
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
  };
  //Mehod to Delete the Record from Database
  const Delete = (id, c) => {
    try {
      Alert.alert('Alert', `Are You Sure To Delete ${c}`, [{
        text: "cancel",
        onPress: () => {
          console.log("Cancel is press")
        },
      }, {
        text: "ok",
        onPress: async () => {
          try {
            const response = await database().ref(`Addcategory/${id}`).remove();
            Alert.alert("Data Successfully Deleted")
            navigation.navigate("Dashboard")
          } catch (err) {
            console.log(err);
          }
        },
      },
      ]);
    } catch (err) {
      console.log(err);
    }
  };
  //Method for the Loader
  const loader = () => {
    return (
      <View style={styles.loadercard}>
        <ActivityIndicator style={styles.activityindicator} size="large" color={colors.BACKGROUND_COLOR} />
        <Text style={styles.loadingtext}>Loading...</Text>
      </View>
    )
  }
  //If Not Loading then Show header
  if (!loading) {
    return (
      <View style={{ backgroundColor: colors.DEFAULT_WHITE, height: "100%", }}>
        <View style={styles.main3}>
          <View style={styles.maincontainer}>
            <View style={styles.right}>
              <Icon
                onPress={() => navigation.navigate('Dashboard')}
                name="arrow-left"
                size={25}
                color={colors.DEFAULT_WHITE}
                style={styles.icon} />
              <Text style={styles.cattext}>All category</Text>
            </View>
            <View style={styles.left}>
              <Icon
                onPress={() => navigation.navigate('AddCategory')}
                name="sticker-plus"
                size={27}
                color={colors.DEFAULT_WHITE}
                style={styles.icon2} />
            </View>
          </View>
        </View>
        <View style={{ height: "90%" }}>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor={colors.BACKGROUND_COLOR} />
          <View style={styles.container}>
            {list == "" ?
              <Text style={styles.messtext}>{mess}</Text>
              :
              <FlatList
                data={list}
                refreshControl={<RefreshControl progressBackgroundColor={colors.BACKGROUND_COLOR} refreshing={refreshing} onRefresh={getDatabase} />}
                renderItem={item => {
                  const id = item.item.id;
                  const c = item.item.category;
                  const L = item.item.Limit;
                  const D = item.item.Date;
                  const Total = item.item.texpense;
                  const img = item.item.image;
                  let swipeBtns = (c, L, D, id, img, Total) => [
                    {
                      text: 'Delete',
                      backgroundColor: '#f44336',
                      onPress: () => Delete(id, c)
                    },
                    {
                      text: 'Update',
                      backgroundColor: "#4CAF50",
                      onPress: () => navigation.navigate('Update', { c, L, D, id, img, Total })
                    }
                  ];
                  if (item.category !== null) {
                    return (
                      <Swipeout right={swipeBtns(c, L, D, id, img, Total)}>
                        <View style={styles.container}>
                          <View style={styles.Body}>
                            <View style={styles.mainview}>
                              <Image
                                style={{
                                  backgroundColor: colors.DEFAULT_WHITE,
                                  borderRadius: 10,
                                  width: 50,
                                  height: 50,
                                  alignSelf: 'center'
                                }}
                                source={{ uri: `${item.item.image}` }} />
                              <View style={{ flexDirection: 'column', height: "80%", width: "80%" }}>
                                <Text style={styles.categoryview}>{item.item.category}</Text>
                                <Text style={styles.Limittext}>  {'\u20B9'}{item.item.Limit}</Text></View>
                              <View style={styles.righticon}>
                                <SimpleLineIcons size={15} name="arrow-right" color="#A9A9A9" />
                              </View>

                            </View>

                          </View>
                        </View>
                      </Swipeout>

                    );
                  }
                }}
              />}
          </View>
        </View>
      </View>
    );
  } else {
    return loader()
  }
}
