import React, {Fragment} from 'react';
import classes from './Input.module.css';


const Input = (props) => {

	return (
		<Fragment>
		<div className={`${classes.input} ${props.showError?classes.invalid:""}`}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input {...props.input} />
		</div>
		{props.showError && props.errorMessage && (props.errorMessage.trim() !== "") && <p className={classes["input-error"]}>{props.errorMessage}</p>}
		</Fragment>
		
	);
};

export default Input;