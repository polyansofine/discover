import { FormGroup, Input, Label } from "reactstrap";

export default function RadioInput({ value, lable, name, onChange = () => {} }) {
  return (
    <div className="theme-radio">
      <FormGroup check>
        <Label check>
          <Input onChange={onChange} value={value} type="radio" name={name} />
          <span />
          {lable}
        </Label>
      </FormGroup>
    </div>
  );
}
