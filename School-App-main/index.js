/**
 * @format
 */

import App from './App';
import React from 'react'

import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry, LogBox, StatusBar, View } from 'react-native';
import { Provider } from "react-redux";
import Toast from "react-native-toast-message";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";
import { store } from './src/redux/store'
import 'react-native-gesture-handler';
import { navigationRef } from './src/routing/Ref';
import { themes } from './src/theme/colors';
import { interceptor } from './src/utils/interceptor';
LogBox.ignoreAllLogs();

interceptor()
const theme = {
    colors: {
        background: themes.light.colors.tertiary,
    },
};

const Container = () => {

    return (
        <>
            <NavigationContainer theme={theme} ref={navigationRef}>
                <App />
            </NavigationContainer>
        </>
    )
};

function SchoolApp() {

    return (
        <Provider store={store} >
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
                animated={true}
                barStyle={'dark-content'} />
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <Container />

            </SafeAreaProvider>
        </Provider>
    )

}

AppRegistry.registerComponent(appName, () => SchoolApp);
