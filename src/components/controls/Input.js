import { TextField } from '@material-ui/core';

const Input = ({ name, label, value, onChange, error = null, ...other }) => {
  return (
    <TextField
      name={name}
      variant='outlined'
      label={label}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default Input;
