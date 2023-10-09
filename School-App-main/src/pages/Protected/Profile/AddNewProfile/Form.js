import React, {useRef, memo} from 'react';
import {Formik} from 'formik';
import Validations from './Validations';
import {View, TouchableOpacity} from 'react-native';
import {
  CButton,
  CheckBox,
  CInput,
  CText,
  ProgressiveImage,
  RadioButton,
} from '../../../../components';
import AuthStyle from '../Profile.styles';
import {EditPic, Profile} from '../../../../assets/images';

function CForm(props) {
  const {
    submit,
    loading,
    onForgotPress,
    selectedCountry,
    toggleCountryModal,
    onButtonPress,
    onEditPress,
  } = props;

  const form = useRef(null);
  const fullName = useRef(null);
  const email = useRef(null);
  const number = useRef(null);
  const state = useRef(null);
  const city = useRef(null);
  const sCode = useRef(null);
  const relation = useRef(null);

  const sID = useRef(null);

  return (
    <Formik
      innerRef={form}
      enableReinitialize={true}
      onSubmit={values => submit(values)}
      initialValues={{}}
      validationSchema={Validations}>
      {({handleChange, values, handleSubmit, errors}) => {
        return (
          <View>
            <View style={AuthStyle.card}>
              <>
                <ProgressiveImage
                  source={Profile}
                  resizeMode="contain"
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                    alignSelf: 'center',
                  }}
                />
                <TouchableOpacity
                  style={AuthStyle.editView}
                  onPress={onEditPress}>
                  <ProgressiveImage
                    source={EditPic}
                    resizeMode="contain"
                    style={AuthStyle.editIcon}
                  />
                </TouchableOpacity>
              </>

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
                  onChangeText={val => {
                    let phone = val;
                    let reg = /^0+/gi;
                    if (phone.match(reg)) {
                      phone = phone.replace(reg, '');
                    }
                    handleChange('phone')(number);
                  }}
                  inputInnerContainerStyle={AuthStyle.inputInnerContainerStyle}
                  inputStyle={AuthStyle.inputstyle}
                  error={errors.number}
                  returnKeyType="next"
                  onSubmitEditing={() => handleSubmit()}
                />
                <CInput
                  ref={state}
                  // inputLabel={'Email_address'}
                  placeholder={'State'}
                  value={values.state}
                  onChangeText={handleChange('state')}
                  error={errors.state}
                  sec
                  leftIconType="MaterialCommunityIcons"
                  returnKeyType="next"
                  onSubmitEditing={() => city.current.focus()}
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
                  onSubmitEditing={() => relation.current.focus()}
                />
                <CInput
                  ref={relation}
                  // inputLabel={'Email_address'}
                  placeholder={'Relation'}
                  value={values.relation}
                  onChangeText={handleChange('relation')}
                  error={errors.relation}
                  sec
                  leftIconType="MaterialCommunityIcons"
                  returnKeyType="next"
                  onSubmitEditing={() => sCode.current.focus()}
                />
                <CInput
                  ref={sCode}
                  // inputLabel={'Email_address'}
                  placeholder={'Social Security No.'}
                  value={values.sCode}
                  onChangeText={handleChange('sCode')}
                  error={errors.sCode}
                  sec
                  leftIconType="MaterialCommunityIcons"
                  returnKeyType="next"
                  onSubmitEditing={() => sID.current.focus()}
                />

                <CInput
                  ref={sID}
                  // inputLabel={'Email_address'}
                  placeholder={
                    'Describe the reason why you want to take this person with  you?'
                  }
                  value={values.sID}
                  onChangeText={handleChange('sID')}
                  error={errors.sID}
                  sec
                  inputStyle={AuthStyle.inputHeight}
                  multiline
                  numberOfLines={10}
                  leftIconType="MaterialCommunityIcons"
                  returnKeyType="done"
                  onSubmitEditing={() => handleSubmit()}
                />
              </View>
              <CButton
                title={'Cancel'}
                iconType=""
                type="without_outline"
                loading={loading}
                buttonStyle={{marginVertical: 20}}
                onPress={() => handleSubmit()}
              />
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
