import React from 'react';

import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import PropertiesMap from '../src/pages/Propertiesmap';
import ImmobileDetails from '../src/pages/ImmobileDetails';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="PropertiesMap" component={PropertiesMap}/>
                <Screen name="ImmobileDetails" component={ImmobileDetails}/>
            </Navigator>
        </NavigationContainer>
    )
}
