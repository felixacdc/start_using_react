import React from 'react';

/* class App extends React.Component {
  render() {
    return React.createElement("h1", null, 'Hello Eggheads');
  }
}

const App = () => <h1>Hello Stateless</h1> -->

<!-- class App extends React.Component {
  render() {
    //return <h1>Hello World</h1> <b>Bold</b> //Incorrecto
    return (
      <div>
        <h1>Hello World</h1>
        <b>Bold</b>
      </div>
    )
  }
} */

/* class App extends React.Component {
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
} */

/* class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'This is the state txt'
    }
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
      </div>
    )
  }
}

const Widget = (props) => <input type="text" onChange={props.update} /> */

/* class App extends React.Component {
  render() {
    return <Button>I <Heart /> React</Button>;
  }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
} */

/* class App extends React.Component {
  render() {
    return <Title text="The Text" />;
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>;

Title.propTypes = {
    text: React.PropTypes.string.isRequired
    text(props, propName, component) {
        if(!(propName in props))
            return new Error(`Missing ${propName}`)

        if(props[propName].length < 6)
            return new Error(`${propName} was too short`)
    }
}
*/
/* class App extends React.Component {
  constructor() {
    super();
    this.state = {curretEvent: '---'}
    this.update = this.update.bind(this)
  }
  update(e) {
  this.setState({currentEvent: e.type})
  }
  render() {
    return (
        <div>
          <textarea
            onKeyPress={this.update}
            onCopy={this.update}
            onCut={this.update}
            onPaste={this.update}
            onFocus={this.update}
            onBlur={this.update}
            onDoubleClick={this.update}
            onTouchStart={this.update}
            onTouchMove={this.update}
            onTouchEnd={this.update}
            cols="30" 
            rows="10"/>
          <h1>{this.state.currentEvent}</h1>
        </div>
    )
  }
} */

import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {a: ''}
  }
  update(e) {
    this.setState({
      // a: ReactDOM.findDOMNode(this.a).value,
      a: this.a.refs.input.value,
      b: this.refs.b.value
    });
  }
  render() {
    return (
      <div>
        <Input
          ref={ component => this.a = component }
          update={this.update.bind(this)}
        /> {this.state.a}
        <hr />
        <input 
          ref="b"
          type="text"
          onChange={this.update.bind(this)}
        /> {this.state.b}
      </div>
    );
  }
}

class Input extends React.Component {
  render() {
    return <div><input ref="input" type="text" onChange={this.props.update}/></div>
  }
}

export default App;