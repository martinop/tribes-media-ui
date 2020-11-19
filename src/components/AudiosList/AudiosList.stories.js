import React from 'react';
import AudiosList from './AudiosList';

const story = {
  title: 'Example/AudiosList',
  component: AudiosList,
};

export const Main = () => {
	return (
		<div className="bg-black p-4">
			<AudiosList
				onClick={console.log}
				list={[
					{ title: "Episode 1", subTitle: "A man on the moon" },
					{ title: "Episode 2", subTitle: "A man on the moon" },
					{ title: "Episode 3", subTitle: "A man on the moon" },
					{ title: "Episode 4", subTitle: "A man on the moon" },
					{ title: "Episode 5", subTitle: "A man on the moon" },
					{ title: "Episode 6", subTitle: "A man on the moon" },
					{ title: "Episode 7", subTitle: "A man on the moon" },
				]}
			/>
		</div>
	)
}

export default story;