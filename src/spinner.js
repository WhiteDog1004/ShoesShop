import React from 'react';

import './Detail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSpinner
  } from "@fortawesome/free-solid-svg-icons";

  const Spinner = () => {
      return (
          <div className='spinner'>
            <FontAwesomeIcon icon={faSpinner} size='10x' spin />
          </div>
      )
  }

  export default Spinner;