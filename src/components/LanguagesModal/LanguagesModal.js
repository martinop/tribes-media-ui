import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import './styles.css';

function LanguagesModal(props) {
	const { open, onClose, languages, onChange } = props;
	return (
		<Modal
			open={open}
			id="languages-modal"
			onClose={onClose}
			ariaHideApp={false}
			className="languages-modal"
		>
			<ul className="languages-modal-list">
				{languages && languages.map(language => (
					<li key={`language-modal-item-${language.value}`}>
						<span
							onClick={() => [onChange(language.value), onClose()]}
							className="cursor-pointer"
						>
							{language.label}
						</span>
					</li>
				))}
			</ul>
		</Modal>
	)
}

LanguagesModal.propTypes = {
	open: PropTypes.bool,
	languages: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })),
	onChange: PropTypes.func,
	onClose: PropTypes.func,
}

export default LanguagesModal;