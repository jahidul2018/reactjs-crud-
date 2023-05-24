import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link, Outlet } from "react-router-dom";
import JSAlert from "js-alert";

const baseURL = "https://6465e68e228bd07b3555c23e.mockapi.io/api/v1/users";

export default function Read() {
	const [APIData, setAPIData] = useState([]);
	useEffect(() => {
		axios.get(baseURL).then((response) => {
			console.log(response.data);
			setAPIData(response.data);
		});
	}, []);

	const setData = (data) => {
		let { id, firstName, lastName, checkbox } = data;
		localStorage.setItem("ID", id);
		localStorage.setItem("First Name", firstName);
		localStorage.setItem("Last Name", lastName);
		localStorage.setItem("Checkbox Value", checkbox);
	};

	const getData = () => {
		axios.get(baseURL).then((getData) => {
			setAPIData(getData.data);
		});
	};

	const onDelete = (id) => {
		axios
			.delete(`https://6465e68e228bd07b3555c23e.mockapi.io/api/v1/users/${id}`)
			.then(() => {
				getData();
				JSAlert.alert(
					"Data Removed form database",
					null,
					JSAlert.Icons.Deleted
				);
			});
	};

	return (
		<div className="w-full grid ">
			<div className=" w-full grid-flow-row ">
				<h1>Contact Us</h1>
				<nav>
					<ul>
						<li>
							<Link to="/create">create</Link>
						</li>
					</ul>
				</nav>
				<Outlet />
			</div>
			<div className="container mx-auto p-4">
				<h1 className=" text-center text-lg text-gray-400 hover:text-blue-300 ">
					User List
				</h1>
				<hr />
				<Table
					singleLine
					className=" min-w-full bg-white border border-gray-300"
				>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell className="py-2 px-4 border-b">
								First Name
							</Table.HeaderCell>
							<Table.HeaderCell className="py-2 px-4 border-b">
								Last Name
							</Table.HeaderCell>
							<Table.HeaderCell className="py-2 px-4 border-b">
								{" "}
								Checkbox Value
							</Table.HeaderCell>
							<Table.HeaderCell className="py-2 px-4 border-b">
								Update
							</Table.HeaderCell>
							<Table.HeaderCell className="py-2 px-4 border-b">
								Delete
							</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{APIData.map((data) => {
							return (
								<Table.Row className=" hover:bg-gray-500 ">
									<Table.Cell className=" hover:{font-semibol,text-blue-500} text-justify text-center ">
										{data.firstName}
									</Table.Cell>
									<Table.Cell>{data.lastName}</Table.Cell>
									<Table.Cell>
										{data.checkbox ? "Checked" : "Unchecked"}
									</Table.Cell>
									<Link to="/update">
										<Table.Cell>
											<Button
												className="text-blue-500 hover:text-blue-700 mr-2"
												onClick={() => setData(data)}
											>
												Edit
											</Button>
										</Table.Cell>
									</Link>
									<Table.Cell>
										<Button
											className="text-red-500 hover:text-red-700"
											onClick={() => onDelete(data.id)}
										>
											Delete
										</Button>
									</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
				</Table>
			</div>
		</div>
	);
}
