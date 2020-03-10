import React from "react";
import { Button, Modal } from "semantic-ui-react";
// Form, Header, Image,

export default class CreateEventForm extends React.Component {
  //testing modal click functionality
  state = { open: false };
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };
  close = () => this.setState({ open: false });
  //-------------------------------------------
  handleOnClick = e => {
    // debugger;
    console.log(this.props.currentEvent);
    this.props.closeFirstModal();
    this.props.deleteEvent(this.props.currentEvent);
    console.log(this.props);
    // console.log(this.props.event.event);
    this.close();
    // console.log(this.props.event.event.id);
  };
  render() {
    //testing modal:
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;
    return (
      <div>
        <Button
          onClick={this.closeConfigShow(false, true)}
          color="red"
          inverted
        >
          Remove Event
        </Button>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>
            Are you sure you want to delete this Event?
          </Modal.Header>
          <Modal.Content>
            <p>
              if you are the creator of this event, the evnt will no longer
              exist for anyone to join, if you a collaborator it will remove
              from your joined events.
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              No
            </Button>
            <Button
              onClick={this.handleOnClick}
              positive
              labelPosition="right"
              icon="checkmark"
              content="Delete"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
