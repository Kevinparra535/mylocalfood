// Librerias
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Lottie from "lottie-react-native";

// Contextos

// Hooks

// Screens

// Componentes

// Navigations

// Imagenes

// Estilos
import Colors from "../../assets/styles/Colors";
import Fonts from "../../assets/styles/Fonts";
import Spacings from "../../assets/styles/Spacings";

/**
 * Descripción: Este CTA es reutilizable.
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const CallToAction = ({ title, onPress, isLoading }) => {
  // Estados

  // Contextos

  // Hooks

  // Funciones

  // UseEffects

  // Renders
  return (
    <>
      {isLoading === true ? (
        <View style={styles.buttonLoading}>
          <View style={styles.lottie}>
            <Lottie
              source={require("../../assets/animations/lottie-loading.json")}
              autoPlay
              loop
            />
          </View>
          <Text style={styles.buttonLoading.label}>
            Validando informacion...
          </Text>
        </View>
      ) : (
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.button.label}>{title}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

CallToAction.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  isLoading: PropTypes.bool,
};

CallToAction.defaultProps = {
  title: "Soy un CTA",
  onPress: () => null,
  isLoading: false,
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: Spacings.space,
    paddingHorizontal: Spacings.space_x2,
    width: "100%",

    borderRadius: Spacings.space,
    backgroundColor: Colors.brand.primary,

    label: {
      ...Fonts.callToActions,
      color: Colors.claro,
    },
  },

  buttonLoading: {
    paddingVertical: Spacings.space_half,
    paddingHorizontal: Spacings.space_x2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",

    borderRadius: Spacings.space,
    backgroundColor: Colors.bg.oscuro,

    label: {
      ...Fonts.callToActions,
      color: Colors.claro,
    },
  },

  lottie: {
    marginRight: Spacings.space_half,
    width: 40,
    height: 40,
  },
});

export default CallToAction;
