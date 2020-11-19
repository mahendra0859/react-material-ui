import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from '@material-ui/core';

const CheckBox = ({ name, label, value, onChange }) => {
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            checked={value}
            onChange={(e) =>
              onChange(convertToDefEventPara(name, e.target.checked))
            }
            name={name}
            color='primary'
          />
        }
        label={label}
      ></FormControlLabel>
    </FormControl>
  );
};

export default CheckBox;
