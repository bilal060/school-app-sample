import {Dimensions, StyleSheet} from 'react-native';
import {themes as theme, themes} from '../../../theme/colors';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  headerSubHeading: {
    color: theme.light.colors.dark,
    marginTop: 20,
    fontSize: 15,
    fontFamily: theme.font.regular,
    width: '60%',
    textAlign: 'center',
  },
  calender: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: theme.light.colors.secondary4,
  },
  flatList: {
    marginBottom: 40,
  },
  menu: {
    backgroundColor: theme.light.colors.secondary5,
    height: 110,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.85,
    borderRadius: 10,
    marginVertical: 15,
    paddingHorizontal: 20,
    // marginHorizontal: 30,
  },
  menuName: {
    color: theme.light.colors.dark,
    fontSize: 16,
    marginLeft: 20,
    fontFamily: theme.font.semiBold,
    // fontWeight: '800',
    // marginBottom:40,
  },
  menuName: {
    color: theme.light.colors.dark,
    fontSize: 16,
    marginLeft: 20,
    fontFamily: theme.font.semiBold,
  },
  dateTime: {
    color: theme.light.colors.dark,
    paddingLeft:5,
    letterSpacing: 0.8,
    fontSize: 12,
    fontFamily: theme.font.regular,
  },
});
