import Display from '../../Contants/Display';
import {StyleSheet,Dimensions} from 'react-native'
import colors from '../../Contants/colors';
const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.DEFAULT_WHITE,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    headerTitle: {
      fontSize: 20,
      width: Display.setWidth(80),
      textAlign: 'center',
    },
    title: {
      fontSize: 16,
      fontFamily: "Roboto",
      includeFontPadding:false,
      fontWeight:'700',
      color:colors.DEFAULT_BLACK,
      paddingBottom: 5,
      paddingTop:10,
      paddingStart:20
    },
    content: {
      fontSize: 14,
      fontFamily: "Roboto",
      fontWeight:'600',
      paddingStart:20,
      color:colors.DEFAULT_BLACK,
    },
    phoneNumberText: {
      fontSize: 18,
      fontFamily: "Roboto",
        color: colors.DEFAULT_YELLOW,
    },
    otpContainer: {
      width:"93%",
      alignSelf:"center",
      marginHorizontal: 2,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
    },
    otpBox: {
      borderRadius: 5,
      borderColor: colors.BACKGROUND_COLOR,
      borderWidth: 1.5,
    },
    otpText: {
      fontSize: 25,
      color: colors.DEFAULT_BLACK,
      padding: 0,
      textAlign: 'center',
      paddingHorizontal: 18,
      paddingVertical: 10,
    },
    signinButton: {
      backgroundColor: colors.DEFAULT_GREEN,
      borderRadius: 8,
      marginHorizontal: 20,
      height: Display.setHeight(6),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    signinButtonText: {
      fontSize: 18,
      color: colors.DEFAULT_WHITE,
      fontFamily: "Roboto",
    },
    headerWrapper: {
      backgroundColor: colors.BACKGROUND_COLOR,
      borderBottomLeftRadius: 25,
      height:"50%",
      borderBottomRightRadius: 25,
    },
    header: {
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerText: {
      fontWeight: 'bold',
      color: '#FFFFFF',
      fontSize: 20,
    },
    img: {
      paddingBottom: 40,
      alignItems: 'center',
    },
    btnstyle:{
      backfaceVisibility: 'hidden',
        justifyContent: 'center',
        borderRadius: 100,
        height: 55,
        elevation: 5,
        marginBottom:30,
        textAlign: 'center',
        width: '50%',
        backgroundColor: colors.BACKGROUND_COLOR,
      },
      btnmain:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      resendtext:{
        textAlign:"right",
        fontSize:16,
        padding:10,
        color:colors.DEFAULT_BLACK
      },
      imgmain:{ 
        width: "90%", 
        height:"90%", 
       }
  });

  export default styles
  