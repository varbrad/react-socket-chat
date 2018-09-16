import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //
    props.socket.on('hydrate', this.socketHydrate);
    props.socket.on('update', this.socketUpdate);
    //
    this.state = {
      messages: []
    };
  }

  socketHydrate = data => {
    this.setState(state => ({
      messages: data
    }));
  };

  socketUpdate = data => {
    this.setState(state => ({
      messages: [...state.messages, data]
    }));
  };

  render() {
    return <div>{this.props.messages.length}</div>;
  }
}

export const withSocket = socket => {
  const props = {};
  //
  props.emit = (type, ...args) => socket.emit(type, ...args);
  //
  return <App {...props} />;
};
