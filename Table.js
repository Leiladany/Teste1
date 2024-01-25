import {Text} from 'react-native';
import React from 'react';

class Table extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isBig: false,
    };
  }

  changeState = () => {
    this.setState({isBig: !this.state.isBig});
  };
  render() {
    console.log('this.state.isBig :>>', this.state.isBig);
    return (
      <Text
        style={{fontSize: this.state.isBig ? 24 : 14}}
        onPress={this.changeState}>
        This is a table
      </Text>
    );
  }
}

export default Table;
