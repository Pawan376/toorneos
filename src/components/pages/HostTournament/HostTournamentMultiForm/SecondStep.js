import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MuiPhoneNumber from "material-ui-phone-number";

// Destructure props
const SecondStep = ({ handleNext, handleBack, handleChange,handleOnChange, values: {phone, description}, filedError, isError }) => {
	// Check if all values are not empty
	const isEmpty = phone.length===15

	return (
		<Fragment>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<FormControl component="fieldset">
				      <FormLabel component="legend">Competetion Type</FormLabel>
				      <RadioGroup row aria-label="position" name="position" defaultValue="teams">
				        <FormControlLabel
				          value="teams"
				          control={<Radio color="primary" />}
				          label="Teams"
				          labelPlacement="bottom"
				        />
				        <FormControlLabel
				          value="singles"
				          control={<Radio color="primary" />}
				          label="Singles"
				          labelPlacement="bottom"
				        />
				        <FormControlLabel
				          value="doubles"
				          control={<Radio color="primary" />}
				          label="Doubles"
				          labelPlacement="bottom"
				        />
				      </RadioGroup>
				    </FormControl>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="DESCRIPTION (optional)"
						name="description"
						placeholder="Enter your description"
						defaultValue={description}
						onChange={handleChange('description')}
						margin="normal"
						error={filedError.description !== ''}
						helperText={filedError.description !== '' ? `${filedError.description}` : ''}
					/>
				</Grid>
				<Grid>
					<FormLabel component="legend">Phone No</FormLabel>
					<MuiPhoneNumber defaultCountry={'in'} onChange={handleOnChange}/>
				</Grid>
			</Grid>
			<div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}>
				<Button variant="contained" color="default" onClick={handleBack} style={{ marginRight: 20 }}>
					Back
				</Button>
				<Button variant="contained" disabled={!isEmpty || isError} color="primary" onClick={handleNext}>
					Next
				</Button>
			</div>
		</Fragment>
	)
}

export default SecondStep
