import React from 'react';

class MessageBar extends React.Component {
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
