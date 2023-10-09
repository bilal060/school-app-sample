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
  Privacy,
  Logout,
} from '../../../../assets/images';
import Styles from '../Profile.styles';
import {FlatList} from 'react-native-gesture-handler';
import {AccordionItem, AccordionList} from 'react-native-accordion-list-view';


const Faq = ({navigation}) => {
    const [isOpen , setIsOpen] = useState(false)
    const [isIndex , setIsIndex] = useState()

  const headerProps = {
    headerTitle: 'FAQs',
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
useEffect(() => {
    if (Platform.OS === 'android') {
        if (UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
}, []);

const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};



  

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
      <View style={Styles.container}>
      <ScrollView style={styles.container}>
        {dataQue.map((item, index) => (
          <AccordionItem
            key={item.id}
            customTitle={() => <CText style={[Styles.faqTitle , {color:index  === isIndex && isOpen ? "#2563EB"  :"#000"}]}>{item.title}</CText>}
            customBody={() => <CText style={Styles.faqBody}>{item.body}</CText>}
            animationDuration={400}
            isOpen={false}
            onPress={(isOpen) => (setIsOpen(isOpen) , setIsIndex(index))}
          />
        ))}
      </ScrollView>
      {/* <AccordionList
                    data={dataQue}
                    customTitle={item => <CText style={Styles.faqTitle}>{item.title}</CText>}
                    customBody={item => <CText style={Styles.faqBody}>{item.body}</CText>}
                    animationDuration={400}
                    expandMultiple={true}
                    onPress={(isOpen) => alert("dd")}

                /> */}
      </View>
    </Container>
  );
};

export default Faq;

const styles = StyleSheet.create({});
