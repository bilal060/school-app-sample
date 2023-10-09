import { StyleSheet, Platform } from 'react-native';
import {themes as theme, themes} from "../../theme/colors";

export default StyleSheet.create({
    buttonStyle: {
        borderColor: theme['light'].colors.primary,
        borderWidth: 1,
        backgroundColor: theme['light'].colors.primary,
        alignItems: 'center',
        borderRadius: 10,
       justifyContent:'center',
        height: 50,
        
    },
    buttonText: {
        color: theme['light'].colors.tertiary,
        fontSize: 18,
        
        fontFamily: themes.font.medium,
    },
    buttonIcon: {
        color: theme['light'].colors.secondary,
        fontSize: 12,
        marginLeft: 10,
        marginTop: Platform.OS === 'ios' ? 2 : 4
    },

})
