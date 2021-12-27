import { getDate } from 'date-fns';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as membersActions from '../../app/MembersReducer/membersReducer';
import '../FormStyles.css';

const MembersForm = () => {
  const ImageData = 'http://ongapi.alkemy.org/storage/akaqb9t7Xi.jpeg';

  const [initialValues, setInitialValues] = useState({
    name: '',
    description: '',
    image: `data:image/jpeg;base64, + ${ImageData}`,
  });

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e.target.name === 'description') {
      setInitialValues({ ...initialValues, description: e.target.value });
    }
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(membersActions.create(initialValues));
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        name="name"
        value={initialValues.name}
        onChange={handleChange}
        placeholder="Name"
      ></input>
      <input
        className="input-field"
        type="text"
        name="description"
        value={initialValues.description}
        onChange={handleChange}
        placeholder="Write some description"
      ></input>
      <button className="submit-btn" type="submit">
        SEND
      </button>
    </form>
  );
};

export default MembersForm;
