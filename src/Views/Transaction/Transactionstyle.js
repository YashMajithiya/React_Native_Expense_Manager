import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../Contants/colors';
const styles = StyleSheet.create({

  categorytext: {
    fontSize: 30,
    padding: 5
  },
  datetext: {
    flexDirection: 'row',
    width: "100%"
  },
  substyle: {
    width: "50%"
  },
  Limittext: {
    fontSize: 18,
    width:"20%",
    color: colors.DEFAULT_WHITE,
    alignSelf:"center",
  },
  Divider: {
    height: .5,
    width: 700
  },
  iconmainview: {
    alignItems: 'flex-end'
  },
  iconstyle: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: colors.CYAN,
    marginEnd: 18,
    marginBottom: 8,
  },
  icon: {
    alignSelf: 'center',
    padding: 9
  },
  lastview:{
     height: "35%" ,borderColor:colors.DEFAULT_BLACK,width:"100%",borderWidth:2
  },
  mainbox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  box: {
    backgroundColor: colors.BACKGROUND_COLOR
  },
  datetextstyle: {
    fontSize: 20,
    padding: 5,
  },
imagecard:{
  backgroundColor:colors.DEFAULT_WHITE,
  width:"100%",
  height:170,
  borderTopLeftRadius: 22,
  borderTopRightRadius:22,
  borderWidth:2,
  borderColor:colors.DEFAULT_WHITE,
},
expensecard:{
    backgroundColor:colors.DEFAULT_WHITE,
    width: "100%",
    height:"40%",
    borderRadius:30,
    borderColor:colors.DEFAULT_BLACK,
   padding:5,
  },
  Animateicon:{
    opacity: 0.2,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderColor:colors.DEFAULT_WHITE,
    borderRadius: 60,
  },
  Animateimg:{ 
    height:40, 
    width: 40, 
    alignItems:"center",
    justifyContent:"center",
    borderRadius:60,
    margin:5
  },
  iconview:{
    alignItems: 'center',
    borderRadius:60
  },
card:  {
  backgroundColor:colors.DEFAULT_WHITE,
width: "80%",
height:290,
borderRadius: 30,
borderColor:colors.BACKGROUND_COLOR,
paddingBottom:40},
card3:  {
  backgroundColor:colors.DEFAULT_WHITE,
width: "80%",
height:100,
borderRadius: 20,
borderColor:colors.DEFAULT_WHITE,
elevation:2,
},
loadercard:{ justifyContent: 'center', flex: 1 },
img:{

    backgroundColor: colors.DEFAULT_GREY,
    borderRadius: 100,
    width: 40,
    height: 40,
},
mess:{ 
  alignSelf: "center", 
  fontSize: 13,
  color:colors.DEFAULT_BLACK,
  justifyContent:"center"
},
imgex:{ 
  backgroundColor: colors.DEFAULT_GREY,
  width: "100%",
  height: "100%",
  borderTopLeftRadius:20,
  borderTopRightRadius:20,
  borderColor:colors.DEFAULT_WHITE},
maincontainer:{ width: "100%", padding:7,backgroundColor:colors.BACKGROUND_COLOR},
cattext:{ fontSize: 20, color: colors.DEFAULT_WHITE,paddingStart:10, width: '60%',alignSelf:"center" },
notetext:{ 
  fontSize: 15, 
  color: colors.DEFAULT_BLACK, 
  paddingStart: 10,
  paddingTop:5
 },
 exptext:{ 
  fontSize: 20, 
  color: colors.DEFAULT_BLACK, 
  paddingStart: 10 
},
card_position:{ alignItems:"flex-end",paddingEnd:10,elevation:5,paddingBottom:20 },
note:{
  width: "80%", alignSelf: "center", fontSize: 18,
  marginStart: 8,
  textAlign: 'justify',
  borderRadius: 10,
  color:colors.DEFAULT_BLACK,
  textDecorationStyle: 'solid'
  , borderWidth: 1,
  paddingStart: 10, 
  paddingBottom:8
  
},
mainview:{
  height:"87%",
  width:"100%",
},
 Datetext:{
  fontSize: 15, 
  color: colors.DEFAULT_BLACK, 
  paddingStart: 10 ,
 },  commandButton: {
  padding: 15,
  borderRadius: 10,
  backgroundColor: '#FF6347',
  alignItems: 'center',
  marginTop: 10,
},
messtext:{ 
  alignSelf: "center",
  fontSize: 10,
  color:colors.DEFAULT_BLACK,
  },
commandButton: {
  padding: 15,
  borderRadius: 10,
  backgroundColor: '#FF6347',
  alignItems: 'center',
  marginTop: 10,
},
activityindicator: {
  alignSelf: 'center'
},
loadingtext: {
  textAlign: 'center'
},
panel: {
  padding: 20,
  backgroundColor: colors.DEFAULT_WHITE,
  paddingTop: 10,
height:"100%"
},
header: {
  backgroundColor: colors.DEFAULT_WHITE,
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
panelTitle: {
  fontSize: 27,
  height: 35,
},
panelSubtitle: {
  fontSize: 14,
  color: 'gray',
  height: 30,
  marginBottom: 10,
},
panelButton: {
  padding: 13,
  borderRadius: 10,
  backgroundColor: colors.BACKGROUND_COLOR,
  alignItems: 'center',
  marginVertical: 7,
},
panelButtonTitle: {
  fontSize: 17,
  fontWeight: 'bold',
  color: colors.DEFAULT_WHITE,
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
},pay:{
  width: "80%", alignSelf: "center", fontSize: 18,
  marginStart: 8,
  textAlign: 'justify',
  borderRadius: 10,
  color:colors.DEFAULT_BLACK,
  textDecorationStyle: 'solid'
  , borderWidth: 1,
  paddingStart: 10, 

},
payview:{ width: "100%", flexDirection: "row",paddingBottom:10 },
container:{
  width:"100%",
  height:"100%"
}
});
export default styles;