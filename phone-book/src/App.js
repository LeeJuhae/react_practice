import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render () {
    return (
      <PhoneForm
        onCreate={this.handleCreate}
      />
    );
  }
}
export default App;
