import React from "react";
import "./SensorStatus.css";

const SensorStatus = ({ icon, title, description, stats, sensorType }) => {
	return (
		<div className="device-card" data-sensor-type={sensorType}>
			<div className="status-indicator"></div>
			<div className="card-header">
				<div className="card-icon">{icon}</div>
				<div className="card-info">
					<h3 className="main-number">{title}</h3>
					<p className="count-label">{description}</p>
				</div>
			</div>
			<div className="card-stats">
				{stats.map((stat, index) => (
					<div className="stat-item" key={index}>
						<p className="stat-value">{stat.value}</p>
						<p className="stat-label">{stat.label}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SensorStatus;
