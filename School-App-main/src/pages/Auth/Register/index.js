import React, { useState } from 'react';
import {Container, CountriesModal} from '../../../containers';
import {CPagination, CText, ProgressiveImage} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, View , Modal} from 'react-native';
import AuthStyle from '../Auth.style';
import CForm from './Form';
import {useNavigation} from '@react-navigation/native';
import {Facebook, Google} from '../../../assets/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen')

function Register({route}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const reduxState = useSelector(({auth, global}) => {
    console.log("🚀 ~ file: index.js:18 ~ reduxState ~ reduxState:", reduxState)
    return {
      loading: auth.regiterLoading,
      currentCountry: global.currentCountry,
      countries: global.countries,
    };
  });


  const [countryModalIsOpen, updateCountryModalIsOpen] = useState(false);
  const [selectedCountry, updateSelectedCountry] = useState(
      reduxState.currentCountry
  );
  console.log("🚀 ~ file: index.js:30 ~ Register ~ selectedCountry:", selectedCountry)

  const toggleCountryModal = () => {
      updateCountryModalIsOpen(!countryModalIsOpen);
  };

  const countryOnSelect = (item) => {
      updateSelectedCountry(item);
      toggleCountryModal();
  };

  // const submit = async (values) => {
  //     // setPhoneError("");
  //     let perifix = `${selectedCountry?.idd?.root}${
  //         selectedCountry?.idd?.suffixes?.length > 1
  //             ? ""
  //             : selectedCountry?.idd?.suffixes[0]
  //     }`;
  //     let payload = _.omit(values, ["phone"]);
  //     payload.phone =  selectedCountry.detail.code+values.phone;
 
  // };


  const headerProps = {
    showCenterLogo: false,
    headerLeft: true,
    headerTitle: 'Sing in',
    bgHeadeStyle:{width: width * 1, height: height * 0.3, marginTop: -30, paddingVertical: 40, paddingHorizontal: 20}
  };

  const submit = async values => {
    // alert("sss")
    navigation.navigate('OTP')
  };


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
        
      <CForm submit={submit} loading={reduxState?.loading} selectedCountry={selectedCountry}
                toggleCountryModal={toggleCountryModal}
                />
      {/* <View style={AuthStyle.orContainer}>
        <ProgressiveImage
          source={Google}
          resizeMode={'contain'}
          style={AuthStyle.IconImage}
        />
        <ProgressiveImage
          source={Facebook}
          resizeMode={'contain'}
          style={AuthStyle.IconImage}
        />
      </View> */}
      <View style={AuthStyle.orContainer}>
        <CText style={AuthStyle.cardBottomText}>Already have an account? </CText>
        <CText onPress={()=> navigation.navigate('Login')} style={[AuthStyle.cardBottomText2]}>Login</CText>
      </View>
      
    </Container>
  );
}
export default Register;
