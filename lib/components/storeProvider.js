import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (Component) => {
  return class extends React.Component {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object,
    };

    render() {
      return <Component {...this.props} store={this.context.store} />;
    }
  };
};

export default storeProvider;
