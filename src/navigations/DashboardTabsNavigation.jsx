// Librerias
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  HomeIcon,
  StarIcon,
  MapIcon,
  ShareIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens
import HomeScreen from "../screens/Home/HomeScreen";
import MapScreen from "../screens/Map/MapScreen";
import Colors from "../assets/styles/Colors";

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
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor={Colors.oscuro}
      inactiveColor={Colors.bg.oscuro}
      barStyle={{ backgroundColor: Colors.claro }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Inicio",
          tabBarLabel: "Inicio",
          tabBarIcon: ({ focused, color, size }) => (
            <HomeIcon color={color} strokeWidth={1.8} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Mapa",
          tabBarLabel: "Mapa",
          tabBarIcon: ({ color, size }) => (
            <MapIcon color={color} strokeWidth={1.5} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

DashboardTabsNavigation.propTypes = {};

DashboardTabsNavigation.defaultProps = {};

const styles = StyleSheet.create({});

export default DashboardTabsNavigation;
