// Librerias
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import {
  ArrowUpOnSquareIcon,
  HeartIcon,
  ChevronLeftIcon,
  PhoneIcon,
  ChatBubbleBottomCenterIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
} from "react-native-heroicons/outline";
import {
  CheckBadgeIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";

import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Screens

// Componentes
import AdsSlider from "../../components/Home/AdsSlider";
import getOpacity from "../../helpers/getOpacity";
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
  const insets = useSafeAreaInsets();

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
      const restaurant = temporalData.find(
        (item) => Number(item.id) === Number(id)
      );
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
    <View style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        style={{
          flex: 1,
          marginTop: insets.top,
          marginBottom: Platform.OS === "android" ? insets.bottom : 0,
        }}
      >
        {/* Informacion del restaurante */}
        <View>
          <View style={styles.header}>
            <Image
              resizeMode="cover"
              resizeMethod="auto"
              style={styles.background}
              source={{ uri: backgroundImage }}
            />

            <View style={styles.actions}>
              <Pressable
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <ChevronLeftIcon size={20} color="black" />
              </Pressable>

              <View style={styles.actionsRight}>
                <Pressable
                  style={styles.backButton}
                  onPress={() => navigation.goBack()}
                >
                  <ArrowUpOnSquareIcon size={20} color="black" />
                </Pressable>

                <Pressable
                  style={styles.backButton}
                  onPress={() => navigation.goBack()}
                >
                  <HeartIcon size={20} color="black" />
                </Pressable>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text style={styles.title}>{data?.details?.name} </Text>
              <CheckBadgeIcon color={Colors.variants.two} size={15} />
            </View>

            <View style={styles.stars}>
              <Text style={styles.label}>4.2 </Text>
              <StarIcon color={Colors.variants.three} size={13} />
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>
              Horario: 6pm a 1am |{" "}
              <Text style={[styles.label, { color: Colors.alerts.check }]}>
                Abierto
              </Text>
            </Text>
          </View>

          <View style={styles.row}>
            <View style={styles.stars}>
              <MapPinIcon color={Colors.oscuro} size={15} />
              <Text style={styles.label}>Ubicacion</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Pressable style={styles.callToAction}>
              <PhoneIcon color={Colors.claro} size={14} />
              <Text style={styles.callToActionLabel}>Llamar</Text>
            </Pressable>

            <Pressable style={styles.callToAction}>
              <ChatBubbleBottomCenterIcon color={Colors.claro} size={14} />
              <Text style={styles.callToActionLabel}>Mensaje</Text>
            </Pressable>

            <Pressable style={styles.callToAction}>
              <PencilSquareIcon color={Colors.claro} size={14} />
              <Text style={styles.callToActionLabel}>Calificar</Text>
            </Pressable>
          </View>
        </View>

        {/* Promociones */}
        <View style={styles.ads}>
          <Text style={styles.adsTitle}>Ofertas de esta semana</Text>
          <AdsSlider />
        </View>

        {/* Menu */}
        <Text>Menu</Text>
      </ScrollView>

      {/* Boton flotante */}
      <Pressable style={styles.floatCta}>
        <RocketLaunchIcon color={Colors.claro} size={18} />
        <Text style={styles.callToActionLabel}>Hacer una reserva</Text>
      </Pressable>
    </View>
  );
};

RestaurantDetailsScreen.propTypes = {};

RestaurantDetailsScreen.defaultProps = {};

const styles = StyleSheet.create({
  header: {
    marginBottom: Spacings.space,
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

  actionsRight: {
    display: "flex",
    flexDirection: "row",
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

  background: {
    marginRight: 10,
    width: "100%",
    height: "100%",
  },

  row: {
    paddingTop: Spacings.space,
    paddingHorizontal: Spacings.space,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },

  title: {
    ...Fonts.heading3,
    fontSize: 18,
  },

  stars: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  label: {
    ...Fonts.bodyText,
    fontSize: 13,
  },

  callToAction: {
    paddingVertical: Spacings.space,
    paddingHorizontal: Spacings.space_x2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: Spacings.space,
    borderRadius: Spacings.space_half,
    backgroundColor: Colors.brand.primary,
  },

  callToActionLabel: {
    marginLeft: Spacings.space,
    ...Fonts.callToActions,
    fontSize: 12,
  },

  ads: {
    paddingVertical: Spacings.space_x3,
  },

  adsTitle: {
    paddingHorizontal: Spacings.space,
    ...Fonts.heading3,
    fontSize: 16,
  },

  floatCta: {
    paddingVertical: Spacings.space,
    paddingHorizontal: Spacings.space_x2,
    position: "absolute",
    bottom: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: "2%",
    width: "95%",
    borderRadius: Spacings.space_half,
    backgroundColor: Colors.brand.primary,
  },
});

export default RestaurantDetailsScreen;
