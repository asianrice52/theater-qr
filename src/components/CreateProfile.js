import React, { useState } from 'react';
import axios from 'axios';

const CreateProfile = ({ onSubmit }) => {
  const [photo, setPhoto] = useState(null);
  const [sections, setSections] = useState([{ title: '', content: '' }]);

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleSectionChange = (index, field, value) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const addSection = () => {
    setSections([...sections, { title: '', content: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/profiles', { photo, sections });
    onSubmit(response.data);
  };

  return (
    <form onSubmit={handleSubmit} className="create-profile-form">
      <div>
        <label htmlFor="photo">Upload Photo:</label>
        <input type="file" id="photo" accept="image/*" onChange={handlePhotoChange} />
      </div>
      {sections.map((section, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Section Title"
            value={section.title}
            onChange={(e) => handleSectionChange(index, 'title', e.target.value)}
          />
          <textarea
            placeholder="Section Content"
            value={section.content}
            onChange={(e) => handleSectionChange(index, 'content', e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={addSection}>Add Section</button>
      <button type="submit">Create Page</button>
    </form>
  );
};

export default CreateProfile;
