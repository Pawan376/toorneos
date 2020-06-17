import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import StepForm from './StepForm'

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(8),
            padding: theme.spacing(3)
        }
    }
})

const MasterForm = ({ classes, name,address}) => {
    return (
        <div className="App">
            <CssBaseline />
            <main className={classes.layout}>
                <Typography variant="h4" align="center" style={{ marginTop: 80 }}>
              {name}

                </Typography>
                <Typography variant="subtitle2" align="center" style={{ marginTop: 10, marginBottom: 10 }}>
                   <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;{address}
                </Typography>
                <Paper className={classes.paper}>
                    <StepForm />
                </Paper>
            </main>
        </div>
    )
}

MasterForm.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MasterForm)
