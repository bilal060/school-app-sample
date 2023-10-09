import {Dimensions, StyleSheet} from 'react-native';
import {themes as theme, themes} from '../../../theme/colors';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
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
  menu: {
    backgroundColor: '#F9F9F9',
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
  },
  imgView: {
    borderRadius: 10,
  },
  menuName: {
    color: theme.light.colors.dark,
    fontSize: 16,

    fontFamily: theme.font.semiBold,
  },
  sortBy: {
    color: theme.light.colors.dark,
    fontSize: 16,

    fontFamily: theme.font.bold,
  },
  grade: {
    color: theme.light.colors.shadow,
    fontSize: 12,
    fontFamily: theme.font.regular,
  },
  bookImage: {
    height: 140,
    width: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  downloadimage: {
    height: 25,
    width: 25,
  },
  downloadView: {
    position: 'absolute',
    backgroundColor: '#F9F9F9',
    borderWidth: 5,
    padding: 10,
    right: 0,
    borderColor: '#FFF',

    borderBottomLeftRadius: 20,
  },
  detailsView: {
    paddingTop: 30,
    borderTopWidth: 1,
    paddingBottom: 10,
    borderTopColor: '#C8C8C8',
  },
  filterView:{
    backgroundColor:theme.light.colors.primary,
    alignItems:"center",
    height:40,
    width:40,
    borderRadius:10,
    justifyContent:"center"
  },
});
