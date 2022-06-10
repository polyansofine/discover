import RadioInput from "../../../../../components/banners/RadioInput";

export default function Duration() {
  return (
    <div className="duration-tab">
      <RadioInput name="duration" lable="05:00 PM - 11:00 PM" />
      <RadioInput name="duration" lable="03:00 PM - 09:00 PM" />
    </div>
  );
}
