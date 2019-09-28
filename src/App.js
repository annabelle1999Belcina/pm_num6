
import React, {Component} from 'react';
import './MyStyle.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        firstname: "Juan ",
        lastname: "Dela Cruz ",
        age: 21
      },
      {
        firstname: "Mark ",
        lastname: "Paul ",
        age: 22
      },
      {
        firstname: "Paul ",
        lastname: "Mark ",
        age: 23
      }]
    };
  }
  render() {
    return (
      <div class = "container">
        <center>
          <div class = "box">
            <h1>{this.state.data.map(d => <li key={d.firstname}>{d.firstname}{d.lastname}{d.age}</li>)}
            </h1>
          </div>
        </center>
      </div>
      

    )
  }
}
export default App;