import React, {useEffect, useRef, useState} from 'react';
import {Container} from '../../../containers';
import {
  CButton,
  CPagination,
  CText,
  ProgressiveImage,
} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, View} from 'react-native';
import AuthStyle from '../Auth.style';
import {useNavigation} from '@react-navigation/native';
import {Facebook, Google, Profile, Rocket} from '../../../assets/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {login, uploadImage} from '../../../redux/actions/Auth.action';
const {width, height} = Dimensions.get('screen');
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {RNCamera} from 'react-native-camera';
import {handleError, handleSuccess} from '../../../utils/methods';

function FaceDetect({route}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [sleectecImage, setImage] = useState(null);
  const [sleectecImageBase64, setImageBase4] = useState(null);

  const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.front);
  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  const rnBiometrics = new ReactNativeBiometrics({
    allowDeviceCredentials: true,
  });

  const reduxState = useSelector(({auth, global}) => {
    console.log('🚀 ~ file: FaceDetect.js:29 ~ reduxState ~ auth:', auth);
    return {
      loading: auth.signUpLoading,
      registerData: auth.register,
    };
  });
  console.log(
    '🚀 ~ file: FaceDetect.js:29 ~ reduxState ~ reduxState:',
    reduxState.registerData,
  );

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log('🚀 ~ file: FaceDetect.js:30 ~ takePicture ~ data:', data);
      setImage('data:image/png;base64,' + data?.base64);
      setImageBase4(data?.base64)

      // setTimeout(() => {
      //   navigation.navigate("Confirm" ,{
      //     btnName:"Go to Home",
      //     title:"Awesome",
      //     des:"We have successfully processed your facial verification",
      //     image:Rocket
      // })
      // }, 3000);
    }
  };

  const headerProps = {
    showCenterLogo: false,
    headerLeft: true,
    headerTitle: 'Sing in',
    bgHeadeStyle: {
      width: width * 1,
      height: height * 0.3,
      marginTop: -30,
      paddingVertical: 40,
      paddingHorizontal: 20,
    },
  };

  const submit = async (values) => {
    console.log("🚀 ~ file: FaceDetect.js:79 ~ submit ~ values:", values)
    if (!sleectecImageBase64) {
        alert('Please Select Image');
    } else {
      const payload = {
        base64Image : sleectecImageBase64
      }
      
      dispatch(uploadImage(reduxState?.registerData?._id, payload , response));
    }

    // dispatch(login());
  };

  const response = (res) => {
    if(res){
      handleSuccess('Picture Upload Successfully')
      navigation.navigate('Login')
    }
    console.log('🚀 ~ file: FaceDetect.js:84 ~ response ~ res:', res);
  };
  useEffect(async () => {
    rnBiometrics.isSensorAvailable().then((resultObject) => {
      const {available, biometryType} = resultObject;

      if (available && biometryType === BiometryTypes.TouchID) {
        console.log('TouchID is supported');
      } else if (available && biometryType === BiometryTypes.FaceID) {
        console.log('FaceID is supported');
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        console.log('Biometrics is supported', BiometryTypes.FaceID);
      } else {
        console.log('Biometrics not supported');
      }
    });
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
      <View style={AuthStyle.card}>
        <View style={AuthStyle.cardHeader}>
          <CText style={AuthStyle.cardHeaderTitle}>{'Let’s Begin'}</CText>
          <CText style={[AuthStyle.cardHeaderSubTitle, {fontSize: 18}]}>
            {'Get your face straight to the camera'}
          </CText>
        </View>

        <View style={{alignSelf: 'center', marginVertical: 30}}>
          <RNCamera
            ref={cameraRef}
            style={AuthStyle.preview}
            type={cameraType}
            flashMode={flashMode}
            // captureQuality={RNCamera.Constants.CaptureQualit}
          />
        </View>
       
        <CButton
          title={'Capture'}
          iconType=""
          loading={false}
          onPress={() => takePicture()}
          buttonStyle={AuthStyle.buttonStyle}
        />
         <CButton
          title={'Upload'}
          iconType=""
          loading={false}
          onPress={() => submit()}
          buttonStyle={AuthStyle.buttonStyle}
        />
      </View>
    </Container>
  );
}
export default FaceDetect;
