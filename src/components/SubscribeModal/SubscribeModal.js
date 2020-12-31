import React from 'react';
import PropTypes from 'prop-types';
import { StripeProvider, Elements } from 'react-stripe-elements';
import Modal from '../Modal';
import Button from '../Button';
import Checkbox from '../Checkbox';
import StripeForm from '../StripeForm/StripeForm';
import './styles.css';

function SubscribeModal(props) {
	const {
		open,
		onClose,
		logo,
		color,
		plans,
		apiKey,
		onClickLogin,
		disabled,
		labels,
		onSubmit,
		onProcessStarted,
	} = props;
	const [termsAndConditions, setTermsAndConditions] = React.useState(false);
	const [planSelected, setPlanSelected] = React.useState(null);
	
	function _onClose() {
		onClose();
		setTimeout(() => {
			setTermsAndConditions(false);
			setPlanSelected(null);
		}, 300)
	}

	function onChangePlan(planId) {
		setPlanSelected(planId);
		onProcessStarted()
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
						<>
							<h2 className="text-2xl uppercase text-center text-white font-bold">{labels.subTitle}</h2>
							<div className="text-center text-white text-sm leading-7 my-2">
								{labels.details}
							</div>
							<div className="w-full sm:w-2/3">
								<div className="flex flex-col w-full"> 
									{plans.map(plan => (
										<div className="mt-8" key={`plan-${plan.id}`}>
											<Button
												className="w-full"
												disabled={!termsAndConditions}
												onClick={() => onChangePlan(plan.id)}
												color={color} label={plan.label}
											/>
											{plan.discountLabel && (
												<p className="text-white text-sm mt-1 text-center font-medium">{plan.discountLabel}</p>
											)}
										</div>
									))}
								</div>
								<div className="mx-auto w-full sm:w-5/6">
									<Checkbox
										onChange={() => setTermsAndConditions(!termsAndConditions)}
										className="mt-4"
										color={color}
										id="subscribe-modal-terms"
										value={termsAndConditions}
										label={labels.termsAndConditions}
									/>
								</div>
								<button
									type="button"
									onClick={onClickLogin}
									className="mx-auto block mt-10 text-white text-center underline text-base self-center"
								>
									{labels.login}
								</button>
							</div>
						</>
					)}
					{planSelected && (
						<Elements>
							<div className="w-full sm:w-2/3 flex flex-col mt-6">
								<StripeForm
									onSubmit={onSubmit}
									disabled={disabled}
									planSelected={planSelected}
									labels={{
										cardNumber: labels.cardNumber,
										cardExpiration: labels.cardExpiration,
										cardCVC: labels.cardCVC,
										confirm: labels.confirm,
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
	onClickLogin: PropTypes.func,
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
	}),
	onProcessStarted: PropTypes.func,
	plans: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, label: PropTypes.string, discountLabel: PropTypes.string })),
	color: PropTypes.oneOf(["primary", "secondary"]),
}

SubscribeModal.defaultProps = {
	color: "primary"
}

export default SubscribeModal;