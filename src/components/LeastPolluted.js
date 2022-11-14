import React from "react";
import AirPollutionImg2 from "./images/383314-PCITS7-243.jpg";
import Data from "../Data/LeastPolluted.json"

export default function LeastPolluted() {
	return (
		<>
					<div
				style={{
					backgroundImage: `url(${AirPollutionImg2})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			>
			<h1 className="text-center font-bold  text-2xl sm:text-4xl py-6 text-green-600 ">
				Least <span className="text-gray-600">Polluted</span> Countries
			</h1>
			<p className="text-center text-gray-500 pb-6  text-sm sm:text-lg font-medium">The table below shows the top 15 Least polluted countries on the basis of the average PM 2.5.</p>
			<div className="flex justify-center item-center h-screen p-8">
			<table class="text-center input-container rounded">
				<thead>
					<tr className="text-gray-600">
						<th>Rank</th>
						<th>Country</th>
						<th>Average PM2.5</th>
					</tr>
				</thead>
				<tbody>
					{Data.map((item) => {
						let pm25 = parseFloat(item.particlePollution).toFixed(2);
						return (
							<tr className="font-medium text-grey-800">
								<td>{item.id}</td>
								<td>{item.country}</td>
								<td>{pm25}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			</div>
			</div>
		</>
	);
}
