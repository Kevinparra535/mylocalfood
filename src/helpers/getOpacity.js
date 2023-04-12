function getOpacity(hexValue, opacity) {
  // Convertir el valor hexadecimal en componentes RGB usando map() para recorrer los índices 1, 3 y 5 del valor hexadecimal
  const [red, green, blue] = [1, 3, 5].map(
    (offset) => parseInt(hexValue.substr(offset, 2), 16) // substr() devuelve una parte de una cadena de texto a partir de un índice específico y con una longitud especificada.
  );
  // Devolver el valor RGBA usando template strings para concatenar los valores RGB con la opacidad especificada.
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}
export default getOpacity;
