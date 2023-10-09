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
  Services,
} from '../../../assets/images';
import Styles from './Home.styles';
import GlobalStyle from '../../../assets/styling/GlobalStyle';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import {FlatList} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const barData = [
    {value: 19, label: 'Jan', frontColor: '#177AD5'},
    {value: 16, label: 'Feb', frontColor: '#177AD5'},
    {value: 12, label: 'Mar', frontColor: '#177AD5'},
    {value: 10, label: 'Apr', frontColor: '#177AD5'},
    {value: 8, label: 'May', frontColor: '#177AD5'},
    {value: 16, label: 'June', frontColor: '#177AD5'},
    {value: 9, label: 'July', frontColor: '#177AD5'},
    {value: 11, label: 'Aug', frontColor: '#177AD5'},
    {value: 18, label: 'Sep', frontColor: '#177AD5'},
    {value: 20, label: 'Oct', frontColor: '#177AD5'},
    {value: 22, label: 'Nov', frontColor: '#177AD5'},
    {value: 24, label: 'Dec', frontColor: '#177AD5'},
  ];

  const data = [
    {title: 'Upcoming Events'},
    {title: 'E-Books Library'},
    {title: 'School Gallery'},
  ];

  const headerProps = {
    headerTitle: 'Store',
    showCart: true,
    ProgressiveImageHeader: false,
    headerRight: true,
    backBtnColor: '#FFF',
  };
  const listData = [
    {
      img: Event,
      title: 'Upcoming Events',
      onPress:()=> navigation.navigate("Calender")
    },
    {
      img: EBook,
      title: 'E-Books Library',
      onPress:()=> navigation.navigate("EBook")

    },
    {
      img: Gallery,
      title: 'School Gallery',
      onPress:()=> navigation.navigate("Calender")
    },
  ];


  
  
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
    <Container bottomSpace={true} edges={['left', 'right']} scrollView>
      <View style={Styles.headerContainer}>
        <>
          <ProgressiveImage
            source={Profile}
            resizeMode="contain"
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: '#FFF',
            }}
          />
        </>
        <View style={{flex: 1, marginLeft: 20, flexDirection: 'column'}}>
          <CText style={Styles.headerHeading}>Student 1</CText>
          <CText style={Styles.headerSubHeading}>
            Class O Level | Student ID : 123456{' '}
          </CText>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('QrCode')}>
          <ProgressiveImage
            source={QCode}
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.container}>
        <View style={Styles.graphView}>
          <View style={Styles.headingGraph}>
            <>
              <CText style={Styles.mainHeading}>Attendance </CText>
            </>
            <View style={Styles.filterView}>
              <ProgressiveImage
                source={Filter}
                resizeMode="contain"
                style={{width: 17, height: 17}}
              />
            </View>
          </View>

          <BarChart
            width={270}
            data={barData}
            barWidth={15}
            isAnimated={true}
            height={150}
            maxValue={24}
            initialSpacing={5}
            // stepHeight={10}
            // stepValue={6}
            // spacing={10}
            noOfSections={5}
            frontColor="lightgray"
            yAxisThickness={0}
            xAxisThickness={0}
          />
        </View>

        <FlatList
          extraData={listData}
          style={{marginBottom: 40}}
          data={listData}
          renderItem={renderItem}
        />
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
