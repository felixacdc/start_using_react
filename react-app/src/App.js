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

// class App extends React.Component {
//   render() {
//     let txt = this.props.txt
//     return <h1>{txt}</h1>;
//   }
// }

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

// App.defaultProps = {
//   txt: "This is the default txt"
// }

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       txt: 'This is the state txt'
//     }
//   }
//   update(e) {
//     this.setState({txt: e.target.value})
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.txt}</h1>
//         <Widget update={this.update.bind(this)} />
//         <Widget update={this.update.bind(this)} />
//         <Widget update={this.update.bind(this)} />
//       </div>
//     )
//   }
// }

// const Widget = (props) => <input type="text" onChange={props.update} />

class App extends React.Component {
  render() {
    return <Button>I <Heart /> React</Button>;
  }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}

export default App;