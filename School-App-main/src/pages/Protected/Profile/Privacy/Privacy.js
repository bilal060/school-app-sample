import {StyleSheet, Text, View, TouchableOpacity , Platform, UIManager, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Container} from '../../../../containers';
import {CList, CText, ProgressiveImage} from '../../../../components';
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
  
  Logout,
} from '../../../../assets/images';
import Styles from '../Profile.styles';
import {FlatList} from 'react-native-gesture-handler';
import {AccordionItem, AccordionList} from 'react-native-accordion-list-view';


const Privacy = ({navigation}) => {
    const [isOpen , setIsOpen] = useState(false)
  const headerProps = {
    headerTitle: 'Privacy Policy',
    showCart: true,
    ProgressiveImageHeader: false,
    headerRight: true,
    backBtnColor: '#FFF',
  };


  

  const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const dataQue = [
    {
        id: 0,
        title: 'Lorem ipsum dolor sit amet consr.?',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit.?',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit.?',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit.?',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 4,
        title: 'Lorem ipsum dolor sit.?',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
];






  

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity  style={[Styles.menu ,]}>
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
      <View style={[Styles.container , {marginBottom:40}]}>
      <CText style={[Styles.title]}>{"Acceptance of the Privacy Policy"}</CText>
      <CText style={[Styles.faqBody ,{marginTop:5}]}>{"Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. "}</CText>
      <CText style={[Styles.faqBody ,{marginTop:15}]}>{"Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. "}</CText>
      <CText style={[Styles.faqBody , {marginTop:15}]}>{"Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. "}</CText>
      </View>
    </Container>
  );
};

export default Privacy;

const styles = StyleSheet.create({});
