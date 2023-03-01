import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {observer} from 'mobx-react';
import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import {default as theme} from './global/theme.json';
import Home from './screens/Home';
import Post from './screens/Post';
import {useUI} from './stores/ui';

const Stack = createNativeStackNavigator();

const Routes = observer(() => {
  const {darkMode} = useUI();

  return (
    <Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={darkMode ? {...eva.dark, ...theme} : {...eva.light, ...theme}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme['color-primary-500']}
        />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              presentation: 'modal',
              animation: 'slide_from_bottom',
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Post" component={Post} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Fragment>
  );
});

export default Routes;
