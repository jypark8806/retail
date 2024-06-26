/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/navigations';
import BottomTabNavigator from 'screens/BottomTab';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  return (
    // <Provider store={store}>
    <GestureHandlerRootView>
      <NavigationContainer>
        {/* <StackNavigation /> */}
        <BottomTabNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
    // </Provider>
  );
};

export default App;
