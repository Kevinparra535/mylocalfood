// Librerias
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import {
  CheckBadgeIcon,
  ClockIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
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
 * Descripción: Este componente renderiza las cardscardImage de comidas
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const width = (Dimensions.get("window").width - 4 * 10) / 2;

const FoodCards = ({ item }) => {
  // Estados

  // Contextos

  // Hooks
  const navigation = useNavigation();

  // Funciones
  const handleClick = () => {
    navigation.navigate("RestaurantDetailsScreen", { id: item.id });
  };

  // UseEffects
  useEffect(() => {
    console.log(item);
  }, [item]);

  // Renders
  return (
    <Pressable onPress={handleClick} style={styles.card}>
      <View style={styles.cardImage}>
        <Image
          resizeMode="cover"
          resizeMethod="scale"
          style={styles.image}
          source={{ uri: item.image }}
        />
      </View>

      <View style={styles.cardTitle}>
        <Text style={styles.title}>{item.name} </Text>
      </View>

      <View style={styles.returantTitle}>
        <Image
          resizeMode="cover"
          resizeMethod="auto"
          style={styles.logo}
          source={{ uri: item.resturant.details.logo }}
        />

        <View style={styles.resturantTitleContainer}>
          <Text style={styles.returantName}>
            {item.resturant.details.name}{" "}
          </Text>
          <CheckBadgeIcon color={Colors.variants.two} size={11} />
        </View>
      </View>

      <View style={styles.cardInfo}>
        <View style={styles.location}>
          <ClockIcon color={Colors.variants.one} size={12} />
          <Text style={styles.label}> 10 - 25 min</Text>
        </View>

        <Text style={[styles.label, { color: Colors.alerts.check }]}>
          Envio gratis
        </Text>
      </View>
    </Pressable>
  );
};

FoodCards.propTypes = {};

FoodCards.defaultProps = {};

const styles = StyleSheet.create({
  card: {
    padding: Spacings.space_half,
    marginHorizontal: 5,
    marginBottom: Spacings.space,
    borderRadius: Spacings.space_half,
    width,
    backgroundColor: getOpacity(Colors.claro, 1),
  },

  cardImage: {
    width: "100%",
    height: 160,
    borderRadius: Spacings.space_half,
    backgroundColor: Colors.variants.one,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: Spacings.space_half,
  },

  cardTitle: {
    paddingHorizontal: 2,
    marginVertical: Spacings.space_half,
  },

  title: {
    ...Fonts.heading3,
    fontSize: 13,
  },

  returantTitle: {
    paddingHorizontal: 5,
    paddingBottom: Spacings.space_half,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  returantName: {
    ...Fonts.bodyText,
    fontSize: 11,
  },

  resturantTitleContainer: {
    paddingVertical: Spacings.space_half,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: Spacings.space_half,
    width: "100%",
  },

  logo: {
    width: 15,
    height: 15,
    borderRadius: 100,
  },

  cardInfo: {
    paddingHorizontal: 5,
    paddingBottom: Spacings.space_half,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  label: {
    ...Fonts.bodyText,
    fontSize: 10,
    color: Colors.variants.one
  },

  location: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default FoodCards;
