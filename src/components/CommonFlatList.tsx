import React from 'react';
import { View, Text, FlatList} from 'react-native';

interface CommonFlatListProps {
    dataList: any[];
}

const CommonFlatList = ( props: CommonFlatListProps) => {
    const { dataList} = props;

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
                data={ dataList}
                renderItem={ renderingItem}
                horizontal={ true}
                showsHorizontalScrollIndicator={ false}
            />
        </View>
    )
};

export default CommonFlatList;