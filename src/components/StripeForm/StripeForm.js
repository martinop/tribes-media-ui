import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { injectStripe, CardNumberElement, CardExpiryElement, CardCvcElement } from 'react-stripe-elements';
import Button from '../Button';
import './style.css';

function StripeForm(props) {
	const { onSubmit, disabled, labels, success, error, validateCoupon, hasCoupon, stripe, planSelected } = props;
	const elementClass = "card-form-input p-3 w-full";
	const [_error, setError] = React.useState('');
	const [couponText, setCouponText] = React.useState('');
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedValidation = React.useCallback(debounce((input) => validateCoupon(input), 500), [validateCoupon]);
	async function _onSubmit(e) {
		e.preventDefault();
		const token = await stripe.createToken();
		if(token.error){
			setError(token.error.message)
			return 
		}
		onSubmit(planSelected, token.token.id, couponText)
	}
	
	function onChangeCoupon(e) {
		setCouponText(e.target.value);
		if(validateCoupon) {
			debouncedValidation(e.target.value);
		}
	}

	React.useEffect(() => {
		if(!!success && !!_error) {
			setError('');
		}
	}, [_error, success]);

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
			{hasCoupon && (
				<div className="mt-2">
					<span className="text-xs text-white font-normal">{labels.coupon}</span>
					<input
						className={cx("block", elementClass)}
						onChange={onChangeCoupon}
						placeholder={labels.coupon}
						value={couponText}
					/>
				</div>
			)}
			{(!!error || !!_error) && <p className="text-red-600 mt-4 text-sm font-medium">{error || _error}</p>}
			{success && (
				<p className="text-white mt-4 text-sm font-medium">{success}</p>
			)}
			<Button disabled={disabled} className="w-full mt-10" label={labels.confirm} type={undefined} />
		</form>
	)
}

StripeForm.propTypes = {
	onSubmit: PropTypes.func,
	disabled: PropTypes.bool,
	planSelected: PropTypes.string,
	hasCoupon: PropTypes.bool,
	error: PropTypes.string,
	success: PropTypes.string,
	labels: PropTypes.shape({
		cardNumber: PropTypes.string,
		cardExpiration: PropTypes.string,
		cardCVC: PropTypes.string,
		confirm: PropTypes.string,
		coupon: PropTypes.string,
		validateCoupon: PropTypes.func,
	}),
}
export default injectStripe(StripeForm)