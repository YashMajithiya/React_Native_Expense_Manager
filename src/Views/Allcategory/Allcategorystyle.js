import { StyleSheet,Dimensions } from 'react-native'
import colors from '../../Contants/colors';
const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    Add: {
        backgroundColor: colors.DEFAULT_WHITE,
        width: "100%",
        alignSelf: "center"
    },
    icon: {
        paddingTop:7,
        color:colors.DEFAULT_WHITE,
        paddingStart:8
      },
      icon2: {
        color:colors.DEFAULT_WHITE,
        alignSelf:"center"
      },
      right:{
        width:"90%",
        flexDirection:"row"
      },
      left:{
        flexDirection:"row"
      },
      cattext:{ fontSize: 20, color: colors.DEFAULT_WHITE, width: '100%',paddingStart:8,alignSelf:"center"},
    addcategoryview: {
        fontSize: 20,
        paddingStart: 5,
        paddingTop: 10,
        color: colors.DEFAULT_BLACK
    },
    Textcategory: {
        fontSize: 15,
        backgroundColor: colors.DEFAULT_WHITE,
        color: colors.DEFAULT_BLACK,
        paddingBottom: 5,
        paddingStart:5
    },
    messtext:{ 
        alignSelf: "center",
        fontSize: 18,
        color:colors.DEFAULT_BLACK,
        padding:10
        },
    container: {
        backgroundColor:colors.DEFAULT_WHITE,
        width: "100%",
        alignSelf: "center",
        padding:5,

        
    },

    Body: {
        flexDirection: "row",
        width: "95%",
        alignSelf:"center",
        backgroundColor:"#F5F5F5",
        borderRadius:10,

    },
    mainview: {
        flexDirection: "row",
        width: "90%",
        padding:14
    },
    categoryview: {
        fontSize: 15,
        color: colors.DEFAULT_BLACK,
        paddingStart:8,
        paddingTop:5,
    },
    cardview: {
        flexDirection: "row",
        width: "50%",
        paddingTop: 20
    },
    maincontainer:{ flexDirection: 'row', width: "100%", padding:10,backgroundColor:colors.BACKGROUND_COLOR},

    Limittext: {
        fontSize: 13,
        color: "#A9A9A9",
    },
    editicon: {
        paddingEnd: 20
    },
    Divider: {
        height: 2,
        width: 700
    },
    righticon:{
        justifyContent:"center",
      },
    loadercard: {
        justifyContent: 'center',
        flex: 1
    },
    activityindicator: {
        alignSelf: 'center',
    },
    loadingtext: {
        textAlign: 'center'
    },

});
export default styles;