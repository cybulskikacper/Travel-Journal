import React from 'react'

function Countries(props) {
	return (
		<>
			<div className="card ">
				<img className="card--image" src={props.imageUrl} alt="zdjecie " />

				<div className="card--all">
					<div className="card--where">
						<img className="card--thumbtack" src="./images/Fill 219.png" />
						<p className="card--country">{props.location}</p>
						<a href={props.googleMapsUrl} target="_blank" className="card--google-maps">
							View on Google Maps
						</a>
					</div>

					<div className="card--about">
						<h2 className="card--name bold">{props.title}</h2>
						<h3 className="card--date bold">
							{props.startDate} - {props.endDate}
						</h3>
						<p className="card--description">{props.description}</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Countries
