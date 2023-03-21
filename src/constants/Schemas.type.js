import * as yup from "yup";

export const email = yup
  .string()
  .email("El email debe ser válido")
  .required("El email es requerido");

export const password = yup
  .string()
  .required("La contraseña es requerida")
  .min(8, "La contraseña debe tener al menos 8 caracteres");

export const LoginSchema = yup
  .object({
    email,
    password,
  })
  .required();

export const RecoverySchema = yup
  .object({
    email,
  })
  .required();
