import InfiniteCalendar from "react-infinite-calendar";
function Calendar(props) {
  const { handleDateChange, selectedDate, minDate, maxDate, disabled_dates, disabled_weeks } =
    props;
  const curDate = new Date();
  return (
    <>
      <div style={{ backgroundColor: "white" }} className="time-slots">
      {Date.parse(maxDate) < Date.parse(curDate)? 
        <InfiniteCalendar
          displayOptions={{
            showHeader: false,
          }}
          width={"100%"}
          height={300}
          min={minDate}
          minDate={minDate}
          disabledDates={disabled_dates}
          disabledDays={disabled_weeks}
          selected={selectedDate}
          onSelect={handleDateChange}
          theme={{
            selectionColor: function (date) {
              return "#ec6d59";
            },
          }}
        /> :
        <div>Event is completely booked</div>
      }       
      </div>
    </>
  );
}

export default Calendar;
