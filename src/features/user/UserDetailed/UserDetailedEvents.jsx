import React from 'react';
import {
  Segment,
  Header,
  Grid,
  Card,
  Image,
  Tab
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const panes = [
  { menuItem: 'All events', pane: { key: 'allEvents' } },
  { menuItem: 'Past events', pane: { key: 'pastEvents' } },
  { menuItem: 'Future events', pane: { key: 'futureEvents' } },
  { menuItem: 'Hosting', pane: { key: 'hosted' } }
];

const UserDetailedEvents = ({ events, eventsLoading, changeTab }) => {
  return (
    <Grid.Column width={12}>
      <Segment attached loading={eventsLoading}>
        <Header icon='calendar' content='Events' />
        <Tab
          onTabChange={(e, data) => changeTab(e, data)}
          panes={panes}
          menu={{ secondary: true, pointing: true }}
        />
        <br />

        <Card.Group itemsPerRow={5}>
          {events &&
            events.map(event => (
              <Card as={Link} to={`/events/${event.id}`} key={event.id}>
                <Image src={`/assets/categoryImages/${event.category}.jpg`} />
                <Card.Content>
                  <Card.Header textAlign='center'>{event.title}</Card.Header>
                  <Card.Meta textAlign='center'>
                    <div>
                      {format(event.date && event.date.toDate(), 'dd LLL yyyy')}
                    </div>
                    <div>
                      {format(event.date && event.date.toDate(), 'h:mm a')}
                    </div>
                  </Card.Meta>
                </Card.Content>
              </Card>
            ))}
        </Card.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedEvents;
