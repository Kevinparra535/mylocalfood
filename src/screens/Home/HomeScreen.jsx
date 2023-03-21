// Librerias
import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens

// Componentes

// Navigations

// Imagenes

// Estilos

/**
 * Descripción: La descripción de por qué estamos haciendo este componente y que resuelve.
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const HomeScreen = () => {
  // Estados
  const [location, setLocation] = useState({
    loading: false,
    data: {},
    error: null,
  });

  // Contextos

  // Hooks
  const mapRef = useRef(null);

  // Funciones
  const getLocationAsync = async () => {
    setLocation({ loading: true, error: null });

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setLocation({
          loading: false,
          error: "Permission to access location was denied",
        });
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation({
        loading: false,
        data: {
          latitude: location.coords ? location.coords.latitude : 37.78825,
          longitude: location.coords ? location.coords.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
    } catch (error) {
      setLocation({ loading: false, error });
    }
  };

  const mapStyle = [
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ];

  // UseEffects
  useEffect(() => {
    if (location.data && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: location.data.latitude,
        longitude: location.data.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [location]);

  useEffect(() => {
    getLocationAsync();
  }, []);

  // Renders
  return (
    <>
      {location.loading === true ? (
        <ActivityIndicator />
      ) : (
        <MapView
          style={{ flex: 1 }}
          ref={mapRef}
          showsScale={false}
          showsTraffic={false}
          showsCompass={false}
          showsIndoors={false}
          showsBuildings={false}
          showsUserLocation={true}
          customMapStyle={mapStyle}
          showsMyLocationButton={true}
          initialRegion={location.data}
          showsPointsOfInterest={false}
          showsIndoorLevelPicker={false}
        >
          {location && (
            <Marker
              title="My Location"
              coordinate={{
                latitude: location.data.latitude,
                longitude: location.data.longitude,
              }}
            />
          )}
        </MapView>
      )}
    </>
  );
};

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

const styles = StyleSheet.create({});

export default HomeScreen;
