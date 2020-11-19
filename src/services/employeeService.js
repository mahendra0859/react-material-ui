const KEYS = {
  employees: 'employees',
  employeeId: 'employeeId',
};
export const getGenderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
];
export const getDepartmentCollecton = () => [
  { id: '1', title: 'Development' },
  { id: '2', title: 'Marketing' },
  { id: '3', title: 'Accounting' },
  { id: '4', title: 'HR' },
];

export const generateEmployeeId = () => {
  if (localStorage.getItem(KEYS.employeeId) == null) {
    localStorage.setItem(KEYS.employeeId, '0');
  }
  let id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
};

export const insertEmployee = (data) => {
  let employess = getAllEmployees();
  data.id = generateEmployeeId();
  employess.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employess));
};

export const getAllEmployees = () => {
  if (localStorage.getItem(KEYS.employees) == null) {
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem(KEYS.employees));
};
