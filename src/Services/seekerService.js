import axios from 'axios';
import { showErrorAlert } from '../Utils/alerts';

export const searchIn = async (endpointName, valueSearched, minLength) => {
  if (valueSearched.length >= minLength) {
    return await axios
      .get(
        `http://ongapi.alkemy.org/api/${endpointName}?search=${valueSearched}`
      )
      .then((res) => res.data.data)
      .catch(() =>
        showErrorAlert(
          'No se pudo realizar la operación, por favor intente más tarde'
        )
      );
  } else {
    return await axios
      .get(`http://ongapi.alkemy.org/api/${endpointName}`)
      .then((res) => res.data.data)
      .catch(() =>
        showErrorAlert(
          'No se pudo realizar la operación, por favor intente más tarde'
        )
      );
  }
};
