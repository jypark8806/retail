import {Icon} from '@rneui/themed';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface MainListProps {
  dataList: any[];
}
const MainList = (props: MainListProps) => {
  return (
    <>
      <TouchableOpacity>
        <Icon name="chevron-left" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="chevron-right" />
      </TouchableOpacity>
    </>
  );
};

export default MainList;
