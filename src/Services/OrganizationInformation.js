import axios from "axios";

const URL = process.env.REACT_APP_API_URL_ORGANIZATION;

export const getOrganizationInformation = async () => {
  const { data } = await axios.get(URL);
  return data;
};
