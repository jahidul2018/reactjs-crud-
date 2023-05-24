import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<Link to="/about" className=" bg-blue-500 p-1 rounded text-white ">
				About -
			</Link>
			<p className="">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
				possimus perspiciatis itaque ratione id tempora ut odio voluptates
				cumque excepturi, optio provident iusto quaerat molestiae neque aliquam
				ipsum magni! Ad.
			</p>
		</>
	);
}
