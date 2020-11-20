import React from 'react';
import AudioPlayer from '../AudioPlayer';
import AudiosList from './AudiosList';

const story = {
  title: 'Example/AudiosList',
  component: AudiosList,
};

const baseSelected = { url: '', image: '', title: '', subTitle: '' };

export const Main = () => {
	const [open, setOpen] = React.useState(false);
	const [selected, setSelected] = React.useState(baseSelected)
	function onSelect(audio) {
		if(!open) {
			setOpen(true);
		}
		setSelected(audio)
	}

	function onClose() {
		setOpen(false);
	}
	return (
		<div className="bg-black p-4">
			<AudiosList
				onClick={onSelect} 
				showAllLabel="See All"
				list={[
					{ title: "Episode 1", subTitle: "A man on the moon", url: "https://cdn2.themyst.com/AManOnTheMoon.01x00.2015/Media/manifest.m3u8", image: "https://cdn3.themyst.com/AManOnTheMoon.01x00.2015/Metadata/dseries.jpg" },
					{ title: "Episode 2", subTitle: "A man on the moon", url: "https://cdn2.themyst.com/ArsParadoxica.01x04.2015/Media/manifest.m3u8", image: "https://cdn3.themyst.com/AManOnTheMoon.01x00.2015/Metadata/dseries.jpg" },
					{ title: "Episode 3", subTitle: "A man on the moon", url: "https://cdn2.themyst.com/BrimstoneValleyMall.01x00.2019/Media/manifest.m3u8", image: "https://cdn3.themyst.com/AManOnTheMoon.01x00.2015/Metadata/dseries.jpg" },
					{ title: "Episode 4", subTitle: "A man on the moon", url: "https://cdn2.themyst.com/AManOnTheMoon.01x00.2015/Media/manifest.m3u8", image: "https://cdn3.themyst.com/AManOnTheMoon.01x00.2015/Metadata/dseries.jpg" },
					
					{ title: "Episode 1", subTitle: "A man on the moon", url: "https://cdn2.themyst.com/AManOnTheMoon.01x00.2015/Media/manifest.m3u8", image: "https://cdn3.themyst.com/AManOnTheMoon.01x00.2015/Metadata/dseries.jpg" },
					{ title: "Episode 2", subTitle: "A man on the moon", url: "https://cdn2.themyst.com/ArsParadoxica.01x04.2015/Media/manifest.m3u8", image: "https://cdn3.themyst.com/AManOnTheMoon.01x00.2015/Metadata/dseries.jpg" },
					{ title: "Episode 3", subTitle: "A man on the moon", url: "https://cdn2.themyst.com/BrimstoneValleyMall.01x00.2019/Media/manifest.m3u8", image: "https://cdn3.themyst.com/AManOnTheMoon.01x00.2015/Metadata/dseries.jpg" },
					{ title: "Episode 4", subTitle: "A man on the moon", url: "https://cdn2.themyst.com/AManOnTheMoon.01x00.2015/Media/manifest.m3u8", image: "https://cdn3.themyst.com/AManOnTheMoon.01x00.2015/Metadata/dseries.jpg" },

					{ title: "Episode 1", subTitle: "A man on the moon", url: "https://cdn2.themyst.com/AManOnTheMoon.01x00.2015/Media/manifest.m3u8", image: "https://cdn3.themyst.com/AManOnTheMoon.01x00.2015/Metadata/dseries.jpg" },
					{ title: "Episode 2", subTitle: "A man on the moon", url: "https://cdn2.themyst.com/ArsParadoxica.01x04.2015/Media/manifest.m3u8", image: "https://cdn3.themyst.com/AManOnTheMoon.01x00.2015/Metadata/dseries.jpg" },
					{ title: "Episode 3", subTitle: "A man on the moon", url: "https://cdn2.themyst.com/BrimstoneValleyMall.01x00.2019/Media/manifest.m3u8", image: "https://cdn3.themyst.com/AManOnTheMoon.01x00.2015/Metadata/dseries.jpg" },
					{ title: "Episode 4", subTitle: "A man on the moon", url: "https://cdn2.themyst.com/AManOnTheMoon.01x00.2015/Media/manifest.m3u8", image: "https://cdn3.themyst.com/AManOnTheMoon.01x00.2015/Metadata/dseries.jpg" },
				]}
			/>
			<AudioPlayer
				open={open}
				onClose={onClose} 
				url={selected.url}
				image={selected.image}
				title={selected.title}
				subTitle={selected.subTitle}
			/>
		</div>
	)
}

export default story;