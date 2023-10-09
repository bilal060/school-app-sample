import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {CLoading} from '../components';
import {createStackNavigator} from '@react-navigation/stack';
import {getValueIntoAsyncStorage} from '../utils/asyncStorage/Functions';
import {WELCOME_SCREEN} from '../utils/asyncStorage/Constants';
// import {ChangePassword, Forgot, Login, Otp, Register , Information, Confirm, Authentication, FaceDetect, FaceVerify} from '../pages/Auth';
import { Home, QrCode } from '../pages/Protected';
import { Authentication, Confirm, FaceDetect, FaceVerify, Forgot, Information, Login, Otp, Register , ChangePassword } from '../pages/Auth';

export const Stack = createStackNavigator();

function Auth({initial}) {
  const dispatch = useDispatch();

  const [initialRouteName, updateInitialRouteName] = useState(null);

  const getAndCheck = async () => {
    let val = await getValueIntoAsyncStorage(WELCOME_SCREEN);
    if (val === 'hide') {
      updateInitialRouteName(initial ? 'Login' : 'sign_in');
    } else {
      updateInitialRouteName(initial ? 'welcome' : 'sign_in');
    }
  };

  useEffect(() => {
    (async () => {
      await getAndCheck();
    })();
  }, []);

  

  /** Layout */
  const Layout = initialRouteName => {
    if (!initialRouteName !== null) {
      return (
        <Stack.Navigator
          initialRouteName={initialRouteName}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Forgot" component={Forgot} />
          <Stack.Screen name="OTP" component={Otp} />
          <Stack.Screen name="Information" component={Information} />
          <Stack.Screen name="Confirm" component={Confirm} />
          <Stack.Screen name="Authentication" component={Authentication} />
          <Stack.Screen name="FaceDetect" component={FaceDetect} />
          <Stack.Screen name="FaceVerify" component={FaceVerify} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="QrCode" component={QrCode} />





          <Stack.Screen name="ChangePassword" component={ChangePassword} /> 
        </Stack.Navigator>
      );
    } else {
      return <CLoading showAnimation={true} loading={true} />;
    }
  };

  return Layout(initialRouteName);
}

export default React.memo(Auth);
