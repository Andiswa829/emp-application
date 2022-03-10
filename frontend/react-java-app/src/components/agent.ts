import axios, { AxiosResponse } from "axios";
import { EmployeeModel } from "../models/employeeModel";

const responseBody = <T>(response: AxiosResponse<T>) => response?.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Employees = {
  list: () => requests.get<EmployeeModel[]>("http://localhost:8080/employees"),
  post: (employee: EmployeeModel) =>
    requests.post<EmployeeModel>("http://localhost:8080/save", employee),
  update: (employeeId: number, employee: EmployeeModel) =>
    requests.put<EmployeeModel>(
      `http://localhost:8080/update/${employeeId}`,
      employee
    ),
  get: (employeeId: number) =>
    requests.get<EmployeeModel>(
      `http://localhost:8080/getEmployeeById/${employeeId}`
    ),
};

const agent = {
  Employees,
};

export default agent;
