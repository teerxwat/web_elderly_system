import { useState } from "react";
import Navbar from "./components/navbar";
import ProfileHeader from "./components/ProfileHeader";
import DeviceListItem from "./components/DeviceListItem";
import SensorStatus from "./components/SensorStatus";
import SearchBox from "./components/SearchBox";
import { FaRunning, FaDoorOpen } from "react-icons/fa";
import "./App.css";

const sampleDevice = { name: "Gateway-001", status: "Online", signal: 4, battery: 85 };

const motionSensor = {
	title: "ห้องนอน",
	description: "การตรวจจับการเคลื่อนไหว",
	sensorType: "motion",
	stats: [
		{ value: "0", label: "ครั้ง/วัน" },
		{ value: "96%", label: "แบตเตอรี่" },
	],
	icon: <FaRunning className="icon" />,
};

const doorSensor = {
	title: "ห้องน้ำ",
	description: "การตรวจจับการเข้าออกประตู",
	sensorType: "door",
	stats: [
		{ value: "0", label: "ครั้ง/วัน" },
		{ value: "82%", label: "แบตเตอรี่" },
	],
	icon: <FaDoorOpen className="icon" />,
};

function App() {
	const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

	const handleToggleNavbar = () => {
		setIsNavbarExpanded(!isNavbarExpanded);
	};

	const handleSearch = (searchData) => {
		console.log("ข้อมูลการค้นหา:", searchData);
		alert(`กำลังค้นหาด้วยข้อมูล: ${JSON.stringify(searchData, null, 2)}`);
	};

	return (
		<div className={`app-container ${isNavbarExpanded ? "navbar-expanded" : ""}`}>
			<Navbar isExpanded={isNavbarExpanded} handleToggle={handleToggleNavbar} />

			<div className="content-wrapper">
				<div className="header-section">
					<ProfileHeader />
				</div>

				<main className="main-content">
					{/* Search */}
					<div className="search-section">
						<SearchBox onSearch={handleSearch} />
					</div>

					{/* Gateway */}
					<div className="gateway-section">
						<DeviceListItem deviceInfo={sampleDevice} />
					</div>

					{/* Sensor Grid */}
					<div className="sensors-grid">
						<div className="sensor-group">
							<h2 className="section-title">การตรวจจับการเคลื่อนไหว</h2>
							<SensorStatus {...motionSensor} />
						</div>

						<div className="sensor-group">
							<h2 className="section-title">การตรวจจับการเข้าออกประตู</h2>
							<SensorStatus {...doorSensor} />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
