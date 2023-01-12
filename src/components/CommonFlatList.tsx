import React from 'react';
import { View, Text, FlatList} from 'react-native';

const datas: any = [
    { Title: '뮤지컬 종의 기원', Date: '2022.02.18 ~ 2022.05.28', location: '샤롯데씨어터'},
    { Title: '뮤지컬 엑스칼리버', Date: '2022.03.25 ~ 2022.10.25', location: '예술의 전당'},
    { Title: '연극 왕의 남자', Date: '2022.08.20 ~ 2022.10.15', location: '예술의 전당'},
    { Title: '공연 Xia Concert', Date: '2022.04.05 ~ 2022.12.30', location: '예술의 전당'},
    { Title: '뮤지컬 노트르담드파리', Date: '2022.12.14 ~ 2022.12.31', location: '코엑스'},
];

const CommonFlatList = () => {
    const renderingItem = ( data: any) => {
        return (
            <View style={{ width: 200, height: 250, borderWidth:1, margin:25}} key={ data.item.Title}>
                <Text>{ data.item.Title}</Text>
                <Text>{ data.item.Date}</Text>
                <Text>{ data.item.location}</Text>
            </View>
        )
    };

    return (
        <View style={{ width:'100%', height: 300, borderWidth:1,}}>
            <FlatList
                data={ datas}
                renderItem={ renderingItem}
                horizontal={ true}
                showsHorizontalScrollIndicator={ false}
            />
        </View>
    )
};

export default CommonFlatList;