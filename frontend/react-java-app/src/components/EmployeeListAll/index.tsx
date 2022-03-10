import { Button, Grid, Typography } from "@material-ui/core";
import MaterialTable, { Column, MaterialTableProps } from "material-table";
import React, { useEffect, useState } from "react";
import { EmployeeModel } from "../../models/employeeModel";
import AddEmployee from "../AddEmployee";
import agent from "../agent";
import EmployeeDetail from "../EmployeeDetails";

const EmployeeList: React.FunctionComponent = () => {
  const [selectedEmployeeNumber, setSelectedEmployeeNumber] =
    useState<number>(0);
  const [isRowClicked, setIsRowClicked] = useState<boolean>(false);
  const [isAddEmployee, setIsAddEmployee] = useState<boolean>(false);
  const [employeeData, setEmployeeData] = useState<EmployeeModel[]>([]);
  const [employeeId, setEmployeeId] = useState<number>(0);

  useEffect(() => {
    agent.Employees.list().then((response) => {
      setEmployeeData(response);
    });
  }, [setEmployeeData]);

  const columns: Column<EmployeeModel>[] = [
    {
      field: "employeeNumber",
      title: "Employee #",
    },
    {
      field: "firstName",
      title: "First Name",
    },
    {
      field: "lastName",
      title: "Last Name",
    },
    {
      field: "salutations",
      title: "Salutation",
    },
    {
      field: "profileColour",
      title: "Profile Colour",
    },
  ];

  const handleEmpViewClick = () => {
    setIsRowClicked((isRowClicked) => !isRowClicked);
  };

  const onListItemClick = (employee: EmployeeModel) => {
    setSelectedEmployeeNumber(employee.employeeNumber!);
  };

  const handleAddNewEmployee = () => {
    setIsAddEmployee(true);
  };

  const handleCancelAdd = () => {
    setIsAddEmployee((isAddEmployee) => !isAddEmployee);
  };

  const getEmployees = () => {
    window.location.reload();
    // agent.Employees.list().then((response) => {
    //   setEmployeeData(response);
    // });
  };

  const employeeTableProps: MaterialTableProps<any> = {
    columns: columns,
    data: employeeData,
    options: {
      actionsColumnIndex: -1,
      search: false,
      selection: false,
      pageSize: 5,
      pageSizeOptions: [5, 10, 20, 50, 100],
      headerStyle: { backgroundColor: "#CBCACA" },
    },
    onRowClick: (_event: any, rowData: EmployeeModel) => {
      setEmployeeId(rowData.id!);
      onListItemClick(rowData);
      setIsRowClicked(true);
    },
    components: {
      Toolbar: () => (
        <div
          style={{
            height: "0px",
          }}
        ></div>
      ),
    },
  };

  return (
    <>
      <Grid
        container
        xs={12}
        style={{ marginTop: "16px" }}
        alignContent="center"
      >
        <Grid container item xs={7} justifyContent={"flex-end"}>
          <Typography variant="h5">Current Employees</Typography>
        </Grid>
        <Grid container item xs={5} justifyContent={"flex-end"}>
          <Button
            variant="contained"
            style={{ height: "35px", width: "150px", marginRight: "24px" }}
            onClick={handleAddNewEmployee}
          >
            Add Employee
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ margin: "16px" }}>
        <MaterialTable {...employeeTableProps} style={{ maxWidth: "100%" }} />
      </Grid>
      {isRowClicked && selectedEmployeeNumber !== 0 && (
        <Grid>
          <EmployeeDetail
            empId={employeeId}
            closeModal={handleEmpViewClick}
            loadItem={getEmployees}
          />
        </Grid>
      )}
      {isAddEmployee && (
        <Grid>
          <AddEmployee closeModal={handleCancelAdd} loadItem={getEmployees} />
        </Grid>
      )}
    </>
  );
};

export default EmployeeList;
