import React, { useEffect, useState} from 'react';

import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import mapMarker from '../images/map-marker.png';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';

interface Immobobile {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function PropertiesMap() {
    const [properties, setProperties] = useState<Immobobile[]>([]);
    const navigation = useNavigation()

    useEffect(() => {
      api.get('/properties').then(response => {
        setProperties(response.data);
      })
    }, [])

    function handleNavigateToImmobileDetails(id: number) {
        navigation.navigate('ImmobileDetails', { id })
    }

    function handleNavigateToCreateImmobile() {
        navigation.navigate('SelectMapPosition')
    }

    return (<View style={styles.container}>
        <MapView 
          style={styles.map} 
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: -16.6803002,
            longitude: -49.2570308,
            latitudeDelta: 0.010,
            longitudeDelta: 0.010,
            }} 
        >
          {properties.map(immobile => {
             return (
              <Marker 
                key={immobile.id}
                icon={mapMarker}
                calloutAnchor={{
                  x: 2.2,
                  y: 0.7,
                }}
                coordinate={{
                  latitude: immobile.latitude,
                  longitude: immobile.longitude
                }}
              > 
                <Callout tooltip={true} 
                  onPress={() => handleNavigateToImmobileDetails(immobile.id)}>
                  <View style={styles.calloutContainer}>
                    <Text style={styles.calloutText}>{immobile.name}</Text>  
                  </View>
                </Callout>
              </Marker>
            )
          })}
        </MapView>
        <View style={styles.footer}>
            <Text style={styles.footerText}>{properties.length} imóveis encotrados</Text>
  
            <RectButton style={styles.createImmobileButton} 
              onPress={handleNavigateToCreateImmobile}>
              <Feather name="plus" size={20} color='#fff' />
            </RectButton>
  
        </View>
      </View>)
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255,255,255, 0.8)',
      borderRadius: 16,
      justifyContent: 'center',
    },
    calloutText: {
      color: '#0089a5',
      fontSize: 14,
      fontFamily: 'Nunito_700Bold',
    },
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
      backgroundColor: '#fff',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 3,
    },
    footerText: {
      fontFamily: 'Nunito_700Bold',
      color: '#8fa7b3',
      
    },

    createImmobileButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  