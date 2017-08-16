/**
*
* Grid
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Grid extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="grid">
          <div className="gridItem">
            <img src = {require('/../../images/joseph-chan.jpg')} className="gridImage"/>

          </div>
        </div>
      </div>
    );
  }
}

Grid.contextTypes = {
  router: React.PropTypes.object
};
