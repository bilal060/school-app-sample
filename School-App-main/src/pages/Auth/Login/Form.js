import React, {useRef, memo} from 'react';
import {Formik} from 'formik';
import Validations from './Validations';
import {View , TouchableOpacity} from 'react-native';
import {CButton, CheckBox, CInput, CText, RadioButton} from '../../../components';
import AuthStyle from '../Auth.style';
import {themes} from '../../../theme/colors';
import ToggleSwitch from '../../../components/cToggleSwitch/CToggleSwitch';

function CForm(props) {
  const {submit, loading , onForgotPress} = props;

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
      validationSchema={Validations}>
      {({handleChange, values, handleSubmit, errors}) => {
        
        return (
          <View>
            <View style={AuthStyle.card}>
              <View style={AuthStyle.cardHeader}>
                <CText style={AuthStyle.cardHeaderTitle}>
                  {'Welcome Back!'}
                </CText>
                <CText style={AuthStyle.cardHeaderSubTitle}>
                  {'Login to your account'}
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
                  onSubmitEditing={() => password.current.focus()}
                />

                <CInput
                  ref={password}
                  // inputLabel={'Password'}
                  placeholder={'Password'}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                  error={errors.password}
                  returnKeyType="next"
                  onSubmitEditing={() => handleSubmit()}
                  leftIconType="MaterialCommunityIcons"
                  leftIconColor={themes.light.colors.fontColor}
                  leftIconNAme="email"
                  leftIconeSize={18}
                  rightIconType="AntDesign"
                  rightIconName="eyeo"
                  rightIconeColor={themes.light.colors.gray4}
                  rightIconeSize={18}
                />
              </View>
              <View style={{marginTop:-25 , marginRight:'15%'}}>
                <ToggleSwitch  size="small" label="Save my Information for next time" isOn={true} />
                {/* <CText style={AuthStyle.continueText}>Or continue with</CText> */}
              </View>
              <CButton
                title={'Sign In'}
                iconType=""
                loading={loading}
                onPress={() => handleSubmit()}
              />

              
              <TouchableOpacity onPress={onForgotPress} style={AuthStyle.forgot}>
                <CText style={AuthStyle.forgotText}>Forgot password?</CText>
              </TouchableOpacity>
            
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
export default memo(CForm);
