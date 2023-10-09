import React, {useEffect} from 'react';
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
import {Celebrate, Facebook, Faceid, Google} from '../../../assets/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {login} from '../../../redux/actions/Auth.action';
const {width, height} = Dimensions.get('screen');
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

function Authentication({route}) {
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
    rightTextShow: true,
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
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          marginVertical: 30,
        }}>
        <ProgressiveImage
          source={Faceid}
          resizeMode={'contain'}
          style={{width: 60, height: 60, alignSelf: 'center'}}
        />
        <CText
          style={[
            AuthStyle.cardHeaderTitle,
            {marginVertical: 30, textAlign: 'center'},
          ]}>
          {'Authentication Method'}
        </CText>
        <CButton
          title={'Face ID'}
          iconType=""
          loading={false}
          onPress={() => navigation.navigate('FaceDetect')}
          buttonStyle={AuthStyle.buttonStyle}
          buttonText={AuthStyle.buttonText}
        />
        <View style={AuthStyle.orContainer}>
        <CText style={AuthStyle.cardBottomText}>Option out?</CText>
        <CText onPress={()=> navigation.navigate('Register')} style={[AuthStyle.cardBottomText2]}>Click here</CText>
      </View>
      </View>
    </Container>
  );
}
export default Authentication;
