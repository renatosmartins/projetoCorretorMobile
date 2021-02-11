import React from 'react';

import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import mapMarker from '../images/map-marker.png';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PropertiesMap() {
    const navigation = useNavigation()

    function handleNavigateToImmobileDetails() {
        navigation.navigate('ImmobileDetails')
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
          <Marker 
            icon={mapMarker}
            calloutAnchor={{
              x: 2.2,
              y: 0.7,
            }}
            coordinate={{
              latitude: -16.6803002,
              longitude: -49.2570308,
            }}
          > 
            <Callout tooltip={true} onPress={handleNavigateToImmobileDetails}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>Lar das meninas</Text>  
              </View>
            </Callout>
          </Marker>
        </MapView>
        <View style={styles.footer}>
            <Text style={styles.footerText}>2 orfanatos encotrados</Text>
  
            <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {}}>
              <Feather name="plus" size={20} color='#fff' />
            </TouchableOpacity>
  
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
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  