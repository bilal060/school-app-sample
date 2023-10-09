import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { Calender, Ebook, Home, QrCode } from "../../pages/Protected";

const HomeStacks = createStackNavigator();

const StackScreenOptions = {
    headerShown: false
};

function HomeStack() {
    return (
        <>
        <HomeStacks.Navigator initialRouteName="home" screenOptions={StackScreenOptions}>
            <HomeStacks.Screen name="Home1" component={Home} />
            <HomeStacks.Screen name="QrCode" component={QrCode} />
            <HomeStacks.Screen name="Calender" component={Calender} />
         <HomeStacks.Screen name="EBook" component={Ebook} />

        </HomeStacks.Navigator>
        </>
    );
}
export default HomeStack;
