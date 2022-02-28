import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhotosScreen from '../screens/Photos/PhotosScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Photos of this name" component={PhotosScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator;
