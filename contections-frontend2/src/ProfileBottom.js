import React, { Component } from "react";
import { Input, Menu, Segment, Card } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import EventCard from "./EventCard";
import CreateEventForm from "./CreateEventForm";
import EventContainer from "./CreateEventForm";
import HomepageLayout from "./HomepageLayout";

export default class MenuExampleTabularOnTop extends Component {
  state = {
    activeItem: "events",
    currentUserEvents: []
  };

  handleItemClick = (e, { name }) => {
    console.log(name);
    console.log(e.target.innerText, "innner text");
    if (e.target.innerText === "Logout") {
      this.handleLogOut();
    } else {
      this.setState({ activeItem: name });
    }
  };

  handleLogOut = () => {
    console.log(this.props);
    if (window.confirm("Are you sure you want to logout?") === true) {
      localStorage.clear();
      return this.props.logOut(), this.props.history.push("/");
      //supposed to redirect to home page as well as removing user from local state
    }
  };

  // eventMaker = () => {
  //   console.log(this.props.currentEvent);
  //   let eventId = this.props.currentEvent.user_id;
  //   return this.props.users.filter(user => {
  //     return user.id == eventId;
  //   });
  // };

  // switchCase() {
  //   // if (this.props.owned_events.length < 1) {
  //   // return <h2>Currently no events, feel free to create one</h2>;
  //   // } else
  //   if (this.state.activeItem === "all events") {
  //     this.props.allEvents.map(event => {
  //       return (
  //         <EventCard
  //           user={this.props.user}
  //           allEvents={this.props.allEvents}
  //           currentEvent={event}
  //           deleteEvent={this.props.deleteEvent}
  //           updateEvent={this.props.updateEvent}
  //           joinEvent={this.props.joinEvent}
  //           allEvents={this.props.allEvents}
  //         />
  //       );
  //     });
  //   } else if (this.state.activeItem === "bio") {
  //     return (
  //       <h3 style={{ width: "max-content" }}>
  //         {this.props.user ? this.props.user.bio : this.props.localUser().bio}
  //       </h3>
  //     );
  //   } else if (
  //     this.state.activeItem === "events" &&
  //     this.props.owned_events.length < 1
  //   ) {
  //     this.props.owned_events.map(event => {
  //       return (
  //         <EventCard
  //           user={this.props.user}
  //           owned_events={this.props.owned_events}
  //           currentEvent={event}
  //           deleteEvent={this.props.deleteEvent}
  //           updateEvent={this.props.updateEvent}
  //           joinEvent={this.props.joinEvent}
  //         />
  //       );
  //     });
  //   } else {
  //     return <h2>Currently no events, feel free to create one</h2>;
  //   }
  // }

  eventMenuTab = () => {
    let ownedEvents = this.props.allEvents.filter(
      event => event.user.id === this.props.user.id
    );
    console.log(ownedEvents);
    return this.state.activeItem === "events"
      ? ownedEvents.map(event => {
          return (
            <EventCard
              user={this.props.user}
              users={this.props.users}
              history={this.props.history}
              allEvents={this.props.allEvents}
              currentEvent={event}
              deleteEvent={this.props.deleteEvent}
              updateEvent={this.props.updateEvent}
              joinEvent={this.props.joinEvent}
            />
          );
        })
      : null;
  };

  allEventMenuTab = () => {
    // const nonUserEvents = this.props.allEvents.filter(
    //   event => event.user.id != this.props.user.id
    // );
    console.log(this.props.user);
    // console.log(nonUserEvents);
    return this.state.activeItem === "all events"
      ? this.props.allEvents.map(event => {
          return (
            <EventCard
              user={this.props.user}
              users={this.props.users}
              history={this.props.history}
              currentEvent={event}
              deleteEvent={this.props.deleteEvent}
              updateEvent={this.props.updateEvent}
              joinEvent={this.props.joinEvent}
              allEvents={this.props.allEvents}
            />
          );
        })
      : null;
  };

  bioMenuTab = () => {
    return this.state.activeItem === "bio" ? (
      <h3 style={{ width: "max-content" }}>
        {this.props.user ? this.props.user.bio : this.props.localUser().bio}
      </h3>
    ) : null;
  };

  noEvent = () => <h3>Currently no Events available</h3>;

  render() {
    console.log(this.props.users);
    const { activeItem } = this.state;
    // let { bio } = this.props.user;

    return (
      <div>
        {console.log(this.state.activeItem, "current active item")}
        <Menu attached="top" tabular>
          <Menu.Item
            name="bio"
            active={activeItem === "bio"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="events"
            active={activeItem === "events"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="all events"
            active={activeItem === "all events"}
            onClick={this.handleItemClick}
          />
          <Menu.Item as={Link} to="/" name="Home" />
          <Menu.Menu position="right">
            <Menu.Item
              name="Logout"
              active={activeItem === "Logout"}
              onClick={this.handleItemClick}
            />
            <Menu.Item>
              <Input
                transparent
                icon={{ name: "search", link: true }}
                placeholder="Search users..."
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Segment attached="bottom">
          {this.allEventMenuTab()}
          {this.bioMenuTab()}
          {this.eventMenuTab()}
          {this.props.owned_events.length >= 1 ? this.noEvent : null}
          {/* {this.switchCase()} */}
          {/* {this.state.activeItem === "events" ? (
            this.props.owned_events.length >= 1 ? (
              this.props.owned_events.map(event => {
                return (
                  <EventCard
                    user={this.props.user}
                    owned_events={this.props.owned_events}
                    currentEvent={event}
                    deleteEvent={this.props.deleteEvent}
                    updateEvent={this.props.updateEvent}
                    joinEvent={this.props.joinEvent}
                  />
                );
              })
            ) : (
              <h2>Currently no events, feel free to create one</h2>
            )
          ) : (
            <h3 style={{ width: "max-content" }}>
              {this.props.user
                ? this.props.user.bio
                : this.props.localUser().bio}
            </h3>
          )}
          {this.state.activeItem === "all events"
            ? this.props.allEvents.map(event => {
                return (
                  <EventCard
                    user={this.props.user}
                    allEvents={this.props.allEvents}
                    currentEvent={event}
                    deleteEvent={this.props.deleteEvent}
                    updateEvent={this.props.updateEvent}
                    joinEvent={this.props.joinEvent}
                    allEvents={this.props.allEvents}
                  />
                );
              })
            : null} */}
        </Segment>
      </div>
    );
  }
}

// {
//   this.state.activeItem === " All Events" ? (
//     this.props.allEvents.map(event => {
//       return (
//         <EventCard
//           user={this.props.user}
//           allEvents={this.props.allEvents}
//           currentEvent={event}
//           deleteEvent={this.props.deleteEvent}
//           updateEvent={this.props.updateEvent}
//           joinEvent={this.props.joinEvent}
//         />
//       );
//     })
//   ) : (
//     <h4 style={{ width: "max-content" }}>
//       {this.props.user ? this.props.user.bio : this.props.localUser().bio}
//     </h4>
//   );
// }
