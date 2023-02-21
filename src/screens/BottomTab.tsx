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
import { SearchButton } from 'components/button';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '@rneui/themed';

const iconNames: any = {
 Info: 'info',
 Like: '',
 Mate: 'home',
 MyPage: 'home'
}

const BottomTabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={{ flexDirection: 'row', height: 70}}>
      {state.routes.map((route: any, index: any) => {
        if(route.name !== 'home'){
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1}}
            >

              <Icon name={iconNames[route.name]} />
              <Text style={{ textAlign: 'center', color: isFocused ? '#673ab7' : '#222' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="" tabBar={(props: any) => <BottomTabBar {...props} />}>
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
      <BottomTab.Screen name="Like" component={Like} />
      <BottomTab.Screen name="Mate" component={Mate} />
      <BottomTab.Screen name="MyPage" component={MyPage} />
    </BottomTab.Navigator>
  );
}
export default BottomTabNavigator;
