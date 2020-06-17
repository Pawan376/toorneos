import React, { Fragment } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

// Destructure props
const Confirm = ({ handleNext, handleBack, values: { startdate, enddate, entryfees, phone, description } }) => {
	return (
		<Fragment>
			<List disablePadding>
				<ListItem>
					<ListItemText primary="Tournament Start Date" secondary={startdate} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Tournament End Date" secondary={enddate} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Entry Fees" secondary={entryfees.length >0 ? entryfees : 'Not Provided'} /><i className="fas fa-rupee-sign"></i>
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Description" secondary={description.length > 0 ? description : 'Not Provided'} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Phone" secondary={phone} />
				</ListItem>

				<Divider />
			</List>

			<div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}>
				<Button variant="contained" color="default" onClick={handleBack}>
					Back
				</Button>
				<Button style={{ marginLeft: 20 }} variant="contained" color="secondary" onClick={handleNext}>
					Confirm & Continue
				</Button>
			</div>
		</Fragment>
	)
}

export default Confirm
