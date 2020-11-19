import React from 'react';
import AudioPlayer from './AudioPlayer';

const story = {
  title: 'Example/AudioPlayer',
  component: AudioPlayer,
};

export const Main = () => {
	return (
		<AudioPlayer
			url="https://cdn2.themyst.com/AManOnTheMoon.01x00.2015/Media/manifest.m3u8"
			image="https://cdn3.themyst.com/AManOnTheMoon.01x00.2015/Metadata/dseries.jpg"
			title="Episode 1"
			subTitle="A man on the Moon"
		/>
	)
}

export default story;