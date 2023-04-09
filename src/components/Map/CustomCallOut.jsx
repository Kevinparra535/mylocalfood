// Librerias
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Button, Alert } from "react-native";
import { StarIcon, ChevronRightIcon } from "react-native-heroicons/solid";
import { CalloutSubview } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens

// Componentes

// Navigations

// Imagenes

// Estilos
import Fonts from "../../assets/styles/Fonts";
import Spacings from "../../assets/styles/Spacings";
import Colors from "../../assets/styles/Colors";

/**
 * Descripción: La descripción de por qué estamos haciendo este componente y que resuelve.
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const CustomCallOut = ({ id, title, stars, logo }) => {
  // Estados
  const [data, setData] = useState([]);

  // Contextos

  // Hooks

  // Funciones

  // UseEffects
  useEffect(() => {}, []);

  // Renders
  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        <Image
          resizeMode="cover"
          style={styles.logo}
          resizeMethod="scale"
          source={{ uri: logo }}
        />
        <View style={styles.texts}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.rating}>
            4.5 <StarIcon stroke="black" fill="yellow" size={13} />
          </Text>
        </View>

        <View>
          <ChevronRightIcon stroke="black" fill="yellow" size={15} />
        </View>
      </View>
      <View style={styles.arrowBorder} />
      <View style={styles.arrow} />
    </View>
  );
};

CustomCallOut.propTypes = {};

CustomCallOut.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignSelf: "flex-start",
  },

  logo: {
    marginRight: 10,
    width: 30,
    height: 30,
    borderRadius: 100,
  },

  bubble: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "#ffffff",
    backgroundColor: "#ffffff",
  },

  texts: {
    width: 160,
  },

  text: {
    ...Fonts.callToActions,
    textAlign: "left",
    color: Colors.oscuro,
  },

  rating: {
    flex: 1,
    alignItems: "center",
    ...Fonts.bodyText,
    fontSize: 12,
    color: Colors.oscuro,
  },

  arrow: {
    backgroundColor: "transparent",
    borderWidth: 16,
    borderColor: "transparent",
    borderTopColor: "#ffffff",
    alignSelf: "center",
    marginTop: -32,
  },

  arrowBorder: {
    backgroundColor: "transparent",
    borderWidth: 16,
    borderColor: "transparent",
    borderTopColor: "#ffffff",
    alignSelf: "center",
    marginTop: -0.5,
  },
});

export default CustomCallOut;
