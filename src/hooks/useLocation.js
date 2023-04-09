import { useState, useEffect } from "react";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_MAP_KEY } from "../constants/Maps.types";

const useLocation = () => {
  const [userLocation, setUserLocation] = useState({
    loading: true,
    error: null,
    data: {
      latitude: null,
      longitude: null,
      latitudeDelta: null,
      longitudeDelta: null,
    },
  });

  const getLocationAsync = async () => {
    setUserLocation({ loading: true, error: null });

    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setUserLocation({
          loading: false,
          error: "Permission to access location was denied",
        });
        return;
      }
      
      const prevDataSaved = await AsyncStorage.getItem(STORAGE_MAP_KEY);

      console.log("prevDataSaved ,", prevDataSaved);

      if (prevDataSaved === null) {
        const location = await Location.getCurrentPositionAsync({});

        const result = await Location.reverseGeocodeAsync({
          latitude: location.coords ? location.coords.latitude : 37.78825,
          longitude: location.coords ? location.coords.longitude : -122.4324,
        });

        const latitude = location.coords ? location.coords.latitude : 37.78825;
        const longitude = location.coords
          ? location.coords.longitude
          : -122.4324;

        const address =
          result.length > 0
            ? `${result[0].street} #${result[0].streetNumber}, ${result[0].city}, ${result[0].region}, ${result[0].country}`
            : "No se encontró la dirección";

        setUserLocation({
          loading: false,
          data: {
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            address,
          },
        });

        await AsyncStorage.setItem(
          STORAGE_MAP_KEY,
          JSON.stringify({
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            address,
          })
        );
      } else {
        setUserLocation({ loading: false, data: JSON.parse(prevDataSaved) });
      }
    } catch (error) {
      setUserLocation({ loading: false, error });
    }
  };

  useEffect(() => {
    getLocationAsync();
  }, []);

  return userLocation;
};

export default useLocation;
