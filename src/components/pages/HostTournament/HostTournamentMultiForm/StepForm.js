import React, { useState, Fragment } from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import Confirm from './Confirm'
import Success from './Success'
 
const entryfeesRegex = RegExp(/^\D?(\d{3,8})$/)
// Step titles
const labels = [ 'Dates', 'Details', 'Confirmation' ]

const StepForm = () => {
	const [ steps, setSteps ] = useState(0)
	const [ fields, setFields ] = useState({
		startdate:'',
		enddate:'',
		date: '',
		description: '',
		entryfees: '',
		phone:''
	})
	// Copy fields as they all have the same name
	const [ filedError, setFieldError ] = useState({
		...fields
	})

	const [ isError, setIsError ] = useState(false)
 
	// Proceed to next step
	const handleNext = () => setSteps(steps + 1)
	// Go back to prev step
	const handleBack = () => setSteps(steps - 1)

	// Handle fields change
	const handleChange = input => ({ target: { value }}) => {
		// Set values to the fields
		setFields({
			...fields,
			[input]: value
		})

		// Handle errors
		const formErrors = { ...filedError }
		const lengthValidate = value.length > 0 && value.length < 3

		switch (input) {
			case 'entryfees':
				formErrors.entryfees = entryfeesRegex.test(value) ? '' : 'Please enter a valid entryfees'
				break
			case 'description':
				formErrors.description = lengthValidate ? 'Minimum 3 characaters required' : ''
				break
			default:
				break
		}

		// set error hook
		Object.values(formErrors).forEach(error => (error.length > 0 ? setIsError(true) : setIsError(false)))
		// set errors hook
		setFieldError({
			...formErrors
		})
	}

	const handleOnChange=(value)=>{
		setFields({
			...fields,
			phone: value
		})
	}

	const handleSteps = step => {
		switch (step) {
			case 0:
				return (
					<FirstStep
						handleNext={handleNext}
						handleChange={handleChange}
						values={fields}
						isError={isError}
						filedError={filedError}
					/>
				)
			case 1:
				return (
					<SecondStep
						handleNext={handleNext}
						handleBack={handleBack}
						handleChange={handleChange}
						values={fields}
						isError={isError}
						filedError={filedError}
						handleOnChange={handleOnChange}
					/>
				)
			case 2:
				return <Confirm handleNext={handleNext} 
								handleBack={handleBack} 
								values={fields} 
							/>
			default:
				break
		}
	}

	// Handle components
	return (
		<Fragment>
			{steps === labels.length ? (
				<Success />
			) : (
				<Fragment>
					<Stepper activeStep={steps} style={{ paddingTop: 30, paddingBottom: 50 }} alternativeLabel>
						{labels.map(label => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					{handleSteps(steps)}
				</Fragment>
			)}
		</Fragment>
	)
}

export default StepForm