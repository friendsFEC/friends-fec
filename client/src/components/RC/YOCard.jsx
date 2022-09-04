/* eslint-disable */
import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Stars from './Stars.jsx'

const YOCard = ({open, currentInfo, currentStyle, currentRating, relatedAverageRatings}) => {
  if (!open) return null

  return (
    <div className = "rc-yo-new-card">
      {/* onClick of the X: remove card and replace it back with the ADD TO OUTFIT */}
      <div className = "rc-yo-card-details">
        <button className = "rc-yo-remove-button" onClick = {() => removeDiv()}><AiOutlineCloseCircle/></button>
        <img className = "rc-card-photos" src = {currentStyle.results[0].photos[0].thumbnail_url}/>
        <p>{currentInfo.category}</p>
        <p className = "rc-card-name">{currentInfo.name}</p>
        <p>{currentInfo.default_price}</p>
        < Stars currentRating = {currentRating} relatedAverageRatings = {relatedAverageRatings}/>
      </div>
    </div>
  )
}

export default YOCard;