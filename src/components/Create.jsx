import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import JSAlert from "js-alert";

const baseURL = "https://6465e68e228bd07b3555c23e.mockapi.io/api/v1/users";

export default function Create() {
	const navigate = useNavigate();

	const navigateToReadPage = () => {
		navigate("/read");
	};

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [checkbox, setCheckbox] = useState(false);

	const postData = () => {
		axios
			.post(baseURL, {
				firstName,
				lastName,
			})
			.then((res) => {
				// console.log(res.data);
				// JSAlert.alert(
				// 	"Data added successfully",
				// 	null,
				// 	JSAlert.Icons.Success
				// )
				navigateToReadPage();
			});
	};

	return (
		<div>
			<div>
				<h1>Contact Us</h1>
				<nav>
					<ul>
						<li>
							<Link to="/read">read</Link>
						</li>
						<li>
							<Link to="/update">update</Link>
						</li>
					</ul>
				</nav>
				<Outlet />
			</div>
			<h1>Create user list</h1> <hr />
			<div className="container mx-auto p-4">
				<div className="flex flex-col mb-2">
					<Form.Field>
						<label className=" grid-cols-1 mr-2">First Name</label>
						<input
							placeholder="First Name"
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</Form.Field>
				</div>

				<div className=" flex flex-col mb-4">
					<Form.Field>
						<label className=" mr-2 ">Last Name</label>
						<input
							placeholder="Last Name"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</Form.Field>
				</div>
				<div className="flex items-center mb-2">
					<Form.Field>
						<Checkbox
							label="I agree to the Terms and Conditions"
							onChange={(e) => setCheckbox(!checkbox)}
						/>
					</Form.Field>
				</div>
				<Button
					className=" text-justify text-center m-auto"
					type="submit"
					disabled={!checkbox}
					onClick={postData}
				>
					Submit
				</Button>
			</div>
		</div>
	);
}
