import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import JSAlert from "js-alert";

const BaseURL = "https://6465e68e228bd07b3555c23e.mockapi.io/api/v1/users";

export default function Update() {
	const navigate = useNavigate();

	const navigateToReadPage = () => {
		navigate("/read");
	};

	const [id, setID] = useState(null);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [checkbox, setCheckbox] = useState(false);

	useEffect(() => {
		setID(localStorage.getItem("ID"));
		setFirstName(localStorage.getItem("First Name"));
		setLastName(localStorage.getItem("Last Name"));
		setCheckbox(localStorage.getItem("Checkbox Value"));
	}, []);

	const updateAPIData = () => {
		axios
			.put(BaseURL + `/${id}`, {
				firstName,
				lastName,
				checkbox,
			})
			.then(() => {
				JSAlert.alert("Data Updated", null, JSAlert.Icons.Success);
				// window.location.href = "/read";

				navigateToReadPage();
			});
	};
	return (
		<div>
			<Form className="create-form">
				<Form.Field>
					<label>First Name</label>
					<input
						placeholder="First Name"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input
						placeholder="Last Name"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<Checkbox
						label="I agree to the Terms and Conditions"
						checked={checkbox}
						onChange={() => setCheckbox(!checkbox)}
					/>
				</Form.Field>
				<Button type="submit" onClick={updateAPIData}>
					Update
				</Button>
			</Form>
		</div>
	);
}
