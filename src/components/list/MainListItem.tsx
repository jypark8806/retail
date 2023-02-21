import React from 'react';
import { Text } from 'react-native';

interface MainListItemProps {
    item : any;
}

const MainListItem = (props: any) => {
    const {item} = props;
    return (
        <Text>{item.name}</Text>
    );
};

export default MainListItem;
