import React from 'react';
import LanguagesModal from './LanguagesModal';

const story = {
  title: 'Example/LanguagesModal',
  component: LanguagesModal,
};

export const Main = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<div>
			<button onClick={() => setOpen(true)}>Open Modal</button>
			<LanguagesModal
				open={open}
				onClose={() => setOpen(false)}
				onChange={console.log}
				languages={[{ label: "ENGLISH (US)", value: 'en' }, { label: "SPANISH (ES)", value: 'es' }]}
			/>
		</div>
	)
}

export default story;