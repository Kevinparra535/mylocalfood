// Librerias
import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import getOpacity from "../../helpers/getOpacity";
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
  name,
  error,
  value,
  icon,
  onBlur,
  onFocus,
  iconSize,
  readOnly,
  iconColor,
  inputMode,
  placeholder,
  onChangeText,
  keyboardType,
  autoCapitalize,
  secureTextEntry,
}) => {
  // Estados

  // Contextos

  // Hooks

  // Funciones

  // UseEffects

  // Renders
  return (
    <View style={styles.inputContainer}>
      {icon && (
        <MagnifyingGlassIcon
          style={styles.iconStyle}
          size={iconSize}
          color={iconColor}
        />
      )}

      <TextInput
        name={name}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        readOnly={readOnly}
        style={styles.input}
        inputMode={inputMode}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={Colors.bg.oscuro}
      />
    </View>
  );
};

InputsForms.propTypes = {
  icon: PropTypes.bool,
  name: PropTypes.string,
  error: PropTypes.object,
  onFocus: PropTypes.func,
  readOnly: PropTypes.bool,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

InputsForms.defaultProps = {
  name: "",
  icon: false,
  error: null,
  iconSize: 15,
  readOnly: false,
  placeholder: "",
  iconColor: "gray",
  onFocus: () => null,
  keyboardType: "default",
  autoCapitalize: "none",
  secureTextEntry: true,
};

const styles = StyleSheet.create({
  iconStyle: {
    marginRight: Spacings.space,
  },

  inputContainer: {
    paddingHorizontal: Spacings.space_x2,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.variants.one,
    borderRadius: Spacings.space,
    backgroundColor: getOpacity(Colors.variants.one, 0.1),
  },

  inputContainerError: {
    paddingHorizontal: Spacings.space_x2,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: Spacings.space,
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.alerts.error,
    borderRadius: Spacings.space,
    backgroundColor: getOpacity(Colors.variants.one, 0.1),
  },

  input: {
    paddingVertical:
      Platform.OS === "android" ? Spacings.space : Spacings.space_x2,
    paddingHorizontal: Spacings.space,
    ...Fonts.bodyText,
    fontSize: 14,
  },
});

export default InputsForms;
