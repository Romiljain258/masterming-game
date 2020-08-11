import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Register extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCPassword = this.onChangeCPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: "",
            password: '',
            cPassword: '',
            setData: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    };

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        })
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    onChangeCPassword(e) {
        this.setState({
            cPassword: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            cPassword: this.state.cPassword,
        }

        console.log(user);

        axios.post('http://localhost:3000/users/register', user)
            .then(res => {
                console.log("hello buddy " + res.data);
                this.setState({
                    setData: res.data,
                });
            });

        this.setState({
            // username: '',
            // email: '',
            // password: '',
            // cPassword:'',
        });
    };
    
    promt = () => {
        this.setState({
            setData: "",
        })
    };

    render() {
        return (
            <div class="row mt-5">
                <div class="col-md-6 m-auto">
                    <div class="card card-body">
                        <h1 class="text-center mb-3">
                            <i class="fas fa-user-plus"></i> Register</h1>

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <h3 className="promt">{this.state.setData}</h3>
                                <label>Username: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername} />
                            </div>

                            <div>
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
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                />
                            </div>

                            <div>
                                <label>confirm password: </label>
                                <input type="password"
                                    required
                                    className="form-control"
                                    value={this.state.cPassword}
                                    onChange={this.onChangeCPassword}
                                />
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Create User" className="btn btn-primary" />
                            </div>
                        </form>
                        <p class="lead mt-4">Have An Account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;
