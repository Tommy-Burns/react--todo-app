import React from "react";

const Footer = ({ total }) => {
	return (
		<footer>
			<p>
				{total} {total === 1 ? "Task" : "Tasks"}
			</p>
		</footer>
	);
};

export default Footer;
