import { StyleSheet } from 'react-native';
import colors from '../../Contants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.DEFAULT_WHITE,
  },
  img: {
    width: 230,
    height: 230,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 25,
    color: '#5D5FEF',
    fontWeight: 'bold',
  },
});
export default styles;
