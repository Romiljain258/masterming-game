import React from 'react';
import axios from 'axios';
import MainCard from "./MainCard";
import { Link, Redirect} from 'react-router-dom';
class Login extends React.Component {

  constructor(props) {
    super(props);

    //this._onBtnClick=this._onBtnClick.bind(this);
    //this._ofBtn=this._ofBtn.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: '',
      setData: '',
      //showComponent:false,
    }
  };
  // _onBtnClick(){
  //   console.log("btn");
  //   this.setState({
  //     showComponent:true,
  //   });
  // };
  // _ofBtn(){
  //   console.log("btn");
  //   this.setState({
  //     showComponent:false,
  //   });
  // };


  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  };

  onSubmit(e) {
    e.preventDefault();

    const user1 = {
      email: this.state.email,
      password: this.state.password,
    }

    console.log(user1);

    axios.post('http://localhost:3000/users/login', user1)
      .then(res => {

        if (res.data == 'successfully login') {
        this.props.history.push("/main");
          // return <Redirect to="/main" />
        }
        else {
          console.log("no hurry");
        }
        this.setState({
          setData: res.data,
        });
      });

    this.setState({
      // email: '',
      // password: '',
    });
  };

  promt = () => {
    this.setState({
      setData: "",
    })
  };
call=()=>{
  console.log("it's coming here also")

}
  render() {
    return (
      <div class="row mt-5">
        <div class="col-md-6 m-auto">
          <div class="card card-body">
            <h1 class="text-center mb-3">
              <i class="fas fa-sign-in-alt"></i>  Login</h1>

            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <h3 className="promt">{this.state.setData}</h3>
                {/* {this.state.setData=='successfully login'?
                <>
                  {this._onBtnClick()}
                {console.log("coming1", this.state.setData=='successfully login')}
                {this.state.showComponent,"hello baby"}
                </>
                :
                null
              }
                    {this.state.showComponent?
                    <>
                    {console.log("coming 2")}
                    <MainCard/>
                    {this._ofBtn()}
                    </>
                    :
                    null
                    } */}
                <label>Email: </label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div>
                <label>password: </label>
                <input type="password"
                  required
                  className="form-control"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary" />
              </div>
            </form>
            <p class="lead mt-4">
              No Account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    )
  }

}
export default Login;