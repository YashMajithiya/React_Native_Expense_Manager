import React, { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';
import { View, Text, StatusBar, TouchableOpacity, TextInput, RefreshControl, ImageBackground, FlatList, Image, Alert, ToastAndroid, ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../Contants/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './Transactionstyle';
import moment from 'moment';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import { useTheme } from 'react-native-paper';

export default function Transaction({ route: { params: { C, id, Limit, img, texponse, Availablelimit }, },
}) {
   React.useEffect(() => {
      const focusHandler = navigation.addListener('focus', () => {
         getDatabase()
      });
      return focusHandler;
   }, [navigation]);
   console.log("avaialablelimi", Availablelimit)
   const [Note, Setnote] = useState(null);
   const [Listing, setL] = useState(null)
   const [Amount, setAmount] = useState(0);
   const [list, setList] = useState(null);
   const [isUpdateData, setIsUpdateData] = useState(false);
   const [loading, setLoading] = useState(false);
   const [image, setImage] = useState(null);
   const [totalexpen, settotalexpen] = useState(0)
   const [mess, setmess] = useState(false);
   const [refreshing, setRefreshing] = useState(false);
   const number = require('easy-number-formatter');
   const [selectedCardIndex, setSelectedCardIndex] = useState(null);
   const navigation = useNavigation();
   useEffect(() => {
      getDatabase();
   }, []);
   //Function For Loader
   const loader = () => {
      <View style={styles.loadercard}>
         <ActivityIndicator style={styles.activityindicator} size="large" color={colors.BACKGROUND_COLOR} />
         <Text style={styles.loadingtext}>Loading...</Text>
      </View>
   }

   //For Uploading Photo from Camera
   const takePhotoFromCamera = () => {
      ImagePicker.openCamera({
         compressImageMaxWidth: 300,
         compressImageMaxHeight: 300,
         cropping: true,
         compressImageQuality: 0.7
      }).then(image => {
         console.log(image);
         setImage(image.path);
         this.bs.current.snapTo(1);
      });
   }
   //For Uploading hoto from Library
   const choosePhotoFromLibrary = () => {
      ImagePicker.openPicker({
         width: 300,
         height: 300,
         cropping: true,
         compressImageQuality: 0.7
      }).then(image => {
         console.log(image);
         setImage(image.path);
         this.bs.current.snapTo(1);
      });
   }
   const removeimage = () => {
      setImage(null)
      this.bs.current.snapTo(1)
   }
   //For Rendering the Item
   renderInner = () => (
      <View style={styles.panel}>
         <View style={{ alignItems: 'center' }}>
            <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
         </View>
         <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
            <Text style={styles.panelButtonTitle}>Take Photo</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
            <Text style={styles.panelButtonTitle}>Choose From Library</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.panelButton}
            onPress={() => removeimage()}>
            <Text style={styles.panelButtonTitle}>Remove Image</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.panelButton}
            onPress={() => this.bs.current.snapTo(1)}>
            <Text style={styles.panelButtonTitle}>Cancel</Text>
         </TouchableOpacity>
      </View>
   );
   //For Rendering Header Part
   renderHeader = () => (
      <View style={styles.header}>
         <View style={styles.panelHeader}>
            <View style={styles.panelHandle} />
         </View>
      </View>);
   bs = React.createRef();
   fall = new Animated.Value(1)
   //-------------------------------For Getting Values from the firebase database--------------------------------------------------
   const getDatabase = async () => {
      try {
         setLoading(true)
         const data = await database()
            .ref('AddExpense')
            //Showing in the list The Database
            .on('value', tempData => {
               var data = [];
               //Setting the list as per neew data
               tempData.forEach(e => {
                  if (e.toJSON().cat_id == id)
                     data.push(e.toJSON());
               });
               if (data == "") setmess("Sorry Data not Found,Kindly Add Some Expense")
               else setmess('')
               setLoading(false)
               setList(data);
            });
      } catch (err) {
         console.log(err);
      }
   };
   //---------------------------------------------------------------------------------------------------------------------------------
   const Updateexp = (z) => {
      if (z >= 0) {
         const response = database()
            //Logic For if we Select the Card then only we will be able to Update the user 
            .ref(`Addcategory/${id}`)
            .update({
               texpense: z,
            });
      }
   };
   // const Updateexplimit = (f) => {
   //    if (f >= 0) {
   //       const response = database()
   //          //Logic For if we Select the Card then only we will be able to Update the user 
   //          .ref(`Addcategory/${id}`)
   //          .update({
   //             Availablelimit: f,
   //          });
   //    }
   //    else {
   //       f = 0
   //       const response = database()
   //          //Logic For if we Select the Card then only we will be able to Update the user 
   //          .ref(`Addcategory/${id}`)
   //          .update({
   //             Availablelimit: Availablelimit,
   //          });
   //    }
   // };


   //-------------------------------------------------------For Adding The Data In The Database--------------------------------------
   const newrecord = {
      image: image,
      Note: Note,
      Expense: Amount,
      cat_id: id,
      cat_name: C,
      Date: new Date().toUTCString()
   }
   const handleAddData = async () => {
      if (Amount == 0 || Amount.includes(" ")) {
         ToastAndroid.show('Please Enter Amount', ToastAndroid.LONG);
      }
      else if (Note == null) {
         ToastAndroid.show('Please Enter Note', ToastAndroid.LONG);
      }
      else if (Amount > Availablelimit) {
         console.log("Amount", Amount)
         console.log("Available", Availablelimit)
         ToastAndroid.show('Sorry,This Expense exceeds your limit', ToastAndroid.SHORT);
      }
      else if (Amount <= Availablelimit) {
         try {
            //For Adding data
            //response for adding data in database
            const recordId = database().ref(`AddExpense/`).push(newrecord).key;
            const recordWithId = {
               ...newrecord,
               expense_id: recordId
            };
            const i = database().ref(`AddExpense/${recordId}`).set(recordWithId).then(() => {
               setAmount(0)
               Setnote(null)
               expensetotal(Amount)
               availabletotal(Amount)
               Alert.alert("Thank You, Expense Added Successfully")
               navigation.navigate("Dashboard")
               uploadImage
            }
            )
         }
         catch (err) {
            console.log(err);
         }
      }
   }
   const uploadImage = async () => {
      const task = storage()
         .ref(image)
         .putFile(image);
      // set progress state
      try {
         setImage(null);
      }
      catch (e) { console.error(e); }
   };

   //---------------------------------------------------------------------------------------------------------------------------------------

   //-------------------------------------------------------For Updating The Data In The Database--------------------------------------------
   const handleUpdateData = async () => {
      if (Amount == 0 || Amount.includes(" ")) {
         ToastAndroid.show('Please Enter Amount', ToastAndroid.LONG);
      }
      else if (Note == null ) {
         ToastAndroid.show('Please Enter Note', ToastAndroid.LONG);
      }
      else if (Amount > Availablelimit) {
         console.log("Amount", Amount)
         console.log("Available", Availablelimit)
         ToastAndroid.show('Sorry,This Expense exceeds your limit', ToastAndroid.SHORT);
      }
      else if (Amount <= Availablelimit) {
         try {
            const response = await database()
               //Logic For if we Select the Card then only we will be able to Update the user 
               .ref(`AddExpense/${Listing}`)
               .update({
                  expense_id: Listing,
                  Expense: Amount,
                  Note: Note,
                  cat_id: id,
                  cat_name: C,
                  Date: new Date().toUTCString()
               });
            Alert.alert("Thank You, Expense Updated Successfully")
            navigation.navigate("Dashboard")
            uploadImageup()
            setAmount(0);
            Setnote(null)
            // upavailabletotal(Amount)
            upexpensetotal(Amount)
            // upexpensetotal(Amount)
            // upavailabletotal(Amount)
            setIsUpdateData(false);
         } catch (err) {
            console.log(err);
         }
      }
   };

   const uploadImageup = async () => {
      setLoading(true)
      const task = storage()
         .ref(image)
         .putFile(image);
      // set progress state
      try {
         setImage(null);
         setAmount(0);
         Setnote(null)
         setLoading(false)
      }
      catch (e) { console.error(e); }
   };
   //---------------------------------------------------------------------------------------------------------------------------------------
   //-------------------------------------------------------Logic for card press -----------------------------------------------------------
   const handleCardPress = (cardIndex, Amount, note, exp_id, img1,) => {
      try {
         const i = Amount
         settotalexpen(i)
         console.log("Totalexpens", totalexpen)
         setSelectedCardIndex(cardIndex);
         setIsUpdateData(true);
         setImage(img1)
         setAmount(Amount);
         setL(exp_id)
         Setnote(note)
      } catch (err) {
         console.log(err);
      }
   };
   //---------------------------------------------------------------------------------------------------------------------------------------
   //-------------------------------------------------------Logic for Longpress and Delete that data----------------------------------------
   const handleLongPress = (cardIndex, Amount, exp_id) => {
      try {
         Alert.alert('Alert', `Are you sure you want to delete \u20B9${Amount} ?`, [
            {
               text: "cancel",
               onPress: () => {
                  console.log("Cancel is press")
               },
            }, {
               text: "ok",
               onPress: async () => {
                  try {
                     deexpensetotal(Amount)
                     deavailabletotal(Amount)
                     const response = await database().ref(`AddExpense/${exp_id}`).remove();
                     setIsUpdateData(false);
                     getDatabase()
                     console.log(response);
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

   const expensetotal = (Amount) => {
      const i = parseInt(Amount)
      const d = parseInt(texponse)
      const z = i + d
      Updateexp(z)
   }
   const availabletotal = (Amount) => {
      const i = parseInt(Amount)
      const g = parseInt(Availablelimit)
      const f = g - i
      Updateexplimit(f)
   }

   const deexpensetotal = (Amount) => {
      const i = parseInt(Amount)
      const d = parseInt(texponse)
      const z = i - d
      Updateexp(z)
   }
   const deavailabletotal = (Amount) => {
      const i = parseInt(Amount)
      const g = parseInt(Availablelimit)
      const f = g + i
      Updateexplimit(f)
   }
   const upexpensetotal = (Amount) => {
      const f = parseInt(totalexpen)
      console.log(f)
      const i = parseInt(Amount)
      console.log(i)
      const d = parseInt(texponse)
      console.log(d)
      if (f > i) {
         const p = f - i
         M = d - p
         console.log("Small", M)
         upUpdateexp(M)
      }
      else {
         const z = i - f
         M = d + z
         console.log("larger", M)
         upUpdateexp(M)
      }
   }

   const upUpdateexp = (M) => {
      if (M >= 0) {
         const response = database()
            //Logic For if we Select the Card then only we will be able to Update the user 
            .ref(`Addcategory/${id}`)
            .update({
               texpense: M,
            });
      }
   };


   // const UpUpdateexplimit = (N) => {
   //    const response = database()
   //       //Logic For if we Select the Card then only we will be able to Update the user 
   //       .ref(`Addcategory/${id}`)
   //       .update({
   //          Availablelimit: N,
   //       });
   //    console.log('Success', N)
   // }

   // const upavailabletotal = (Amount) => {
   //    const i = parseInt(Limit)
   //    const f = parseInt(texponse)
   //    const N = i - f
   //    UpUpdateexplimit(N)
   // }


   //---------------------------------------------------------------------------------------------------------------------------------------
   if (!loading) {
      return (

         <View style={{ height: "100%" }}>

            <StatusBar
               barStyle="light-content"
               hidden={false}
               backgroundColor={colors.BACKGROUND_COLOR} />

            <View style={styles.maincontainer}>
               <TouchableOpacity onPress={() => navigation.navigate('Allcat')}>
                  <View style={{ flexDirection: 'row' }}>
                     <Icon
                        onPress={() => navigation.navigate('Dashboard')}
                        name="arrow-left"
                        size={20}
                        color={colors.DEFAULT_WHITE}
                        style={styles.icon} />
                     <Image
                        style={styles.img}
                        source={{ uri: `${img}` }} />
                     <Text style={styles.cattext}>{C}</Text>
                     <Text style={styles.Limittext}>{'\u20B9'}{number.formatNumber(Limit)}</Text>
                  </View>
               </TouchableOpacity>
            </View>
            {list == "" ?
               <Text style={styles.messtext}>{mess}</Text>
               :
               <Text style={styles.messtext}></Text>
            }
            <BottomSheet
               ref={this.bs}
               snapPoints={[400, 0]}
               renderContent={this.renderInner}
               renderHeader={this.renderHeader}
               initialSnap={1}
               callbackNode={this.fall}
               enabledGestureInteraction={true} />

            <View style={styles.mainview}>

               <FlatList
                  data={list}

                  refreshControl={<RefreshControl progressBackgroundColor={colors.BACKGROUND_COLOR} refreshing={refreshing} onRefresh={getDatabase} />}
                  renderItem={item => {
                     const cardIndex = item.index;
                     const Amount = item.item.Expense;
                     const exp_id = item.item.expense_id
                     const note = item.item.Note
                     const img1 = item.item.image;
                     if (item.item.image != null) {
                        return (
                           <View style={styles.card_position}>
                              <TouchableOpacity style={styles.card}
                                 onPress={() => handleCardPress(cardIndex, Amount, note, exp_id, img1)}
                                 onLongPress={() => handleLongPress(cardIndex, Amount, exp_id)}>
                                 <View style={styles.imagecard}>

                                    <Image
                                       style={styles.imgex}
                                       source={{ uri: `${item.item.image}` }} />
                                 </View>
                                 <View style={styles.expensecard}>
                                    <Text numberOfLines={1} style={styles.notetext}>
                                       {item.item.Note}
                                    </Text>
                                    <Text style={styles.exptext}>
                                       {'\u20B9'} {item.item.Expense}
                                    </Text>
                                    <Text style={styles.Datetext}>
                                       {moment(`${item.item.Date}`).format('MMMM DD YYYY')}
                                    </Text>
                                 </View>
                              </TouchableOpacity>
                           </View>

                        );

                     }
                     else {
                        return (
                           <View style={styles.card_position}>
                              <TouchableOpacity style={styles.card3}
                                 onPress={() => handleCardPress(cardIndex, Amount, note, exp_id)}
                                 onLongPress={() => handleLongPress(cardIndex, Amount, exp_id)}>
                                 <Text numberOfLines={1} style={styles.notetext}>
                                    {item.item.Note}
                                 </Text>
                                 <Text style={styles.exptext}>
                                    {'\u20B9'} {item.item.Expense}
                                 </Text>
                                 <Text style={styles.Datetext}>
                                    {moment(`${item.item.Date}`).format('MMMM DD YYYY')}
                                 </Text>

                              </TouchableOpacity>
                           </View>
                        );
                     }

                  }}

               />

               <View style={{ width: "100%", flexDirection: "row", paddingBottom: 8 }}>

                  <TextInput
                     maxLength={50}
                     placeholder="Note"
                     placeholderTextColor={colors.GREY}
                     value={Note}
                     onChangeText={value => Setnote(value.trim())}
                     style={styles.note}>
                  </TextInput>

                  <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                     <View>
                        <ImageBackground
                           source={{ uri: image }}
                           style={styles.Animateimg}
                           backgroundColor={colors.BACKGROUND_COLOR}
                           imageStyle={{ borderRadius: 50 }}>
                           <View
                              style={styles.iconview}>
                              <Icon
                                 name="camera-plus-outline"
                                 size={25}
                                 color="#fff"
                                 style={styles.Animateicon}
                              />
                           </View>
                        </ImageBackground>
                     </View>
                  </TouchableOpacity>
               </View>

               <View style={styles.payview}>
                  <TextInput placeholder="Pay"
                     keyboardType='number-pad'
                     value={Amount}
                     placeholderTextColor={colors.GREY}
                     onChangeText={value => setAmount(value)}
                     style={styles.pay}></TextInput>
                  {!isUpdateData ? (
                     <Icon onPress={() => handleAddData()}
                        name='send-circle' size={50} color={colors.BACKGROUND_COLOR} style={{}} />
                  ) : (
                     <Icon onPress={() => handleUpdateData()}
                        name='pencil-circle' size={50} color={colors.BACKGROUND_COLOR} style={{}} />
                  )}

               </View>
            </View>

         </View>


      )

   } else loader()

}