import React from 'react'

function Countries() {
	return (
		<>
			<div className="card">
				<img
					className="card--image"
					src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg1NzY3Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
					alt="zdjecie "
				/>

				<div className="card--all">
					<div className="card--where">
						<img className="card--thumbtack" src="./images/Fill 219.png" />
						<p className="card--country">Japan</p>
						<p className="card--google-maps">View on Google Maps</p>
					</div>

					<div className="card--about">
						<h2 className="card--name bold">Mount Fuji</h2>
						<h3 className="card--date bold">12 Jan, 2021 - 24 Jan, 2021</h3>
						<p className="card--description">
							Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the
							single most popular tourist site in Japan, for both Japanese and foreign tourists.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Countries
