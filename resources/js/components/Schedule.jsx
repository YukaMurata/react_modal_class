import React from 'react';

import Template from '../modules/Aux';
import { Name } from './Name';
import { Modal } from './Modal';

/**
 *
 */
export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.isModalOpen = false;
    this.state = { isModalOpen: false };
  }

  switchFlag() {
    this.isModalOpen = !this.isModalOpen;
    this.setState((prevState) => {
      return { isModalOpen: !prevState.isModalOpen };
    });
  }

  getModalStatus() {
    return this.isModalOpen;
  }

  /**
   * 今週の予測
   * @param {*} status
   */
  renderName(status) {
    return <Name status={status} parentMethod={this.switchFlag.bind(this)} />;
  }

  render() {
    const data = this.props.data.list;
    if (!data) {
      return <p>まだ</p>;
    }

    return (
      <div>
        <div className="place-info">
          <ul className="place-list">{data && Object.keys(data).map((item, index) => <Template key={index}>{!data[item].isRegistered ? this.renderName(data[item].serviceType) : ''}</Template>)}</ul>
        </div>
        <Modal parentMethod={this.switchFlag.bind(this)} isModalOpen={this.state.isModalOpen} />
      </div>
    );
  }
}
