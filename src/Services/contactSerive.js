import axios from "axios";
import {GenericAlertError} from "../Components/common/alerts/Alerts";
const URL = process.env.REACT_APP_API_URL_CONTACT;

export const getContactId = async (contactId) => {
  try {
    let { data } = await axios.get(`${URL}/${contactId}`);
    return data;
  } catch(error){
    GenericAlertError;
  }
};

export const getContactsAll = async () => {
  try {
    let { data } = await axios.get(`${URL}`);
    return data;
  } catch(error){
    GenericAlertError;
  }
};

export const modifyContact = async (contactId, body) => {
  try {
    let { data } = await axios.put(`${URL}/${contactId}`, body);
    return data;
  } catch (error) {
    GenericAlertError;
  }
};

export const createContact = async (body) => {
  try {
    let { data } = await axios.post(`${URL}`, body);
    return data;
  } catch (error) {
    GenericAlertError;
  }
};

export const deleteContac = async (contactId) => {
  try {
    let { data } = await axios.delete(`${URL}/${contactId}`);
    return data;
  } catch (error) {
    GenericAlertError;
  }
};

export const createOrUpdateContact = async (contactId, body) => {
  try {
    if (contactId) {
      let { data } = await getContactId(contactId);
      data && modifyContact(contactId, body);
    } else createContact(body);
  } catch (error) {
    GenericAlertError;
  }
};
