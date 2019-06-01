import React from 'react';
import { Segment, Grid, Header, List, Item, Icon } from 'semantic-ui-react';
import { format } from 'date-fns';

const UserDetailedDescription = ({ profile }) => {
  return (
    <Grid.Column width={12}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <Header icon='smile' content='About Display Name' />
            <p>
              I am a: <strong>{profile.occupation || 'tbn'}</strong>
            </p>
            <p>
              Originally from <strong>{profile.origin || 'tbn'}</strong>
            </p>
            <p>
              Member Since:{' '}
              <strong>
                {profile.createdAt && format(profile.createdAt.toDate(), 'dd LLL yyyy')}
              </strong>
            </p>
            <p>{profile.description}</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header icon='heart outline' content='Interests' />
            <List>
              {profile.interests ? (
                profile.interests.map((interest, index) => (
                  <Item key={index}>
                    <Icon name='heart' />
                    <Item.Content>{interest}</Item.Content>
                  </Item>
                ))
              ) : (
                <p>No interests</p>
              )}
            </List>
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedDescription;
