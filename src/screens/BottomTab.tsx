/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MyPage} from '../components/mypage';
import {Info} from '../components/info';
import {Like} from '../components/like';
import {Mate} from '../components/mate';
import {home} from './home';
import Logo from 'components/logo';
import {SearchButton} from 'components/button';

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="">
      <BottomTab.Screen
        name="home"
        component={home}
        options={{
          headerTitle: () => <Logo />,
          headerRight: () => <SearchButton />,
        }}
      />
      <BottomTab.Screen
        name="Info"
        component={
          Info
        } /* options={{tabBarButton: (props: any) => <TouchableOpacity>
        <Image/>
      </TouchableOpacity>}} }*/
      />
      {/* <BottomTab.Screen name="Like" component={Like} /> */}
      {/* <BottomTab.Screen name="Mate" component={Mate} /> */}
      {/* <BottomTab.Screen name="MyPage" component={MyPage} /> */}
    </BottomTab.Navigator>
  );
}
export default BottomTabNavigator;
