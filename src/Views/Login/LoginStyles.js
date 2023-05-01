import { StyleSheet } from 'react-native'
import Colors from '../../Contants/colors';
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.DEFAULT_WHITE,
        height: "60%",
    },
    headerWrapper: {
        backgroundColor: Colors.BACKGROUND_COLOR,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    header: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconWhite: {
        color: Colors.DEFAULT_WHITE,
    },
    headerText: {
        fontWeight: 'bold',
        color: Colors.DEFAULT_WHITE,
        fontSize: 20,
    },
    img: {
        alignItems: 'center',
    },
    imgcontainer: {
        width: 20,
        height:"100%",
    },
    imgstyle: {
        width: "100%",
        height: "80%",
        paddingBottom: 10
    },
    mobilenoinput: {
        width: "85%",
        alignSelf: "center",
        fontFamily: 'Roboto',
        paddingTop:10,
        color: Colors.DEFAULT_BLACK,
    },
    btnmainview: {
        paddingTop: 10,
    },
    btnview: {
        backfaceVisibility: 'hidden',
        justifyContent: 'center',
        borderRadius: 100,
        height: 55,
        elevation:5,
        textAlign: 'center',
        alignSelf:"center",
        width: '50%',
        backgroundColor: Colors.BACKGROUND_COLOR,
    }
});
export default styles;