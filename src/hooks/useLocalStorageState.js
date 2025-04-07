import { useState, useEffect } from "react";

/**
 * Hook personalizado que sincroniza el estado con el almacenamiento local.
 *
 * @param {*} initialState - El estado inicial que se usará si no hay valor almacenado.
 * @param {string} key - La clave bajo la cual se almacenará el valor en localStorage.
 * @returns {Array} Un array que contiene el valor actual y una función para actualizarlo.
 */
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
