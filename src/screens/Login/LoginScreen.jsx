// Librerias
import React, { useCallback, useContext } from "react";
import { Link } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Platform,
  Keyboard,
  StyleSheet,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

// Contextos

// Hooks

// Screens

// Componentes
import api from "../../services/api.services";
import LoginForm from "../../components/Login/LoginForm";

// Navigations

// Imagenes

// Estilos
import Fonts from "../../assets/styles/Fonts";
import Colors from "../../assets/styles/Colors";
import Spacings from "../../assets/styles/Spacings";

/**
 * Descripción: Esta pantalla se encarga de mostrar el login.
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const LoginScreen = () => {
  // Estados

  // Contextos

  // Hooks
  const navigation = useNavigation();

  // Funciones

  // UseEffects
  const handleLogin = async (email, password) => {
    await api.login.sigIn(email, password);
  };

  // Renders
  return (
    <>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ImageBackground
          style={styles.bg}
          resizeMode="cover"
          source={require("../../assets/images/static/login_bg.jpg")}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.containerForm}>
              <Text style={styles.containerForm.title}>Iniciar Sesión</Text>
              <LoginForm
                // loginResponse={loginResponse}
                handleLogin={handleLogin}
              />
              <Link
                to={{ screen: "ForgotPasswordScreen" }}
                style={styles.containerForm.link}
              >
                Olvide mi contrasena
              </Link>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
  },

  bg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },

  containerForm: {
    paddingTop: Spacings.space_x7,
    paddingBottom:
      Platform.OS === "android" ? Spacings.space_x4 : Spacings.space_x6,
    paddingHorizontal: Spacings.space_x2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderTopLeftRadius: Spacings.space_x2,
    borderTopRightRadius: Spacings.space_x2,
    backgroundColor: Colors.claro,

    title: {
      ...Fonts.heading1,
    },

    link: {
      marginTop: Spacings.space,
      ...Fonts.links,
      fontSize: 13,
    },
  },
});

export default LoginScreen;
