import React from 'react';
import cx from 'classnames';
import Modal from '../Modal';
import './style.css';

function BasicModal(props) {
	const { open, onClose, title, logo, content } = props;
	return (
		<Modal
			open={open}
			id="basic-modal"
			onClose={onClose}
			padded={false}
			className="basic-modal px-8 py-10"
		>
			<div className='mb-12'>
				{logo}
			</div>
			{title && (
				<h2 className={cx("text-white font-semibold text-2xl text-center", content && "mb-4")}>{title}</h2>
			)}

			{typeof content === 'string' ? (
				<p className="text-white">{content}</p>
			) : content}
		</Modal>
	)
}

export default BasicModal;
