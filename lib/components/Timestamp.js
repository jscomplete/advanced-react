import React from 'react';
import storeProvider from './storeProvider';

class Timestamp extends React.Component {
  render() {
    return (
      <div>
        {this.props.timestamp.toString()}
      </div>
    );
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}

export default storeProvider(extraProps)(Timestamp);
