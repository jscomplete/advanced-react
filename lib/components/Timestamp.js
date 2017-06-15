import React from 'react';

class Timestamp extends React.Component {
  render() {
    return (
      <div>
        {this.props.timestamp.toString()}
      </div>
    );
  }
}

export default Timestamp;
