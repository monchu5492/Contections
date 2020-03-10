import React from "react";
import { Button, Card, Image, Modal } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import EditEventForm from "./EditEventform";
import JoinModalButton from "./JoinModalButton";
// , margin: "auto"
// style={{ width: "max-content" }}
export default class CardExampleGroups extends React.Component {
  onCardClick = () => {
    // return <EventInfoCard />;
  };

  // eventMaker = () => {
  //   console.log(this.props.currentEvent);
  //   let eventId = this.props.currentEvent.user_id;
  //   return this.props.users.filter(user => {
  //     return user.id == eventId;
  //   });
  // };

  render() {
    const eventMakerId = this.props.currentEvent.user.id;
    console.log(eventMakerId);
    console.log(this.props.user.id);
    // const eventMaker =
    return (
      <Card>
        {console.log(this.props.currentEvent, "currentEvent card props")}
        <Card.Content>
          <Image
            floated="right"
            size="small"
            src={this.props.currentEvent.picture}
          />
          <Card.Header>
            Event Created By {this.props.currentEvent.user.user_name}
          </Card.Header>
          <Card.Meta>{this.props.currentEvent.name} project</Card.Meta>
          <Card.Description>
            {/* <Link exact to={this.props.currentEvent.links}>
              Link
            </Link> */}
            <a href={this.props.currentEvent.links}>event link</a>
            <p>{this.props.currentEvent.join_events.length}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            {this.props.currentEvent.user.id !== this.props.user.id ? (
              <JoinModalButton
                user={this.props.user}
                currentEvent={this.props.currentEvent}
                joinEvent={this.props.joinEvent}
              />
            ) : (
              <EditEventForm
                style={{ position: "left" }}
                user={this.props.user}
                updateEvent={this.props.updateEvent}
                deleteEvent={this.props.deleteEvent}
                currentEvent={this.props.currentEvent}
              />
            )}
          </div>
        </Card.Content>
      </Card>
    );
  }
}

// "Snooze",
//                 { key: "done", content: "Done", positive: true }
//               ]}
