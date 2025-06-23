import React from "react";
import "./DeviceListItem.css";
import { FiHardDrive, FiActivity, FiBarChart2, FiBatteryCharging } from "react-icons/fi";

// Re-using the helper components from DeviceCard for consistency
const SignalBars = ({ strength = 0 }) => (
	<div className="signal-bars">
		{[1, 2, 3, 4].map((bar) => (
			<div key={bar} className={`signal-bar ${strength >= bar ? "active" : ""}`} />
		))}
	</div>
);

const BatteryIndicator = ({ level = 0 }) => {
	const getBatteryStatus = () => {
		if (level > 70) return "high";
		if (level > 30) return "medium";
		return "low";
	};

	return (
		<div className="battery-container">
			<div className="battery-icon">
				<div className={`battery-level ${getBatteryStatus()}`} style={{ width: `${level}%` }} />
			</div>
			<span className="list-item-value">{level}%</span>
		</div>
	);
};

const DeviceListItem = ({ deviceInfo }) => {
	const { name = "Gateway-\n001", status = "Online", signal = 4, battery = 85 } = deviceInfo || {};

	return (
		<div className="device-list-item">
			<div className="list-item-section device-name">
				<FiHardDrive className="list-item-icon" />
				<span className="list-item-label">Gateway</span>
				<span className="list-item-value device-name-text" style={{ whiteSpace: "pre-line" }}>
					{name}
				</span>
			</div>
			<div className="list-item-section device-status">
				<FiActivity className="list-item-icon" />
				<span className="list-item-label">Status</span>
				<span className="list-item-value">{status}</span>
			</div>
			<div className="list-item-section device-signal">
				<FiBarChart2 className="list-item-icon" />
				<span className="list-item-label">Signal</span>
				<SignalBars strength={signal} />
			</div>
			<div className="list-item-section device-battery">
				<FiBatteryCharging className="list-item-icon" />
				<span className="list-item-label">Battery</span>
				<BatteryIndicator level={battery} />
			</div>
		</div>
	);
};

export default DeviceListItem;
