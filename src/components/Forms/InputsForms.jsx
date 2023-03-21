// Librerias
import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import PropTypes from "prop-types";

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
 * Descripción: Este componente es un input reutilizable con el estilizado del form de inisio de sesion
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const InputsForms = ({
  value,
  name,
  onBlur,
  error,
  autoCapitalize,
  secureTextEntry,
  onChangeText,
  keyboardType,
  placeholder,
}) => {
  // Estados

  // Contextos

  // Hooks

  // Funciones

  // UseEffects

  // Renders
  return (
    <TextInput
      name={name}
      value={value}
      onBlur={onBlur}
      placeholder={placeholder}
      style={error ? styles.loginInputError : styles.loginInput}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={error ? Colors.alerts.error : "gray"}
    />
  );
};

InputsForms.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

InputsForms.defaultProps = {
  name: "",
  placeholder: "",
  keyboardType: "default",
  autoCapitalize: "none",
  secureTextEntry: true,
};

const styles = StyleSheet.create({
  loginInput: {
    paddingVertical:
      Platform.OS === "android" ? Spacings.space : Spacings.space_x2,
    paddingHorizontal: Spacings.space_x2,
    marginBottom: Spacings.space,
    width: "100%",
    ...Fonts.bodyText,
    borderWidth: 1,
    borderColor: Colors.variants.one,
    borderRadius: Spacings.space,
  },

  loginInputError: {
    paddingVertical:
      Platform.OS === "android" ? Spacings.space : Spacings.space_x2,
    paddingHorizontal: Spacings.space_x2,
    marginBottom: Spacings.space,
    width: "100%",
    ...Fonts.bodyText,
    borderWidth: 1,
    borderColor: Colors.alerts.error,
    borderRadius: Spacings.space,
  },
});

export default InputsForms;
