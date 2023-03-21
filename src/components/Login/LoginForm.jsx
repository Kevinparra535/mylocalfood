// Librerias
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ToastAndroid } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


// Contextos

// Hooks

// Screens

// Componentes
import InputsForms from '../Forms/InputsForms';
import CallToAction from '../Buttons/CallToAction';
import { LoginSchema } from '../../constants/Schemas.type';

// Navigations

// Imagenes

// Estilos
import Colors from '../../assets/styles/Colors';
import Fonts from '../../assets/styles/Fonts';
import Spacings from '../../assets/styles/Spacings';

/**
 * Descripción: Este componente se encarga de contener la informacion del inicio de sesion.
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const LoginForm = ({ loginResponse, handleLogin }) => {
  // Estados

  // Contextos

  // Hooks
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(LoginSchema),
  });

  // Funciones
  const onSubmit = (data) => {
    handleLogin(data.email, data.password);
  };

  // UseEffects

  // Renders
  return (
    <View style={styles.form}>
      {(errors.email || loginResponse?.isError) && (
        <Text style={styles.error}>{errors.email?.message || 'Correo incorrecto'}</Text>
      )}
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputsForms
            value={value}
            name='email'
            onBlur={onBlur}
            style={styles.input}
            error={errors.email || loginResponse?.isError}
            autoCapitalize='none'
            secureTextEntry={false}
            onChangeText={onChange}
            keyboardType='email-address'
            placeholder='Correo portinero'
          />
        )}
        name='email'
      />

      {(errors.password || loginResponse?.isError) && (
        <Text style={styles.error}>
          {errors.password?.message || 'Contrasena incorrecta'}
        </Text>
      )}
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputsForms
            value={value}
            name='password'
            onBlur={onBlur}
            style={styles.input}
            error={errors.email || loginResponse?.isError}
            autoCapitalize='none'
            secureTextEntry={true}
            onChangeText={onChange}
            placeholder='Contrasena'
          />
        )}
        name='password'
      />

      <CallToAction
        title='Iniciar sesion'
        onPress={handleSubmit(onSubmit)}
        isLoading={loginResponse?.isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    paddingVertical: Spacings.space_x2,
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    width: '100%',
  },

  error: {
    ...Fonts.bodyText,
    fontSize: 12,
    color: Colors.alerts.error,
  },
});

export default LoginForm;
