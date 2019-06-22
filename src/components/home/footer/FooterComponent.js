import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { grey13 } from '../../../utils/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { primary } from '../../../utils/Colors';
import {
  faFacebookF,
  faTelegramPlane,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons/';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const styles = theme => ({
  root: {
    backgroundColor: grey13,
    padding: '2rem 2rem 2rem 2rem', //top right bottom left
    [theme.breakpoints.up('md')]: {
      //desktop
      padding: '5rem 6rem 5rem 6rem',
    },
  },
  description: {
    marginBottom: 10,
    color: '#6c757d',
    fontSize: '0.7rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '0.9rem',
    },
  },
  descriptionLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '0.7rem',
    '&:hover': {
      color: primary,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.9rem',
    },
    paddingRight: '20px',
  },
  links: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '0.9rem',
    '&:hover': {
      color: primary,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.1rem',
    },
    paddingRight: '20px',
  },
});

class FooterComponent extends Component {
  render() {
    const { classes } = this.props;
    const { data } = this.props;

    const buildTime = data.buildTimeZone;

    const ExternalLinkWithIcon = ({ to, className, iconType }) => {
      return (
        <a
          href={to}
          className={classes.links}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={iconType} />
        </a>
      );
    };

    const ExternalLinkWithText = ({ to, className, text }) => {
      return (
        <a
          href={to}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      );
    };

    return (
      <div className={classes.root}>
        <div>
          <ExternalLinkWithIcon
            to={'https://www.facebook.com'}
            className={classes.links}
            iconType={faFacebookF}
          />

          <ExternalLinkWithIcon
            to={'https://www.instagram.com'}
            className={classes.links}
            iconType={faInstagram}
          />

          <ExternalLinkWithIcon
            to={'https://t.me/CodeForCommunity'}
            className={classes.links}
            iconType={faTelegramPlane}
          />

          <ExternalLinkWithIcon
            to={'https://www.twitter.com'}
            className={classes.links}
            iconType={faEnvelope}
          />
        </div>

        <Typography variant="subtitle2" className={classes.description}>
          Updated on {buildTime}
          <br />
          Designed and built by{' '}
          <ExternalLinkWithText
            to={'https://github.com'}
            className={classes.descriptionLink}
            text={'core team.'}
          />
          <br />
          Copyright &#169; 2019 - Present. All rights reserved.
        </Typography>

        <Typography variant="subtitle2" className={classes.description} />
      </div>
    );
  }
}

export default withStyles(styles)(FooterComponent);
