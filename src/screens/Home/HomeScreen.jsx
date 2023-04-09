// Librerias
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";

// Contextos

// Hooks
import useLocation from "../../hooks/useLocation";

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

  // Contextos

  // Hooks
  const { loading, error, data } = useLocation();

  // Funciones

  // UseEffects
  useEffect(() => {
    console.log(loading, error, data);
  }, [loading, error, data]);

  // Renders
  return (
    <SafeAreaView>
      {loading === true ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text>Home</Text>
          <Text>{data.address}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

const styles = StyleSheet.create({});

export default HomeScreen;
