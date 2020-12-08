import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { useFormik } from 'formik';
import Modal from '../Modal';
import './styles.css';
import Input from '../Input';
import Button from '../Button';
import { validate } from './utils';

function RecoveryPasswordModal(props) {
	const {
		open, 
		onClose,
		color,
		recoveryLabel,
		logo,
		onReturnLogin,
		returnLoginLabel,
		title,
		sentMessage,
		disabled,
		onSubmit,
		language,
		emailSent
	} = props;
	const formik = useFormik({
		initialValues: { email: ''	},
		validate: validate(language),
		onSubmit: values => {
			formik.resetForm();
			onSubmit(values);
		},
	});
	return (
		<Modal
			open={open}
			id="recovery-password-modal"
			onClose={onClose}
			className="recovery-password-modal pt-20 pb-16"
		>
			<div>
				{logo}
			</div>
			<h3 className="text-sm uppercase text-center text-white font-bold mt-6 mb-20">{title}</h3>
			{!emailSent && (
				<form onSubmit={formik.handleSubmit} className="w-full sm:w-3/5 flex flex-col">
					<Input
						placeholder={language === "en" ? "Email Address" : "Correo Electronico"}
						containerClassname="mb-10"
						className="w-full"
						id="email"
						name="email"
						type="email"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
						error={formik.touched.email && formik.errors.email}
					/>
					<Button color={color} label={recoveryLabel} className="uppercase w-full" type="submit" disabled={!isEmpty(formik.errors) || disabled} />
				</form>
			)}
			{emailSent && (
				<div className="w-3/5 flex flex-col">
					<p className={["text-white text-center", onReturnLogin && 'mb-10'].join(" ")}>{sentMessage}</p>
					{onReturnLogin && (
						<Button label={returnLoginLabel} className="uppercase w-full" onClick={onReturnLogin} />
					)}
				</div>
			)}
		</Modal>
	)
}

RecoveryPasswordModal.propTypes = {
	open: PropTypes.bool,
	recoveryLabel: PropTypes.string,
	logo: PropTypes.element,
	onClickForgot: PropTypes.func,
	disabled: PropTypes.bool,
	onReturnLogin: PropTypes.func,
	onSubmit: PropTypes.func,
	onClose: PropTypes.func,
	sentMessage: PropTypes.string,
	emailSent: PropTypes.bool,
	returnLoginLabel: PropTypes.string,
	language: PropTypes.oneOf(["en", "es"]),
	color: PropTypes.oneOf(["primary", "secondary"]),
}

RecoveryPasswordModal.defaultProps = {
	color: "primary"
}

export default RecoveryPasswordModal;