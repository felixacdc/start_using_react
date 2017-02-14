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

/* import ReactDOM from 'react-dom';

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
}*/

/*import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }
  update(){
    this.setState({val: this.state.val +1})
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  render(){
    console.log('render')
    return <button onClick={this.update}>{this.state.val}</button>
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="a"></div>
      </div>
    )
  }
}*/

/*import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }
  update(){
    this.setState({val: this.state.val +1})
  }
  componentWillMount() {
    console.log('componentWillMount')
    this.setState({m: 2})
  }
  render(){
    console.log('render')
    return <button onClick={this.update}>{this.state.val * this.state.m}</button>
  }
  componentDidMount() {
    console.log('componentDidMount')
    // console.log(ReactDOM.findDOMNode(this))
    this.inc = setInterval(this.update,500)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.inc)
  }
}

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="a"></div>
      </div>
    )
  }
}*/

import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
  
    this.state = {increasing: false};
  }
  update() {
    ReactDOM.render(
      <App val={this.props.val+1}/>,
      document.getElementById('root')
    )
  }
  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val})
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }
  render() {
    console.log(this.state.increasing)
    return (
      <button onClick={this.update.bind(this)}>
        {this.props.val}
      </button>
    )
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`)
  }
}

App.defaultProps = {val: 0}

export default App;