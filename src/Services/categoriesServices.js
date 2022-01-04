import axios from "axios";
import { showErrorAlert, showSuccessAlert } from "../Utils/alerts";

const baseURL = process.env.REACT_APP_BASE_URL_CATEGORIES;
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const getCategories = async () => {
  try {
    const { data } = await axios.get(`${baseURL}`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

const getCategory = async (id) => {
  try {
    const { data } = await axios.get(`${baseURL}/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const createCategory = (categoryData) => {
  try {
    const { data } = axios
      .post(`${baseURL}`, categoryData, {
        headers: headers,
      })
      .then(showSuccessAlert("Categoria creada con exito"));
    return data;
  } catch (error) {
    console.error(error);
    showErrorAlert("Hubo un error, vuelva mas tarde");
  }
};

const updateCategory = (id, categoryData) => {
  try {
    const { data } = axios
      .put(`${baseURL}/${id}`, categoryData, {
        headers: headers,
      })
      .then(showSuccessAlert("Categoria modificada con exito"));
    return data;
  } catch (error) {
    console.error(error);
    showErrorAlert("Hubo un error, vuelva mas tarde");
  }
};
const createOrUpdate = async (id, categoryData) => {
  try {
    if (id) {
      const data = updateCategory(id, categoryData);
      return data;
    } else if (!id) {
      const data = createCategory(categoryData);
      return data;
    }
  } catch {
    console.error(error);
    showErrorAlert("Hubo un error, vuelva mas tarde");
  }
};

const removeCategory = (id) => {
  try {
    const { data } = axios
      .delete(`${baseURL}/${id}`)
      .then(showSuccessAlert("Categoria eliminada"));
    return data;
  } catch (error) {
    console.error(error);
    showErrorAlert("Hubo un error, vuelva mas tarde");
  }
};

export {
  removeCategory,
  createOrUpdate,
  updateCategory,
  createCategory,
  getCategory,
  getCategories,
};
