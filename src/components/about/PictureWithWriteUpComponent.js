import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Image from '../image'

const styles = theme => ({
	profileImage: {
		borderRadius: '50%',
		width: '4.5rem',
		height: '4.5rem',
		[theme.breakpoints.up('md')]: {
			width: '5.5rem',
			height: '5.5rem'
		},
	},
	name: {
		fontWeight: 700,
		marginBottom: '0.75em',
		marginTop: '1.5em',
		[theme.breakpoints.up('sm')]: {
			marginBottom: '1.25em',
			marginTop: 0
		}
	},
})

class PictureWithWriteUpComponent extends Component {
	createGridItems = (classes, data) => {
		const info = data.edges;

		return (
			info.map((i, index) => (
				<Grid item xs={12} sm={6}>
					<div className={classes.root}>
						<Grid container>
							<Grid item sm={4} lg={3}>
								<Image filename={i.node.frontmatter.profilePicture.relativePath} classProps={classes.profileImage} />
							</Grid>

							<Grid item sm={8} lg={9} className={classes.info}>
								<Typography variant="body1" className={classes.name}>{i.node.frontmatter.name}</Typography>
								<Typography variant="body2" className={classes.title}>{i.node.frontmatter.description}</Typography>
							</Grid>
						</Grid>
					</div>
				</Grid>
			))
		)
	}

	render() {
		const { info } = this.props;
		const { classes } = this.props;

		return (
			<div>
				<Grid container spacing={40}>
					{this.createGridItems(classes, info)}
				</Grid>
			</div>
		);
	}
}

PictureWithWriteUpComponent.propTypes = {
	info: PropTypes.object.isRequired
};

export default withStyles(styles)(PictureWithWriteUpComponent);
