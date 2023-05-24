import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Contact() {
	return (
		<div>
			<h1>Contact Us</h1>
			<nav>
				<ul>
					<li>
						<Link to="/contact/sales">Sales</Link>
					</li>
					<li>
						<Link to="/contact/support">Support</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
}
