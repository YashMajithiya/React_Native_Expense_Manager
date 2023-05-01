import { StyleSheet } from 'react-native'
import Colors from '../../Contants/colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    vimg: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.LIGHT_YELLOW,
    },
    imgconatiner: {
        flex: 1,
        width: 430,
        height: 430,
        marginTop: 30,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    img: {
        flex: 2,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    tagline: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
    },
    productname: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        color: Colors.NIGHT_RIDER,
        fontSize: 26,
    },
    text: {
        maxWidth: '90%',
        fontFamily: 'Roboto',
        paddingTop: 10,
        fontSize: 15,
        textAlign: 'center',
        color: Colors.Matterhorn,
    },
    btnmainview: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    btn: {
        backfaceVisibility: 'hidden',
        justifyContent: 'center',
        borderRadius: 100,
        height: 55,
        elevation: 5,
        textAlign: 'center',
        width: '50%',
        backgroundColor: Colors.BACKGROUND_COLOR,
        marginBottom: 30,
    }
});
export default styles;