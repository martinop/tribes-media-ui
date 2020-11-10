import React from 'react';

import CastMemberDetails from './CastMemberDetails';

const story = {
  title: 'Example/CastMemberDetails',
  component: CastMemberDetails,
};

const Template = (args) => (
	<div className="p-8 bg-black">
		<CastMemberDetails {...args} />
	</div>
);

export const Main = Template.bind({});
Main.args = {
  castLabel: "ACTRESS",
	name: "LIANA DAINE LIBERATO",
	imgSrc: "https://vignette.wikia.nocookie.net/genealogy/images/a/a6/Liana-liberato.jpg",
	moviesLabel: "Movies",
	emptyLabel: "There's no data to show",
	biography: "Liana Liberato is an actress born in Galveston, Texas. She's been working professionally since she was 9 years old. Most notably known for her roles in Trust, Best of Me, If I Stay, and To the Bone.",
	movies: []
};

export default story;