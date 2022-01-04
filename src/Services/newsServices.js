import axios from 'axios';
import { AlertError } from '../Components/common/alerts/Alerts';

const URL = process.env.REACT_APP_API_URL_NEWS;

export const getAll = async () => {
  try {
    const response = await axios.get(URL);
    const data = response.data.data;
    return data;
  } catch {
    AlertError('No se pudieron obtener los datos, por favor intente más tarde');
  }
};

export const getById = async (id) => {
  try {
    const data = await axios.get(`${URL}/${id}`);
    return data.data.data;
  } catch {
    AlertError('No se pudieron obtener los datos, por favor intente más tarde');
  }
};

export const update = async (news, newsid) => {
  try {
    const data = await axios.put(`${URL}/${newsid}`, news);
    return data.data.data;
  } catch {
    AlertError('No se pudieron editar los datos, por favor intente más tarde');
  }
};

export const create = async (news) => {
  try {
    const data = await axios.post(URL, news);
    return data.data.data;
  } catch {
    AlertError('No se pudo crear la novedad, por favor intente más tarde');
  }
};

export const createOrUpdate = async (news, newsid) => {
  try {
    const idExist = (await newsid) && getById(newsid);
    if (idExist) {
      const data = await update(news, newsid);
      return data;
    } else if (!idExist && news) {
      const data = await create(news);
      return data;
    }
  } catch {
    AlertError('No se puede realizar la operación, por favor intente más tarde')
  }
};

export const deleteByid = async (id) => {
  try {
    const data = await axios.delete(`${URL}/${id}`);
    return data;
  } catch {
    AlertError('No se pudo eliminar la novedad, por favor intente más tarde');
  }
};

export const createNewsObject = (id, name, image, createdAt) => ({
  id,
  name,
  image,
  createdAt,
});
