import {Dimensions, StyleSheet} from 'react-native';
import { Left } from '../../../assets/images';
import {themes as theme, themes} from '../../../theme/colors';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    // height: height * 0.62,
    marginTop: 30,
    marginHorizontal: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  headerSubHeading: {
    color: theme.light.colors.dark,
    marginTop: 20,
    fontSize: 18,
    fontFamily: theme.font.semiBold,
    // width: '60%',
    textAlign: 'center',
  },
  userEmail: {
    color: theme.light.colors.primary,
    fontSize: 13,
    marginTop: 5,
    letterSpacing: 0.5,

    fontFamily: theme.font.regular,
    textAlign: 'center',
  },
  userPhone: {
    color: theme.light.colors.dark,
    fontSize: 13,
    marginTop: 5,
    letterSpacing: 1,
    fontFamily: theme.font.regular,
    textAlign: 'center',
  },
  menu: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.87,
    marginTop: 10,
    borderRadius: 10,
    // marginVertical:15,
    // paddingHorizontal:-20
    // marginHorizontal: 30,
  },
  imgView: {
    backgroundColor: 'rgba(37, 99, 235, 0.1)',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 10,

    justifyContent: 'center',
  },
  menuName: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
  },
  title: {
    color: theme.light.colors.dark,
    fontSize: 14,
    marginTop: 5,
    letterSpacing: 1,
    fontFamily: theme.font.semiBold,
  },
  faqTitle: {
    color: theme.light.colors.dark,
    fontSize: 13,
    marginTop: 5,
    letterSpacing: 1,
    fontFamily: theme.font.semiBold,
  },
  tyle: {
    flex: 1,
  },
  faqBody: {
    color: theme.light.colors.gray2,
    fontSize: 14,
    marginTop: 5,
    letterSpacing: 1,
    fontFamily: theme.font.regular,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(37,99,235, 0.5)',
    paddingTop: 200,
    paddingHorizontal: 20,
  },
  modalInnerContainer: {
    flex: 1,
    backgroundColor: theme['light'].colors.tertiary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  editIcon: {
    width: 25,
    height: 25,
    borderRadius: 10,
    alignSelf: 'center',
   
  },
  editView:{
    position:"absolute",
    top:height*0.13,
    right:width*0.3,
    resizeMode:"contain"
  },

  formContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    backgroundColor: theme['light'].colors.tertiary,
  },

  header: {
    alignItems: 'center',
    paddingVertical: 50,
  },
  headerLogo: {
    width: 200,
    height: 53,
  },

  style: {
    flex: 1,
    marginBottom: 60,
  },
  forgot: {
    // paddingBottom:20,
    alignSelf: 'center',
    color: theme['light'].colors.fontColor,
  },
  card: {
    // borderRadius: 20,
    backgroundColor: theme['light'].colors.tertiary,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  cardHeader: {
    marginBottom: 30,
  },
  cardHeaderTitle: {
    fontSize: 32,
    fontFamily: theme.font.semiBold,
    fontWeight: '600',
    color: theme['light'].colors.dark,
    marginBottom: 10,
  },
  cardHeaderSubTitle: {
    fontSize: 15,
    fontFamily: theme.font.regular,
    color: theme['light'].colors.fontLowColor,
    marginBottom: 10,
  },

  cardBody: {
    marginBottom: 15,
    marginTop: 20,
  },

  cardBottomText: {
    fontSize: 13,
    fontFamily: theme.font.semiBold,
    color: theme['light'].colors.dark,
    textAlign: 'center',
    // marginTop: 12,
  },
  cardConfirmBottomText: {
    fontSize: 13,
    fontFamily: theme.font.light,
    color: theme['light'].colors.dark,
    textAlign: 'center',
    // marginTop: 12,
  },

  cardBottomText2: {
    fontSize: 13,
    paddingLeft: 5,
    fontFamily: theme.font.semiBold,
    color: theme['light'].colors.fontColor,
  },

  orContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  orContainerText: {
    fontSize: 20,
    fontFamily: theme.font.regular,
    color: theme['light'].colors.fontColor,
  },

  bottomButton: {
    marginBottom: 20,
  },

  otpContainer: {
    alignItems: 'stretch',
    marginBottom: 30,
  },
  IconImage: {
    height: 30,
    width: 30,
    marginHorizontal: 15,
  },

  otpInputView: {
    height: 62,
    // width: '100%',
    marginBottom: 80,
    alignItems: 'stretch',
    // backgroundColor: 'red'
  },

  codeInputFieldStyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: themes['light'].colors.dark,
    position: 'relative',
    fontSize: 20,
    fontFamily: themes.font.regular,
    color: themes['light'].colors.primary,
    borderRadius: 0,
    height: 62,
    // marginHorizontal: 5,
    minWidth: 62,
    maxWidth: 62,
    width: 'auto',
    flex: 1,
  },
  continueText: {
    color: themes['light'].colors.gray3,
    alignSelf: 'flex-start',
    marginTop: -40,
  },

  recieveCode: {
    color: themes['light'].colors.dark,
    marginTop: 10,
    fontFamily: themes.font.light,
    fontSize: 14,
    letterSpacing: 1,
    // fontWeight:"600"
  },

  codeInputHighlightStyle: {
    borderColor: themes['light'].colors.secondary,
    borderWidth: 2,
    color: themes['light'].colors.fontColor,
  },

  linkButtonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },

  linkButtonWithIcon: {
    flexDirection: 'row',
  },
  linkButtonText: {
    fontSize: 14,
    color: themes['light'].colors.lightGray,
    fontFamily: themes.font.regular,
    marginRight: 5,
  },
  linkButtonOtherText: {
    color: themes['light'].colors.fontColor,
    fontFamily: themes.font.medium,
  },

  confirmText: {
    color: themes['light'].colors.fontSecondaryColor,
    fontFamily: themes.font.medium,
    textAlign: 'center',
    fontSize: 42,
    fontWeight: '600',
  },
  confirmDetailText: {
    color: themes['light'].colors.dark,
    fontFamily: themes.font.regular,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 30,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(37,99,235, 0.5)',
    paddingTop: 200,
    paddingHorizontal: 20,
  },
  modalInnerContainer: {
    flex: 1,
    backgroundColor: theme['light'].colors.tertiary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bgHeadeStyle: {
    width: width * 1,
    height: height * 0.45,
    marginTop: -30,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  buttonStyle: {
    marginVertical: 30,
    width: width * 0.8,
    alignSelf: 'center',
  },
  buttonText: {
    color: themes['light'].colors.tertiary,
    fontFamily: themes.font.semiBold,
    textAlign: 'center',
  },
  inputstyle: {
    borderWidth: 0,
  },
  inputInnerContainerStyle: {
    borderWidth: 1,
    borderColor: themes.light.colors.gray1,
  },
  inputHeight:{
    height:150,
paddingBottom: 80
    // marginTop:-50,
    
    
  }
});
