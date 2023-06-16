import React from "react";

class FormValidation extends React.Component {
  constructor() {
    super();
    this.state = {
      Fname: "",
      Email: "",
      Password: "",
      Cpassword: "",
      Fname1: "",
      Password1: ""
    };
  }

  handleFname = (e) => {
    this.setState({
      Fname: e.target.value
    });
  };

  handleEmail = (e) => {
    this.setState({
      Email: e.target.value
    });
  };

  handlePassword = (e) => {
    this.setState({
      Password: e.target.value
    });
  };

  handleCpassword = (e) => {
    this.setState({
      Cpassword: e.target.value
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    const pattern =/^[A-Z]?[a-z]+[0-9]+$/;
    if (!pattern.test(this.state.Fname)) {
      //console.log("Failure");
      alert("This is not valid");
    } else if (this.state.Password !== this.state.Cpassword) {
      alert("Password does not match");
    } else {
      alert("Form is submitted");
      localStorage.setItem("Name", this.state.Fname);
      localStorage.setItem("Password", this.state.Password);
    }
  };

  handleFname1 = (f) => {
    this.setState({
      Fname1: f.target.value
    });
  };

  handlePassword1 = (f) => {
    this.setState({
      Password1: f.target.value
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const storedName = localStorage.getItem("Name");
    const storedPassword = localStorage.getItem("Password");
    if (this.state.Fname1 !== storedName) {
      alert("Name does not match");
    } else if (this.state.Password1 !== storedPassword) {
      alert("Password does not match");
    } else {
      alert("Logged in successfully");
    }
  };

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={this.handleChange}>
          <label>Name:</label>
          <input
            type="text"
            value={this.state.Fname}
            onChange={this.handleFname}
          />
          <br />
          <br />

          <label>Email:</label>
          <input
            type="email"
            value={this.state.Email}
            onChange={this.handleEmail}
          />
          <br />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={this.state.Password}
            onChange={this.handlePassword}
          />
          <br />
          <br />
          <label>Confirm Password:</label>
          <input
            type="password"
            value={this.state.Cpassword}
            onChange={this.handleCpassword}
          />
          <br />
          <br />
          <input type="submit" value="Sign In" />
        </form>

        <br />
        <br />

        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
          <label>Name:</label>
          <input
            type="text"
            value={this.state.Fname1}
            onChange={this.handleFname1}
          />
          <br />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={this.state.Password1}
            onChange={this.handlePassword1}
          />
          <br />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default FormValidation;