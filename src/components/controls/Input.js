import { TextField } from '@material-ui/core';

const Input = ({ name, label, value, onChange }) => {
  return (
    <TextField
      name={name}
      variant='outlined'
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
