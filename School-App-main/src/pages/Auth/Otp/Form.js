import React, {useRef, memo} from 'react';
import {Formik} from 'formik';
import {View} from 'react-native';
import {CButton, CInput, CText} from '../../../components';
import AuthStyle from '../Auth.style';
import {themes} from '../../../theme/colors';
import OTPInputView from '@twotalltotems/react-native-otp-input'

function CForm(props) {
  const {submit, loading} = props;

  const form = useRef(null);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const cpassword = useRef(null);

  return (
    <Formik
      innerRef={form}
      onSubmit={values => submit(values)}
      initialValues={{}}
     >
      {({handleChange, values, handleSubmit, errors}) => {
        return (
          <View>
            <View style={AuthStyle.card}>
              <View style={[AuthStyle.cardHeader ,{justifyContent:"center" ,  alignItems:"center"}]}>
                <CText style={AuthStyle.cardHeaderTitle}>
                Enter Code
                </CText>
                <CText style={[AuthStyle.cardHeaderSubTitle ,{    textAlign: 'center', width:"75%"}]}>
                Please enter code sent your email code will expire in 
                </CText>
                <CText style={[AuthStyle.cardHeaderSubTitle ,{    textAlign: 'center', width:"75%"}]}>
                29s
                </CText>
              </View>

              <View style={AuthStyle.cardBody}>
                <CInput
                  ref={email}
                  // inputLabel={'Email_address'}
                  placeholder={'Email Address'}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  error={errors.email}
                  sec
                  leftIconType="MaterialCommunityIcons"
                  leftIconColor={themes.light.colors.fontColor}
                  leftIconNAme="email"
                  leftIconeSize={20}
                  returnKeyType="next"
                  onSubmitEditing={() => handleSubmit()}
                />

                
              </View>

              <CButton
                title={'Register'}
                iconType="left"
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
