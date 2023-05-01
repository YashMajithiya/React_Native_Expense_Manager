//Importing
import { StatusBar, View, TouchableOpacity, ImageBackground, Text, Alert, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useState } from 'react';
import { TextInput, } from '@react-native-material/core';
import Buttons from '../../Components/Buttons';
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';
import styles from './Addcategorystyle';
import storage from '@react-native-firebase/storage';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import colors from '../../Contants/colors';
export default function Addcategory() {
  //Declaring Variables
  const [category, setcategory] = useState(null);
  const [Limit, setLimit] = useState(0);
  const [Expense, setexpense] = useState(0);
  const [alllimit, setalllimit] = useState(0);
  const [allExpense, setallexpense] = useState(0);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const { colors } = useTheme();
  const navigation = useNavigation();
  //Method For Storing New Record
  const newrecord = {
    allExpense: allExpense,
    // Availablelimit: Limit,
    texpense: Expense,
    image: image,
    category: category,
    Limit: Limit,
    Date: new Date().toUTCString()
  }
  //Method For Upload Image into Firesbase Storage
  const uploadImage = async () => {
    setLoading(true)
    const task = storage()
      .ref(image)
      .putFile(image);
      setLoading(false)
    // set progress state
    try {
      Alert.alert("Thank You,Category Added Successfully");
      navigation.navigate("Dashboard")
      setImage(null);
    }
    catch (e) { console.error(e); }
  };
  // Method For Loader
  const loader = () => {
    return (
      <View style={styles.loadercard}>
        <ActivityIndicator style={styles.activityindicator} size="large" color={colors.BACKGROUND_COLOR} />
        <Text style={styles.loadingtext}>Loading...</Text>
      </View>)
  }
  //Method For Adding Data in the Firebase Database
  const handleAddData = async () => {
    //For Adding data
    if (category == null ) {
      ToastAndroid.show('Please Enter Category', ToastAndroid.LONG);
    } else if (Limit == 0 || Limit.includes(" ")) {
      ToastAndroid.show('Please Enter Limit', ToastAndroid.LONG);
    } else if (image == null) {
      ToastAndroid.show('Please Select one Image', ToastAndroid.LONG);
    }
    else if (category != null && Limit != 0 && image != null) {
      try {
        setLoading(true)
        //response for adding data in database
        const recordId = database().ref('Addcategory').push(newrecord).key;
        setLimit(0)
        setcategory('')
        setexpense(0)
        setalllimit(0)
        setallexpense(0)
        //Getting the Unique for every I'D
        const recordWithId = {
          ...newrecord,
          id: recordId
        };
        const i = database().ref(`Addcategory/${recordId}`).set(recordWithId).then(() => {
          uploadImage()
          setLoading(false)
        })
      } catch (err) { console.log(err); }
    }
  };
  //For Uploading Photo from Camera
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
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
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }
  const removeimage=()=>{
    setImage(null)
    this.bs.current.snapTo(1)
 }
  //For Rendering the Item
  renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.panelSubtitle}>Choose Your Photo </Text>
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
  fall = new Animated.Value(1);
  //If Loading then Show Header 
  if (!loading) {
    return (
      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={styles.right}>
            <Icon
              onPress={() => navigation.navigate('Dashboard')}
              name="arrow-left"
              size={25}
              color={colors.DEFAULT_WHITE}
              style={styles.icon} />
            <Text style={styles.cattext}>Add category</Text>
          </View>
          <View style={styles.left}>
          </View>
        </View>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={colors.BACKGROUND_COLOR} />
        <BottomSheet
          ref={this.bs}
          snapPoints={[400, 0]}
          renderContent={this.renderInner}
          renderHeader={this.renderHeader}
          initialSnap={1}
          callbackNode={this.fall}
          enabledGestureInteraction={true} />
        <Animated.View style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
        }}>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
              <View
                style={styles.Animatebody}>
                <ImageBackground
                  source={{ uri: image}}
                  style={styles.Animateimg}
                  backgroundColor={"#5D5FEF"}
                  imageStyle={{ borderRadius: 15 }}>
                  <View
                    style={styles.iconview}>
                    <Icon
                      name="camera-plus-outline"
                      size={50}
                      color="#fff"
                      style={styles.Animateicon}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
        {/* Textinput For Entering category */}
        <TextInput variant="outlined" label='Category'
          colors={colors.BACKGROUND_COLOR}
          value={category}
          onChangeText={value => setcategory(value.trim())}
          style={styles.categoryinput} />

        {/* Textinput For Entering Limit */}
        <TextInput variant="outlined"
          colors={colors.BACKGROUND_COLOR}
          label='Limit'
          value={Limit}
          maxLength={16}
          onChangeText={value => setLimit(value)}
          style={styles.LimitInput}
          keyboardType='numeric' />
        <View
          style={{ alignItems: 'center' }}>
          <Buttons
            btn_text="Add"
            //On Clicking The Function To be Executed
            on_press={() => handleAddData()}
            style={styles.btnstyle}
          />
        </View>
      </View>
    );
  } else loader()
}