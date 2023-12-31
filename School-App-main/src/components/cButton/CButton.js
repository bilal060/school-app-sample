import React, {Fragment} from 'react';
import {TouchableOpacity, ActivityIndicator, Animated} from 'react-native';
import styles from './CButton.style';
import {themes} from '../../theme/colors';
import CIcon from '../cIcon/CIcon';
// import Icon from '../../assets/icons/CustomIcon';

const CButton = props => {
  const {
    title,
    children,
    loading,
    disabled,
    loaderProps,
    buttonText,
    activeOpacity,
    onPress,
    buttonStyle,
    theme,
    colorType,
    type,
    iconType = 'custom',
    iconName,
    iconStyle = {},
    iconSize=22,
    iconColor =themes.light.colors.tertiary
  } = props;

  let backgroundColor = colorType;
  let borderColor = colorType;
  let textColor = colorType;

  if (type === 'without_outline') {
    backgroundColor = 'tertiary';
  } else if (type === 'outline') {
    backgroundColor = 'secondary';
  } else {
    textColor = 'tertiary';
  }
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.buttonStyle,
        {
          backgroundColor:
            type === 'without_outline'
              ? 'rgba(37, 99, 235, 0.1)'
              : themes['light'].colors[backgroundColor],
          borderColor:
            type === 'without_outline'
              ? themes['light'].colors[borderColor] 
              : themes['light'].colors[borderColor],
        },
        (disabled || loading) && {opacity: 0.5},
        buttonStyle,
      ]}>
      
      {title ? (
        <Fragment>
          <Animated.Text
            style={[
              styles.buttonText,
              {
                color: themes['light'].colors[textColor],
              },
              buttonText,
            ]}>
            {title}
          </Animated.Text>
          {iconType === 'custom' && iconName
            ? null
            : // <Icon name={iconName} style={[styles.buttonIcon, iconStyle]}/>
              null}
        </Fragment>
      ) : (
        children
      )}
     
      {loading ? (
        <ActivityIndicator {...loaderProps} style={{marginLeft: 10}} />
      ) : null}
    </TouchableOpacity>
  );
};

CButton.defaultProps = {
  title: '',
  onPress: () => null,
  colorType: 'primary',
  type: 'normal',
  activeOpacity: 0.5,
  loading: false,
  disabled: false,
  loaderProps: {
    size: 20,
    color: themes['light'].colors.tertiary,
  },
};

export default React.memo(CButton);
