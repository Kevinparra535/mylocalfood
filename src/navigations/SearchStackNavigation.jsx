// Librerias
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens
import SearchScreen from "../screens/Search/SearchScreen";

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

const SearchStackNavigation = () => {
  // Estados
  const [data, setData] = useState([]);

  // Contextos

  // Hooks

  // Funciones

  // UseEffects
  useEffect(() => {}, []);

  // Renders
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};

SearchStackNavigation.propTypes = {};

SearchStackNavigation.defaultProps = {};

const styles = StyleSheet.create({});

export default SearchStackNavigation;
