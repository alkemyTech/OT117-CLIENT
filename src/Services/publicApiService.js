import axios from "axios";

const config = {
  headers: {
    Group: 117, //Aqui va el ID del equipo!!
  },
};

const axiosInstance = axios.create({
  baseURL: "http://ongapi.alkemy.org/public/api",
});

const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

/*
export const publicGet = (path, id) => {
  const idCheck = id ? `/${id}` : "";
  return axiosInstance.get(`/${path}${idCheck}`);
};*/

const publicGet = async (url, id) => {
  const idPlaceholder = id ? `/${id}` : "";
  const { data } = await axios
    .get(`${url}${idPlaceholder}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return data;
};

const Post = async (route, body) => {
  try {
    const data = await axios.post(route, body);
    return data;
  } catch (error) {
    return error;
  }
};

export { Post, Get, publicGet };
