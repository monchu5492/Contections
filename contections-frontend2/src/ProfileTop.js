import React, { Component } from "react";
import {
  Segment,
  Image,
  Button,
  Modal,
  Header,
  Icon,
  Form,
  Divider
} from "semantic-ui-react";
import CreateEventForm from "./CreateEventForm";
import EditEventForm from "./EditEventform";
import { Link } from "react-router-dom";

const INITIAL_STATE = {
  name: "",
  picture: "",
  links: "",
  description: "",
  address: "",
  modalOpen: false
};

export default class MenuExampleSecondaryPointing extends Component {
  state = INITIAL_STATE;

  handleOpen = () => this.setState({ ...this.state, modalOpen: true });

  handleClose = e => {
    this.setState({
      ...this.state,
      modalOpen: false
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    const open = this.state.modalOpen;
    // const { activeItem } = this.state;
    return (
      <div>
        <Segment>
          <Image
            src={this.props.user.profile_pic}
            alt="none"
            size="small"
            style={{ margin: "auto" }}
            circular
          />
          <CreateEventForm
            style={{ position: "left" }}
            user={this.props.user}
            postEvent={this.props.postEvent}
          />
          <h2 style={{ width: "max-content", margin: "auto" }}>
            {this.props.user ? this.props.user.name : "currently no user"}
          </h2>
        </Segment>
      </div>
    );
  }
}
