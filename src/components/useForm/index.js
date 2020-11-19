import { makeStyles } from '@material-ui/core';
import { useState } from 'react';

export const useForm = (initialFormValue) => {
  const [values, setValues] = useState(initialFormValue);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { values, setValues, handleInputChange };
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

export const Form = ({ children }) => {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete='off'>
      {children}
    </form>
  );
};
