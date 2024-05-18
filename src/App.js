import React, { useState, useEffect } from 'react';
import CreateProfile from './components/CreateProfile';
import ProfilePage from './components/ProfilePage';
import axios from 'axios';
import './App.css';

const App = () => {
  const [profile, setProfile] = useState(null);
  const [profileId, setProfileId] = useState(null);

  const handleProfileSubmit = (profileData) => {
    setProfile(profileData);
    setProfileId(profileData._id);
  };

  useEffect(() => {
    const loadProfile = async () => {
      if (profileId) {
        const response = await axios.get(`http://localhost:5000/api/profiles/${profileId}`);
        setProfile(response.data);
      }
    };
    loadProfile();
  }, [profileId]);

  return (
    <div className="App">
      {profile ? (
        <ProfilePage profile={profile} />
      ) : (
        <CreateProfile onSubmit={handleProfileSubmit} />
      )}
    </div>
  );
};

export default App;
