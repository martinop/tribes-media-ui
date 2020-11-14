import * as React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import RModal from 'react-modal';
import { motion } from 'framer-motion';
import usePrevious from '../../hooks/usePrevious';
import { bodyAnimation } from './utils';
import './styles.css';

function Modal(props) {
	const { open, id, children, size, onClose, className } = props;
	const prevOpen = usePrevious(open);
	const [show, setShow] = React.useState(open);
	React.useEffect(() => {
		if (open && !show) setShow(true);
	}, [open, show]);

	React.useEffect(() => {
		if (prevOpen && !open) {
			hide();
		}
	}, [open, prevOpen]);

	function hide() {
		setTimeout(() => {
			setShow(false);
		}, 400);
	}

	return (
		<RModal
			isOpen={show}
			testId={id}
			ariaHideApp={false}
			onRequestClose={onClose}
			shouldCloseOnOverlayClick
			overlayClassName='bm-blur inset-0 flex fixed'
			className='flex flex-col w-full'
		>
			<motion.div
				className={cx(
					'bm-body relative flex flex-col h-auto m-auto bg-white shadow-md p-8 pt-12 overflow-y-auto',
					className,
					{ 'bm-small': size === 'small', 'bm-medium': size === 'medium' },
				)}
				variants={bodyAnimation}
				transition={{ duration: 0.3 }}
				initial="close"
				animate={open ? 'open' : 'close'}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					className="bm-close cursor-pointer"
					onClick={onClose}>
					<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
				</svg>
				{children}
			</motion.div>
		</RModal>
	);
};

Modal.defaultProps = {
	size: 'medium'
};

Modal.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
	children: PropTypes.element,
	size: PropTypes.oneOf(["small", "medium"]), 
	id: PropTypes.string,
}

export default Modal;
