import RadioInput from "../../banners/RadioInput";

const TimeSlot = (props) => {
  const { timeSlots, timeSlotValue, changeTimeSlot } = props;
  return (
    <>
      <div className="duration-tab">
        <div style={{ textAlign: "center", minHeight: 100, maxHeight: 300, overflowY: "auto" }}>
          {timeSlots?.length > 0 ? (
            <>
              {timeSlots?.map((value, id) => {
                return (
                  <>
                    <RadioInput
                      name="gender1"
                      value={id}
                      onChange={changeTimeSlot}
                      lable={value?.label}
                    />
                  </>
                );
              })}
            </>
          ) : (
            <p style={{ marginTop: 100 }}>
              All Time Slots are Fully Booked, Please Choose Another Date
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default TimeSlot;
