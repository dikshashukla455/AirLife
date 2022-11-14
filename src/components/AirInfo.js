import React from "react";

function AirInfo(props) {
	var airQuality;
	const AqiNo = props.AQI;
	if (AqiNo >= 0 && AqiNo <= 50) {
		airQuality = "Good";
	} else if (AqiNo >= 51 && AqiNo <= 100) {
		airQuality = "Moderate";
	} else if (AqiNo >= 101 && AqiNo <= 150) {
		airQuality = "Unhealthy for Sensitive Groups";
	} else if (AqiNo >= 151 && AqiNo <= 200) {
		airQuality = "Unhealthy";
	} else if (AqiNo >= 201 && AqiNo <= 300) {
		airQuality = "Very Unhealthy";
	} else {
		airQuality = "Hazardous";
	}
	var good = (airQuality === "Good") ? "text-green-600 bg-green-100 border-green-600" : "";
	var Mod = (airQuality === "Moderate") ? "text-yellow-600 bg-yellow-100 border-yellow-600" : "";
	var unS = (airQuality === "Unhealthy for Sensitive Groups") ? "text-orange-600 bg-orange-100 border-orange-600" : "";
	let un = (airQuality === "Unhealthy") ? "text-red-600 bg-red-100 border-red-600" : "";
	let vun = (airQuality === "Very Unhealthy") ? "text-purple-600 bg-purple-100 border-purple-600" : "";
	var d = new Date();
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	var month = months[d.getMonth()];
	return (
		<>
	{props.City &&	<div className="bg-white w-72 sm:w-96 h-56 sm:h-64 rounded-xl mr-4">
			<div className="flex justify-between">
				<div className="pt-5 pl-5">
					<p className="font-bold text-2xl sm:text-3xl">{props.City}</p>
					<p className="text-md sm:text-lg text-grey-500 w-40 sm:w-60">{props.Country}</p>
				</div>
			<div className="text-center pt-5 pr-5">
					<div className="border-4 border-green-500 rounded-lg py-1 px-2 sm:px-4">
						<p className="text-green-500 text-2xl sm:text-4xl font-bold">{d.getDate()}</p>
						<p className="text-grey-500 text-sm">{month}</p>
						<p className="text-grey-500 text-sm">{d.getFullYear()}</p>
					</div>
				</div>
			</div>
			<br />
			<div className="text-center">
				<p className="text-gray-600 font-medium text-3xl sm:text-4xl mb-2">{props.AQI}</p>
				{props.AQI && (
					<span className={`text-xs sm:text-sm border-2 py-px sm:py-1 px-2 ${good} ${Mod} ${unS} ${un} ${vun}`}>
						{airQuality}
					</span>
				)}
			</div>
		</div>}
		</>
	);
}
export default AirInfo;
