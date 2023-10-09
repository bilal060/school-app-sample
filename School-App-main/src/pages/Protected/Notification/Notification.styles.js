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
  menu: {
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.85,
    borderRadius: 10,
    marginVertical: 15,
    paddingHorizontal: 20,
    // marginHorizontal: 30,
  },
  imgView: {
    backgroundColor: '#C1DCFD',
    alignItems:'center',
    height: 65,
    width: 65,
    borderRadius:10,
    justifyContent:"center"
 
  },
  menuName: {
    color: theme.light.colors.dark,
    fontSize: 16,
    marginLeft: 20,
    fontFamily: theme.font.semiBold,
   
  },
  menuDes: {
    color: theme.light.colors.dark,
    lineHeight: 16,
    marginLeft: 20,
    fontSize:12,
    width:"55%",
    fontFamily: theme.font.medium,
    marginTop:10,
    fontWeight:"400"
   
  },
  
});
