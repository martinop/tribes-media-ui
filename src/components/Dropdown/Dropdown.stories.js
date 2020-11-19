import React from 'react';
import Dropdown from './Dropdown';

const story = {
  title: 'Example/Dropdown',
  component: Dropdown,
};


const options = [
	{ label: "Part 1", value: "0" },
	{ label: "Part 2", value: "1" },
	{ label: "Part 3", value: "2" },
	{ label: "Part 4", value: "3" },
	{ label: "Part 5", value: "4" }
];
export const Main = () => {
	const [value, setValue] = React.useState("0");

	function onChange(val) {
		setValue(val.value)
	}
	return (
		<div className="p-8">
			<Dropdown
				options={options}
				value={value}
				onChange={onChange}
				placeholder="Select Part"
			/>
		</div>
	)
}

export default story;