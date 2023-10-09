import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Container} from '../../../containers';
import {CDropDown, CList, CText, ProgressiveImage} from '../../../components';
import {
  BookImage,
  Cart,
  Download,
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
import Styles from './EBook.styles';
import GlobalStyle from '../../../assets/styling/GlobalStyle';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import {FlatList} from 'react-native-gesture-handler';

const EBook = ({navigation}) => {
  const headerProps = {
    headerTitle: 'E-Book Library',
    showCart: true,
    ProgressiveImageHeader: false,
    headerRight: true,
    backBtnColor: '#FFF',
  };

  const listData = [
    {
      img: Event,
      title: 'Physics',
      grade: 'A-Level',
      author: 'Edward White',
    },
    {
      img: EBook,
      title: 'Mathematics',
      grade: 'A-Level',
      author: 'Edward White',
    },
    {
      img: Gallery,
      title: 'English Lang...',
      grade: 'A-Level',
      author: 'Edward White',
    },
    {
      img: Gallery,
      title: 'English Lang...',
      grade: 'A-Level',
      author: 'Edward White',
    },
  ];
  const renderHeader = () => {
    return (
      <>
        <CText style={Styles.sortBy}>Sort By:</CText>
        
        <View
          style={[
            GlobalStyle.row,
            {
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            },
          ]}>
          <CDropDown />
          <View style={Styles.filterView}>
              <ProgressiveImage
                source={Filter}
                resizeMode="contain"
                style={{width: 20, height: 20}}
              />
            </View>
        </View>
      </>
    );
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={[Styles.menu]}>
        {/* <View style={Styles.imgView}> */}
        <ProgressiveImage
          source={BookImage}
          style={Styles.bookImage}
          resizeMode={'contain'}
        />
        <View style={Styles.downloadView}>
          <ProgressiveImage
            source={Download}
            style={Styles.downloadimage}
            resizeMode={'contain'}
          />
        </View>

        {/* </View> */}
        <View style={Styles.detailsView}>
          <CText style={Styles.menuName}>{item?.title}</CText>
          <CText style={Styles.grade}>{item?.grade}</CText>
          <View style={{marginTop: 10}}>
            <CText style={Styles.menuName}>{'Author'}</CText>

            <CText style={Styles.grade}>{item?.author}</CText>
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
        <FlatList
          numColumns={2}
          extraData={listData}
          style={{marginBottom: 40}}
          data={listData}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
        />
      </View>
    </Container>
  );
};

export default EBook;

const styles = StyleSheet.create({});
