import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

const Success = () => {
	return (
		<Fragment>
			<Typography variant="h4" align="center">
				Congratulations!
			</Typography>
			<Typography component="p" align="center" style={{ marginTop: 40 }}>
				Your tournament has been launched. Now you can start posting it online, collecting entry fees and scheduling the games.
			</Typography>
			<Typography component="p" align="center" style={{ marginTop: 40 }}>
				To manage your tournament, go to <Link to='/dashboard'>DASHBOARD.</Link>
			</Typography>
		</Fragment>
	)
}

export default Success
