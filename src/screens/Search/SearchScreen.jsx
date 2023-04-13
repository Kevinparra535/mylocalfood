// Librerias
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens

// Componentes
import temporalData from "../../jsons/foodPromotion.json";
import SearchBar from "../../components/Search/SearchBar";
import SearchLists from "../../components/Search/SearchLists";

// Navigations

// Imagenes

// Estilos
import Colors from "../../assets/styles/Colors";
import Spacings from "../../assets/styles/Spacings";
import Fonts from "../../assets/styles/Fonts";
import { ScrollView } from "react-native";

/**
 * Descripción: Esta pantalla renderiza las busquedas y promociones
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const SearchScreen = ({ navigation }) => {
  // Estados
  const [data, setData] = useState([]);

  // Contextos

  // Hooks
  const insets = useSafeAreaInsets();

  // Funciones

  // UseEffects
  useEffect(() => {}, []);

  // Renders
  return (
    <View style={{ flex: 1, backgroundColor: Colors.claro }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        style={{
          flex: 1,
          marginTop: insets.top,
          marginBottom: Platform.OS === "android" ? insets.bottom : 0,
        }}
      >
        <View style={styles.searchBar}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <ChevronLeftIcon color={Colors.oscuro} size={20} />
          </Pressable>
          <SearchBar />
        </View>

        <View style={styles.spot}>
          <Text style={styles.spotLabel}>Promocionado</Text>
        </View>

        <SearchLists data={temporalData.slice(0, 3)} />

        {/* <View style={styles.spot}>
          <Text style={styles.spotLabel}>Restaurante</Text>
        </View> */}

        <View style={styles.spot}>
          <Text style={styles.spotLabel}>Todas las busquedas</Text>
        </View>

        <SearchLists data={temporalData} />
      </ScrollView>
    </View>
  );
};

SearchScreen.propTypes = {};

SearchScreen.defaultProps = {};

const styles = StyleSheet.create({
  searchBar: {
    padding: Spacings.space,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },

  spot: {
    padding: Spacings.space,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },

  spotLabel: {
    ...Fonts.bodyText,
    fontSize: 10,
  },

  backButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginRight: Spacings.space,
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: Colors.bg.claro,
  },
});

export default SearchScreen;
