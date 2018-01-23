import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {bindActionCreators} from 'redux';
import { fetchJedi, newJedi } from './actions/action';

// function mapStateToProps(state) {
//   return {
//     jedi: state.jedi,
//   };
// }

class App extends Component {
  componentDidMount() {
    this.props.fetchJedi();
  }

  render() {
    console.log(this.props);


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.props.jedi.map((jedi, index) => <div key={index}>Jedi: id: {jedi.id} name: {jedi.name}</div>)}
        <button onClick={() => this.props.newJedi('Palawan Floles')}> Ajouter un jedi</button>
      </div>
    );
  }
}

App.propTypes = {
  jedi: PropTypes.array,
};

export default connect(state => state, dispatch => bindActionCreators({fetchJedi, newJedi}, dispatch))(App);
