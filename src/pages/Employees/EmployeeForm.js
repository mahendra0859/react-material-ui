import { Grid } from '@material-ui/core';
import { useForm, Form } from '../../components/useForm';
import Controls from '../../components/controls/Controls';
import * as employeeService from '../../services/employeeService';
import { useEffect } from 'react';

const initialFormValue = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = ({ addOrEdit, recordForEdit }) => {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('fullName' in fieldValues) {
      temp.fullName = fieldValues.fullName ? '' : 'This field is required.';
    }
    if ('email' in fieldValues) {
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ''
        : 'Email is not valid.';
    }
    if ('mobile' in fieldValues) {
      temp.mobile =
        fieldValues.mobile.length > 9 ? '' : 'Minimum 10 numbers required.';
    }
    if ('departmentId' in fieldValues) {
      temp.departmentId = fieldValues.departmentId.length
        ? ''
        : 'This field is required.';
    }

    setErrors({
      ...temp,
    });
    if (fieldValues === values) {
      return Object.values(temp).every((x) => x === '');
    }
  };
  const {
    values,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
    setValues,
  } = useForm(initialFormValue, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit) {
      setValues({ ...recordForEdit });
    }
  }, [recordForEdit]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name='fullName'
            variant='outlined'
            label='Full Name'
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            name='email'
            variant='outlined'
            label='Email'
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            name='mobile'
            variant='outlined'
            label='Mobile'
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            name='city'
            variant='outlined'
            label='City'
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            label='Gender'
            name='gender'
            value={values.gender}
            onChange={handleInputChange}
            items={employeeService.getGenderItems}
          />
          <Controls.Select
            name='departmentId'
            label='Department'
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollecton()}
            error={errors.departmentId}
          />
          <Controls.DatePicker
            name='hireDate'
            label='Hire Date'
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.CheckBox
            name='isPermanent'
            label='Permanent Employee'
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button text='Submit' type='submit' />
            <Controls.Button text='Reset' color='default' onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
