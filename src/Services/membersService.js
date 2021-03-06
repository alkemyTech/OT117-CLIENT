import axios from 'axios';
import { showErrorAlert } from '../Utils/alerts';
import { getAuthorizationHeader } from './privateApiService';

const baseURL = process.env.REACT_APP_API_URL_MEMBERS;
const authorizationHeader = { headers: getAuthorizationHeader() };
const getMembers = async () => {
  const response = await axios
    .get(`${baseURL}`, authorizationHeader)
    .catch(() =>
      showErrorAlert(
        'No se pudo realizar la operación, por favor intente más tarde'
      )
    );
  return response.data.data;
};

const createMember = async (data) => {
  const response = await axios
    .post(`${baseURL}`, data, authorizationHeader)
    .catch(() =>
      showErrorAlert(
        'No se pudo realizar la operación, por favor intente más tarde'
      )
    );
  return response;
};

const updateOrCreate = async (member, memberId) => {
  try {
    const idExist = (await memberId) && getMember(memberId);
    if (idExist) {
      const data = await updateMember(member, memberId);
      return data;
    } else if (!idExist && member) {
      const data = await createMember(member);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

const getMember = async (id) => {
  const response = await axios
    .get(`${baseURL}/${id}`, authorizationHeader)
    .catch(() =>
      showErrorAlert(
        'No se pudo realizar la operación, por favor intente más tarde'
      )
    );
  return response;
};

const updateMember = async (data, id) => {
  const response = await axios
    .put(`${baseURL}/${id}`, data, authorizationHeader)
    .catch(() =>
      showErrorAlert(
        'No se pudo realizar la operación, por favor intente más tarde'
      )
    );
  return response;
};

const removeMember = (id) => {
  const response = axios
    .delete(`${baseURL}/${id}`, authorizationHeader)
    .catch(() =>
      showErrorAlert(
        'No se pudo realizar la operación, por favor intente más tarde'
      )
    );
  return response;
};

const membersApiActions = {
  getMembers,
  createMember,
  getMember,
  updateMember,
  removeMember,
  updateOrCreate,
};

export default membersApiActions;
