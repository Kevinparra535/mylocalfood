// Librerias
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import PropTypes from "prop-types";

// Contextos

// Hooks
import useLocation from "../../hooks/useLocation";

// Screens

// Componentes
import CategoriesSlider from "../../components/Home/CategoriesSlider";
import ResturantsList from "../../components/Home/ResturantsList";
import InputsForms from "../../components/Forms/InputsForms";
import AdsSlider from "../../components/Home/AdsSlider";
import FoodLists from "../../components/Home/FoodLists";

// Navigations

// Imagenes

// Estilos
import Spacings from "../../assets/styles/Spacings";
import Fonts from "../../assets/styles/Fonts";
import Colors from "../../assets/styles/Colors";
import { Platform } from "react-native";

/**
 * Descripción: La descripción de por qué estamos haciendo este componente y que resuelve.
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const HomeScreen = () => {
  // Estados

  // Contextos

  // Hooks
  const { loading, error, data } = useLocation();
  const insets = useSafeAreaInsets();

  // Funciones

  // UseEffects

  // Renders
  return (
    <View style={{ flex: 1 }}>
      {loading === true ? (
        <SafeAreaView>
          <ActivityIndicator />
        </SafeAreaView>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          style={{
            flex: 1,
            marginTop: insets.top,
            marginBottom: Platform.OS === "android" ? insets.bottom : 0,
          }}
        >
          <View style={styles.header}>
            <View style={styles.userInfo}>
              <Image
                resizeMode="cover"
                resizeMethod="auto"
                style={styles.photoProfile}
                source={require("../../assets/images/static/temporalAvatar.webp")}
              />
              <View style={styles.userLocation}>
                <Text style={styles.label}>Ubicacion actual:</Text>
                <Text style={styles.userAddress}>{data.address}</Text>
              </View>
            </View>
          </View>

          <AdsSlider />

          <View style={styles.searchBar}>
            <InputsForms
              icon
              error={null}
              iconSize={18}
              name="search"
              inputMode="search"
              secureTextEntry={false}
              iconColor={Colors.brand.primary}
              placeholder="Buscar por comida o restaurante..."
            />
          </View>

          <CategoriesSlider />

          <FoodLists />

          <ResturantsList />
        </ScrollView>
      )}
    </View>
  );
};

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

const styles = StyleSheet.create({
  header: {
    paddingVertical: Spacings.space,
    paddingHorizontal: Spacings.space,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  userInfo: {
    alignItems: "center",
    flexDirection: "row",
  },

  photoProfile: {
    marginRight: 10,
    width: 30,
    height: 30,
    borderRadius: 100,
  },

  label: {
    ...Fonts.bodyText,
    fontSize: 10,
    lineHeight: 16,
  },

  userAddress: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    ...Fonts.bodyText,
    fontSize: 12,
    lineHeight: 20,
  },

  searchBar: {
    paddingHorizontal: Spacings.space,
  },
});

export default HomeScreen;
