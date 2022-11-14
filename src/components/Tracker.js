import { React, useState } from "react";
import AirInfo from "./AirInfo";
import AirPollutionImg2 from "./images/383314-PCITS7-243.jpg";
import CountryList from "../Data/CountryData.json";
import CountryDropDown from "./CountryDropDown";
import AirChart from "./AirChart";
import { Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import "./Tracker.css";

function Tracker() {
	const [Data, SetData] = useState("");
	const [SearInput, SetSearInput] = useState("");
	const [Country, SetCountry] = useState("");
	const [CountryDropText, SetCountryDropText] = useState("");
	const [Loadings, SetLoadings] = useState(false);
	const [Error, SetError] = useState("");

	/*const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "d2bd1f46e4msh85c592aabe10ddbp1f2b2djsn8d37bd578a64",
			"X-RapidAPI-Host": "air-quality.p.rapidapi.com",
		},
	};*/
	function onSelectCountry(country) {
		SetCountry(country);
	}

	function onCountryTextHandler(country) {
		SetCountryDropText(country);
	}
	function onSearchHandler(e) {
		SetSearInput(e.target.value);
	}
	function onSubmitHandler(e) {
		SetLoadings(true);
		fetch(
			`https://api.weatherbit.io/v2.0/current/airquality?city=${SearInput}&country=${Country}&key=d7d0c56a4c2b45558ef37418f1b12375`,
		)
			.then((response) => response.json())
			.then((response) => {
				SetData(response);
				SetLoadings(false);
				SetError("");
			})
			.catch((err) => {
				SetError("Invalid city name");
				SetLoadings(false);
				SetData("");
			});
		e.preventDefault();
	}
	var inpError = Error ? "border-2 border-red-500" : "";
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
				<h1 className="font-bold sm:font-medium text-2xl sm:text-4xl text-left sm:text-center pt-10 sm:pt-16 text-aqua-300 ml-4 mb-1 sm:mb-3">
					<span className=" text-gray-400 mr-1 sm:mr-2">Air</span>Life
				</h1>
				<p className="ml-4 text-left sm:text-center text-sm sm:text-lg font-medium text-yellow-600">
					An air pollution tracker
				</p>
				<div className="flex flex-col justify-center items-center h-screen">
					<form
						action=""
						method="post"
						className="mb-2 sm:mb-20 input-container p-4 sm:p-8 rounded-xl z-10"
					>
						<div className="ml-16 text-sm font-medium text-red-700">
							{Error}
						</div>
						<input
							type="text"
							onChange={onSearchHandler}
							className={`rounded mx-8 px-9 self-center py-2 rounded-full w-100 mb-3 sm:mb-0 ${inpError}`}
							placeholder="Enter your city"
							aria-required={true}
						/>

						<CountryDropDown
							countries={CountryList}
							selectCountry={onSelectCountry}
							CountryText={onCountryTextHandler}
						/>
						<button
							onClick={onSubmitHandler}
							type="submit"
							className="ml-10 sm:ml-5 rounded bg-blue-500 hover:bg-blue-400 text-white py-1 px-2 mt-3 sm:mt-0"
							disabled={Loadings}
						>
							Submit
						</button>
					</form>
					<div className="info-container">
						{Loadings ? (
							<div>
								<SyncLoader color="aqua" loading={Loadings} size={15} />
							</div>
						) : (
							<>
								<AirInfo
									City={Data.city_name}
									AQI={Data.data?.[0].aqi}
									Country={CountryDropText}
								/>
								<AirChart
									City={Data.city_name}
									AQI={Data.data?.[0].aqi}
									O3={Data.data?.[0].o3}
									NO2={Data.data?.[0].no2}
									CO={Data.data?.[0].co}
									SO2={Data.data?.[0].so2}
									pm25={Data.data?.[0].pm25}
									pm10={Data.data?.[0].pm10}
								/>
							</>
						)}
					</div>
				</div>

				<div className="bg-white w-40 sm:w-60 pt-1  pl-1 sm:pl-4 h-20 sm:h-24 rounded-xl absolute top-4 right-6 z-0 ">
					<p className="font-bold text-md sm:text-xl mb-0 sm:mb-2">
						Find out →{" "}
					</p>
					<Link to="/most" className="hover:text-blue-700 text-xs sm:text-base">
						Most Polluted Countries
					</Link>
					<br />
					<Link
						to="/least"
						className="hover:text-blue-700 text-xs sm:text-base"
					>
						Least Polluted Countries
					</Link>
				</div>
			</div>
		</>
	);
}

export default Tracker;
