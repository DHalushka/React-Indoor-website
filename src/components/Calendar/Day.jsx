import React from "react";

const Day = ({ day, onClick }) => {
	const className = `day ${day.value === "padding" ? "padding" : ""} ${
		day.currentDay ? "currentDay" : ""
	} `;
	return (
		<div onClick={onClick} className={className}>
			{day.value === "padding" ? "" : day.value}{" "}
			{day.event && <div className="event">{day.event.title}</div>}
		</div>
	);
};
export default Day;
