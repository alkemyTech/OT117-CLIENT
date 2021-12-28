import axios from 'axios';
import { getAuthorizationHeader } from './privateApiService';

const baseURL = process.env.REACT_APP_API_URL_MEMBERS;
const authorizationHeader = { headers: getAuthorizationHeader() };
const getMembers = async () => {
  const response = await axios.get(`${baseURL}`, authorizationHeader);
  return response.data.data;
};

const createMember = async (data) => {
  const response = await axios
    .post(`${baseURL}`, data, authorizationHeader)
    .catch((err) => console.log(err));
  return response;
};

const updateOrCreate = async (member, id) => {
  try {
    const idExist = (await id) && getMember(id);
    if (idExist) {
      const data = await updateMember(member, id);
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
  const response = await axios.get(`${baseURL}/${id}`, authorizationHeader);
  return response;
};

const updateMember = async (id, data) => {
  const response = await axios.put(
    `${baseURL}/${id}`,
    data,
    authorizationHeader
  );
  return response;
};

const removeMember = (id) => {
  const response = axios.delete(`${baseURL}/${id}`, authorizationHeader);
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
