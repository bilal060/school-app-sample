import React, {useEffect, useState} from 'react';
import {Container, CountriesModal} from '../../../../containers';
import {CPagination, CText, ProgressiveImage} from '../../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, View, Modal} from 'react-native';
import AuthStyle from '../Profile.styles';
import CForm from './Form';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function EditProfile({route}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [response, setResponse] = useState(null);

  const rnBiometrics = new ReactNativeBiometrics({
    allowDeviceCredentials: true,
  });

  const reduxState = useSelector(({auth, global}) => {
    return {
      loading: auth.signUpLoading,
      currentCountry: global.currentCountry,
      countries: global.countries,
    };
  });
  const headerProps = {
    headerTitle: 'Edit Profile',
    showCart: true,
    ProgressiveImageHeader: false,
    headerRight: true,
    backBtnColor: '#FFF',
  };
  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      launchCamera(options, setResponse);
    } else {
      launchImageLibrary(options, setResponse);
    }
  }, []);

  const [countryModalIsOpen, updateCountryModalIsOpen] = useState(false);
  const [selectedCountry, updateSelectedCountry] = useState(
    reduxState.currentCountry,
  );
  console.log(
    '🚀 ~ file: index.js:30 ~ Register ~ selectedCountry:',
    selectedCountry,
  );

  const toggleCountryModal = () => {
    updateCountryModalIsOpen(!countryModalIsOpen);
  };

  const countryOnSelect = item => {
    updateSelectedCountry(item);
    toggleCountryModal();
  };

  const submit = async values => {
    navigation.navigate('Profile');
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
        contentContainerStyle: AuthStyle.formContainer,
      }}>
      <CForm
        submit={submit}
        loading={reduxState?.loading}
        onForgotPress={() => navigation.navigate('Forgot')}
        selectedCountry={selectedCountry}
        toggleCountryModal={toggleCountryModal}
        onEditPress={()=> onButtonPress()}
      />

      

      <Modal
        transparent={true}
        visible={countryModalIsOpen}
        onRequestClose={() => toggleCountryModal()}>
        <View style={AuthStyle.modalContainer}>
          <View style={AuthStyle.modalInnerContainer}>
            <CountriesModal onSelect={val => countryOnSelect(val)} />
          </View>
        </View>
      </Modal>
    </Container>
  );
}
export default EditProfile;
