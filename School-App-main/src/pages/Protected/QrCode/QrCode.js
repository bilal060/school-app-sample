import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Container} from '../../../containers';
import {CList, CText, ProgressiveImage} from '../../../components';
import {
  Cart,
  EBook,
  Event,
  Events,
  Filter,
  Gallery,
  Google,
  Hub,
  Marketplace,
  Profile,
  QCode,
  QrImg,
  Services,
} from '../../../assets/images';
import Styles from './QrCode.styles';
import GlobalStyle from '../../../assets/styling/GlobalStyle';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import {FlatList} from 'react-native-gesture-handler';

const QrCode = ({navigation}) => {
  const headerProps = {
    headerTitle: 'Qr Code',
    showCart: true,
    ProgressiveImageHeader: false,
    headerRight: true,
    backBtnColor: '#FFF',
  };

  

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={item.onPress} style={[Styles.menu]}>
        <View style={Styles.imgView}>
          <ProgressiveImage
            source={item.img}
            style={{height: 20, width: 40}}
            resizeMode={'contain'}
          />
        </View>
        <CText style={Styles.menuName}>{item?.title}</CText>
      </TouchableOpacity>
    );
  };

  return (
    <Container
      bottomSpace={true}
      edges={['left', 'right']}
      scrollView
      headerProps={headerProps}>
      <View style={Styles.container}>
        <ProgressiveImage
          source={QrImg}
          resizeMode="contain"
          style={{
            width: 150,
            height: 150,
            alignSelf: 'center',
          }}
        />
        <CText style={Styles.headerSubHeading}>
          Scan your QR Code to mark your attendance.
        </CText>
        {/* <QRCode
          value={"HEl"}
          size={200}
          bgColor='black'
          fgColor='white'/> */}
      </View>
    </Container>
  );
};

export default QrCode;

const styles = StyleSheet.create({});
