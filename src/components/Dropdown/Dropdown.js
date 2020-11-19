import React from 'react';
import PropTypes from 'prop-types';
import RDropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import './styles.css';

function Dropdown(props) {
	const { options, value, onChange, placeholder } = props;
	return (
		<RDropdown
			options={options}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			arrowOpen={
				<svg xmlns="http://www.w3.org/2000/svg" className="ml-8" width="15" height="15" viewBox="0 0 24 24" fill="white">
					<path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
				</svg>
			}
			arrowClosed={
				<svg xmlns="http://www.w3.org/2000/svg" className="ml-8" width="15" height="15" viewBox="0 0 24 24" fill="white">
					<path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
				</svg>
			}
			className="tribes-media-dropdown font-poppins"
		/>
	)
}

Dropdown.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) })),
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func,
	plcaeholder: PropTypes.string,
}

export default Dropdown;