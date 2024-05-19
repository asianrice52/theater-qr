import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const ProfilePage = ({ profile }) => {
  const pageUrl = `${window.location.origin}/profile/${profile.id}`;

  return (
    <div className="profile-page">
      <img src={profile.photo} alt="Profile" style={{ width: '100%', height: 'auto' }} />
      {profile.sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
      <div>
        <h3>Scan the QR code to view this profile:</h3>
        <QRCodeCanvas value={pageUrl} size={128} />
      </div>
    </div>
  );
};

export default ProfilePage;
