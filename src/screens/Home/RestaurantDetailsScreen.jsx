// Librerias
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import {
  ArrowUpOnSquareIcon,
  ChevronLeftIcon,
} from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens

// Componentes
import temporalData from "../../jsons/businessMarkers.json";

// Navigations

// Imagenes

// Estilos
import Spacings from "../../assets/styles/Spacings";
import Colors from "../../assets/styles/Colors";
import Fonts from "../../assets/styles/Fonts";

/**
 * Descripción: La descripción de por qué estamos haciendo este componente y que resuelve.
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const RestaurantDetailsScreen = ({ navigation, route }) => {
  // Estados
  const [data, setData] = useState({});
  const [backgroundImage, setBackgroundImage] = useState(null);

  // Contextos

  // Hooks
  const { id } = route.params;

  // Funciones

  // UseEffects
  useEffect(() => {
    if (data.details) {
      // Obtén la cantidad de fotos en el arreglo
      const numberOfImages = data.details.images.length;

      // Genera un número aleatorio para seleccionar una imagen al azar
      const randomIndex = Math.floor(Math.random() * numberOfImages);
      setBackgroundImage(data.details.images[randomIndex || 0].uri);
    }
  }, [data]);

  useEffect(() => {
    if (temporalData && id) {
      const restaurant = temporalData.find((item) => Number(item.id) === Number(id));
      setData(restaurant);
    }
  }, [id, temporalData]);

  useEffect(() => {
    return () => {
      setData({});
      setBackgroundImage({});
    };
  }, []);

  // Renders
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image
          resizeMode="cover"
          resizeMethod="auto"
          style={styles.background}
          source={{ uri: backgroundImage }}
        />

        <View style={styles.actions}>
          <Pressable onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={25} color="black" />
          </Pressable>

          <Pressable onPress={() => navigation.goBack()}>
            <ArrowUpOnSquareIcon size={25} color="black" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

RestaurantDetailsScreen.propTypes = {};

RestaurantDetailsScreen.defaultProps = {};

const styles = StyleSheet.create({
  header: {
    height: 300,
  },

  actions: {
    padding: Spacings.space_x2,
    position: "absolute",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },

  background: {
    marginRight: 10,
    width: "100%",
    height: "100%",
  },
});

export default RestaurantDetailsScreen;
