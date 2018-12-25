import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from '../components/image'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
})

class EventCardComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { name, location, description, cover_img } = this.props
    const { classes } = this.props
    return (
      <Grid item xs={12} sm={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <Image filename={cover_img} />
            <CardContent>
              <Typography variant="h6" component="h2">
                {name}
              </Typography>
              <Typography variant="body2">{location}</Typography>

              <Typography gutterBottom component="p" noWrap>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    )
  }
}

EventCardComponent.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cover_img: PropTypes.string.isRequired,
}

//make this component available to the app
export default withStyles(styles)(EventCardComponent)
