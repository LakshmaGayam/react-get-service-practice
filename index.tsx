import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      albums:[]
    };
  }

  componentDidMount() {
    console.log('called')
    fetch('https://jsonplaceholder.typicode.com/albums').then((res) =>  res.json()).then((result) => this.setState({albums:result}) )
    console.log('h')
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        {/* <p> */}
          {/* Start editing to see some magic happen :) */}
          ALBUM DETAILS
          <table >
  <thead>
    <tr>
      <th >userId</th>
      <th >id</th>
      <th >title</th>
    </tr>
  </thead>
  <tbody>
      {this.state.albums.map((res) => (
        <tr key={res.id}>
      <td>{res.id}</td>
      <td>{res.userId}</td>
      <td>{res.title}</td>
    </tr>
      ))}
    
  </tbody>
</table>
        {/* </p> */}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
