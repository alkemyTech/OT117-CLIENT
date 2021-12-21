const modifyElement = (array, modifiedUser) => {
  let userFound = array.find((user) => user.id === modifiedUser.id);
  if (userFound) {
    userFound = modifiedUser;
  }
  return array;
};

const removeElement = (array, userId) => {
  const userFound = array.find((user) => user.id === userId);
  if (userFound) {
    const newArray = array.filter((user) => user.id !== userId);
    return newArray;
  }
};

const addUser = (array, newUser) => {
  const userFound = array.find((user) => user.id === newUser.id);
  if (!userFound) {
    const newArray = array.concat(newUser);
    return newArray;
  }
};

export { addUser, removeElement, modifyElement };
