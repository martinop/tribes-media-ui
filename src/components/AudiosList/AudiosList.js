import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function AudiosList(props) {
	const { list, onClick, showLessLabel, showAllLabel } = props;
	const [showAll, setShowAll] = React.useState(false);
	const _list = showAll ? list : list.slice(0, 5);
	return (
		<div className="font-poppins">
			<ul className="w-full text-white tribes-media-audios-list">
				{_list.map((audio, index) => (
					<li
						className="flex justify-between py-3 al-border"
						key={`tribe-audio-list-${index}`}
					>
						<div className="flex flex-col text-sm">
							<span className="leading-tight">{audio.title}</span>
							<span className="font-bold">{audio.subTitle}</span>
						</div>
						<div className="flex">
							<svg onClick={() => onClick(audio)} className="my-auto cursor-pointer" width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="15.0851" cy="15" r="15" fill="white" fillOpacity="0.7" />
									<path d="M10.6429 20C10.3864 20 10.2154 19.8333 10.2154 19.5833V10.4167C10.2154 10.1667 10.3864 10 10.6429 10C10.7284 10 10.7711 10 10.8566 10.0417L18.9792 14.625C19.1929 14.75 19.2357 15 19.1502 15.2083C19.1074 15.2917 19.0647 15.3333 18.9792 15.375L10.8566 19.9583C10.7711 20 10.7284 20 10.6429 20Z" className="text-primary" fill="currentColor"/>
								</svg>
						</div>
					</li>
				))}
			</ul>
			<div className="flex justify-end">
				<button
					className="mt-3 font-bold uppercase text-primary"
					onClick={() => setShowAll(!showAll)}
				>
					{showAll ? showLessLabel : showAllLabel }
				</button>
			</div>
		</div>
	)
}

AudiosList.propTypes = {
	onClick: PropTypes.func,
	showAllLabel: PropTypes.string,
	showLessLabel: PropTypes.string,
	list: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string, subTitle: PropTypes.string }))
}
export default AudiosList;