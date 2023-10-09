import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Container} from '../../../containers';
import {CList, CText, ProgressiveImage} from '../../../components';
import {
  Cart,
  Class,
  EBook,
  Eva,
  Event,
  Events,
  Filter,
  Fire,
  Gallery,
  Google,
  Hub,
  Marketplace,
  Profile,
  QCode,
  QrImg,
  Services,
} from '../../../assets/images';
import Styles from './Notification.styles';
import GlobalStyle from '../../../assets/styling/GlobalStyle';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import {FlatList} from 'react-native-gesture-handler';

const Notification = ({navigation}) => {
  const notifictionData = [
    {
      img: Fire,
      title: 'Emergency Fire Alert',
      des: 'All students must have to evacuate the school as soon as possible ',
      mainColor: '#FFF2EC',
      subColor: '#FFDCCB',
    },
    {
      img: Eva,
      title: 'Emergency Evacuation',
      des: 'All students must have to evacuate the school as soon as possible ',
      type: 'Eme',
      mainColor: '#FFECEC',
      subColor: '#FFCCCC',
    },
    {
      img: Class,
      title: 'Stay in the Class Room',
      des: 'All students must have to evacuate the school as soon as possible ',
      type: 'Class',
      mainColor: '#ECFFEC',
      subColor: '#C7FFC7',
    },
  ];

  const headerProps = {
    headerTitle: 'Emergency Alerts',
    showCart: true,
    ProgressiveImageHeader: false,
    headerRight: true,
    backBtnColor: '#FFF',
  };
  const renderHeader = () => {
    return (
      <View
        style={[GlobalStyle.row , {marginTop:20}]}>
        <CText style={Styles.menuName}>Sat, Mar 3</CText>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={item.onPress}
        style={[Styles.menu, {backgroundColor: item.mainColor}]}>
        <View style={[Styles.imgView, {backgroundColor: item.subColor}]}>
          <ProgressiveImage
            source={item.img}
            style={{height: 40, width: 40}}
            resizeMode={'contain'}
          />
        </View>
        <View>
          <CText style={Styles.menuName}>{item?.title}</CText>
          <CText style={Styles.menuDes}>{item?.des}</CText>
        </View>
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
        <FlatList
          extraData={notifictionData}
          style={{marginBottom: 40}}
          data={notifictionData}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
        />
      </View>
    </Container>
  );
};

export default Notification;

const styles = StyleSheet.create({});
