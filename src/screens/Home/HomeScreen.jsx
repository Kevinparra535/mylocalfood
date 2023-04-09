// Librerias
import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  Alert,
} from "react-native";
import MapView, { Marker, Callout, CalloutSubview } from "react-native-maps";
import * as Location from "expo-location";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens

// Componentes
import CustomCallOut from "../../components/Map/CustomCallOut";
import temporalData from "../../jsons/businessMarkers.json";

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
  const [userLocation, setUserLocation] = useState({
    loading: false,
    data: {},
    error: null,
  });

  // Contextos

  // Hooks
  const mapRef = useRef(null);

  // Funciones
  const getLocationAsync = async () => {
    setUserLocation({ loading: true, error: null });

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setUserLocation({
          loading: false,
          error: "Permission to access location was denied",
        });
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setUserLocation({
        loading: false,
        data: {
          latitude: location.coords ? location.coords.latitude : 37.78825,
          longitude: location.coords ? location.coords.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
    } catch (error) {
      setUserLocation({ loading: false, error });
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
    if (userLocation.data && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: userLocation.data.latitude,
        longitude: userLocation.data.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [userLocation]);

  useEffect(() => {
    getLocationAsync();
  }, []);

  // Renders
  return (
    <>
      {userLocation.loading === true ? (
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
          initialRegion={userLocation.data}
          showsPointsOfInterest={false}
          showsIndoorLevelPicker={false}
        >
          {temporalData && (
            <>
              {temporalData.map((item) => (
                <Marker
                  key={item.id}
                  title={item.details.name}
                  description={item.details.description}
                  coordinate={{
                    latitude: item.location.latitude,
                    longitude: item.location.longitude,
                  }}
                >
                  {/* Marcador */}
                  <View style={styles.marker}>
                    <Image
                      resizeMode="cover"
                      style={styles.logo}
                      resizeMethod="scale"
                      source={{ uri: item.details.images.logo }}
                    />

                    <Image
                      style={styles.pin}
                      source={require("../../assets/images/static/pin_marker.png")}
                    />
                  </View>

                  {/* Tooltip */}
                  <Callout tooltip alphaHitTest style={styles.customView}>
                    <CustomCallOut
                      id={item.id}
                      title={item.details.name}
                      stars={item.details.rating}
                      logo={item.details.images.logo}
                    />
                  </Callout>
                </Marker>
              ))}
            </>
          )}
        </MapView>
      )}
    </>
  );
};

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

const styles = StyleSheet.create({
  marker: {
    alignItems: "center",
  },

  logo: {
    position: "absolute",
    top: -0,
    zIndex: 2,
    width: 30,
    height: 30,
    borderRadius: 100,
  },

  pin: { width: 50, height: 50 },
});

export default HomeScreen;
