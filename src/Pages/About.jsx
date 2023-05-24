import React from "react";
import { Link } from "react-router-dom";

export default function About() {
	return (
		<>
			<Link to="/" className=" bg-blue-500 p-1 rounded text-white ">
				Home
			</Link>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
				possimus perspiciatis itaque ratione id tempora ut odio voluptates
				cumque excepturi, optio provident iusto quaerat molestiae neque aliquam
				ipsum magni! Ad.
			</p>
		</>
	);
}
