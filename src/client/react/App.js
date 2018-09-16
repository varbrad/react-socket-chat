import React from 'react';
import PropTypes from 'prop-types';

import MessageBar from './components/MessageBar';

export default class App extends React.Component {
  static propTypes = {
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    //
    this.state = {
      message: '',
      messages: []
    };
    //
    props.on('hydrate', this.socketHydrate);
    props.on('update', this.socketUpdate);
  }

  socketHydrate = data => {
    this.setState({
      messages: data
    });
  };

  socketUpdate = data => {
    this.setState(state => ({
      messages: [...state.messages, data]
    }));
  };

  changeMessage = value => this.setState({ message: value });

  sendMessage = () => {
    this.props.emit('send', this.state.message);
    this.setState({ message: '' });
  };

  renderMessages() {
    const { messages } = this.state;
    return messages.map((message, i) => <li key={i}>{message}</li>);
  }

  render() {
    return (
      <div>
        <div className="flex">
          <ul>{this.renderMessages()}</ul>
        </div>
        <MessageBar
          value={this.state.message}
          onChange={this.changeMessage}
          onSubmit={this.sendMessage}
        />
      </div>
    );
  }
}

export const withSocket = socket => {
  const props = {};
  //
  props.emit = (type, ...args) => socket.emit(type, ...args);
  props.on = (type, callback) => socket.on(type, callback);
  //
  return <App {...props} />;
};
