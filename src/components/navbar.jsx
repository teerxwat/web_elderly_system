import React from "react";
import { FaHome, FaCog, FaChartBar, FaSignOutAlt, FaAngleRight } from "react-icons/fa";
import "./navbar.css";

const Navbar = ({ isExpanded, handleToggle }) => {
	return (
		<nav className={`navbar ${isExpanded ? "expanded" : ""}`}>
			<ul className="navbar-nav">
				<li className="nav-item">
					<a href="#" className="nav-link active">
						<FaHome className="nav-icon" />
						<span className="link-text">Main</span>
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link">
						<FaCog className="nav-icon" />
						<span className="link-text">Setting</span>
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link">
						<FaChartBar className="nav-icon" />
						<span className="link-text">Report</span>
					</a>
				</li>
			</ul>

			{/* ✅ FIX: Move toggler wrapper into correct structure */}
			<div className="navbar-toggler-wrapper">
				<button className="navbar-toggle" onClick={handleToggle}>
					<FaAngleRight className="toggle-icon" />
				</button>
			</div>

			<div className="navbar-logout">
				<a href="#" className="nav-link">
					<FaSignOutAlt className="nav-icon" />
					<span className="link-text">Logout</span>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
