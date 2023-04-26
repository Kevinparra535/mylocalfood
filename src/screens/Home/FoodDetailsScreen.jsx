// Librerias
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  ArrowUpOnSquareIcon,
  HeartIcon,
  ChevronLeftIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/outline";
import { CheckBadgeIcon, StarIcon } from "react-native-heroicons/solid";

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
import temporalData from "../../jsons/foodPromotion.json";

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

const ingredients = [
  {
    uri: "https://t2.uc.ltmcdn.com/es/posts/8/3/6/como_hacer_pan_de_hamburguesa_32638_600.jpg",
    name: "Pan de hamburguesa",
    quantity: 2,
  },
  {
    uri: "https://img.freepik.com/foto-gratis/vista-frontal-delicioso-arreglo-hamburguesas_23-2148868200.jpg?w=826&t=st=1682519351~exp=1682519951~hmac=052bc7d0af55ba6fcb04abdc9a5794a0d5a6fb6f825d6ce5fb5ee80da41b2f1e",
    name: "Carne de res molida",
    quantity: 1,
  },
  {
    uri: "https://img.freepik.com/foto-gratis/rebanadas-queso-plato-blanco-fondo-tablones-madera_23-2148166468.jpg?w=826&t=st=1682519393~exp=1682519993~hmac=a5e8abbe99de3374b3d1894af4e06b74b55e78e9ba0b16bea266fabd8b0aafe6",
    name: "Queso cheddar",
    quantity: 1,
  },
  {
    uri: "https://img.freepik.com/foto-gratis/ensalada-natural-plana_23-2148573914.jpg?w=826&t=st=1682519411~exp=1682520011~hmac=1ecb8125145cb85c233fce4acfd8ba3210a2f01bcd6084d0d84765a4c934984e",
    name: "Lechuga",
    quantity: 1,
  },
  {
    uri: "https://img.freepik.com/foto-gratis/tomates-rojos-brillantes_250435-1179.jpg?w=826&t=st=1682519430~exp=1682520030~hmac=034d60dc4ddf5f6ec2978e6e3883171ecc4146ed431d3a72d2dc36c6ec1e04a2",
    name: "Tomate",
    quantity: 2,
  },
  {
    uri: "https://img.freepik.com/foto-gratis/vista-detallada-rodajas-cebolla-fresca_23-2147953544.jpg?w=826&t=st=1682519451~exp=1682520051~hmac=9515af2425e331d7b78b543f979204b987d9929bce77ea8fe0590114e9bb83ba",
    name: "Cebolla",
    quantity: 2,
  },
  {
    uri: "https://img.freepik.com/foto-gratis/rodajas-pepino_144627-21632.jpg?w=826&t=st=1682519474~exp=1682520074~hmac=a15ffc83bd0414e33789e654429dbf8577d475ffd2fa0be3a72640e5b3053ebd",
    name: "Pepinillos",
    quantity: 3,
  },
  {
    uri: "https://img.freepik.com/foto-gratis/vista-superior-sopa-tomate-invierno-tazon-tostadas-mantel_23-2148706356.jpg?w=826&t=st=1682519497~exp=1682520097~hmac=b1aec63f2e2e5d4bda84d8c172f5a906b7057ce58d886ff5f78edcfe304fed5e",
    name: "Salsa de tomate",
    quantity: 1,
  },
  {
    uri: "https://img.freepik.com/foto-gratis/taza-blanca-alto-angulo-pintura-amarilla_23-2148292470.jpg?w=826&t=st=1682519524~exp=1682520124~hmac=a4d6dde2ebdf3a7256a2214e531a77ba00ec1bc6993478b91ea38b052212e3dc",
    name: "Mostaza",
    quantity: 1,
  },
  {
    uri: "https://img.freepik.com/foto-gratis/yogur-plano-composicion-tazon_23-2148601696.jpg?w=826&t=st=1682519544~exp=1682520144~hmac=d6aa9399c4b61de3c6fe1e91eb01d6ad459a68b000170680f0a30195df597765",
    name: "Mayonesa",
    quantity: 1,
  },
  {
    uri: "https://img.freepik.com/foto-gratis/colocacion-plana-semillas-condimento-tazon_23-2148461636.jpg?w=826&t=st=1682519576~exp=1682520176~hmac=e67c162d29dfd0f0981daa8363222ec3fd5a1e63fe2e2976bb30d6a5d6eb1224",
    name: "Pimienta molida",
    quantity: 1,
  },
];

