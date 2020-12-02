import React from 'react';
import cx from 'classnames';
import getIsLightColor from '../../utils/getIsLightColor';
import './styles.css';

function Input(props) {
	const { className, error, containerClassname, ...restProps } = props;
  const isLightColor = getIsLightColor()
	return (
		<div className={containerClassname}>
			<input
				{...restProps}
				className={cx("tribes-input font-poppins text-base text-center p-3", isLightColor ? "text-black" : "text-primary", className)} 
			/>
			{error && <p className="mt-1 text-red-200 text-sm">{error}</p>}
		</div>
	)
}

export default Input;