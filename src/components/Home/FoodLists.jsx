// Librerias
import React, { useEffect, useState, useRef } from "react";
import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "@react-navigation/native";
import Constants from "expo-constants";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens

// Componentes
import temporalData from "../../jsons/foodPromotion.json";
import FoodCards from "./FoodCards";

// Navigations

// Imagenes

// Estilos
import Spacings from "../../assets/styles/Spacings";
import Fonts from "../../assets/styles/Fonts";
import Colors from "../../assets/styles/Colors";

/**
 * Descripción: La descripción de por qué estamos haciendo este componente y que resuelve.
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const FoodLists = () => {
  // Estados

  // Contextos

  // Hooks

  // Funciones

  // UseEffects

  // Renders
  return (
    <View style={styles.resturant}>
      <View style={styles.resturantHeader}>
        <Text style={styles.titles}>Los más vendidos</Text>

        <Link to={{ screen: "MapStackNavigation" }}>
          <Text style={styles.link}>Ver todos</Text>
        </Link>
      </View>

      <FlatList
        numColumns={2}
        data={temporalData}
        scrollEnabled={false}
        style={styles.container}
        onEndReachedThreshold={0.1}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.column}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <FoodCards item={item} />}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
};

FoodLists.propTypes = {};

FoodLists.defaultProps = {};

const styles = StyleSheet.create({
  resturant: {
    padding: Spacings.space,
    flex: 1,
    marginTop: Spacings.space,
  },

  resturantHeader: {
    paddingRight: Spacings.space,
    marginBottom: Spacings.space,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  titles: {
    ...Fonts.heading3,
  },

  link: {
    ...Fonts.bodyText,
    fontSize: 11,
    textDecorationLine: "underline",
    color: Colors.brand.primary,
  },

  scrollContainer: {
    paddingVertical: Spacings.space,
  },

  flatListContentContainer: {
    flex: 1,
    justifyContent: "space-around",
  },

  container: {
    flex: 1,
    flexDirection: "column",
  },

  column: {
    flexShrink: 1,
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

export default FoodLists;
