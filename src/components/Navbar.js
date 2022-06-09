import { NavLink } from "react-router-dom";

const navigation = [
	{
		name: "Home",
		to: "/",
	}, 
	{
		name: "My Blogs",
		to: "/blogs",
	},
	{
		name: "Template",
		to: "/blogs/blog-template",
	}
];

function Navbar() {
	return (
		<nav className="primary-menu">
			{navigation.map(item => 
				<Navitem name={item.name} to={item.to} key={item.name} />	
			)}
		</nav>
	);
}

function Navitem({
	name="item", to="/"
}) {
	return (
		<NavLink to={to} className="Navitem">
			{name}
		</NavLink>
	);
}

export default Navbar;