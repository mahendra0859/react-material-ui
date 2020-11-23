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
  let employees = getAllEmployees();
  data.id = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};
export const updateEmployee = (data) => {
  let employees = getAllEmployees();
  let recordIndex = employees.findIndex((x) => x.id === data.id);
  employees[recordIndex] = { ...data };
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const deleteEmployee = (id) => {
  let employees = getAllEmployees();
  employees = employees.filter((x) => x.id !== id);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const getAllEmployees = () => {
  if (localStorage.getItem(KEYS.employees) == null) {
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  }
  let employess = JSON.parse(localStorage.getItem(KEYS.employees));
  let departments = getDepartmentCollecton();
  return employess.map((employee) => ({
    ...employee,
    department: departments[employee.departmentId - 1].title,
  }));
};
