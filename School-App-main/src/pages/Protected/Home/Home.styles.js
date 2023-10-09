import {Dimensions, StyleSheet} from 'react-native';
import {themes as theme, themes} from '../../../theme/colors';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 30,
    backgroundColor: theme['light'].colors.tertiary,
  },
  headerContainer: {
    // marginVertical: 60,
    height:130,
    marginTop:0,
    alignItems:"center",
    backgroundColor: theme.light.colors.primary,
    flexDirection: 'row',
    paddingTop:30,
    
    paddingHorizontal:20,
    justifyContent: 'space-between',
  },
  mainHeading: {
    color: theme.light.colors.dark,
    fontSize: 18,
    fontFamily: theme.font.semiBold,

    // fontWeight: '600',
  },
  subHeading: {
    color: theme.light.colors.secondary2dark,
    fontSize: 19,
    fontFamily: theme.font.regular,
    fontWeight: '600',
  },
  list: {
    alignSelf:'center',
    marginVertical: 30,
    flexDirection: 'row',
  },
  menu: {
    backgroundColor: '#ECF5FF',
    height: 110,
    flexDirection:"row",
    alignItems:"center",
    width: width*0.85,
    borderRadius: 10,
    marginVertical:15,
    paddingHorizontal:20
    // marginHorizontal: 30,
  },
  imgView: {
    backgroundColor: '#C1DCFD',
    alignItems:'center',
    height: 60,
    width: 60,
    borderRadius:10,
    justifyContent:"center"
    // justifyContent: 'center',
    // borderRadius: 10,
    // marginTop: 40,
    // marginHorizontal: 30,
  },
  menuName:{
    color: theme.light.colors.dark,
    fontSize: 18,
    width:"40%",
    marginLeft:20,
    fontFamily: theme.font.semiBold,
    // fontWeight: '800',
    // marginBottom:40,


  },
  graphView:{
    // backgroundColor:"red",
    marginVertical:20,
    borderWidth:2,
    // padding:10,
    
    borderColor:theme.light.colors.secondary4
  },
  headingGraph:{
    // backgroundColor:"red",
    flexDirection:"row",
    justifyContent:"space-between",
    borderBottomWidth:2,
    padding:15,
    alignItems:"center",
    marginBottom:20,
    borderColor:theme.light.colors.secondary4
  },
  filterView:{
    backgroundColor:theme.light.colors.primary,
    alignItems:"center",
    height:30,
    width:30,
    borderRadius:10,
    justifyContent:"center"
  },
  headerHeading:{
    color: theme.light.colors.tertiary,
    fontSize:16,
    fontFamily: theme.font.semiBold,

  },
  headerSubHeading:{
    color: theme.light.colors.tertiary,
    fontSize:12,
    fontFamily: theme.font.regular,

  }
});
