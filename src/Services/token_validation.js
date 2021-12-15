export const token_validation = () => {
  if (
    localStorage.getItem('token') !== null &&
    localStorage.getItem('token') !== undefined
  ) {
    return { Bearer: localStorage.getItem('token') };
  } else {
    return false;
  }
};
