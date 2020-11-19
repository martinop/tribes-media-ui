import React from 'react';
import Hls from 'hls.js';
import './styles.css'
import usePrevious from '../../hooks/usePrevious';
function AudioPlayer(props) {
	const { open, onClose, url, image, title, subTitle } = props;
	const progressRef = React.createRef();
	const prevUrl = usePrevious(url);
	const [paused, setPaused] = React.useState(true);
	const audioRef = React.useRef();

	React.useEffect(() => {
		if(open) {
			const hls = new Hls({});
			hls.loadSource(url);
			hls.attachMedia(audioRef.current);
			audioRef.current.currentTime = 0;
		}
	}, [audioRef, url, open])

	React.useEffect(() => {
		console.log({ prevUrl, url })
		if(prevUrl && prevUrl !== url) {
			audioRef.current.currentTime = 0;
			progressRef.current.style.width = "0%";
			if(!paused) {
				onPressPause();
			}
		}
	}, [url, prevUrl, paused, progressRef])
	
	function onPressPause() {
		setPaused(true);
		audioRef.current.pause()
	}

	function onPressPlay() {
		setPaused(false);
		audioRef.current.play()
	}

	function _onClose() {
		audioRef.current.currentTime = 0;
		progressRef.current.style.width = "0%";
		setPaused(true);
		onClose()
	}

	if(!open) return null;

	return (
		<div className="tribes-audio-player-container">
			<div className="tribes-audio-player px-4">
				<div className="flex justify-between items-center flex-1 h-full">
					<div className="flex">
						<img src={image} alt={`${title} - ${subTitle}`} className="h-16 object-cover mr-4" />
						<div className="flex flex-col justify-center text-white">
							<span>{title}</span>
							<span className="font-bold">{subTitle}</span>
						</div>
					</div>
					<div className="flex">
						{paused ? (
							<svg onClick={onPressPlay} className="opacity-75 hover:opacity-50 cursor-pointer" version="1.1" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="white" viewBox="0 0 100 100">
								<path d="M50,0C22.39,0,0,22.39,0,50c0,27.61,22.39,50,50,50c27.61,0,50-22.39,50-50C100,22.39,77.61,0,50,0z
									M68.84,50.69c-0.14,0.28-0.29,0.42-0.57,0.56L41.2,66.53c-0.29,0.14-0.43,0.14-0.71,0.14c-0.85,0-1.42-0.56-1.42-1.39V34.72
									c0-0.83,0.57-1.39,1.42-1.39c0.29,0,0.43,0,0.71,0.14l27.08,15.28C68.98,49.17,69.13,50,68.84,50.69z"/>
							</svg>
						) : (
							<svg onClick={onPressPause} className="opacity-75 hover:opacity-50 cursor-pointer" version="1.1" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="white" viewBox="0 0 100 100">
								<path d="M50,0C22.39,0,0,22.39,0,50c0,27.61,22.39,50,50,50c27.61,0,50-22.39,50-50C100,22.39,77.61,0,50,0z
									M40.63,67.07c0,1.62-1.68,2.93-3.76,2.93c-2.07,0-3.75-1.31-3.75-2.93V30.03c0-1.62,1.68-2.93,3.75-2.93
									c2.07,0,3.76,1.31,3.76,2.93V67.07z M67.49,67.07c0,1.62-1.68,2.93-3.75,2.93c-2.07,0-3.76-1.31-3.76-2.93V30.03
									c0-1.62,1.68-2.93,3.76-2.93c2.07,0,3.75,1.31,3.75,2.93V67.07z"/>
							</svg>	
						)}

						<svg onClick={_onClose} className="ml-4 opacity-75 hover:opacity-50 cursor-pointer" clssversion="1.1" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="white" viewBox="0 0 100 100">
							<path d="M50,0C22.39,0,0,22.39,0,50c0,27.61,22.39,50,50,50c27.61,0,50-22.39,50-50C100,22.39,77.61,0,50,0z
								M68.98,64.31c1.3,1.3,1.3,3.41-0.01,4.71c-1.3,1.3-3.41,1.3-4.71-0.01L50,54.72l-14.26,14.3c-1.3,1.3-3.41,1.31-4.71,0.01
								c-1.3-1.3-1.31-3.41-0.01-4.71L45.29,50L31.02,35.69c-1.3-1.3-1.3-3.41,0.01-4.71c1.3-1.3,3.41-1.3,4.71,0.01L50,45.28l14.26-14.3
								c1.3-1.3,3.41-1.31,4.71-0.01c1.3,1.3,1.31,3.41,0.01,4.71L54.71,50L68.98,64.31z"/>
						</svg>
					</div>
				</div>
				<ProgressBar audioRef={audioRef} ref={progressRef} />
				<audio ref={audioRef} />
			</div>

		</div>
	)
}


const ProgressBar = React.forwardRef((props, progressRef) => {
	const { audioRef } = props;
	React.useEffect(() => {
		const ref = audioRef?.current;
		const _progressRef = progressRef?.current;
		function onTimeUpdate() {
			const percentage = (ref.currentTime * 100) / ref.duration;
			if(_progressRef) {
				_progressRef.style.width = `${percentage.toFixed(2)}%`;
			}
		}
		ref.addEventListener("timeupdate", onTimeUpdate);
		return () => ref.removeEventListener("timeupdate", onTimeUpdate);
	}, [audioRef, progressRef]);
	return (
		<div className="w-full h-1 relative">
			<div ref={progressRef} className="absolute left-0 top-0 h-full bg-white ap-progress-animation" />
			<div className="absolute h-full bg-white w-full left-0 top-0 opacity-50" />
		</div>
	)
});


export default AudioPlayer;