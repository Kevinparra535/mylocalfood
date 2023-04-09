// Librerias
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens
import HomeScreen from "../screens/Home/HomeScreen";
import MapScreen from "../screens/Map/MapScreen";

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

const Tab = createMaterialBottomTabNavigator();

const DashboardTabsNavigation = () => {
  // Estados

  // Contextos

  // Hooks

  // Funciones

  // UseEffects

  // Renders
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Inicio",
          tabBarLabel: "Inicio",
        }}
      />

      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Mapa",
          tabBarLabel: "Mapa",
        }}
      />
    </Tab.Navigator>
  );
};

DashboardTabsNavigation.propTypes = {};

DashboardTabsNavigation.defaultProps = {};

const styles = StyleSheet.create({});

export default DashboardTabsNavigation;