const FoodDetailsScreen = ({ navigation, route }) => {
  // Estados
  const [data, setData] = useState({});
  const [counter, setCounter] = useState(1);
  const [aditionals, setAditionals] = useState([]);
  const [noIngredients, setNoIngredients] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(null);

  // Contextos

  // Hooks
  const { id, category } = route.params;
  const insets = useSafeAreaInsets();

  // Funciones
  const handleCheck = (num) => {
    if (!aditionals.includes(num)) {
      setAditionals([...aditionals, num]); // agrega el valor al array
    } else {
      setAditionals(aditionals.filter((e) => e !== num)); // elimina el valor del array
    }
  };

  const handleIngredients = (element) => {
    if (!noIngredients.includes(element)) {
      setNoIngredients([...noIngredients, element]); // agrega el valor al array
    } else {
      setNoIngredients(noIngredients.filter((e) => e !== element)); // elimina el valor del array
    }
  };

  // UseEffects
  useEffect(() => {
    console.log("FoodDetailsScreen: ", data);
  }, [data]);

  useEffect(() => {
    if (temporalData && id) {
      console.log(temporalData);
      const food = temporalData.find((item) => item.id === id);
      if (food) setData(food);
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
          marginBottom: Platform.OS === "android" ? 100 : 100,
        }}
      >
        <View>
          <View style={styles.header}>
            <Image
              resizeMode="cover"
              resizeMethod="auto"
              style={styles.background}
              source={{ uri: data.image }}
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
            <Text style={styles.title}>{data?.name} </Text>

            <View style={styles.stars}>
              <Text style={styles.label}>{data.averageRating}</Text>
              <StarIcon color={Colors.variants.three} size={18} />
            </View>
          </View>

          {/* Precio */}
          <View style={styles.row}>
            <Text style={styles.price}>$ 35.000</Text>
          </View>

          {/* Informacion del restaurante */}
          {/* <View style={styles.row}>
            <View style={styles.returantTitle}>
              <Image
                resizeMode="cover"
                resizeMethod="auto"
                style={styles.logo}
                source={{ uri: data?.resturant?.details?.logo }}
              />

              <View style={styles.resturantTitleContainer}>
                <Text style={styles.returantName}>
                  {data?.resturant?.details?.name}
                </Text>
                <CheckBadgeIcon color={Colors.variants.two} size={15} />
              </View>
            </View>
          </View> */}
        </View>

        <View style={styles.ingredientsList}>
          <Text style={styles.ingredientsTitle}>
            Mejora tu experiencia con:{" "}
          </Text>

          <Pressable
            onPress={() => handleCheck("0")}
            style={styles.ingredientsItem}
          >
            <Image
              style={styles.ingredientsItemImage}
              source={{
                uri: "https://img.freepik.com/foto-gratis/lay-flat-papas-fritas-colores-fondo_23-2148258516.jpg?w=1380&t=st=1682517429~exp=1682518029~hmac=bb849ed4991d39b74e99fe2695bff5b6fd0ce5c8cc1bf61333384e3d6dbbfb02",
              }}
              resizeMethod="auto"
              resizeMode="cover"
            />

            <View style={styles.ingredientsItemTexts}>
              <Text style={styles.ingredientsItemLabel}>Papas fritas </Text>
              <Text style={styles.ingredientsItemLabel}>$12.000</Text>
            </View>

            <View
              style={[
                styles.radio,
                {
                  backgroundColor:
                    aditionals.find((e) => e === "0") && Colors.brand.primary,
                },
              ]}
            >
              <View style={styles.radioButton}></View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => handleCheck(1)}
            style={styles.ingredientsItem}
          >
            <Image
              style={styles.ingredientsItemImage}
              source={{
                uri: "https://img.freepik.com/foto-gratis/rebanadas-queso-plato-blanco-fondo-tablones-madera_23-2148166468.jpg?w=826&t=st=1682517761~exp=1682518361~hmac=ce36a9f013516e436807743f7490bd6ee96c61f22aeb60ede38d4cbcaa0ae7d8",
              }}
              resizeMethod="auto"
              resizeMode="cover"
            />

            <View style={styles.ingredientsItemTexts}>
              <Text style={styles.ingredientsItemLabel}>Queso </Text>
              <Text style={styles.ingredientsItemLabel}>$5.000</Text>
            </View>

            <View
              style={[
                styles.radio,
                {
                  backgroundColor:
                    aditionals.find((e) => e === 1) && Colors.brand.primary,
                },
              ]}
            >
              <View style={styles.radioButton}></View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => handleCheck(2)}
            style={styles.ingredientsItem}
          >
            <Image
              style={styles.ingredientsItemImage}
              source={{
                uri: "https://img.freepik.com/foto-gratis/cebolla-entera-rodajas-sobre-parte-superior-cocina-negra_23-2147953602.jpg?w=826&t=st=1682517838~exp=1682518438~hmac=d728f9d68b9d4147f28a911258ce20092912cda6b8b464a08eadad839336e994",
              }}
              resizeMethod="auto"
              resizeMode="cover"
            />

            <View style={styles.ingredientsItemTexts}>
              <Text style={styles.ingredientsItemLabel}>Cebolla </Text>
              <Text style={styles.ingredientsItemLabel}>$5.000</Text>
            </View>

            <View
              style={[
                styles.radio,
                {
                  backgroundColor:
                    aditionals.find((e) => e === 2) && Colors.brand.primary,
                },
              ]}
            >
              <View style={styles.radioButton}></View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => handleCheck(3)}
            style={styles.ingredientsItem}
          >
            <Image
              style={styles.ingredientsItemImage}
              source={{
                uri: "https://img.freepik.com/foto-gratis/vista-superior-papas-fritas-mostaza-hierbas_23-2148701446.jpg?w=826&t=st=1682517922~exp=1682518522~hmac=5860dc3217feb410cb3dcdd92ce3a89bd080e7f5661a031cc6126a29ca981bcb",
              }}
              resizeMethod="auto"
              resizeMode="cover"
            />

            <View style={styles.ingredientsItemTexts}>
              <Text style={styles.ingredientsItemLabel}>Aros de cebolla</Text>
              <Text style={styles.ingredientsItemLabel}>$8.000</Text>
            </View>

            <View
              style={[
                styles.radio,
                {
                  backgroundColor:
                    aditionals.find((e) => e === 3) && Colors.brand.primary,
                },
              ]}
            >
              <View style={styles.radioButton}></View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => handleCheck(4)}
            style={styles.ingredientsItem}
          >
            <Image
              style={styles.ingredientsItemImage}
              source={{
                uri: "https://img.freepik.com/foto-gratis/fondo-papel-rojo-metalizado_53876-71341.jpg?w=826&t=st=1682517986~exp=1682518586~hmac=0af794c06cd9cf13a0b4df6dd6b3791b03a76c176dec2c0c3c81cb36b1d3cba6",
              }}
              resizeMethod="auto"
              resizeMode="cover"
            />

            <View style={styles.ingredientsItemTexts}>
              <Text style={styles.ingredientsItemLabel}>Bacon </Text>
              <Text style={styles.ingredientsItemLabel}>$12.000</Text>
            </View>

            <View
              style={[
                styles.radio,
                {
                  backgroundColor:
                    aditionals.find((e) => e === 4) && Colors.brand.primary,
                },
              ]}
            ></View>
          </Pressable>
        </View>

        <View style={styles.ingredientsList}>
          <Text style={styles.ingredientsTitle}>
            ¿No quieres algo?, solo quitalo:
          </Text>

          <View style={styles.cardsList}>
            {ingredients.map((item, index) => (
              <Pressable
                onPress={() => handleIngredients(item.name)}
                key={index}
                style={[
                  styles.ingredientsCard,
                  {
                    opacity: noIngredients.find((e) => e === item.name)
                      ? 0.4
                      : 1,
                  },
                ]}
              >
                <Image
                  style={styles.ingredientsCardImage}
                  source={{
                    uri: item.uri,
                  }}
                  resizeMethod="auto"
                  resizeMode="cover"
                />
                <View style={styles.ingredientsCardTexts}>
                  <Text style={[styles.ingredientsCardLabel]}>{item.name}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Boton flotante */}
      <View style={styles.float}>
        <View style={styles.counter}>
          <Pressable
            onPress={() => counter != 0 && setCounter(counter - 1)}
            style={[
              styles.counterButton,
              counter >= 0 && styles.counterButtonDisable,
            ]}
          >
            <Text style={styles.counterButtonLabel}>-</Text>
          </Pressable>

          <Text style={styles.counterLabel}>{counter}</Text>

          <Pressable
            onPress={() => setCounter(counter + 1)}
            style={styles.counterButton}
          >
            <Text style={styles.counterButtonLabel}>+</Text>
          </Pressable>
        </View>

        <View style={styles.callToAction}>
          <ShoppingBagIcon color={Colors.claro} size={22} />
          <Text style={styles.callToActionLabel}>Agregar al carrito</Text>
        </View>
      </View>
    </View>
  );
};

