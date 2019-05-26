import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Image from '../image'

const styles = theme => ({
	root: {
		marginBottom: '1.25rem',
		[theme.breakpoints.up('sm')]: {
			textAlign: 'center',
			marginBottom: '1.25rem'
		}
	},
	profilePictureContainer: {
		width: '4.5rem',
		height: '4.5rem',
		marginBottom: '1.25rem',
		[theme.breakpoints.up('sm')]: {
			margin: '0 auto 1.25rem auto',
		},
		[theme.breakpoints.up('md')]: {
			width: '5.5rem',
			height: '5.5rem'
		},
	},
	profilePicture: {
		borderRadius: '50%',
		width: '4.5rem',
		height: '4.5rem',
		[theme.breakpoints.up('md')]: {
			width: '5.5rem',
			height: '5.5rem'
		},
	},

})

class PictureWithNameComponent extends Component {
	render() {
		const { name, profilePicture, club, role } = this.props;
		const { classes } = this.props;

		return (
			<Grid item xs={6} sm={3} className={classes.root}>
				<div className={classes.profilePictureContainer}>
					<Image filename={profilePicture} classProps={classes.profilePicture} />
				</div>

				<div className={classes.description}>
					<Typography variant="body1" className={classes.name} gutterBottom>{name}</Typography>
					<Typography variant="caption" className={classes.club} gutterBottom>{club}</Typography>
					<Typography variant="caption" className={classes.role} gutterBottom>{role}</Typography>
				</div>
			</Grid>
		);
	}
}

PictureWithNameComponent.propTypes = {
	profilePicture: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	club: PropTypes.string.isRequired
};

export default withStyles(styles)(PictureWithNameComponent);
