// Librerias
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens

// Componentes
import InputsForms from "../Forms/InputsForms";

// Navigations

// Imagenes

// Estilos
import Spacings from "../../assets/styles/Spacings";
import Fonts from "../../assets/styles/Fonts";
import Colors from "../../assets/styles/Colors";

/**
 * Descripción: Este componente renderiza el search bar
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const SearchBar = ({ overlay, readOnly, onPressOverlay }) => {
  // Estados

  // Contextos

  // Hooks

  // Funciones

  // UseEffects

  // Renders
  return (
    <View style={styles.searchBar}>
      {overlay && (
        <Pressable style={styles.overlay} onPress={onPressOverlay}></Pressable>
      )}
      <InputsForms
        icon
        error={null}
        iconSize={18}
        name="search"
        inputMode="search"
        readOnly={readOnly}
        secureTextEntry={false}
        iconColor={Colors.brand.primary}
        placeholder="Buscar por comida o restaurante..."
      />
    </View>
  );
};

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: Spacings.space,
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    height: 60,
  },
});

export default SearchBar;
