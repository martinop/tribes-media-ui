import React from 'react';
import PropTypes from 'prop-types';
import { StripeProvider, Elements } from 'react-stripe-elements';
import Modal from '../Modal';
import Button from '../Button';
import Checkbox from '../Checkbox';
import StripeForm from '../StripeForm/StripeForm';
import './styles.css';
import PlansBox from '../PlansBox';

function SubscribeModal(props) {
	const {
		open,
		onClose,
		logo,
		color,
		plans,
		apiKey,
		onClickLogin,
		success,
		disabled,
		labels,
		onSubmit,
		error,
		validateCoupon,
		onProcessStarted,
	} = props;
	const [planSelected, setPlanSelected] = React.useState(null);
	
	function _onClose() {
		onClose();
		setTimeout(() => {
			setPlanSelected(null);
		}, 300)
	}

	function onChangePlan(planId) {
		setPlanSelected(planId);
		onProcessStarted(planId)
	}
	return (
		<Modal
			open={open}
			id="login-modal"
			onClose={_onClose}
			className="login-modal pt-20 font-poppins"
		>
			<StripeProvider apiKey={apiKey}>
				<>
					<div>{logo}</div>
					<h3 className="text-sm uppercase text-center text-white font-bold mt-6 mb-3">{labels.title}</h3>
					{!planSelected && (
						<PlansBox
							color={color}
							onClickLogin={onClickLogin}
							plans={plans}
							onChangePlan={onChangePlan}
							labels={{
								subTitle: labels.subTitle,
								details: labels.details,
								termsAndConditions: labels.termsAndConditions,
								login: labels.login,
							}}
						/>
					)}
					{planSelected && (
						<Elements>
							<div className="w-full sm:w-2/3 flex flex-col mt-6">
								<StripeForm
									onSubmit={onSubmit}
									disabled={disabled}
									planSelected={planSelected}
									hasCoupon={plans.some(plan => plan.id === planSelected && plan.hasCoupon)}
									validateCoupon={validateCoupon}
									error={error}
									success={success}
									labels={{
										cardNumber: labels.cardNumber,
										cardExpiration: labels.cardExpiration,
										cardCVC: labels.cardCVC,
										confirm: labels.confirm,
										coupon: labels.coupon,
									}}
								/>
							</div>
						</Elements>
					)}
				</>
			</StripeProvider>
		</Modal>
	)
}

SubscribeModal.propTypes = {
	open: PropTypes.bool,
	logo: PropTypes.element,
	onClose: PropTypes.func,
	disabled: PropTypes.bool,
	apiKey: PropTypes.string,
	hasCoupon: PropTypes.bool,
	onClickLogin: PropTypes.func,
	error: PropTypes.string,
	success: PropTypes.string,
	labels: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		details: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object]),
		termsAndConditions: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
		login: PropTypes.string,
		cardNumber: PropTypes.string,
		cardExpiration: PropTypes.string,
		cardCVC: PropTypes.string,
		confirm: PropTypes.string,
		coupon: PropTypes.string,
	}),
	validateCoupon: PropTypes.func,
	onProcessStarted: PropTypes.func,
	plans: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, hasCoupon: PropTypes.bool, label: PropTypes.string, discountLabel: PropTypes.string })),
	color: PropTypes.oneOf(["primary", "secondary"]),
}

SubscribeModal.defaultProps = {
	color: "primary"
}

export default SubscribeModal;