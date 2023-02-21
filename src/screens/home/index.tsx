/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, Text, View} from "react-native";
import { CommonFlatList} from '../../components/list';
import { MainList } from '../../components/list';

const tempMainDataList = [
    {name: 'test1'},
    {name: 'test2'},
    {name: 'test3'},
    {name: 'test4'},
    {name: 'test5'},
];

const tempFlatListDatas: any = [
    { Title: '뮤지컬 종의 기원', Date: '2022.02.18 ~ 2022.05.28', location: '샤롯데씨어터'},
    { Title: '뮤지컬 엑스칼리버', Date: '2022.03.25 ~ 2022.10.25', location: '예술의 전당'},
    { Title: '연극 왕의 남자', Date: '2022.08.20 ~ 2022.10.15', location: '예술의 전당'},
    { Title: '공연 Xia Concert', Date: '2022.04.05 ~ 2022.12.30', location: '예술의 전당'},
    { Title: '뮤지컬 노트르담드파리', Date: '2022.12.14 ~ 2022.12.31', location: '코엑스'},
];

export const home = (props: any) => {
    return (
        <View style={{flex: 1}}>
            {/* main */}
            <View style={{width: '100%', height: 250, backgroundColor: '#fff'}}>
                <MainList dataList={tempMainDataList} />
            </View>
            {/* 진행공연 */}
            <CommonFlatList dataList={ tempFlatListDatas} />
            {/* 예정공연 */}
            {/* bottomTab */}
        </View>
    )
}