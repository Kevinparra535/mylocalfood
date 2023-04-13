// Librerias
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens

// Componentes
import getOpacity from "../../helpers/getOpacity";

// Navigations

// Imagenes

// Estilos
import Spacings from "../../assets/styles/Spacings";
import Colors from "../../assets/styles/Colors";
import Fonts from "../../assets/styles/Fonts";

/**
 * Descripción: Este componente se encarga de renderizar las cards de comida en la busqueda
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const SearchCards = ({ item }) => {
  // Estados

  // Contextos

  // Hooks

  // Funciones

  // UseEffects

  // Renders
  return (
    <View style={styles.card}>
      <View style={styles.cardImage}>
        <Image
          resizeMode="cover"
          style={styles.image}
          resizeMethod="scale"
          source={{ uri: item.image }}
        />
      </View>

      <View style={styles.cardInfo}>
        <View style={styles.row}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.stars}>
            <StarIcon color={Colors.variants.three} size={11} />
            <Text style={styles.starsLabel}>{item.averageRating}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.resturant}>{item.resturant.details.name}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.price}>$35.000</Text>
          <Text style={styles.location}>A 0.5km de ti</Text>
          <Text style={[styles.label, { color: Colors.alerts.check }]}>
            Abierto
          </Text>
        </View>
      </View>
    </View>
  );
};

SearchCards.propTypes = {};

SearchCards.defaultProps = {};

const styles = StyleSheet.create({
  card: {
    padding: Spacings.space,
    marginBottom: Spacings.space_x2,
    display: "flex",
    flexDirection: "row",
    borderRadius: Spacings.space_half,
    backgroundColor: getOpacity(Colors.bg.claro, 0.4),
  },

  cardImage: {
    marginRight: Spacings.space_x2,
    width: 120,
    height: 80,
    borderRadius: Spacings.space_half,
    backgroundColor: Colors.oscuro,
  },

  image: {
    marginRight: Spacings.space_x2,
    width: "100%",
    height: "100%",
    borderRadius: Spacings.space_half,
    backgroundColor: Colors.oscuro,
  },

  cardInfo: {
    flex: 1,
    justifyContent: "space-between",
  },

  row: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  title: {
    maxWidth: "85%",
    ...Fonts.cards,
    fontSize: 15,
  },

  resturant: {
    marginBottom: Spacings.space,
    ...Fonts.bodyText,
    fontSize: 12,
  },

  price: {
    ...Fonts.cards,
    fontSize: 13,
  },

  location: {
    ...Fonts.cards,
    color: getOpacity(Colors.oscuro, 0.5),
    fontSize: 11,
  },

  label: {
    ...Fonts.cards,
    fontSize: 11,
  },

  stars: {
    paddingTop: Spacings.space_half,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: 30,
  },

  starsLabel: {
    marginLeft: 2,
    ...Fonts.cards,
    fontSize: 10,
    textAlign: "left",
  },
});

export default SearchCards;
