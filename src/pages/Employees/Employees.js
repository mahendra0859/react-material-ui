import { PageHeader } from '../../components';
// import EmployeeForm from './EmployeeForm';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import {
  InputAdornment,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from '@material-ui/core';
import useTable from '../../components/useTable';
import * as EmployeeService from '../../services/employeeService';
import { useState } from 'react';
import Controls from '../../components/controls/Controls';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchinput: {
    width: '75%',
  },
}));

const headCells = [
  { id: 'fullName', label: 'Employee Name' },
  { id: 'email', label: 'Email Address (Personal)' },
  { id: 'mobile', label: 'Mobile Number' },
  { id: 'department', label: 'Department', disableSorting: true },
];

const Employees = () => {
  const classes = useStyles();
  const [records, setRecords] = useState(EmployeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({ fn: (items) => items });
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);

  useState(() => {
    localStorage.clear();
    localStorage.setItem('employeeId', '6');
    localStorage.setItem(
      'employees',
      JSON.stringify([
        {
          id: 1,
          fullName: 'Immanuel Stood',
          email: 'istood0@wix.com',
          mobile: '966-134-8322',
          city: 'Mengzhai',
          gender: 'male',
          departmentId: '1',
          hireDate: '2020-11-20T01:31:09.992Z',
          isPermanent: true,
        },
        {
          id: 2,
          fullName: 'Devonna Paternoster',
          email: 'dpaternoster1@cdbaby.com',
          mobile: '948-555-6699',
          city: 'Donghoufang',
          gender: 'female',
          departmentId: '1',
          hireDate: '2020-11-20T01:31:09.992Z',
          isPermanent: true,
        },
        {
          id: 3,
          fullName: 'Kaylil Spieck',
          email: 'kspieck2@people.com.cn',
          mobile: '108-803-7458',
          city: 'Haarlem',
          gender: 'female',
          departmentId: '1',
          hireDate: '2020-11-20T01:31:09.992Z',
          isPermanent: true,
        },
        {
          id: 4,
          fullName: 'Yulma Neward',
          email: 'yneward3@ifeng.com',
          mobile: '948-447-4469',
          city: 'Montelíbano',
          gender: 'male',
          departmentId: '1',
          hireDate: '2020-11-20T01:31:09.992Z',
          isPermanent: true,
        },
        {
          id: 5,
          fullName: "Eadie O'Garmen",
          email: 'eogarmen4@latimes.com',
          mobile: '495-797-1393',
          city: 'Leskolovo',
          gender: 'female',
          departmentId: '1',
          hireDate: '2020-11-20T01:31:09.992Z',
          isPermanent: true,
        },
        {
          id: 6,
          fullName: 'Candy MacComiskey',
          email: 'cmaccomiskey5@opensource.org',
          mobile: '455-873-8156',
          city: 'Banjar Ponggang',
          gender: 'female',
          departmentId: '1',
          hireDate: '2020-11-20T01:31:09.992Z',
          isPermanent: true,
        },
      ])
    );
    setRecords(EmployeeService.getAllEmployees());
  }, []);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === '') {
          return items;
        } else {
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
        }
      },
    });
  };

  return (
    <>
      <PageHeader
        title='New Employee'
        subTitle='Form design wth validation'
        icon={<PeopleOutlineIcon fontSize='large' />}
      />
      <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}
        <Toolbar>
          <Controls.Input
            className={classes.searchinput}
            label='Search Employees'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  );
};

export default Employees;
