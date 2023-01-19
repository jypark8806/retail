/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
import {createStackNavigator} from '@react-navigation/stack';
import {home} from '../screens/home';
import React from 'react';
import { SearchButton } from '../components/button/index';
import Logo from '../components/logo/index';

const Stack = createStackNavigator();
export function StackNavigation() {
    return(
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen
                name="home"
                component={home}
                options={{
                    headerTitle: ()=> (<Logo/>),
                    headerRight:() => (<SearchButton/>),
                  }}
            />
        </Stack.Navigator>
    )
}