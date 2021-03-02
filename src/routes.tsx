import React from 'react';

import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import PropertiesMap from '../src/pages/Propertiesmap';
import ImmobileDetails from '../src/pages/ImmobileDetails';

import SelectMapPosition from '../src/pages/CreateImmobile/SelectMapPosition';
import ImmobileData from '../src/pages/CreateImmobile/ImmobileData';

import Header from './components/Header';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#f2f3f5'}	}}>
                <Screen 
                    name="PropertiesMap" 
                    component={PropertiesMap}
                />
                <Screen 
                    name="ImmobileDetails" 
                    component={ImmobileDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Imóvel" />

                    }}
                />
                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title="SELECIONE NO MAPA"/>
                    }}
                />
                <Screen 
                    name="ImmobileData" 
                    component={ImmobileData}
                    options={{
                        headerShown: true,
                        header: () => <Header title="INFORMAÇÃO DO IMÓVEL"/>
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}
