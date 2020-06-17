import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
  
// Destructure props
const FirstStep = ({handleNext,handleChange,values: { startdate, enddate, entryfees },filedError,isError}) => {
	// Check if all values are not empty
	const isEmpty =  startdate.length > 0 && enddate.length > 0  && entryfees.length > 0

	return (
		<Fragment>
			<Grid container spacing={2} noValidate>
				<Grid item xs={12}>
					<TextField
						fullWidth
						InputLabelProps={{
							shrink: true
						}}
						label="START DATE"
						name="startdate"
						type="date"
						defaultValue={startdate}
						onChange={handleChange('startdate')}
						margin="normal"
						required
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						InputLabelProps={{
							shrink: true
						}}
						label="END DATE"
						name="enddate"
						type="date"
						defaultValue={enddate}
						onChange={handleChange('enddate')}
						margin="normal"
						required
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="ENTRY FEES (in rupees)"
						name="entryfees"
						placeholder=" min amount 100"
						defaultValue={entryfees}
						onChange={handleChange('entryfees')}
						margin="normal"
						error={filedError.entryfees !== ''}
						helperText={filedError.entryfees !== '' ? `${filedError.entryfees}` : ''}
					/>
				</Grid>
			</Grid>
			<div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}>
			
				<Button variant="contained" disabled={!isEmpty || isError} color="primary" onClick={handleNext}>
					Next
				</Button>
			</div>
		</Fragment>
	)
}

export default FirstStep
