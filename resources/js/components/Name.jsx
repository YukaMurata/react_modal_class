import React from 'react';

import { category } from '../modules/helper';

/**
 * 1つのますのパーツ
 * @param {*} props
 */
export const Name = (props) => {
  return (
    <li className="hide js-accordion-wrapper" onClick={props.parentMethod}>
      <p className="content">
        <span className="content-inr">{category[props.status]}</span>
      </p>
    </li>
  );
};
