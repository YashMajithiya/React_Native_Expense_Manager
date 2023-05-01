import { StyleSheet,Dimensions } from 'react-native'
import colors from '../../Contants/colors';
import Colors from '../../Contants/colors';
const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  LimitInput: {
    width: "90%",
    alignSelf: "center",
    fontFamily: 'Roboto',
    color: Colors.DEFAULT_BLACK,
    margin: 16
  },
  btnstyle: {
    backfaceVisibility: 'hidden',
    justifyContent: 'center',
    borderRadius: 100,
    height: 55,
    elevation: 10,
    textAlign: 'center',
    width: '50%',
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
  categoryinput:{
    width: "90%",
    margin: 16,
    fontSize:20,
    alignSelf: "center",
    fontFamily: 'Roboto',
    color: Colors.DEFAULT_BLACK,
  },
  maincontainer:{ flexDirection: 'row', width: "100%", padding:10,backgroundColor:Colors.BACKGROUND_COLOR,},
  right:{
    width:"90%",
    flexDirection:"row"
  },
  cattext:{
   fontSize: 20, 
   color: Colors.DEFAULT_WHITE, 
   width: '100%',
   paddingStart:8,
   paddingTop:3
  },
  icon: {
    paddingTop:7,
    color:Colors.DEFAULT_WHITE,
    paddingStart:8
  },
  container: {
    flex: 1,
  },
  loadercard: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor:colors.DEFAULT_WHITE
  },
  activityindicator: {
    alignSelf: 'center'
  },
  loadingtext: {
    textAlign: 'center'
  },
  panel: {
    padding: 20,
    backgroundColor: Colors.DEFAULT_WHITE,
    paddingTop: 20,
    height:"100%"
  },
  header: {
    backgroundColor: Colors.DEFAULT_WHITE,
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: Colors.BACKGROUND_COLOR,
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.DEFAULT_WHITE,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  Animatebody:{
    height: 100,
    width: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Animateimg:{ 
    height: 100, 
    width: 100, 
  },
  Animateicon:{
    opacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderRadius: 10,
  },
  iconview:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default styles;