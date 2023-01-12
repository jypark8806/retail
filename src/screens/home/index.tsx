/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from "react-native";
import CommonFlatList from '../../Components/CommonFlatList';

export const home = (props: any) => {
    return (
        <View style={{flex: 1}}>
            {/* main */}
            {/* 진행공연 */}
            <CommonFlatList />
            {/* 예정공연 */}
            {/* bottomTab */}
        </View>
    )
}