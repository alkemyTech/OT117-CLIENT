import axios from 'axios';
import { showErrorAlert } from '../Utils/alerts';

export const createUser = async (user) => {
  const { data } = await axios
    .post('http://ongapi.alkemy.org/api/users', user)
    .catch(() => showErrorAlert('Hubo uno problema con el usuario'));
  return data;
};

export const updateUser = async (id, user) => {
  const { data } = await axios
    .put(`http://ongapi.alkemy.org/api/users/${id}`, user)
    .catch(() => showErrorAlert('Hubo uno problema con el usuario'));
  return data;
};

export const getAllUser = async () => {
  try {
    const { data } = await axios.get('http://ongapi.alkemy.org/api/users');
    return data;
  } catch (error) {
    showErrorAlert('Hubo uno problema con el usuario');
  }
};

export const getUser = async (id) => {
  try {
    const { data } = await axios.get(
      `http://ongapi.alkemy.org/api/users/${id}`
    );
    return data;
  } catch (error) {
    showErrorAlert('Hubo uno problema con el usuario');
  }
};

export const deleteUser = async (id) => {
  try {
    const { data } = await axios.delete(
      `http://ongapi.alkemy.org/api/users/${id}`
    );
    return data;
  } catch (error) {
    showErrorAlert('Hubo uno problema con el usuario');
  }
};
