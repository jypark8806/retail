/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
import { CommonFlatList} from '../../components/list';
import { MainList } from '../../components/list';
import { ContinuedShow, IntendedShow} from '../home/const';

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
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView showsVerticalScrollIndicator = { false}>
                {/* main */}
                <View style={{flexDirection: 'row', width: '100%', height: 250, backgroundColor: '#fff'}}>
                    <MainList dataList={tempMainDataList} />
                </View>
                {/* 진행공연 */}
                <View style={ homeStyle.showListContainer}>
                    <Text style={ homeStyle.tItleStyle}>{ ContinuedShow}</Text>
                    <CommonFlatList dataList={ tempFlatListDatas} />
                </View>
                {/* 예정공연 */}
                <View style={ homeStyle.showListContainer}>
                    <Text style={ homeStyle.tItleStyle}>{ IntendedShow}</Text>
                    <CommonFlatList dataList={ tempFlatListDatas} />
                </View>
                {/* bottomTab */}
            </ScrollView>
        </View>
    )
}

const homeStyle = StyleSheet.create({
    showListContainer: {
        borderWidth:1, 
        borderColor:'#eee', 
        paddingTop:10
    },
    tItleStyle: {
        width:100, 
        textAlign:'center', 
        fontWeight:'600', 
        fontSize:16,
    }
})