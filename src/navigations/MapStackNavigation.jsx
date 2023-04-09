// Librerias
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens
import MapScreen from "../screens/Map/MapScreen";
import RestaurantDetailsScreen from "../screens/Home/RestaurantDetailsScreen";

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

const Stack = createNativeStackNavigator();

const MapStackNavigation = () => {
  // Estados

  // Contextos

  // Hooks

  // Funciones

  // UseEffects

  // Renders
  return (
    <Stack.Navigator
      initialRouteName="MapScreen"
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen
        name="RestaurantDetailsScreen"
        component={RestaurantDetailsScreen}
      />
    </Stack.Navigator>
  );
};

MapStackNavigation.propTypes = {};

MapStackNavigation.defaultProps = {};

const styles = StyleSheet.create({});

export default MapStackNavigation;
