import React from "react";
import { useState, useEffect } from "react";
import CalendarHeader from "../components/Calendar/CalendarHeader";
import Day from "components/Calendar/Day";
import { NewEventModal } from "components/Calendar/NewEventModal";
import { DeleteEventModal } from "components/Calendar/DeleteEventModal";
import { useDate } from "helpers/schedule";

function Schedule() {
	const [nav, setNav] = useState(0);
	const [clicked, setClicked] = useState();
	const [events, setEvents] = useState(
		localStorage.getItem("events")
			? JSON.parse(localStorage.getItem("events"))
			: []
	);

	const eventForDate = (date) => events.find((e) => e.date === date);

	useEffect(() => {
		localStorage.setItem("events", JSON.stringify(events));
	}, [events]);

	const { days, dateDisplay } = useDate(events, nav);
	return (
		<>
			<div className="schedule-page">
				<div className="content">
					<CalendarHeader
						dateDisplay={dateDisplay}
						onNext={() => setNav(nav + 1)}
						onBack={() => setNav(nav - 1)}
					/>
					<div id="weekdays">
						<div>Sunday</div>
						<div>Monday</div>
						<div>Tuesday</div>
						<div>Wednesday</div>
						<div>Thursday</div>
						<div>Friday</div>
						<div>Saturday</div>
					</div>
					<div id="calendar">
						{days.map((d, index) => (
							<Day
								key={index}
								day={d}
								onClick={() => {
									if (d.value !== "padding") {
										setClicked(d.date);
									}
								}}
							/>
						))}
					</div>
				</div>
			</div>
			{clicked && !eventForDate(clicked) && (
				<NewEventModal
					onClose={() => setClicked(null)}
					onSave={(title) => {
						setEvents([...events, { title, date: clicked }]);
						setClicked(null);
					}}
				/>
			)}
			{clicked && eventForDate(clicked) && (
				<DeleteEventModal
					eventText={eventForDate(clicked).title}
					onClose={() => setClicked(null)}
					onDelete={() => {
						setEvents(events.filter((e) => e.date !== clicked));
						setClicked(null);
					}}
				/>
			)}
		</>
	);
}
export default Schedule;
