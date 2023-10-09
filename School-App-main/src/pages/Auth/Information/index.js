import React, {useEffect, useState} from 'react';
import {Container, CountriesModal} from '../../../containers';
import {CPagination, CText, ProgressiveImage} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, View, Modal} from 'react-native';
import AuthStyle from '../Auth.style';
import CForm from './Form';
import {useNavigation} from '@react-navigation/native';
import {Facebook, Google} from '../../../assets/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  getCities,
  getStates,
  login,
  student_Register,
} from '../../../redux/actions/Auth.action';
const {width, height} = Dimensions.get('screen');
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {handleSuccess} from '../../../utils/methods';

function Information({route}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const rnBiometrics = new ReactNativeBiometrics({
    allowDeviceCredentials: true,
  });

  const reduxState = useSelector(({auth, global}) => {
    return {
      loading: auth.regiterLoading,
      currentCountry: global.currentCountry,
      data: global.allCountries,
      state: global.allStates,
      cities: global?.allCities,
      countries: global.countries,
    };
  });

  console.log(
    '🚀 ~ file: index.js:23 ~ reduxState ~ reduxState:',
    reduxState?.cities,
  );

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

  const [countryModalIsOpen, updateCountryModalIsOpen] = useState(false);
  const [selectedCountry, updateSelectedCountry] = useState(
    reduxState.currentCountry,
  );
  const [cityModalIsOpen, updateCityModalIsOpen] = useState(false);
  const [selectedCity, updateSelectedCity] = useState('');
  const [selectedCityError, updateSelectedCityError] = useState('');

  const [stateModalIsOpen, updateStateModalIsOpen] = useState(false);
  const [selectedState, updateSelectedState] = useState('');
  const [selectedStateError, updateSelectedStateError] = useState('');

  const toggleCountryModal = () => {
    updateCountryModalIsOpen(!countryModalIsOpen);
  };

  const toggleStateModal = () => {
    updateStateModalIsOpen(!stateModalIsOpen);
  };
  const toggleCityyModal = () => {
    updateCityModalIsOpen(!cityModalIsOpen);
  };

  const cityOnSelect = (item) => {
    updateSelectedCity(item);
    toggleCityyModal();
  };

  const countryOnSelect = (item) => {
    updateSelectedCountry(item);
    toggleCountryModal();
  };

  const stateOnSelect = (item) => {
    updateSelectedState(item);
    toggleStateModal();
  };

  const submit = async (values) => {
    console.log("🚀 ~ file: index.js:96 ~ submit ~ values:", values)
    // if (!selectedState) {
    //   updateSelectedStateError('Please Select State');
    // } else if (!selectedCity) {
    //   updateSelectedCityError('Please Select City');
    // } else {
    //   const payload = {
    //     name: values?.fullName,
    //     email: values?.email,
    //     phone1: values?.number,
    //     phone2: values?.number,

    //     state: values?.state,
    //     city: values?.city,
    //     dob: values?.dob,
    //     // passwrod: values?.passwrod,
    //   };
    //   dispatch(student_Register(payload, res));
    // }
    const payload = {
      name: values?.fullName,
      email: values?.email,
      phone1: values?.number,
      phone2: values?.number,

      state: values?.state,
      city: values?.city,
      dob: values?.dob,
      passwrod: values?.passwrod,
    };
    dispatch(student_Register(payload, res));
    console.log('🚀 ~ file: index.js:52 ~ submit ~ values:', values);
  };

  const res = (rep) => {
    if (rep) {
      handleSuccess('Email has been sent your email');
      navigation.navigate('OTP' ,rep);
    }
    console.log('🚀 ~ file: index.js:112 ~ res ~ rep:', rep);
  };
  useEffect(async () => {
    dispatch(getStates('United States'));
  }, []);

  useEffect(async () => {
    if (selectedState) {
      dispatch(getCities(selectedState?.name));
    }
  }, [selectedState]);

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
      <CForm
        submit={submit}
        loading={reduxState?.loading}
        onForgotPress={() => navigation.navigate('Forgot')}
        selectedCountry={selectedCountry}
        toggleCountryModal={toggleCountryModal}
        onCityPress={toggleCityyModal}
        onStatePress={toggleStateModal}
        selectedCity={selectedCity}
        selectedCityError={selectedCityError}
        selectedState={selectedState}
        selectedStateError={selectedStateError}
      />

      <View style={AuthStyle.orContainer}>
        <CText style={AuthStyle.cardConfirmBottomText}>
          By confirming you agree to all
        </CText>
        <CText
          onPress={() => navigation.navigate('Register')}
          style={[AuthStyle.cardBottomText2]}>
          terms
        </CText>
      </View>

      <Modal
        transparent={true}
        visible={countryModalIsOpen}
        onRequestClose={() => toggleCountryModal()}>
        <View style={AuthStyle.modalContainer}>
          <View style={AuthStyle.modalInnerContainer}>
            <CountriesModal
              onSelect={(val) => countryOnSelect(val)}
              data={reduxState?.data}
            />
          </View>
        </View>
      </Modal>

      {selectedState ? (
        <Modal
          transparent={true}
          visible={cityModalIsOpen}
          onRequestClose={() => toggleCityyModal()}>
          <View style={AuthStyle.modalContainer}>
            <View style={AuthStyle.modalInnerContainer}>
              <CountriesModal
                onSelect={(val) => cityOnSelect(val)}
                data={reduxState?.cities || []}
                key="c"
              />
            </View>
          </View>
        </Modal>
      ) : null}

      <Modal
        transparent={true}
        visible={stateModalIsOpen}
        onRequestClose={() => toggleStateModal()}>
        <View style={AuthStyle.modalContainer}>
          <View style={AuthStyle.modalInnerContainer}>
            <CountriesModal
              onSelect={(val) => stateOnSelect(val)}
              data={reduxState?.state || []}
              key="c"
            />
          </View>
        </View>
      </Modal>
    </Container>
  );
}
export default Information;
