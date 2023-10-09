import React, {useRef, memo} from 'react';
import {Formik} from 'formik';
import Validations from './Validations';
import {View, TouchableOpacity} from 'react-native';
import {
  CButton,
  CheckBox,
  CInput,
  CText,
  RadioButton,
} from '../../../components';
import AuthStyle from '../Auth.style';
import {themes} from '../../../theme/colors';
import ToggleSwitch from '../../../components/cToggleSwitch/CToggleSwitch';

import MaskInput, { Masks } from 'react-native-mask-input';



function CForm(props) {
  const {
    submit,
    loading,
    onForgotPress,
    selectedCity,
    selectedState,
    onStatePress,
    selectedCountry,
    toggleCountryModal,
    onCityPress,
    selectedCityError,
    selectedStateError
  } = props;

  console.log('🚀 ~ file: Form.js:18 ~ CForm ~ selectedState:',  selectedState?.name);

  const form = useRef(null);
  const fullName = useRef(null);
  const email = useRef(null);
  const number = useRef(null);
  const state = useRef(null);
  const city = useRef(null);
  const dob = useRef(null);
  const sID = useRef(null);
  const password = useRef(null);


  return (
    <Formik
      innerRef={form}
      onSubmit={(values) => submit(values)}
      initialValues={{}}
      validationSchema={Validations}>
      {({handleChange, values, handleSubmit, errors}) => {
        console.log("🚀 ~ file: Form.js:55 ~ CForm ~ errors:", errors)
        return (
          <View>
            <View style={AuthStyle.card}>
              <View style={AuthStyle.cardHeader}>
                <CText style={AuthStyle.cardHeaderTitle}>{'Get Started'}</CText>
              </View>

              <View style={AuthStyle.cardBody}>
                <CInput
                  ref={fullName}
                  // inputLabel={'Email_address'}
                  placeholder={'Name'}
                  value={values.fullName}
                  onChangeText={handleChange('fullName')}
                  error={errors.fullName}
                  sec
                  leftIconType="MaterialCommunityIcons"
                  returnKeyType="next"
                  onSubmitEditing={() => email.current.focus()}
                />
                <CInput
                  ref={email}
                  // inputLabel={'Email_address'}
                  placeholder={'Email'}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  error={errors.email}
                  sec
                  leftIconType="MaterialCommunityIcons"
                  returnKeyType="next"
                  onSubmitEditing={() => number.current.focus()}
                />

                {/* <CInput
                  ref={number}
                  // inputLabel={'Email_address'}
                  placeholder={'Phone No'}
                  value={values.number}
                  onChangeText={handleChange('number')}
                  error={errors.number}
                  sec
                  leftIconType="MaterialCommunityIcons"
                  returnKeyType="next"
                  onSubmitEditing={() => state.current.focus()}
                />   */}
                <CInput
                  ref={number}
                  type="number"
                  // disabled={true}
                  selectedCountry={selectedCountry}
                  onPress={() => toggleCountryModal()}
                  keyboardType={'numeric'}
                  placeholder={'000-000-0000'}
                  value={values?.number}
                  onChangeText={handleChange('number')}
                  inputInnerContainerStyle={AuthStyle.inputInnerContainerStyle}
                  inputStyle={AuthStyle.inputstyle}
                  error={errors.number}
                  returnKeyType="next"
                  inputKey="key"
                  onSubmitEditing={() => handleSubmit()}
                />
                <CInput
                  ref={state}
                  // inputLabel={'Email_address'}
                  placeholder={'States'}
                  value={values.state}
                  onChangeText={handleChange('state')}
                  error={errors.state}
                  sec
                  leftIconType="MaterialCommunityIcons"
                  returnKeyType="next"
                  onSubmitEditing={() => number.current.focus()}
                />

<CInput
                  ref={city}
                  // inputLabel={'Email_address'}
                  placeholder={'City'}
                  value={values.city}
                  onChangeText={handleChange('city')}
                  error={errors.city}
                  sec
                  leftIconType="MaterialCommunityIcons"
                  returnKeyType="next"
                  onSubmitEditing={() => number.current.focus()}
                />
                
                {/* <CInput
                  ref={state}
                  // inputLabel={'Email_address'}
                  placeholder={'States'}
                  // value={selectedState ? selectedState?.name : ''}
                  // onChangeText={handleChange('city')}
                  error={selectedStateError}
                  selectValue={selectedState}
                  sec
                  onPress={onStatePress}
                  type="view"
                  leftIconType="MaterialCommunityIcons"
                  returnKeyType="next"
                  onSubmitEditing={() => dob.current.focus()}
                />
                <CInput
                  ref={city}
                  // inputLabel={'Email_address'}
                  placeholder={'City'}
                  // value={selectedCity ? selectedCity?.name : ''}
                  // onChangeText={handleChange('city')}
                  error={selectedCityError}
                  sec
                  selectValue={selectedCity}

                  onPress={onCityPress}
                  type="view"
                  leftIconType="MaterialCommunityIcons"
                  returnKeyType="next"
                  onSubmitEditing={() => dob.current.focus()}
                /> */}
                <CInput
                  ref={dob}
                  // inputLabel={'Email_address'}
                  placeholder={'Select Date of Birth'}
                  value={values.dob}
                  onChangeText={handleChange('dob')}
                  error={errors.dob}
                  sec
                  mask={Masks.DATE_DDMMYYYY}
                  leftIconType="MaterialCommunityIcons"
                  returnKeyType="next"
                  onSubmitEditing={() => sID.current.focus()}
                />
                <CInput
                  ref={sID}
                  // inputLabel={'Email_address'}
                  placeholder={'Student ID'}
                  value={values.sID}
                  onChangeText={handleChange('sID')}
                  error={errors.sID}
                  sec
                  leftIconType="MaterialCommunityIcons"
                  returnKeyType="next"
                  onSubmitEditing={() => password.current.focus()}
                />
                 <CInput
                  ref={password}
                  // inputLabel={'Email_address'}
                  placeholder={'Password'}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  error={errors.password}
                  // sec
                  leftIconType="MaterialCommunityIcons"
                  returnKeyType="done"
                  onSubmitEditing={() => handleSubmit()}
                />
              </View>

              <CButton
                title={'Confirm'}
                iconType=""
                loading={loading}
                onPress={() => handleSubmit()}
              />
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
export default memo(CForm);
