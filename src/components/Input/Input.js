import React from 'react';
import cx from 'classnames';
import './styles.css';

function Input(props) {
	const { className, error, containerClassname } = props;
	return (
		<div className={containerClassname}>
			<input
				{...props}
				className={cx("tribes-input text-base text-center p-3", className)} 
			/>
			{error && <p className="mt-1 text-red-200 text-sm">{error}</p>}
		</div>
	)
}

export default Input;