import React from "react";
import Chart from "react-apexcharts";

export default function AirChart(props) {
	var o3 = props.O3;
	var no2 = props.NO2;
	var co = props.CO;
	var so2 = props.SO2;
	var pm25 = props.pm25;
	var pm10 = props.pm10;

	var seriez = [o3, no2, so2, pm25, pm10, co];

	return (
		<>
		{props.City && 
		<div className="bg-white w-72 sm:w-96 h-56 sm:h-64 rounded-xl pt-2 ml-0 sm:ml-4 mt-6 sm:mt-0">
			<Chart
				type="donut"
				className="active"
				height={360}
				series={seriez}
				options={{
					labels: [
						`O<sub>3</sub>`,
						`NO<sub>2</sub>`,
						`SO<sub>2</sub>`,
						`PM25`,
						"PM10",
						"CO",
					],
					colors: [
						"#6366f1",
						"#f43f5e",
						"#c026d3",
						"#fb923c",
						"#fbbf24",
						"#2dd4bf",
					],
					title: {
						text: "Pollutants concentrations",
						align: "center",
						margin: 0,
						offsetX: 0,
					},
					plotOptions: {
						pie: {
							expandOnClick: true,
						},
					},
				}}
			/>
		</div>}
		</>
	);
}
