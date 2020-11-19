import { makeStyles } from '@material-ui/core';
import { useState } from 'react';

export const useForm = (
  initialFormValue,
  validateOnChange = false,
  validate
) => {
  const [values, setValues] = useState(initialFormValue);
  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (validateOnChange) {
      validate({ [name]: value });
    }
  };

  const resetForm = () => {
    setValues(initialFormValue);
    setErrors({});
  };

  return { values, setValues, handleInputChange, errors, setErrors, resetForm };
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

export const Form = ({ children, ...other }) => {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete='off' {...other}>
      {children}
    </form>
  );
};
