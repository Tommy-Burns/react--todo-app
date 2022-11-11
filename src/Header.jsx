const Header = ({ title }) => {
	return (
		<header>
			<h1>{title}</h1>
			{/* <h1>React ToDo App</h1> */}
		</header>
	);
};

Header.defaultProps = {
	title: "Title",
};

export default Header;
