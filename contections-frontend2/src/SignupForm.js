import React from "react";
import { Button, Divider, Form } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";

// const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

const INITIAL_STATE = {
  user_name: "",
  name: "",
  bio: "",
  address: "",
  password: ""
};

class FormExampleSize extends React.Component {
  state = INITIAL_STATE;

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.props.history.push("/login");
  };

  render() {
    return this.props.newSignUpState ? (
      <Redirect to="/login" />
    ) : (
      <div>
        <Form size={"small"} key={"small"} onSubmit={this.handleFormSubmit}>
          <Form.Group widths="equal">
            <Form.Field
              label="User Name"
              control="input"
              name="user_name"
              value={this.state.user_name}
              onChange={this.handleChange}
              placeholder="User Name"
            />
          </Form.Group>
          <Form.Field
            label="Name"
            control="input"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <Form.Field
            label="Bio"
            control="input"
            name="bio"
            value={this.state.bio}
            onChange={this.handleChange}
            placeholder="Bio"
          />
          <Form.Field
            label="Profile Picture"
            control="input"
            name="profile_pic"
            value={this.state.profile_pic}
            onChange={this.handleChange}
            placeholder="Profile Picture"
          />
          <Form.Field
            label="Address"
            control="input"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
            placeholder="Address"
          />
          <Form.Field
            label="Password"
            control="input"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <Button type="submit">Submit</Button>
          <Link to="/">
            <Button id="homeButton">Home</Button>
          </Link>
          <Divider hidden />
        </Form>
      </div>
    );
  }
}
export default FormExampleSize;
