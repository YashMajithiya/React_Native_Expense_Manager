import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../Contants/colors';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.DEFAULT_WHITE,
    width: "90%",
    alignSelf: "center",
    borderRadius:10,
    height:70,
    elevation:3,
    margin:10
  },
  categorytext: {
    fontSize: 16,
    color: colors.DEFAULT_BLACK,
    paddingTop:10
  },
  loadercard: {
    justifyContent: 'center',
    flex: 1
  },
  activityindicator: {
    alignSelf: 'center',
  },
  loadingtext: {
    textAlign: 'center',
    color:colors.DEFAULT_BLACK
  },
  container: {
    height: "89%",
    width:"100%",
    backgroundColor:"#f8fcff",
  },
  datetext: {
    width: "100%",
    
  },
  main2:{
    height:"100%",
    backgroundColor:"#f8fcff"
  },
  substyle1: {
    width: "22%",
    flexDirection:"row",
  },
  substyle: {
    width: "100%",
  },
  Limittext: {
    fontSize: 12,
    alignSelf: "flex-start",
    color: "#808296",
    paddingBottom:4
  },
  iconmainview: {
    alignItems: 'flex-end',
    backgroundColor: "#f8fcff",
    padding:9,
    height:80,
  },
  iconstyle: {
    height: 60,
    width: 60,
    borderRadius: 50,
  
    backgroundColor: colors.BACKGROUND_COLOR,
  },      icon2: {
    color:colors.DEFAULT_WHITE,
    paddingTop:5,
    alignSelf:"center"
  },
  maincontainer2:{ height:"8%", flexDirection: 'row', width: "100%", padding:10,backgroundColor:colors.BACKGROUND_COLOR},
  right:{
    width:"90%",
    flexDirection:"row"
  },
  viewstyle:{   flexDirection: 'row', 
  justifyContent: 'center', 
  alignItems: 'center',
paddingTop:5,paddingStart:10
},
  img1: {  width: 30,
  height: 30,
  tintColor: colors.DEFAULT_WHITE,alignSelf:"center"},
 
  left:{
    flexDirection:"row"
  },
  icon: {
    alignSelf: 'center',
    padding: 9,
    color:colors.DEFAULT_WHITE
  },
  mainbox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  box: {
    backgroundColor: colors.BACKGROUND_COLOR
  },
  boxtext: {
    alignSelf: 'center',
    fontSize: 30,
    color: colors.DEFAULT_WHITE,
  },
  datetextstyle: {
    fontSize: 15,
    paddingstart: 5,
    color: colors.DEFAULT_GREY,
  },
  messtext: {
    alignSelf: "center",
    fontSize: 18,
    color:colors.DEFAULT_BLACK,
    padding:10
  },
  main: {
    width: "20%",
    flexDirection: 'row',
    justifyContent:'center',
    paddingTop:10
  },
  img: {
    backgroundColor: colors.DEFAULT_GREY,
             borderRadius: 100,
                              width: 50,
                              height: 50,
                              alignSelf: 'center',
  },
  icon: {
    alignSelf: 'center',
    padding: 9
  },cattext:{ fontSize: 20, color: colors.DEFAULT_WHITE, width: '80%',paddingStart:10,alignSelf:"center"},

  categorymain: {
    flexDirection: "column",
    width:"50%",
  },
  maincontainer:{
    flexDirection:'row',  },
  limit:{
    fontSize: 12,
    alignSelf:"center",
    color: colors.DEFAULT_BLACK,
  },
  righticon:{
    justifyContent:"center",

  }
});
export default styles;  