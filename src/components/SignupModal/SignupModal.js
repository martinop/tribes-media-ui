import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { useFormik } from 'formik';
import Modal from '../Modal';
import './styles.css';
import Input from '../Input';
import Button from '../Button';
import { validate } from './utils';
import Checkbox from '../Checkbox';

function SignupModal(props) {
	const { open, onClose, color, labels, logo, disabled, onSubmit, language } = props;
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			termsAndConditions: false,
			repeatPassword: '',
		},
		validate: validate(language),
		onSubmit: values => {
			onSubmit(values);
		},
	});
	return (
		<Modal
			open={open}
			id="signup-modal"
			onClose={onClose}
			className="signup-modal pt-20"
		>
			<div className="hidden lg:block">
				{logo}
			</div>
			<h3 className="text-sm uppercase text-center text-white font-bold mt-6 mb-16 hidden lg:block">{labels.title}</h3>
			<form onSubmit={formik.handleSubmit} className="w-full sm:w-3/5">
				<div className="flex flex-col w-full"> 
					<Input
						placeholder={language === "en" ? "Email Address" : "Correo Electronico"}
						containerClassname="mb-3"
						className="w-full"
						id="email"
						name="email"
         		type="email"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
						error={formik.touched.email && formik.errors.email}
					/>
					<Input
						placeholder={language === "en" ? "Password" : "Contraseña"}
						containerClassname="mb-3" 
						className="w-full"
						id="password"
						name="password"
         		type="password"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
						error={formik.touched.password && formik.errors.password}
					/>
					<Input
						placeholder={language === "en" ? "Repeat Password" : "Repetir Contraseña"}
						containerClassname="mb-3" 
						className="w-full"
						id="repeatPassword"
						name="repeatPassword"
         		type="password"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.repeatPassword}
						error={formik.touched.repeatPassword && formik.errors.repeatPassword}
					/>
					<Checkbox
						onChange={formik.handleChange}
						className="mb-12"
						id="termsAndConditions"
						name="termsAndConditions"
						value={formik.values.termsAndConditions}
						color={color}
						label={labels.termsAndConditions}
					/>
					<Button
						label={labels.confirm}
						className="uppercase w-full"
						type="submit"
						color={color}
						disabled={!isEmpty(formik.errors) || disabled || !formik.dirty}
					/>
				</div>
			</form>
		</Modal>
	)
}

SignupModal.propTypes = {
	open: PropTypes.bool,
	logo: PropTypes.element,
	disabled: PropTypes.bool,
	onSubmit: PropTypes.func,
	color: PropTypes.oneOf(["primary", "secondary"]),
	onClose: PropTypes.func,
	language: PropTypes.oneOf(["en", "es"]),
	labels: PropTypes.shape({
		title: PropTypes.string,
		confirm: PropTypes.string,
		termsAndConditions: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	}),
}

SignupModal.defaultProps = {
	color: "secondary"
}

export default SignupModal;