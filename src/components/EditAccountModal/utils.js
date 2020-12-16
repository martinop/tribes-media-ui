export const validate = language => values => {
	const errors = {};
	if (!values.password) {
		errors.password = language === "en" ? "Required" : "Requerido";
	} else if(values.password.length < 8) {
		errors.password = language === "en" ? "Password is too short" : "La contraseña es muy corta";
	}

	if (!values.email) {
		errors.email = language === "en" ? "Required" : "Requerido";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = language === "en" ? "Invalid email address" : "Direccion email invalido";
	}

	return errors;
};