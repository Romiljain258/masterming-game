import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ChoiceCard extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <div className="container choice">
        <div class="row mt-5">
          <div class="col-md-6 m-auto">
            <div class="card card-body text-center">
              <h1><i className="fas fa-gamepad size"></i></h1>
              <h1><b>MasterMind Game</b></h1>
              <h4>Create an account or login</h4>
              <Link to="/register" class="btn btn-primary btn-block mb-2">Register</Link>

              <Link to="/login" class="btn btn-danger btn-block">Login</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
