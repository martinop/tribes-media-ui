import React from 'react';
import PropTypes from 'prop-types';
import { injectStripe, CardNumberElement, CardExpiryElement, CardCvcElement } from 'react-stripe-elements';
import './style.css';
import Button from '../Button';

function StripeForm(props) {
	const { onSubmit, labels, stripe, planSelected } = props;
	const elementClass = "card-form-input text-base text-center p-3";
	const [error, setError] = React.useState('');
	async function _onSubmit(e) {
		e.preventDefault();
		const token = await stripe.createToken();
		if(token.error){
			setError(token.error.message)
			return 
		}
		onSubmit(planSelected, token.token.id)
	}
	return (
		<form onSubmit={_onSubmit} className="w-full stripe-form font-poppins">
			{error && <p className="text-red-500 mb-4">{error}</p>}
			<div className="mb-2">
				<span className="text-xs text-white font-normal">{labels.cardNumber}</span>
				<CardNumberElement className={elementClass} />
			</div>
			<div className="mb-2">
				<span className="text-xs text-white font-normal">{labels.cardExpiration}</span>
				<CardExpiryElement className={elementClass} />
			</div>
			<div>
				<span className="text-xs text-white font-normal">{labels.cardCVC}</span>
				<CardCvcElement className={elementClass} />
			</div>
			<Button className="w-full mt-10" label={labels.confirm} type={undefined} />
		</form>
	)
}

StripeForm.propTypes = {
	onSubmit: PropTypes.func,
	planSelected: PropTypes.string,
	labels: PropTypes.shape({
		cardNumber: PropTypes.string,
		cardExpiration: PropTypes.string,
		cardCVC: PropTypes.string,
		confirm: PropTypes.string,
	}),
}
export default injectStripe(StripeForm)