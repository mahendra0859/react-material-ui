import { Grid } from '@material-ui/core';
import { useForm, Form } from '../../components/useForm';
import Controls from '../../components/controls/Controls';
import * as employeeService from '../../services/employeeService';

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

const EmployeeForm = () => {
  const { values, handleInputChange } = useForm(initialFormValue);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name='fullName'
            variant='outlined'
            label='Full Name'
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            name='email'
            variant='outlined'
            label='Email'
            value={values.email}
            onChange={handleInputChange}
          />
          <Controls.Input
            name='mobile'
            variant='outlined'
            label='Mobile'
            value={values.mobile}
            onChange={handleInputChange}
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
            <Controls.Button text='Reset' type='reset' color='default' />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
