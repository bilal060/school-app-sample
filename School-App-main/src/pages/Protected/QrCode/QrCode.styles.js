import {Dimensions, StyleSheet} from 'react-native';
import {themes as theme, themes} from '../../../theme/colors';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    height: height * 0.62,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSubHeading: {
    color: theme.light.colors.dark,
    marginTop: 20,
    fontSize: 15,
    fontFamily: theme.font.regular,
    width: '60%',
    textAlign: 'center',
  },
 
});
