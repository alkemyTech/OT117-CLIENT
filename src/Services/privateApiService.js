import axios from "axios";
import { showErrorAlert } from "../Utils/alerts";

const config = {
  headers: {
    Group: 117, //Aqui va el ID del equipo!!
  },
};
const getAuthorizationHeader = () => {
  const token = localStorage.getItem("token");
  if (!token) return;
  return { Authorization: `Bearer: ${token}` };
};

const axiosInstance = axios.create({
  baseURL: "http://ongapi.alkemy.org/private/api",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = getAuthorizationHeader();
  config.headers.Group = 91;
  return config;
});

const privateGet = async (url, id, params = {}) => {
  const idPlaceholder = id ? `/${id}` : "";
  const { data } = await axiosInstance
    .get(`${url}${idPlaceholder}`, {
      params,
    })
    .catch(() =>
      showErrorAlert(
        "No se pudo realizar la operación, por favor intente más tarde"
      )
    );
  return data;
};

const privatePut = async (url, id, params) => {
  const getAuthorization = getAuthorizationHeader();
  if (!getAuthorization.Authorization) return;
  const idPlaceholder = id ? `/${id}` : "";
  const { data } = await axiosInstance
    .put(`${url}${idPlaceholder}`, params)
    .then((res) => res.data)
    .catch(() =>
      showErrorAlert(
        "No se pudo realizar la operación, por favor intente más tarde"
      )
    );
  return data;
};

const privatePatch = async (url, id, params) => {
  const getAuthorization = getAuthorizationHeader();
  if (!getAuthorization.Authorization) return;
  const idPlaceholder = id ? `/${id}` : "";
  const { data } = await axiosInstance
    .patch(`${url}${idPlaceholder}`, params)
    .then((res) => res.data)
    .catch(() =>
      showErrorAlert(
        "No se pudo realizar la operación, por favor intente más tarde"
      )
    );
  return data;
};

const privateDelete = async (url, id) => {
  const getAuthorization = getAuthorizationHeader();
  if (!getAuthorization.Authorization) return;
  else {
    return await axios
      .delete(url, id, {
        headers: getAuthorization,
      })
      .then((response) => response.data)
      .catch(() =>
        showErrorAlert(
          "No se pudo realizar la operación, por favor intente más tarde"
        )
      );
  }
};

const privatePost = async (url, data) => {
  const authorizationHeader = getAuthorizationHeader();
  if (!authorizationHeader.Authorization) throw new Error("No token");
  return await axios
    .post(url, data, {
      headers: authorizationHeader,
    })
    .then((res) => res.data)
    .catch(() =>
      showErrorAlert(
        "No se pudo realizar la operación, por favor intente más tarde"
      )
    );
};

const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch(() =>
      showErrorAlert(
        "No se pudo realizar la operación, por favor intente más tarde"
      )
    );
};

const privateGetReusable = async (url, id) => {
  const idPlaceholder = id ? `/${id}` : "";

  const authorizationHeader = getAuthorizationHeader();
  if (!authorizationHeader.Authorization) throw new Error("No token");
  try {
    const { data } = await axios.get(`${url}${idPlaceholder}`);
    return data;
  } catch (error) {
    showErrorAlert(
      "No se pudo realizar la operación, por favor intente más tarde"
    );
  }
};
export {
  privatePost,
  Get,
  getAuthorizationHeader,
  privateGet,
  privateDelete,
  privatePut,
  privatePatch,
};
