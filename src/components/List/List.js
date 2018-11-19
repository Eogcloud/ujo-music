import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

import './List.css'

const List = (props) => {
  const { 
    currentSlideDeck,
    listItems,
    slideDecks,
    currentSongIndex
  } = props

  return (
    <div>
      {
       listItems.map((listItem, index) => {
        let output = 
        <div className="front" key={index}>
          <a href={`/user/${currentSlideDeck}/${listItem}/${currentSongIndex}`}>{listItem}</a>
            {/* <Link
              to={{pathname: `/user/${currentSlideDeck}/${listItem}/${0}`}}>{listItem}
            </Link> */}
        </div>
        return output
       })
      }
    </div>
  )
}

List.propTypes = {
  list: PropTypes.array    
};

List.defaultProps = {
  list: []   
};

export default (List);