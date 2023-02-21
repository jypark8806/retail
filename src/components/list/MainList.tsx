import {Icon} from '@rneui/themed';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MainListItem from './MainListItem';
import { mainListStyleSheet } from './style';

const tempItemList = [
  {name: 'test1'},
  {name: 'test2'},
  {name: 'test3'},
  {name: 'test4'},
  {name: 'test5'},
];

interface MainListProps {
  dataList: any[];
}

const MainList = (props: MainListProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const timeCheck = useRef<any>();

  useEffect(() => {
    // currentIndex 가 변할때마다 timeout 체크해서 있으면 제거하고 추가.
    if (timeCheck.current){
      clearTimeout(timeCheck.current);
    }

    timeCheck.current = setTimeout(() => {
      if (currentIndex === tempItemList.length - 1){
        setCurrentIndex(0);
      }
      else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);
  },[currentIndex]);

  // 이전 버튼 클릭
  const prevTouch = useCallback(() => {
    if (currentIndex > 0){
      setCurrentIndex(currentIndex - 1);
    }
  },[currentIndex]);

  // 다음 버튼 클릭
  const nextTouch = useCallback(() => {
    if (currentIndex < tempItemList.length){
      setCurrentIndex(currentIndex + 1);
    }
  },[currentIndex]);

  return useMemo(() => (
    <>
      <TouchableOpacity style={mainListStyleSheet.buttonContainer} onPress={prevTouch}>
        <Icon name="chevron-left" />
      </TouchableOpacity>
      <View style={mainListStyleSheet.viewContainer}>
        <View style={mainListStyleSheet.viewBox}>
          <MainListItem item={tempItemList[currentIndex]} />
        </View>
      </View>
      <TouchableOpacity style={mainListStyleSheet.buttonContainer} onPress={nextTouch}>
        <Icon name="chevron-right" />
      </TouchableOpacity>
    </>
  ),[currentIndex]);
};

export default MainList;
