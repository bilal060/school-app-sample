import React, {Fragment} from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Icons from "../../assets/icons/CustomIcon";
import GlobalStyle from '../../assets/styling/GlobalStyle';
import {themes} from '../../theme/colors';
import MaskInput from 'react-native-mask-input';
import CText from '../cText/CText';
import CIcon from '../cIcon/CIcon';
import ProgressiveImage from '../progressiveImage/ProgressiveImage';
TextInput.defaultProps = {
  ...(TextInput.defaultProps || {}),
  allowFontScaling: false,
};

const CInput = React.forwardRef((props, ref) => {
  const {
    inputContainerStyle,
    inputInnerContainerStyle,
    inputLabel,
    inputLabelStyle,
    type,
    textStyle,
    leftIconName,
    toggleLeftIconFunc,
    leftIconButtonStyle,
    iconStyle,
    inputErrorStyle,
    error,
    toggleRightIconFunc,
    rightIconButtonStyle,
    rightIconName,
    rightButton,
    style,
    value,
    countryViewLoading,
    secureTextEntry = false,
    selectedCountry,
    leftIconType,
    leftIconNAme,
    leftIconColor,
    leftIconeSize,
    rightIconType,
    rightIconeSize,
    rightIconeColor,
    placeholder,
    onPress,
    selectValue,
    countryView,
    disabled,
    inputStyle
  } = props;
    console.log("🚀 ~ file: CInput.js:58 ~ CInput ~ value:", value)

  const renderLabel = () => {
    return (
      <CText style={[{...GlobalStyle.inputLabel, ...inputLabelStyle}]}>
        {inputLabel}
      </CText>
    );
  };

  const renderLeftIcon = () => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={toggleLeftIconFunc}
        style={{
          ...GlobalStyle.inputLeftIconButton,
          ...leftIconButtonStyle,
        }}>
        <CIcon
          type={leftIconType}
          name={leftIconNAme}
          color={leftIconColor}
          size={leftIconeSize}
          style={{...GlobalStyle.inputIcon, ...iconStyle}}
        />
      </TouchableOpacity>
    );
  };

  const renderRightIcon = () => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={toggleRightIconFunc}
        style={{
          ...GlobalStyle.inputRightIconButton,
          ...rightIconButtonStyle,
        }}>
        <CIcon
          type={rightIconType}
          name={rightIconName}
          color={rightIconeColor}
          size={rightIconeSize}
          style={{...GlobalStyle.inputIcon, ...iconStyle}}
        />

        {/* <AntDesign
                    name={rightIconName}
                    style={{ ...GlobalStyle.inputIcon, ...iconStyle }}
                /> */}
      </TouchableOpacity>
    );
  };

  const renderSelectionView = () => {
    return (
      <TouchableOpacity
        style={[
          {...GlobalStyle.inputStyle, ...style},
          {justifyContent: 'center'},
        ]}
        onPress={onPress}>
        <CText
          style={[
            {...GlobalStyle.inputTextStyle, ...textStyle},
             {color: themes['light'].colors.dark},
          ]}>
          {selectValue   ? selectValue?.name : placeholder}
        </CText>
      </TouchableOpacity>
    );
  };

  const renderCountryView = () => {
    return (
      <TouchableOpacity
        style={{
          ...GlobalStyle.countryView,
          ...countryView,
          ...(error && GlobalStyle.errorBorder),
        }}
        disabled={disabled}
        onPress={onPress}>
        {countryViewLoading ? (
          <ActivityIndicator color="#000080" size={24} />
        ) : (
          <Fragment>
            <ProgressiveImage
              resizeMode={'contain'}
              style={GlobalStyle.countryViewImage}
              source={{uri: selectedCountry?.flags?.png}}
            />
            <CText style={GlobalStyle.countryViewText}>
              {selectedCountry?.detail?.code}
            </CText>
            <AntDesign
              name="caretdown"
              style={GlobalStyle.countryViewDropDownIcon}
            />
          </Fragment>
        )}
      </TouchableOpacity>
    );
  };

  const renderErrorView = () => {
    return (
      <CText style={{...GlobalStyle.errorTextStyle, ...inputErrorStyle}}>
        {error}
      </CText>
    );
  };

  const renderInputView = () => {
    return (
      <MaskInput
        ref={ref}
        maskChar="x"
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={themes['light'].colors.dark}
        style={[{...GlobalStyle.inputStyle, ...style , } , inputStyle]}
        autoCapitalize="none"
        value={value}
        {...props}
      />
    );
  };

  return (
    <View style={{...GlobalStyle.inputContainer, ...inputContainerStyle}}>
      {inputLabel ? renderLabel() : null}
      <View
        style={{
          ...GlobalStyle.inputInnerContainer,
          ...inputInnerContainerStyle,
          ...(error && GlobalStyle.errorBorder),
        }}>
        {/* {leftIconType ? renderLeftIcon() : null} */}
        {selectedCountry && Object.keys(selectedCountry).length
          ? renderCountryView()
          : null}
        {type === 'view' ? renderSelectionView() : renderInputView()}

        {/* {rightIconName ? renderRightIcon() : null} */}
      </View>
      {error ? renderErrorView() : null}
    </View>
  );
});

CInput.defaultProps = {
  inputContainerStyle: {},
  inputLabelStyle: {},
  iconButtonStyle: {},
  inputInnerContainerStyle: {},
  iconStyle: {},
  inputErrorStyle: {},
  toggleIconFunc: () => null,

  toggleRightIconFunc: () => null,
  rightButton: () => null,
  rightIconButtonStyle: {},
  rightIconName: '',

  toggleLeftIconFunc: () => null,
  leftIconButtonStyle: {},
  leftIconName: '',

  inputLabel: '',
  error: '',
};

export default React.memo(CInput);
