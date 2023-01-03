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
// import {Provider} from 'react-redux';
// import {store} from './src/store/Config';
import {StackNavigation} from './src/navigations';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    // <Provider store={store}>
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
