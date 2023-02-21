import React from 'react';
import { View, Text, FlatList} from 'react-native';

interface CommonFlatListProps {
    dataList: any[];
}

const CommonFlatList = ( props: CommonFlatListProps) => {
    const { dataList} = props;

    const renderingItem = ( data: any) => {
        return (
            <View style={{ width:150, height:'100%', justifyContent:'center', alignItems:'center'}}>
                <View style={{ width: 80, height: 80, borderWidth:1}} key={ data.item.Title}>
                    <Text>포스터영역</Text>
                </View>
                <View style={{ padding:10}}>
                    <Text style={{ fontSize:13, fontWeight:'600', padding:3}}>{ data.item.Title}</Text>
                    <Text style={{ fontSize:12, color:'#666', padding:3}}>{ data.item.Date}</Text>
                    <Text style={{ fontSize:12, color:'#222', padding:3}}>{ data.item.location}</Text>
                </View>
            </View>
        )
    };

    return (
        <View style={{ width:'100%', height: 200}}>
            <FlatList
                data={ dataList}
                renderItem={ renderingItem}
                horizontal={ true}
                showsHorizontalScrollIndicator={ false}
            />
        </View>
    )
};

export default CommonFlatList;