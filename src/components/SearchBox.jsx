import React, { useState } from "react";
import "./SearchBox.css";

const SearchBox = ({ onSearch }) => {
	const [searchData, setSearchData] = useState({
		gateway: "",
		phone: "",
		userId: "",
		deviceId: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setSearchData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSearch = () => {
		// กรองข้อมูลที่ไม่ได้กรอกออก
		const filteredData = Object.fromEntries(
			Object.entries(searchData).filter(([key, value]) => value.trim() !== "")
		);

		if (Object.keys(filteredData).length === 0) {
			alert("กรุณากรอกข้อมูลอย่างน้อย 1 ฟิลด์");
			return;
		}

		onSearch(filteredData);
	};

	const handleClear = () => {
		setSearchData({
			gateway: "",
			phone: "",
			userId: "",
			deviceId: "",
		});
	};

	return (
		<div className="search-box">
			<div className="search-header">
				<h2>🔍 ค้นหาข้อมูล</h2>
				<p>กรอกข้อมูลอย่างน้อย 1 ฟิลด์เพื่อค้นหา</p>
			</div>

			<div className="search-form">
				<div className="form-row">
					<div className="form-group">
						<label htmlFor="gateway">
							<span className="icon">📡</span>
							เลข Gateway
						</label>
						<input
							type="text"
							id="gateway"
							name="gateway"
							value={searchData.gateway}
							onChange={handleInputChange}
							placeholder="กรอกเลข Gateway"
							className="search-input"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="phone">
							<span className="icon">📱</span>
							เบอร์โทรศัพท์
						</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							value={searchData.phone}
							onChange={handleInputChange}
							placeholder="กรอกเบอร์โทรศัพท์"
							className="search-input"
						/>
					</div>
				</div>

				<div className="form-row">
					<div className="form-group">
						<label htmlFor="userId">
							<span className="icon">👤</span>
							User ID
						</label>
						<input
							type="text"
							id="userId"
							name="userId"
							value={searchData.userId}
							onChange={handleInputChange}
							placeholder="กรอก User ID"
							className="search-input"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="deviceId">
							<span className="icon">📱</span>
							Device ID
						</label>
						<input
							type="text"
							id="deviceId"
							name="deviceId"
							value={searchData.deviceId}
							onChange={handleInputChange}
							placeholder="กรอก Device ID"
							className="search-input"
						/>
					</div>
				</div>

				<div className="button-group">
					<button type="button" onClick={handleSearch} className="search-btn">
						<span className="btn-icon">🔍</span>
						ค้นหา
					</button>

					<button type="button" onClick={handleClear} className="clear-btn">
						<span className="btn-icon">🗑️</span>
						ล้างข้อมูล
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBox;
