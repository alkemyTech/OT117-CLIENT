import axios from 'axios';
import { showErrorAlert } from '../Utils/alerts';

const URL = 'http://ongapi.alkemy.org/public/api';

export const getProject = async (id) => {
  let { data } = await axios
    .get(`${URL}/projects/${id}`)
    .catch(() =>
      showErrorAlert(
        'No se pudo realizar la operación, por favor intente más tarde'
      )
    );
  return data;
};

export const modifyProject = async (id, body) => {
  let { data } = await axios
    .put(`${URL}/projects/${id}`, body)
    .catch(() =>
      showErrorAlert(
        'No se pudo realizar la operación, por favor intente más tarde'
      )
    );
  return data;
};

export const createProject = async (body) => {
  let { data } = await axios
    .post(`${URL}/projects`, body)
    .catch(() =>
      showErrorAlert(
        'No se pudo realizar la operación, por favor intente más tarde'
      )
    );
  return data;
};

export const createOrUpdateProject = (projectId, body) => {
  projectId ? modifyProject(projectId, body) : createProject(body);
};
