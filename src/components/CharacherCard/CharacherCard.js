import React from 'react';
import './CharacherCard.less';

function CharacherCard(props) {
  const imageUrl = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
  return (
    <div className="character-card">
      <div className="image-container">
        <img
          src={imageUrl}
          alt="characterImage"
          className="image-container__image"
        ></img>
        <div className="image-container__name">
          <h2>character Name</h2>
          <p>id: 246 - created 2 years ago</p>
        </div>
      </div>

      <div className="character-info">
        <div className="character-info__content">
          <span className="character-info__content-title">STATUS</span>
          <span className="character-info__content-value">STATUS</span>
        </div>
        <div className="character-info__content">
          <span className="character-info__content-title">SPECIES</span>
          <span className="character-info__content-value">STATUS</span>
        </div>
        <div className="character-info__content">
          <span className="character-info__content-title">GENDER</span>
          <span className="character-info__content-value">STATUS</span>
        </div>
        <div className="character-info__content">
          <span className="character-info__content-title">ORIGIN</span>
          <span className="character-info__content-value">STATUS</span>
        </div>
        <div className="character-info__content">
          <span className="character-info__content-title">LAST LOCATION</span>
          <span className="character-info__content-value">STATUS</span>
        </div>
      </div>
    </div>
  );
}

export default CharacherCard;
