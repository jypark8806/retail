/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */

import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {logoNavigationType} from 'types/navigation';

const SearchButton = () => {
  const navigation = useNavigation<logoNavigationType>();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('search');
        }}>
        <Image
          style={{width:30, height: 30, marginRight:20, borderWidth:1, borderColor:'blue'}}
          source={require('../assets/images/search.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchButton;
