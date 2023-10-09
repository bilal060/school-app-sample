import {StyleSheet, FlatList, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Container} from '../../../containers';
import {CDropDown, CList, CText, ProgressiveImage} from '../../../components';
import {
  Cart,
  Date,
  EBook,
  Event,
  Exam,
  Galla,
  Gallery,
  Quiz,
  Time,
} from '../../../assets/images';
import {themes as theme, themes} from '../../../theme/colors';

import Styles from './Calender.styles';
import DatePicker from 'react-native-modern-datepicker';
import GlobalStyle from '../../../assets/styling/GlobalStyle';

const Calender = ({navigation}) => {
  const headerProps = {
    headerTitle: 'Calender',
    showCart: true,
    ProgressiveImageHeader: false,
    headerRight: true,
    backBtnColor: '#FFF',
  };

  const listData = [
    {
      img: Galla,
      title: 'Annual Sports Galla',
      onPress: () => navigation.navigate('Calender'),
      date: 'April 14, 2023',
      time: '10am  - 01pm',
    },
    {
      img: Quiz,
      title: 'Quiz Competition',
      onPress: () => navigation.navigate('Calender'),
      date: 'April 14, 2023',
      time: '10am  - 01pm',
    },
    {
      img: Exam,
      title: 'Annual Exams',
      onPress: () => navigation.navigate('Calender'),
      date: 'April 14, 2023',
      time: '10am  - 01pm',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity  style={[Styles.menu]}>
        <View style={Styles.imgView}>
          <ProgressiveImage
            source={item.img}
            style={{height: 60, width: 60}}
            resizeMode={'contain'}
          />
        </View>
        <View>
          <CText style={Styles.menuName}>{item?.title}</CText>
          <View style={GlobalStyle.row}>
            <ProgressiveImage
              source={Date}
              style={{height: 15, width: 15, marginLeft: 20}}
              resizeMode={'contain'}
            />
            <CText style={Styles.dateTime}>{item?.date}</CText>
          </View>
          <View style={GlobalStyle.row}>
            <ProgressiveImage
              source={Time}
              style={{height: 15, width: 15, marginLeft: 20}}
              resizeMode={'contain'}
            />
            <CText style={Styles.dateTime}>{item?.time}</CText>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const renderHeader = () => {
    return (
      <View
        style={[
          GlobalStyle.row,
          {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          },
        ]}>
        <CText style={Styles.menuName}>My Events</CText>
        <CDropDown />
        
      </View>
    );
  };
  return (
    <Container
      bottomSpace={true}
      edges={['left', 'right']}
      scrollView
      headerProps={headerProps}>
      <View style={Styles.container}>
        <DatePicker
          options={{
            defaultFont: theme.font.regular,
            headerFont: theme.font.semiBold,
            daysAnimationDistance: 250,
            backgroundColor: '#FFF',
            textHeaderColor: '#000000',
            textDefaultColor: '#000000',
            selectedTextColor: '#FFF',
            mainColor: 'blue',
            textSecondaryColor: 'blue',
            borderColor: '#F9F9F9',
            radius: 0,
          }}
          current="2020-07-13"
          selected="2020-07-23"
          mode="calendar"
          minuteInterval={10}
          style={Styles.calender}
        />
        <FlatList
          extraData={listData}
          style={Styles.flatList}
          data={listData}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
        />
      </View>
    </Container>
  );
};

export default Calender;
