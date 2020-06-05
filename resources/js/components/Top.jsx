import React from 'react';

import { getServers } from '../modules/request';
import { getEventLists } from '../modules/helper';

import Schedule from './Schedule';

export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: '' };
  }

  componentDidMount() {
    const addresses = ['./json/schedule.json'];
    getServers(addresses).then((allResponse) => {
      const listData = allResponse.res[0].list;
      this.setState({ list: listData });
    });
  }

  render() {
    return (
      <div>
        <ul className="place-list">
          <Schedule data={this.state} />
        </ul>
      </div>
    );
  }
}
