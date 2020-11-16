import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import Modal from '../Modal';
import { Button } from '../Button/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';


const DummyDiv = ({
  slideCount,
	currentSlide,
	className,
  ...props
}) => {
	const sliderLength = slideCount - 1;
	const isLeftFirst = currentSlide === 0 && className.includes('prev');
	const isRightLast = currentSlide === sliderLength && className.includes('next');
	if(isLeftFirst || isRightLast) return null;
	return (
		<div className={className} {...props} />
	)
}

function OnboardingModal(props) {
	const { open, onClose, ctaText, text, logo, images } = props;
	return (
		<Modal
			open={open}
			allowClose={false}
			id="onboarding-modal"
			onClose={onClose}
			className="onboarding-modal"
		>
			<Slider
				dots
				infinite={false}
				speed={500}
				slidesToShow={1}
				slidesToScroll={1}
				nextArrow={
					<DummyDiv>
						<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.9996 10L1.99961 20L0.599609 18.6L9.19961 10L0.599609 1.4L1.99961 0L11.9996 10Z" fill="#E5E5E5"/>
						</svg>
					</DummyDiv>
				}
				prevArrow={
					<DummyDiv>
						<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 10L10 0L11.4 1.4L2.8 10L11.4 18.6L10 20L0 10Z" fill="#E5E5E5"/>
						</svg>
					</DummyDiv>
				}
			>
				{images.map((image, index) => (
					<div className="slide">
						<div className="details">
							<div>
								{logo}
								<p className="mt-12 text-sm text-white font-bold uppercase">{text}</p>
							</div>
							{index === images.length - 1 && (
								<Button label={ctaText} className="w-4/6 sm:w-1/2 uppercase" onClick={onClose} primary />
							)}
						</div>
						<img src={image} alt={`onboarding ${index}`} className="object-cover h-full" />
						<div className="overlay" />
					</div>
				))}
			</Slider>
		</Modal>
	)
}

OnboardingModal.propTypes = {
	open: PropTypes.bool,
	images: PropTypes.arrayOf(PropTypes.string),
	logo: PropTypes.element,
	onClose: PropTypes.func,
	text: PropTypes.string,
	ctaText: PropTypes.string,
}

export default OnboardingModal;