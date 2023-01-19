/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, Text, View} from "react-native";
import CommonFlatList from 'components/CommonFlatList';
import { MainList } from 'components/list';

const tempMainDataList = [
    {name: 'test1'},
    {name: 'test2'},
    {name: 'test3'},
    {name: 'test4'},
    {name: 'test5'},
];

export const home = (props: any) => {
    return (
        <View style={{flex: 1}}>
            {/* main */}
            <View style={{width: '100%', height: 250, backgroundColor: '#fff'}}>
                <MainList dataList={tempMainDataList} />
            </View>
            {/* 진행공연 */}
            <CommonFlatList />
            {/* 예정공연 */}
            {/* bottomTab */}
        </View>
    )
}