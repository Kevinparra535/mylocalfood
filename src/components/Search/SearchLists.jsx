// Librerias
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens

// Componentes
import SearchCards from "./SearchCards";

// Navigations

// Imagenes

// Estilos.
import Spacings from "../../assets/styles/Spacings";

/**
 * Descripción: renderiza la lista de comida en la busqueda.
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const SearchLists = ({ data }) => {
  // Estados

  // Contextos

  // Hooks

  // Funciones

  // UseEffects

  // Renders
  return (
    <FlatList
      numColumns={1}
      data={data}
      scrollEnabled={false}
      style={styles.container}
      onEndReachedThreshold={0.1}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <SearchCards item={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};

SearchLists.propTypes = {};

SearchLists.defaultProps = {};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: Spacings.space,
    flex: 1,
  },

  spinner: {
    marginVertical: Platform.OS === "android" ? 20 : 10,
    color: "#AEAEAE",
  },

  lottie: {
    width: 250,
    height: 250,
  },
});

export default SearchLists;
