import React from "react";
import { api } from "./api";
import { Button, Divider, Form } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";

// const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

// const INITIAL_STATE = {
//   user_name: "",
//   password: ""
// };

export default class FormExampleSize extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        user_name: "",
        password: ""
      }
    };
  }
  // state = INITIAL_STATE;

  handleOnChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({
      fields: newFields
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    api.auth.login(this.state.fields).then(res => {
      console.log(res);
      if (!res.error) {
        // const updatedState = { ...this.state.auth, user: res };
        this.props.onLogInUser(res);
        this.props.history.push("/profile");
      } else {
        this.setState({ error: true });
      }
    });
    // this.props.onLogInUser(this.state.user_name);
    // this.setState(INITIAL_STATE);
  };

  render() {
    console.log("hello");
    // return this.props.isLoggedIn ? (
    //   <Redirect to="/profile" />
    // ) : (
    const { fields } = this.state;
    return (
      <div>
        {this.state.error ? <h1>please try again...</h1> : null}
        <Form size={"small"} key={"small"} onSubmit={this.handleOnSubmit}>
          <Form.Group widths="equal">
            <Form.Field
              label="User Name"
              control="input"
              name="user_name"
              value={fields.user_name}
              onChange={this.handleOnChange}
              placeholder="User Name"
            />
          </Form.Group>
          <Form.Field
            label="Password"
            control="input"
            name="password"
            value={fields.password}
            onChange={this.handleOnChange}
            placeholder="Password"
          />
          <Button type="submit">Submit</Button>
          <Button id="homeButton" as={Link} to={"/"}>
            Home
          </Button>
          <Divider hidden />
        </Form>
      </div>
    );
    // );
  }
}
