import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { AddNewProfile, Calender, EditProfile, Faq, Home, Privacy, Profile, QrCode } from "../../pages/Protected";

const ProfileStacks = createStackNavigator();

const StackScreenOptions = {
    headerShown: false
};

function ProfileStack() {
    return (
        <ProfileStacks.Navigator initialRouteName="Profile" screenOptions={StackScreenOptions}>
            <ProfileStacks.Screen name="Profile" component={Profile} />
            <ProfileStacks.Screen name="Faq" component={Faq} />
            <ProfileStacks.Screen name="Privacy" component={Privacy} />
            <ProfileStacks.Screen name="EditProfile" component={EditProfile} />
            <ProfileStacks.Screen name="AddNewProfile" component={AddNewProfile} />



        </ProfileStacks.Navigator>
    );
}
export default ProfileStack;
