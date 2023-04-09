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
import useLocation from "../../hooks/useLocation";

// Screens

// Componentes
import CustomCallOut from "../../components/Map/CustomCallOut";
import temporalData from "../../jsons/businessMarkers.json";

// Navigations

// Imagenes

// Estilos

/**
 * Descripción: Temporalmente este es nuestro home que tiene nuestro mapa
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const MapScreen = () => {
  // Estados

  // Contextos

  // Hooks
  const { loading, error, data } = useLocation();
  const mapRef = useRef(null);

  // Funciones

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
    if (data && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: data.latitude,
        longitude: data.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [loading, data]);

  // Renders
  return (
    <>
      {loading === true ? (
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
          initialRegion={data}
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

MapScreen.propTypes = {};

MapScreen.defaultProps = {};

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

export default MapScreen;
