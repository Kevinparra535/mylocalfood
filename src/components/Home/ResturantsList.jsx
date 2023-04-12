// Librerias
import React, { useEffect, useState, useRef } from "react";
import {
  ActivityIndicator,
  Animated,
  FlatList,
  Easing,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { Link } from "@react-navigation/native";
import Lottie from "lottie-react-native";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens

// Componentes
import temporalData from "../../jsons/businessMarkers.json";
import ResturantCards from "./ResturantCards";

// Navigations

// Imagenes

// Estilos
import Spacings from "../../assets/styles/Spacings";
import Fonts from "../../assets/styles/Fonts";
import Colors from "../../assets/styles/Colors";

/**
 * Descripción: La descripción de por qué estamos haciendo este componente y que resuelve.
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const ResturantsList = () => {
  // Estados

  // Contextos

  // Hooks
  const animationProgress = useRef(new Animated.Value(0));

  // Funciones
  const ListEmptyItem = () => {
    return (
      <View style={styles.emptyItem}>
        <Lottie
          loop
          style={styles.lottie}
          progress={animationProgress.current}
          source={require("../../assets/animations/empty_lottie.json")}
        />
        <Text style={styles.emptyItem.text}>No hay elementos</Text>
      </View>
    );
  };

  // UseEffects
  useEffect(() => {
    if (!temporalData.length) {
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  }, [temporalData]);

  // Renders
  return (
    <View style={styles.resturant}>
      <View style={styles.resturantHeader}>
        <Text style={styles.titles}>Cerca de ti</Text>

        <Link to={{ screen: "MapStackNavigation" }}>
          <Text style={styles.link}>Ver todos</Text>
        </Link>
      </View>

      <FlatList
        data={temporalData}
        numColumns={1}
        // onEndReached={!isLoading && isNext && loadMore}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ResturantCards item={item} />}
        contentContainerStyle={
          temporalData.length
            ? styles.flatListContentContainer
            : styles.flatListContentContainer.empty
        }
        ListEmptyComponent={ListEmptyItem}
      />
    </View>
  );
};

ResturantsList.propTypes = {};

ResturantsList.defaultProps = {};

const styles = StyleSheet.create({
  resturant: {
    padding: Spacings.space,
    marginTop: Spacings.space,
  },

  resturantHeader: {
    paddingRight: Spacings.space,
    marginBottom: Spacings.space,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  titles: {
    ...Fonts.heading3,
  },

  link: {
    ...Fonts.bodyText,
    fontSize: 11,
    textDecorationLine: "underline",
    color: Colors.brand.primary,
  },

  scrollContainer: {
    paddingVertical: Spacings.space,
  },

  flatListContentContainer: {
    paddingHorizontal: 15,

    empty: {
      paddingHorizontal: 15,
      height: "100%",
    },
  },

  spinner: {
    marginVertical: Platform.OS === "android" ? 20 : 10,
    color: "#AEAEAE",
  },

  emptyItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",

    text: {
      fontFamily: "poppins-semibold",
      fontSize: 25,
      textAlign: "center",
    },
  },

  lottie: {
    width: 250,
    height: 250,
  },
});

export default ResturantsList;
