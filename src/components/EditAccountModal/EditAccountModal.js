import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { useFormik } from 'formik';
import Modal from '../Modal';
import './styles.css';
import Input from '../Input';
import Button from '../Button';
import { validate } from './utils';

function EditAccountModal(props) {
	const { open, labels, email, onClose, color, logo, disabled, onSubmit, language } = props;
	const formik = useFormik({
		initialValues: {
			email,
			password: ''
		},
		validate: validate(language),
		onSubmit: values => {
			onSubmit(values);
		},
	});
	const emptyFields = !formik.values.email && !formik.values.password;
	return (
		<Modal
			open={open}
			id="edit-account-modal"
			onClose={onClose}
			className="edit-account-modal pt-20"
		>
			<div>
				{logo}
			</div>
			<h3 className="text-sm uppercase text-center text-white font-bold mt-6 mb-8">{labels.title}</h3>
			<h1 className={cx("font-bold uppercase text-white text-2xl", !labels.subscription && 'mb-8')}>{language === "es" ? "Mi cuenta" : "My Account"}</h1>
			{labels.subscription && (
				<div className="text-white px-6 py-2 rounded-full border border-white mt-2 mb-8 border-opacity-25">
					<span>{labels.subscription}</span>
				</div>
			)}
			<form onSubmit={formik.handleSubmit} className="w-full sm:w-3/5">
				<div className="flex flex-col w-full"> 
					<span className="text-white text-xs uppercase">{labels.email}</span>
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
					<span className="text-white text-xs uppercase">{labels.password}</span>
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
						label={labels.save}
						className="uppercase w-full"
						type="submit"
						color={color}
						disabled={!isEmpty(formik.errors) || disabled || !formik.dirty || emptyFields}
					/>
				</div>
			</form>
		</Modal>
	)
}

EditAccountModal.propTypes = {
	open: PropTypes.bool,
	email: PropTypes.string,
	logo: PropTypes.element,
	disabled: PropTypes.bool,
	onSubmit: PropTypes.func,
	color: PropTypes.oneOf(["primary", "secondary"]),
	onClose: PropTypes.func,
	language: PropTypes.oneOf(["en", "es"]),
	labels: PropTypes.shape({
		title: PropTypes.string,
		save: PropTypes.string,
		email: PropTypes.string,
		password: PropTypes.string,
		subscription: PropTypes.string,
	}),
}

EditAccountModal.defaultProps = {
	color: "secondary"
}

export default EditAccountModal;