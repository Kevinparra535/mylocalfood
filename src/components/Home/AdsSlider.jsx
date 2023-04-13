// Librerias
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import Spacings from "../../assets/styles/Spacings";
import Colors from "../../assets/styles/Colors";
import Fonts from "../../assets/styles/Fonts";

// Contextos

// Hooks

// Screens

// Componentes

// Navigations

// Imagenes

// Estilos

/**
 * Descripción: Este slider renderiza anuncions de manera dinamica
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const AdsSlider = () => {
  // Estados

  // Contextos

  // Hooks

  // Funciones

  // UseEffects

  // Renders
  return (
    <View style={styles.ads}>
      {/* Slider */}
      <ScrollView
        horizontal={true}
        style={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        <Pressable style={styles.adsItem}>
          <Text style={[styles.adsItemText, styles.adsItemSmall]}>Hasta</Text>

          <Text style={styles.adsItemMedium}>50% de descuento</Text>

          <Text style={[styles.adsItemText, styles.adsItemSmall]}>
            en Pizzas de ExampleResturant.
          </Text>

          <Image
            style={styles.adsItemImage}
            resizeMode="contain"
            resizeMethod="auto"
            source={require("../../assets/images/static/pizza.png")}
          />
        </Pressable>

        <Pressable
          style={[styles.adsItem, { backgroundColor: Colors.brand.primary }]}
        >
          <Text style={[styles.adsItemText, styles.adsItemSmall]}>Hasta</Text>

          <Text style={styles.adsItemMedium}>10% de descuento</Text>

          <Text style={[styles.adsItemText, styles.adsItemSmall]}>
            en Hamburguesas de Resturant.
          </Text>

          <Image
            style={styles.adsItemImage}
            resizeMode="contain"
            resizeMethod="auto"
            source={require("../../assets/images/static/burger.png")}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
};

AdsSlider.propTypes = {};

AdsSlider.defaultProps = {};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: Spacings.space,
    marginTop: Spacings.space,
    marginBottom: Spacings.space_x2,
  },

  adsItem: {
    paddingVertical: Spacings.space_half,
    paddingHorizontal: Spacings.space,
    display: "flex",
    justifyContent: "center",
    marginRight: 10,
    width: 300,
    height: 100,
    borderRadius: Spacings.space,
    backgroundColor: Colors.oscuro,
  },

  adsItemImage: {
    position: "absolute",
    zIndex: 1,
    right: 10,
    width: 80,
    height: 100,
  },

  adsItemText: {
    ...Fonts.bodyText,
    color: Colors.claro,
  },

  adsItemSmall: {
    width: "70%",
    fontSize: 11,
  },

  adsItemMedium: {
    width: "70%",
    ...Fonts.heading3,
    fontSize: 16,
    color: Colors.claro,
  },
});

export default AdsSlider;
