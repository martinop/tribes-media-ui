import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './styles.css'

function Checkbox(props) {
	const { color, className, label, onChange, id, value, ...restProps } = props;
	return (
		<div className={cx("tribes-checkbox mx-auto flex items-center", className)}>
			<div className={cx("checkbox-round", color)}>
				<input type="checkbox" id={id} onChange={onChange} checked={value}  {...restProps} />
				<label htmlFor={id}></label>
			</div>
			<span className="text-white leading-snug text-xs">{label}</span>
		</div>
	)
}

Checkbox.defaultProps = {
	id: "checkbox",
};

Checkbox.propTypes = {
	className: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.bool,
	id: PropTypes.string,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	color: PropTypes.oneOf(["primary", "secondary"])
}

Checkbox.defaultProps = {
	color: "primary"
}

export default Checkbox;