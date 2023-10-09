import React, {useEffect} from 'react';
import {Container} from '../../../containers';
import {CButton, CPagination, CText, ProgressiveImage} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, View} from 'react-native';
import AuthStyle from '../Auth.style';
import {useNavigation} from '@react-navigation/native';
import {Celebrate, Facebook, Google} from '../../../assets/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {login} from '../../../redux/actions/Auth.action';
const {width, height} = Dimensions.get('screen');
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

function Confirm({route}) {
  const {btnName ,  title , des , image} = route?.params || {}
  console.log("🚀 ~ file: index.js:16 ~ Confirm ~ route?.params:", route?.params)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const rnBiometrics = new ReactNativeBiometrics({
    allowDeviceCredentials: true,
  });

  const reduxState = useSelector(({auth, global}) => {
    return {
      loading: auth.signUpLoading,
    };
  });
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

  const submit = async values => {
    dispatch(login());
  };

  useEffect(async () => {}, []);

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
      <View style={{alignSelf: 'center', marginVertical: 30}}>
        <ProgressiveImage
          source={image ? image :Celebrate}
          resizeMode={'contain'}
          style={{width: 200, height: 150 ,  alignSelf:"center"}}
        />
        <CText style={AuthStyle.confirmText}>{title ? title : 'Great'}</CText>
        <CText style={AuthStyle.confirmDetailText}>{ des ? des :" You have successfully registered in the portal"}</CText>
        <CButton
                title={btnName ? btnName :'Continue'}
                iconType=""
                loading={false}
                onPress={() => btnName ? submit() : navigation.navigate("Authentication")}
                buttonStyle={AuthStyle.buttonStyle}
              />
              
      </View>

        
    </Container>
  );
}
export default Confirm;
