// Librerias
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
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
import Fonts from "../../assets/styles/Fonts";
import Colors from "../../assets/styles/Colors";

/**
 * Descripción: Este componente renderiza las categorias
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const CategoriesSlider = () => {
  // Estados
  const [data, setData] = useState([]);

  // Contextos

  // Hooks

  // Funciones

  // UseEffects
  useEffect(() => {}, []);

  // Renders
  return (
    <View style={styles.categories}>
      {/* <View style={styles.categoriesHeader}>
        <Text style={styles.titles}>Categorias</Text>

        <Pressable>
          <Text style={styles.link}>Ver todos</Text>
        </Pressable>
      </View> */}

      {/* Slider */}
      <ScrollView
        horizontal={true}
        style={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        <Pressable
          style={[styles.categoriesItem, styles.categoriesItemSelected]}
        >
          <Text
            style={[
              styles.categoriesItemText,
              styles.categoriesItemTextSelected,
            ]}
          >
            Restaurantes
          </Text>
        </Pressable>

        <Pressable style={styles.categoriesItem}>
          <Text style={styles.categoriesItemText}>Bares</Text>
        </Pressable>

        <Pressable style={styles.categoriesItem}>
          <Text style={styles.categoriesItemText}>Cafeterias</Text>
        </Pressable>

        <Pressable style={styles.categoriesItem}>
          <Text style={styles.categoriesItemText}>Comidas rapidas</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

CategoriesSlider.propTypes = {};

CategoriesSlider.defaultProps = {};

const styles = StyleSheet.create({
  categories: {
    paddingVertical: Spacings.space,
    paddingLeft: Spacings.space,
  },

  categoriesHeader: {
    paddingRight: Spacings.space,
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

  categoriesItem: {
    paddingVertical: Spacings.space_half,
    paddingHorizontal: Spacings.space_x2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 100,
    backgroundColor: getOpacity(Colors.variants.one, 0.2)
  },

  categoriesItemSelected: {
    backgroundColor: getOpacity(Colors.brand.primary, 1),
  },

  categoriesItemText: {
    ...Fonts.bodyText,
  },

  categoriesItemTextSelected: {
    color: Colors.claro,
  },
});

export default CategoriesSlider;
