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
  ProfileIcon,
  QCode,
  QrImg,
  Services,
  Pro,
  Profile,
  Left,
  EditProfile,
  EditPic,
  Password,
  NewPerson,
  Faq,
  Privacy,
  Logout,
} from '../../../assets/images';
import Styles from './Profile.styles';
import GlobalStyle from '../../../assets/styling/GlobalStyle';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import {FlatList} from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/Auth.action';

const ProfileView = ({navigation}) => {
    const dispatch = useDispatch()
  const headerProps = {
    headerTitle: 'My Profile',
    showCart: true,
    ProgressiveImageHeader: false,
    headerRight: true,
    backBtnColor: '#FFF',
  };

  const LogOut = ()=>{
    dispatch(logout())
  }

  const listData = [
    {
      img: EditProfile,
      title: 'Edit Profile',
      onPress: () => navigation.navigate('EditProfile'),
    },
    {
      img: Password,
      title: 'Change Password',
      onPress: () => navigation.navigate('Calender'),
    },
    {
      img: NewPerson,
      title: 'Add New Person',
      onPress: () => navigation.navigate('AddNewProfile'),
    },
    {
      img: Faq,
      title: 'FAQs',
      onPress: () => navigation.navigate('Faq'),
    },
    {
      img: Privacy,
      title: 'Privacy Policy',
      onPress: () => navigation.navigate('Privacy'),
    },
    {
        img: Logout,
        title: 'Log Out',
        onPress: () => LogOut(),
      },
  ];

  

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={item.onPress} style={[Styles.menu ,]}>
        <View style={[Styles.imgView,  {backgroundColor:item.title === "Log Out"  ? 'rgba(238, 87, 87, 0.1)' :'rgba(37, 99, 235, 0.1)' }]}>
          <ProgressiveImage
            source={item.img}
            style={{height: 20, width: 20}}
            resizeMode={'contain'}
          />
        </View>
        <View
          style={{flexDirection: 'row', flex: 1, height: 60, marginTop: -10}}>
          <View style={Styles.menuName}>
            <CText style={[Styles.title ,{color:item.title === "Log Out"  ? '#EE5757' :'#000'}]}>{item?.title}</CText>
          </View>
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <ProgressiveImage
              source={Left}
              style={{height: 20, width: 20}}
              resizeMode={'contain'}
            />
          </View>
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
        <ProgressiveImage
          source={Profile}
          resizeMode="contain"
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            alignSelf: 'center',
          }}
        />
        <CText style={Styles.headerSubHeading}>Student 1</CText>
        <CText style={Styles.userEmail}>student1@yopmail.com</CText>
        <CText style={Styles.userPhone}>+1 012 3456 789</CText>

        <FlatList
          extraData={listData}
          style={{marginVertical: 20}}
          data={listData}
          renderItem={renderItem}
        />
      </View>
    </Container>
  );
};

export default ProfileView;

const styles = StyleSheet.create({});
