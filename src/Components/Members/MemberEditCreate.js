import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as membersActions from '../../app/MembersReducer/membersReducer';
import {
  isValidImage,
  isValidSocialMedia,
  isValidNameMembers,
} from '../../Utils/validation';
import { handleCKeditorForm } from '../../Utils/handlers';
import { showErrorAlert, showSuccessAlert } from '../../Utils/alerts';
import '../FormStyles.css';
import { useDispatch } from 'react-redux';
import { URLFileFormater } from '../../Utils/formatters';
import { useParams } from 'react-router-dom';

const EditCreateMembers = () => {
  const [member, setMember] = useState({
    name: '',
    description: '',
    image: '',
    facebookUrl: '',
    linkedinUrl: '',
  });

  const { id } = useParams();

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setMember({ ...member, name: e.target.value });
        break;
      case 'image':
        isValidImage(e.target.files[0])
          ? setMember({
              ...member,
              image: URLFileFormater(e, member, setMember, 'image'),
            })
          : (showErrorAlert(
              'Select an image type png or jpg, the file you selected is of type' +
                e.target.files[0].type
            ),
            setMember({ ...member, image: '' }));
        break;
      case 'social_media':
        if (
          e.target.value &&
          e.target.value.includes('https://www.facebook.com/')
        ) {
          setMember({ ...member, facebookUrl: e.target.value });
        } else if (
          e.target.value &&
          e.target.value.includes('https://www.facebook.com/')
        ) {
          setMember({ ...member, linkedinUrl: e.target.value });
        }
        break;
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleError()) {
      showSuccessAlert('Member created') &
        dispatch(membersActions.updateOrCreate({ member, id }));
    }
  };

  const handleError = () => {
    switch (true) {
      case isValidNameMembers(member.name):
        showErrorAlert('The name is not valid');
        break;
      case member.description === '':
        showErrorAlert('The description is required');
        break;
      // case !isValidSocialMedia(member.social_media):
      //   showErrorAlert('The social media is not valid');
      //   break;
      default:
        return true;
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        className="input-field"
        type="text"
        name="name"
        value={member.name}
        onChange={handleChange}
        placeholder="Name"
        minLength="4"
        required
      ></input>
      <label>Description</label>
      <CKEditor
        editor={ClassicEditor}
        data={member.description}
        onChange={(event, editor) =>
          handleCKeditorForm(editor, 'description', setMember, member)
        }
      />
      <label>Image</label>
      <input
        type="file"
        onChange={handleChange}
        id="image"
        name="image"
        value={undefined}
        accept="image/jpeg, image/jpg, image/png"
        required
      />
      {member.imageMember && <img src={member.imageMember} alt="member" />}

      <label>Social media</label>
      <input
        className="input-field"
        type="url"
        name="social_media"
        value={member.social_media}
        onChange={handleChange}
        placeholder="url"
        required
      ></input>

      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default EditCreateMembers;
