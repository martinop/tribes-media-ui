import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Image(props) {
	const { src, name } = props;
	return (
		<>
			<img src={src} alt={name} className="cmd-image" />
			<div className="cmd-image-overlay" />
		</>
	)
}
function CastMemberDetails(props) {
	const { castLabel, filmographyLabel, biography, emptyLabel, name, imgSrc, movies } = props;
	return (
		<div className="cast-member-details bg-black text-white font-poppins p-3 md:p-0">
			<div className="flex flex-col md:flex-row">
				<div className="w-full md:w-4/5 md:pr-6">
					<h5 className="mb-3 uppercase text-center md:text-left">{castLabel}</h5>
					<div className='block relative w-3/5 mx-auto md:hidden'>
						<Image src={imgSrc} name={name} />
					</div>
					<h2 className="text-base md:text-3xl font-bold mb-3 uppercase text-center md:text-left">{name}</h2>
					<p className="text-xs md:text-sm leading-7 font-normal mb-12 mt-6 md:mt-0">{biography}</p>
				</div>
				<div className='hidden md:block relative w-1/5 self-start'>
					<Image src={imgSrc} name={name} />
				</div>
			</div>
			<div>
				<h4 className="font-bold text-lg mb-1 uppercase">{filmographyLabel}</h4>
				{!movies?.length && (
					<p className="mt-4">{emptyLabel}</p>
				)}
				{movies?.length > 0 && (
					<ul>
						{movies.map(movie => (
							<>
								<li>
									<div className="flex justify-between py-3 text-xs">
										<span>{movie.name}</span>
										<span>{movie.year}</span>
									</div>
									<div className="cmd-movie-divider" />
								</li>
							</>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}

CastMemberDetails.propTypes = {
	castLabel: PropTypes.string,
	name: PropTypes.string,
	imgSrc: PropTypes.string,
	filmographyLabel: PropTypes.string,
	emptyLabel: PropTypes.string,
	biography: PropTypes.string,
	movies: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			year: PropTypes.string
		})
	)
}
export default CastMemberDetails;