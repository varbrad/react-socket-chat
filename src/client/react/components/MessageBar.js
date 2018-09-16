import React from 'react';
import PropTypes from 'prop-types';

class MessageBar extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  };

  handleChange = e => this.props.onChange(e.target.value);

  onKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.onSubmit();
    }
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          onKeyPress={this.onKeyPress}
          type="text"
          value={this.props.value}
        />
        <button onClick={this.props.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default MessageBar;
