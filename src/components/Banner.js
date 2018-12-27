import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Image from '../components/image';

import { primary, hoverPrimary } from '../utils/Colors';
import CoverImage from '../images/cover.jpg'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        padding: '8rem 6rem 12rem 6rem',
        background: `url(${CoverImage})`,
        background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ' + `url(${CoverImage})`,
	    backgroundRepeat: 'no-repeat',
	    backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    info: {
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
    },
    title: {
        lineHeight: 1.5,
        fontWeight: 700,
        color: '#fff'
    },
    description: {
        marginBottom: 15,
        color: '#fff'
    },
    btn: {
        backgroundColor: '#fff',
        color: primary,
        marginRight: 15,
        padding: '10px 25px',
        textTransform: 'capitalize',
        '&:hover' : {
            backgroundColor: 'rgba(255, 255, 255, 0.8)'
        }
    },
    btnCTA: {
        backgroundColor: primary,
        color: '#fff',
        '&:hover': {
            backgroundColor: hoverPrimary
        }
    },
    links: {
        textDecoration: 'none',
        color: '#000'
    },
});

class Banner extends Component {

render() {
    const { title, description, btnOneText, btnOneLink, btnTwoText, btnTwoLink, cover_img } = this.props;
    const { classes } = this.props;
    return (
        <div className={classes.root}>
            <div className={classes.info}>
                <Typography variant="h4" className={classes.title} gutterBottom>{title}</Typography>
                <Typography variant="h6" className={classes.description}>{description}</Typography>
                <div>
                    <Link to={"/" + btnOneLink} className={classes.links}>
                        <Button className = {classes.btn}>{btnOneText}</Button>
                    </Link>

                    <Link to={"/" + btnTwoLink} className={classes.links}>
                        <Button className = {`${classes.btn} ${classes.btnCTA}`}>{btnTwoText}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
}

Banner.propTypes = {
title: PropTypes.string.isRequired,
btnOneText: PropTypes.string.isRequired,
btnOneLink: PropTypes.string.isRequired,
btnTwoText: PropTypes.string.isRequired,
btnTwoLink: PropTypes.string.isRequired,
};

//make this component available to the app
export default withStyles(styles)(Banner);