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
import LoginScreen from "../screens/Login/LoginScreen";

// Componentes
import { auth, onAuthStateChanged } from "../config/firebaseConfig";

// Navigations

// Imagenes

// Estilos

/**
 * Descripción: En rutador inicial
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const Root = createNativeStackNavigator();

const RootNavigation = () => {
  // Estados
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Contextos

  // Hooks

  // Funciones

  // UseEffects
  useEffect(() => {
    const authSubscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return authSubscriber;
  }, []);

  // Renders
  if (loading) {
    return null; // Mostrar una pantalla de carga mientras se verifica el estado de autenticación.
  }

  return (
    <Root.Navigator initialRouteName="LoginScreen">
      {user ? (
        <Root.Screen name="HomeScreen" component={HomeScreen} />
      ) : (
        <>
          <Root.Screen name="LoginScreen" component={LoginScreen} />
        </>
      )}
    </Root.Navigator>
  );
};

export default RootNavigation;