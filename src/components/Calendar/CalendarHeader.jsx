import React from 'react';
const CalendarHeader = ({ onNext, onBack, dateDisplay }) => {
  return(
    <div id="calendar-header">
      <div id="monthDisplay">{dateDisplay}</div>
      <div className='btns'>
        <button onClick={onBack} id="backButton">← Back</button>
        <button onClick={onNext} id="nextButton">Next →</button>
      </div>
    </div>
  );
};
export default CalendarHeader