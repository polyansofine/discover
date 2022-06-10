import { useState } from "react";
import Calendar from "react-calendar";

export default function CalanderOption() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="calander-tab">
      <div className="theme-calander">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}