FoodDetailsScreen.propTypes = {};

FoodDetailsScreen.defaultProps = {};

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
    ...Fonts.heading2,
    fontSize: 20,
  },

  stars: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  price: {
    ...Fonts.heading3,
    fontSize: 20,
  },

  label: {
    marginRight: Spacings.space_half,
    ...Fonts.heading4,
    fontSize: 16,
  },

  returantTitle: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  returantName: {
    marginRight: Spacings.space_half,
    ...Fonts.bodyText,
    fontSize: 14,
  },

  resturantTitleContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: Spacings.space_half,
    width: "100%",
  },

  logo: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },

  // Ingredients
  ingredientsList: {
    padding: Spacings.space,
    marginTop: Spacings.space_x2,
  },

  ingredientsTitle: {
    marginBottom: Spacings.space,
    ...Fonts.heading3,
    fontSize: 16,
  },

  ingredientsItem: {
    paddingVertical: Spacings.space,
    paddingHorizontal: Spacings.space,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  ingredientsItemTexts: {
    paddingHorizontal: Spacings.space,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "85%",
  },

  ingredientsItemImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },

  ingredientsItemLabel: {
    ...Fonts.heading4,
    fontSize: 15,
  },

  // Ingredients cards
  cardsList: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  ingredientsCard: {
    paddingVertical: Spacings.space,
    paddingHorizontal: Spacings.space,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Spacings.space,
    width: "49%",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: Colors.claro,
  },

  ingredientsCardImage: {
    width: "100%",
    height: 150,
    borderRadius: 5,
  },

  ingredientsCardTexts: {
    paddingTop: Spacings.space_half,
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },

  ingredientsCardLabel: {
    ...Fonts.heading4,
    fontSize: 15,
  },

  // RadioButton
  radio: {
    width: 20,
    height: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.brand.primary,
    // backgroundColor: Colors.brand.primary,
  },

  // Footer
  float: {
    paddingVertical: Spacings.space_x2,
    paddingHorizontal: Spacings.space_x2,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.claro,
  },

  counter: {
    paddingVertical: Spacings.space,
    paddingHorizontal: Spacings.space,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 1,
    width: 150,
    height: 50,
    borderColor: Colors.variants.one,
    borderRadius: Spacings.space_half,
  },

  counterLabel: {
    ...Fonts.bodyText,
    fontSize: 20,
    color: Colors.oscuro,
  },

  counterButton: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: Colors.brand.primary,
  },

  counterButtonDisable: {
    backgroundColor: Colors.variants.one,
  },

  counterButtonLabel: {
    ...Fonts.callToActions,
    fontSize: 20,
  },

  callToAction: {
    paddingVertical: Spacings.space,
    paddingHorizontal: Spacings.space_x2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 50,
    borderRadius: Spacings.space_half,
    backgroundColor: Colors.brand.primary,
  },

  callToActionLabel: {
    marginLeft: Spacings.space,
    ...Fonts.callToActions,
    fontSize: 15,
  },
});

export default FoodDetailsScreen;
