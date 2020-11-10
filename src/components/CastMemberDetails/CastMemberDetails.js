import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
function CastMemberDetails(props) {
	const { castLabel, moviesLabel, biography, emptyLabel, name, imgSrc, movies } = props;
	return (
		<div className="cast-member-details bg-black text-white font-poppins">
			<div className="flex">
				<div className="w-4/5 pr-6">
					<h5 className="mb-3 uppercase">{castLabel}</h5>
					<h2 className="text-3xl font-bold mb-3 uppercase">{name}</h2>
					<p className="text-sm leading-7">{biography}</p>
				</div>
				<div className='relative w-1/5'>
					<img src={imgSrc} alt={name} className="cmd-image" />
					<div className="cmd-image-overlay" />
				</div>
			</div>
			<div>
				<h4 className="font-bold text-lg mb-1">{moviesLabel}</h4>
				{!movies?.length && (
					<span>{emptyLabel}</span>
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
	moviesLabel: PropTypes.string,
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