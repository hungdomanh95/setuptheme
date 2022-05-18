import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AnimationsProperties,
  HomeScreen,
  PokemonScreen,
  DayNightTransition,
  PaperPlane,
  ButtonScreen,
  GestureHandler,
  ScaleScrollList,
  GalleryView
} from '../screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  const screenOptions = {
    headerTransparent: true,
    headerShown: false,
  };
  const stackOption = {
    headerShown: true,
    headerBackTitle: '',
    headerTitle: '',
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="PokemonScreen"
            component={PokemonScreen}
            options={stackOption}
          />
          <Stack.Screen
            name="DayNightTransition"
            component={DayNightTransition}
            options={stackOption}
          />
          <Stack.Screen
            name="PaperPlane"
            component={PaperPlane}
            options={stackOption}
          />
          <Stack.Screen
            name="AnimationsProperties"
            component={AnimationsProperties}
            options={stackOption}
          />
          <Stack.Screen
            name="ButtonScreen"
            component={ButtonScreen}
            options={stackOption}
          />
          <Stack.Screen
            name="GestureHandler"
            component={GestureHandler}
            options={stackOption}
          />
          <Stack.Screen
            name="ScaleScrollList"
            component={ScaleScrollList}
            options={stackOption}
          />
          <Stack.Screen
            name="GalleryView"
            component={GalleryView}
            options={stackOption}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigation;
