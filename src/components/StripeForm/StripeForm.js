import React from 'react';
import PropTypes from 'prop-types';
import { injectStripe, CardNumberElement, CardExpiryElement, CardCvcElement } from 'react-stripe-elements';
import './style.css';
import Button from '../Button';

function StripeForm(props) {
	const { onSubmit, labels, stripe } = props;
	const elementClass = "card-form-input text-base text-center p-3";

	async function _onSubmit(e) {
		e.preventDefault();
		const token = await stripe.createToken();
		if(token.error){
      console.log(token.error.message);
			return 
		}
		onSubmit("yay")
	}
	return (
		<form onSubmit={_onSubmit} className="w-full stripe-form font-poppins">
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
	labels: PropTypes.shape({
		cardNumber: PropTypes.string,
		cardExpiration: PropTypes.string,
		cardCVC: PropTypes.string,
		confirm: PropTypes.string,
	}),
}
export default injectStripe(StripeForm)