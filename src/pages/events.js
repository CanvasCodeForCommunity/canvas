import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import Layout from '../components/layout'
import SEO from '../components/seo'

import events from '../data/events.json'
import EventCardComponent from '../components/EventCardComponent'
import EventHeaderComponent from '../components/EventHeaderComponent'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    maxWidth: 960,
    padding: '1.45rem 1.0875rem',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

class EventsPage extends Component {
  constructor(props) {
    super(props);
  }

  eventsGrid = classes => {
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {events.map((event, index) => (
            <EventCardComponent
              name={event.name}
              location={event.location}
              description={event.description}
              cover_img={event.cover_img}
            />
          ))}
        </Grid>
      </div>
    )
  }

  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <SEO title="Events" />
        <EventHeaderComponent siteTitle={'Events'} siteSecondaryTitle={'Past and present events'} />
        {this.eventsGrid(classes)}
      </Layout>
    )
  }
}

export default withStyles(styles)(EventsPage)
