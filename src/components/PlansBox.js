import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Checkbox from './Checkbox';

function PlansBox(props) {
	const { labels, plans, color, onClickLogin, onChangePlan } = props;
	const [termsAndConditions, setTermsAndConditions] = React.useState(false);
	return (
		<div className="w-full flex items-center flex-col">
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
				{onClickLogin && (
					<button
						type="button"
						onClick={onClickLogin}
						className="mx-auto block mt-10 text-white text-center underline text-base self-center"
					>
						{labels.login}
					</button>
				)}
			</div>
		</div>
	)
}

PlansBox.propTypes = {
	color: PropTypes.oneOf(["primary", "secondary"]),
	onClickLogin: PropTypes.func,
	plans: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		hasCoupon: PropTypes.bool,
		label: PropTypes.string,
		discountLabel: PropTypes.string
	})),
	onChangePlan: PropTypes.func,
	labels: PropTypes.shape({
		subTitle: PropTypes.string,
		details: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object]),
		termsAndConditions: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
		login: PropTypes.string,
	}),
}
export default PlansBox;