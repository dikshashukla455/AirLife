import {React,useState} from "react";

export default function CountryDropDown(props) {
	const [selectedValue, SetSelectedValue] = useState("");
	const [CountryText, SetCountryText] = useState("");
	function onSelectHandler (e){
		SetSelectedValue(e.target.value);
		SetCountryText(e.target.options[e.target.selectedIndex].text);
	}

	props.selectCountry(selectedValue);
	props.CountryText(CountryText);
	return (
		<>
			<select
				value={selectedValue}
				onChange={onSelectHandler}
				className="rounded w-100 mx-8 py-2 px-7 self-center rounded-full border-rose-500 border-2"
			>
				<option defaultValue="select-a-country" value="select-a-country">
					Select a country
				</option>
				{props.countries.map((item, index) => {
					return (
						<option value={item.value} key={index}>
							{item.label}
						</option>
					);
				})}
			</select>
</>
	);
}
