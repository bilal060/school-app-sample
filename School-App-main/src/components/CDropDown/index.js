import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
const {width} = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {themes} from '../../theme/colors';

const CDropDown = () => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

  return (
    <View>
      <SelectDropdown
        data={countries}
        defaultButtonText={'Montly'}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        renderDropdownIcon={isOpened => {
          return (
            <FontAwesome
              name={isOpened ? 'chevron-up' : 'chevron-down'}
              color={'#444'}
              size={18}
            />
          );
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextStyle={styles.dropdown1RowTxtStyle}
        selectedRowStyle={styles.dropdown1RowTxtStyle}
        search
        searchInputStyle={styles.dropdown1searchInputStyleStyle}
        searchPlaceHolder={'Search here'}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        searchPlaceHolderColor={'black'}
        buttonTextStyle={[styles.dropdown1RowTxtStyle ,{textAlign:"center" , marginLeft:-20}] }
        buttonStyle={{width:120}}
        renderSearchInputLeftIcon={() => {
            return <FontAwesome name={'search'} color={'#000'} size={18} style={{marginLeft:10}} />;
          }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
    </View>
  );
};

export default CDropDown;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    width,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
  headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
  saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
  viewContainer: {flex: 1, width, backgroundColor: '#FFF'},
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
    
  },
  dropdownsRow: {flexDirection: 'row', width: '100%', paddingHorizontal: '5%'},

  dropdown1BtnStyle: {
    flex: 1,
    height: 50,
    borderRadius: 8,
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF', marginTop: -30},
  dropdown1RowTxtStyle: {
    color: themes.light.colors.dark,
    fontFamily: themes.font.medium,
    fontSize:14,
    textAlign:"center",
    
  },
  divider: {width: 12},
  dropdown2BtnStyle: {
    height: 50,
    backgroundColor: themes.light.colors.secondary6,
    borderRadius: 8,
    borderWidth: 1,
  },
  dropdown2BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown2DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown2RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1searchInputStyleStyle: {
    backgroundColor: '#EFEFEF',

  },
});