// Librerias
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CheckBadgeIcon,
  StarIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens

// Componentes
import getOpacity from "../../helpers/getOpacity";

// Navigations

// Imagenes

// Estilos
import Colors from "../../assets/styles/Colors";
import Spacings from "../../assets/styles/Spacings";
import Fonts from "../../assets/styles/Fonts";

/**
 * Descripción: Este componente renderiza las cards de los restaurantes
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const ResturantCards = () => {
  // Estados

  // Contextos

  // Hooks

  // Funciones

  // UseEffects

  // Renders
  return (
    <View style={styles.resturantCard}>
      <View style={styles.resturantImage}></View>

      <View style={styles.resturantTitle}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={styles.title}>Nombre del restaurante </Text>
          <CheckBadgeIcon color={Colors.variants.two} size={20} />
        </View>

        <View style={styles.stars}>
          <Text style={styles.label}>4.2 </Text>
          <StarIcon color={Colors.variants.three} size={13} />
        </View>
      </View>

      <View style={styles.resturantInfo}>
        <View style={styles.location}>
          <MapPinIcon color={Colors.oscuro} size={16} />
          <Text style={styles.label}> Aproximadamente a 1.8 KM de ti</Text>
        </View>

        <Text style={[styles.label, { color: Colors.alerts.check }]}>
          Abierto
        </Text>
      </View>
    </View>
  );
};

ResturantCards.propTypes = {};

ResturantCards.defaultProps = {};

const styles = StyleSheet.create({
  resturantCard: {
    paddingBottom: Spacings.space,
    marginBottom: Spacings.space_x2,
    borderRadius: Spacings.space,
    backgroundColor: getOpacity(Colors.claro, 1),
  },

  resturantImage: {
    borderRadius: Spacings.space,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: "100%",
    height: 100,
    backgroundColor: Colors.oscuro,
  },

  resturantTitle: {
    padding: Spacings.space,
    marginBottom: Spacings.space,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  title: {
    ...Fonts.heading3,
    fontSize: 17,
  },

  stars: {
    paddingVertical: Spacings.space_half,
    paddingHorizontal: Spacings.space,
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 100,
    backgroundColor: getOpacity(Colors.variants.one, 0.2),
  },

  label: {
    ...Fonts.bodyText,
    fontSize: 13,
  },

  resturantInfo: {
    paddingHorizontal: Spacings.space,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  location: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default ResturantCards;
