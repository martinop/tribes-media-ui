import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { useFormik } from 'formik';
import Modal from '../Modal';
import './styles.css';
import Input from '../Input';
import { Button } from '../Button/Button';
import { validate } from './utils';

function LoginModal(props) {
	const { open, onClose, loginLabel, color, logo, title, disabled, onClickForgot, onSubmit, language, forgotLabel } = props;
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validate: validate(language),
		onSubmit: values => {
			onSubmit(values);
		},
	});
	return (
		<Modal
			open={open}
			id="login-modal"
			onClose={onClose}
			className="login-modal pt-20"
		>
			<div>
				{logo}
			</div>
			<h3 className="text-sm uppercase text-center text-white font-bold mt-6 mb-20">{title}</h3>
			<form onSubmit={formik.handleSubmit} className="w-full sm:w-3/5 flex flex-col">
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
						containerClassname="mb-12" 
						className="w-full"
						id="password"
						name="password"
         		type="password"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
						error={formik.touched.password && formik.errors.password}
					/>
					<Button
						label={loginLabel}
						className="uppercase w-full"
						type="submit"
						color={color}
						disabled={!isEmpty(formik.errors) || disabled}
					/>
				</div>
				<button
					type="button"
					onClick={onClickForgot}
					className="mt-4 text-white text-center underline text-base"
				>
					{forgotLabel}
				</button>
			</form>
		</Modal>
	)
}

LoginModal.propTypes = {
	open: PropTypes.bool,
	loginLabel: PropTypes.string,
	logo: PropTypes.element,
	onClickForgot: PropTypes.func,
	disabled: PropTypes.bool,
	onSubmit: PropTypes.func,
	color: PropTypes.oneOf(["primary", "secondary"]),
	onClose: PropTypes.func,
	language: PropTypes.oneOf(["en", "es"])
}

LoginModal.defaultProps = {
	color: "secondary"
}

export default LoginModal;