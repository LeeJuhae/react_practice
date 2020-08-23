import React, { Component } from 'react';
import BoardItem from './components/BoardItem';
import BoardForm from './components/BoardForm';

class App extends Component {
    state = {
      maxNo: 2,
      boards: [
        {
          brdno: 1,
          brdwriter: 'Lee SunSin',
          brdtitle: 'If you intend to live then you die',
          brddate: new Date()
        },
      ]
    }
    handleSaveData = (data) => {
      this.setState({
        maxNo: this.state.maxNo+1,
        boards: this.state.boards.concat({
          brdno: this.state.maxNo,
          brddate: new Date(),
          ...data
        })
      });
    }
    handleRemove = (brdno) => {
      this.setState({
        boards: this.state.boards.filter(row => row.brdno !== brdno)
      })
    }
    render() {
        const { boards } = this.state;
        return (
            <div>
              <BoardForm onSaveData={this.handleSaveData}/>
              <table border="1">
                <tbody>
                  <tr align="center">
                    <td width="50">No.</td>
                    <td width="300">Title</td>
                    <td width="100">Name</td>
                    <td width="100">Date</td>
                  </tr>
                  {boards.map(row =>
                  (<BoardItem
                    key={row.brdno}
                    row={row}
                    onRemove={this.handleRemove}
                  />))}
                </tbody>
              </table>
            </div>
        );
    }
}

export default App;
