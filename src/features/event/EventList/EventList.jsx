import React, { Component, Fragment } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    const {events, deleteEvent} = this.props;
    return (
      <Fragment>
        {events && events.map(event => (
          <EventListItem key={event.id} event={event} deleteEvent={deleteEvent}/>
        ))}
      </Fragment>
    );
  }
}

export default EventList;
