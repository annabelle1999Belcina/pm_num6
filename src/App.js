
import React, {Component} from 'react';

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
      <div>
        {this.state.data.map(d => <li key={d.firstname}>{d.firstname}{d.lastname}{d.age}</li>)}
      </div>
      

    )
  }
}
export default App;