import React from 'react';
import './CharacherCard.less';

function CharacherCard(props) {
  const {
    id,
    image,
    name,
    status,
    gender,
    location,
    origin,
    species
  } = props.character;

  const imageUrl = image;
  return (
    <div className="character-card">
      <div className="image-container">
        <img
          src={imageUrl}
          alt="characterImage"
          className="image-container__image"
        ></img>
        <div className="image-container__name">
          <h2>{name}</h2>
          <p>id:{id} - created 2 years ago</p>
        </div>
      </div>

      <div className="character-info">
        <div className="character-info__content">
          <span className="character-info__content-title">STATUS</span>
          <span className="character-info__content-value">{status}</span>
        </div>
        <div className="character-info__content">
          <span className="character-info__content-title">SPECIES</span>
          <span className="character-info__content-value">{species}</span>
        </div>
        <div className="character-info__content">
          <span className="character-info__content-title">GENDER</span>
          <span className="character-info__content-value">{gender}</span>
        </div>
        <div className="character-info__content">
          <span className="character-info__content-title">ORIGIN</span>
          <span className="character-info__content-value">{origin.name}</span>
        </div>
        <div className="character-info__content character-info__content--border">
          <span className="character-info__content-title">LAST LOCATION</span>
          <span className="character-info__content-value">{location.name}</span>
        </div>
      </div>
    </div>
  );
}

export default CharacherCard;
