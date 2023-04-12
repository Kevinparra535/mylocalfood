// Librerias
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  HomeIcon,
  StarIcon,
  MapIcon,
  ShareIcon,
} from "react-native-heroicons/outline";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens

// Componentes

// Navigations
import HomeStackNavigation from "./HomeStackNavigation";
import MapStackNavigation from "./MapStackNavigation";

// Imagenes

// Estilos
import Colors from "../assets/styles/Colors";

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
        name="HomeStackNavigation"
        component={HomeStackNavigation}
        options={{
          title: "Inicio",
          tabBarLabel: "Inicio",
          tabBarIcon: ({ focused, color, size }) => (
            <HomeIcon color={color} strokeWidth={1.8} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="MapStackNavigation"
        component={MapStackNavigation}
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
