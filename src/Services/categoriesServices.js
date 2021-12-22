import axios from "axios";

const baseURL = "http://ongapi.alkemy.org/api/categories";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const getCategories = async () => {
  try {
    const { data } = await axios.get(`${baseURL}`);
    console.log("data extraida", data.data);
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
    const { data } = axios.post(`${baseURL}`, categoryData, {
      headers: headers,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

const updateCategory = (id, categoryData) => {
  try {
    const { data } = axios.put(`${baseURL}/${id}`, categoryData, {
      headers: headers,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
const createOrUpdate = async (categoryData, id) => {
  const allCategories = await getCategories();
  console.log("ALLCATEGORIES", allCategories);
  const sameData = allCategories.data.find((category) => category.id === id);
  try {
    if (sameData) {
      const data = updateCategory(id, categoryData);
      return data;
    } else if (!id) {
      const data = createCategory(categoryData);
      return data;
    }
  } catch {
    console.error(error);
  }
};

const removeCategory = (id) => {
  try {
    const { data } = axios.delete(`${baseURL}/${id}`);
    return data;
  } catch (error) {
    console.error(error);
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
