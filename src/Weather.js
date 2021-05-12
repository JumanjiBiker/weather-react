import React from "react";
import "./Weather.css";


export default function Weather() {
	return (<div className="container">
		<form className="search-bar" id="search-bar">
			<input type="text" placeholder="Enter City..." id="submit-value" />
			<button id="btn">Search</button>
		</form>

		<div className="row">
			<div className="todays-weather">
				<h1>
					Today in <span>Vancouver</span>
				</h1>
				<div className="crnt-weather">
					<div className="circle">
						<i>
							<span>🌨</span>
						</i>
					</div>
					<div className="info">
						<p className="temp" id="temp">
							-15/-10°C
              </p>

						<p>Heavy snow</p>
						<p>real feel -20°C</p>
					</div>
				</div>
			</div>

			<div className="future-weather">
				<h2>5 day forecast</h2>
				<div className="boxes">
					<div className="row1">
						<div className="box A">
							<h3>Mon</h3>
							<i>☀</i>
							<p>-10 / -8°C</p>
						</div>
						<div className="box B">
							<h3>Tue</h3>
							<i>☀</i>
							<p>-12 / -8°C</p>
						</div>
						<div className="box C">
							<h3>Wed</h3>
							<i>☀</i>
							<p>-14 /-10°C</p>
						</div>
					</div>
					<div className="row2">
						<div className="box D">
							<h3>Thu</h3>
							<i>☀</i>
							<p>-10 / -7°C</p>
						</div>
						<div className="box E">
							<h3>Fri</h3>
							<i>☀</i>
							<p>-10 / -6°C</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<small id="crnt-date" className="crnt-date"></small>
	</div>)
}