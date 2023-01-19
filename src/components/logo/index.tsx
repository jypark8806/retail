/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {logoNavigationType} from 'types/navigation';

const Logo = () => {
  const navigation = useNavigation<logoNavigationType>();
  return (
    // <>
    <View>
      <TouchableOpacity>
        <Image
          style={{justifyContent:'center',width:120, height:80, borderWidth:1, borderColor:'red'}}
          source={require('../assets/images/logo.png')}
        />
      </TouchableOpacity>
    </View>
    // </>
  );
};

const styles = StyleSheet.create({
  // logo: {
  //   alignSelf: 'center',
  //   height: 50,
  //   borderWidth: 1,
  //   resizeMode: 'contain',
  // },
    // container: {
  //   width: '100%',
  //   height: 80,
  //   borderWidth: 1,
  // },
  // searchIcon: {
  //   alignSelf: 'flex-end',
  //   height: 50,
  //   borderWidth: 1,
  //   resizeMode: 'contain',
  // },
  // image: {
  //   height: 50,
  //   resizeMode: 'contain',
  // },
});

export default Logo;
