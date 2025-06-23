import React from "react";
import "./ProfileHeader.css";

const ProfileHeader = () => {
	return (
		<div className="profile-header">
			<div className="profile-info">
				<span className="profile-name">admin</span>
				<span className="profile-gateway">gateway</span>
			</div>
			<div className="profile-avatar">{/* Avatar Image will go here */}</div>
		</div>
	);
};

export default ProfileHeader;
