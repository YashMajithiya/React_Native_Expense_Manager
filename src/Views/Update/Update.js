import { StatusBar, View ,TouchableOpacity,ImageBackground,Text,Alert,ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react';
import { TextInput, } from '@react-native-material/core';
import Buttons from '../../Components/Buttons';
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';
import styles from '../AddCategory/Addcategorystyle';
import storage from '@react-native-firebase/storage';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';

export default function Update({ route: { params:{c,L,id,img,Total}, } }) {
  const [category, setcategory] = useState(c);
  const [Limit, setLimit] = useState(L);
  const [image, setImage] = useState(img);
  const {colors} = useTheme();
  const navigation = useNavigation();
  const Update = async () => {
    if (category == null ) {
      ToastAndroid.show('Please Enter Category', ToastAndroid.LONG);
    }else if(Limit == 0 ){
      ToastAndroid.show('Please Enter Limit', ToastAndroid.LONG);
    }else if(image==null){
      ToastAndroid.show('Please Select one Image', ToastAndroid.LONG);
    }
    else if(category!=null && Limit!=0 && image!=null)
    {
    try {
      //For Adding data
      if (category.length > 0) {
        const i=Limit-Total
        const response = await database()
          //Logic For if we Select the Card then only we will be able to Update the user 
          .ref(`Addcategory/${id}`)
          .update({
            id:id,
            Availablelimit:i,
            image:image,
            category: category,
            Limit: Limit,
            Date:new Date().toUTCString() 
          });
        console.log(response);
        setLimit('')
        setcategory('')
       uploadImage()
      } 
    } catch (err) {
      console.log(err);
    }
  }
  };
  const uploadImage = async () => {
    const task = storage()
      .ref(image)
      .putFile(image);
    // set progress state
    try {
      Alert.alert("Thank You, Your Category Updated SucccessFully")
      navigation.navigate("Allcat")
      setImage(null);    
    } catch (e) {
      console.error(e);
    }
  };
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
  const removeimage=()=>{
    setImage(null)
    this.bs.current.snapTo(1)
 }
  renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
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

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);
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
                     <Text style={styles.cattext}>Update category</Text>
                     </View>
                     <View style={styles.left}>
                  </View>
                  </View>

      <BottomSheet
        ref={this.bs}
        snapPoints={[400, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
    }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100,}}
                backgroundColor={'#5D5FEF'}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera-plus-outline"
                    size={50}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>

      <TextInput variant="outlined" label='Category'
        value={category}
        onChangeText={value => setcategory(value.trim())}
        style={styles.categoryinput}
      />
      <TextInput variant="outlined" label='Limit'
        value={Limit}
        onChangeText={value => setLimit(value)}
        style={styles.LimitInput}
        keyboardType='number-pad'
      />
      <View
        style={{ alignItems: 'center' }}>
        <Buttons
          btn_text="Update"
          on_press={() => Update()}
          style={styles.btnstyle}
        />
      </View>
    </View>
  )
}