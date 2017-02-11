import React from 'react';

// class App extends React.Component {
//   render() {
//     return React.createElement("h1", null, 'Hello Eggheads');
//   }
// }

// const App = () => <h1>Hello Stateless</h1>

// class App extends React.Component {
//   render() {
//     //return <h1>Hello World</h1> <b>Bold</b> //Incorrecto
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <b>Bold</b>
//       </div>
//     )
//   }
// }

class App extends React.Component {
  render() {
    let txt = this.props.txt
    return <h1>{txt}</h1>;
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "This is the default txt"
}

export default App;