// Librerias
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens
import HomeScreen from "../screens/Home/HomeScreen";
import RestaurantDetailsScreen from "../screens/Home/RestaurantDetailsScreen";

// Componentes

// Navigations

// Imagenes

// Estilos

/**
 * Descripción: Este Navigator se encarga de las rutas internas en el home
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const HomeStack = createNativeStackNavigator();

const HomeStackNavigation = () => {
  // Estados

  // Contextos

  // Hooks

  // Funciones

  // UseEffects

  // Renders
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />

      <HomeStack.Screen
        name="RestaurantDetailsScreen"
        component={RestaurantDetailsScreen}
      />
    </HomeStack.Navigator>
  );
};

HomeStackNavigation.propTypes = {};

HomeStackNavigation.defaultProps = {};

const styles = StyleSheet.create({});

export default HomeStackNavigation;
