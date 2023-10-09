import React, { useEffect } from 'react';
import {Container} from '../../../containers';
import {CPagination, CText, ProgressiveImage} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, View} from 'react-native';
import AuthStyle from '../Auth.style';
import CForm from './Form';
import {useNavigation} from '@react-navigation/native';
import {Facebook, Google} from '../../../assets/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { login } from '../../../redux/actions/Auth.action';
const {width, height} = Dimensions.get('screen')
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
import { Alert } from 'react-native/Libraries/Alert/Alert';
import LocalAuthentication from 'react-native-local-authentication';
import DeviceInfo from 'react-native-device-info';
import Toast from 'react-native-toast-message';


function Login({route}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true })


  const reduxState = useSelector(({auth, global}) => {
    return {
      loading: auth.signUpLoading,
    };
  });
  const headerProps = {
    showCenterLogo: false,
    headerLeft: true,
    headerTitle: 'Sing in',
    bgHeadeStyle:{width: width * 1, height: height * 0.3, marginTop: -30, paddingVertical: 40, paddingHorizontal: 20}
  };

  const submit = async values => {
    console.log("🚀 ~ file: index.js:39 ~ submit ~ values:", values)
    // if(values.email === "student1@yopmail.com"  && values.password === "11223344"){
      const payload ={
        email :values?.email,
        password:values.password
      }
      dispatch(login(payload , resp)) 
      
      
    // } else {
    //   alert("Please Enter Valid Email Password")
    // }

  };

  const resp = (res) => {
    if(res){
      navigation.navigate("FaceVerify" , {res})
    }
   
  }
  useEffect(async() => {
 
    rnBiometrics.isSensorAvailable()
  .then((resultObject) => {
    const { available, biometryType } = resultObject
    console.log("🚀 ~ file: index.js:51 ~ .then ~ biometryType:", biometryType)

    if (available && biometryType === BiometryTypes.TouchID) {
      console.log("🚀 ~ file: index.js:53 ~ .then ~ biometryType:", biometryType)
      console.log('TouchID is supported')
    } else if (available && biometryType === BiometryTypes.FaceID) {
      console.log('FaceID is supported' )
    } else if (available && biometryType === BiometryTypes.Biometrics) {
      console.log('Biometrics is supported' , BiometryTypes.FaceID)
    } else {
      console.log('Biometrics not supported')
    }
  })

 

  }, []);

  React.useEffect(() => {
     
  }, []);

 
  

  return (
    <Container
      backgroundColor={'theme-color'}
      showPattern={true}
      scrollView={true}
      style={AuthStyle.style}
      headerProps={headerProps}
      loading={reduxState?.loading}
      scrollViewProps={{
        contentContainerStyle: AuthStyle.container,
      }}>
        
      <CForm submit={submit} loading={reduxState?.loading} onForgotPress={()=> navigation.navigate('Forgot')} />
      
      <View style={AuthStyle.orContainer}>
        <CText style={AuthStyle.cardBottomText}>Don’t have an account?</CText>
        <CText onPress={()=> navigation.navigate('Information')} style={[AuthStyle.cardBottomText2]}>Register</CText>
      </View>
    </Container>
  );
}
export default Login;


