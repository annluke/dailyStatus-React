import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => (
	<div className={"form-group " + props.className}>
		<label className="form-label">{props.title}</label>
		<select
			name={props.name}
			value={props.selectedOption}
			onChange={props.controlFunc}
			className="form-select">
			<option value="">{props.placeholder}</option>
			{props.options.map(opt => {
				return (
					<option
						key={opt}
						value={opt}>{opt}</option>
				);
			})}
		</select>
	</div>
);

Select.propTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
	selectedOption: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	controlFunc: PropTypes.func.isRequired,
	placeholder: PropTypes.string
};

export default Select;
