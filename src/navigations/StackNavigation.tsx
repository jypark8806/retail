/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
import {createStackNavigator} from '@react-navigation/stack';
import {home} from '../screens/home';
import React from 'react';
import { SearchButton } from 'components/button';
import Logo from 'components/logo';

const Stack = createStackNavigator();
export function StackNavigation() {
    return(
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen
                name="home"
                component={home}
                options={({navigation: any}) => ({
                    title: '',
                    headerLeft: () => (
                        <Logo />
                    ),
                    headerRight: () => (
                        <SearchButton />
                    )
                  })}
            />
        </Stack.Navigator>
    )
}