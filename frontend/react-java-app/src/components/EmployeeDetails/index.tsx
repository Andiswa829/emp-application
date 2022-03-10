import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import { RadioButtonUnchecked } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Solitude } from "../../colors";
import { EmployeeModel } from "../../models/employeeModel";
import agent from "../agent";
import CustomSelect from "../CustomSelect";
import GridControlInputLabel from "../GridInputLabel";
import styles from "./indexStyles";
import { colours, genders, salutationsData } from "./testData";

interface EmployeeProps {
  empId?: number;
  closeModal: () => void;
  loadItem: () => void;
}

const EmployeeDetail = (props: EmployeeProps) => {
  const classes = styles();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [salutation, setSalutation] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [grossSalary, setGrossSalary] = useState<number>(0);
  const [employeeNumber, setEmployeeNumber] = useState<number>();
  const [profileColour, setProfileColour] = useState<string>("");
  const [buttonColour, setButtonColour] = useState<string>("");

  useEffect(() => {
    agent.Employees.get(props.empId!).then((response) => {
      const employeeInfo = response;
      if (employeeInfo !== null) {
        setEmployeeNumber(employeeInfo?.employeeNumber!);
        setFirstName(employeeInfo?.firstName!);
        setLastName(employeeInfo?.lastName!);
        setGender(employeeInfo?.gender!);
        setProfileColour(employeeInfo?.profileColour!);
        setButtonColour(employeeInfo?.profileColour!);
        setGrossSalary(employeeInfo?.grossSalary!);
        setSalutation(employeeInfo?.salutations!);
        setFullName(employeeInfo?.firstName! + " " + employeeInfo?.lastName!);
      }
    });
  }, [
    setEmployeeNumber,
    setLastName,
    setFirstName,
    setGender,
    setProfileColour,
    setGrossSalary,
    setSalutation,
    setFullName,
    setButtonColour,
  ]);

  const handleCancelClick = () => {
    props.closeModal();
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const value = event.target.value as string;
    setFirstName(value);
    setFullName(value + " " + lastName);
  };

  const handleLastNameChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const value = event.target.value as string;
    setLastName(value);
    setFullName(firstName + " " + value);
  };

  const handleSalaryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as number;
    setGrossSalary(value);
  };

  const handleEmployeeNumberChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const value = event.target.value as number;
    setEmployeeNumber(value);
  };

  const handleProfileColourChange = (index: number) => {
    setProfileColour(colours[index]);
    setButtonColour(colours[index] !== "Default" ? colours[index] : Solitude);
  };

  const handleSaveChange = () => {
    const payLoad: EmployeeModel = {
      employeeNumber: employeeNumber,
      profileColour: profileColour,
      salutations: salutation,
      gender: gender,
      grossSalary: grossSalary,
      firstName: firstName,
      lastName: lastName,
    };

    toast.promise(updateEmployee(props.empId!, payLoad), {
      pending: "Updating employee",
      success: "Employee updated successfully",
      error: " Updating employee failed",
    });

    props.closeModal();
    props.loadItem();
  };

  const updateEmployee = (empId: number, employee: EmployeeModel) =>
    agent.Employees.update(empId, employee);

  const handleGenderChange = (index: number) => {
    setGender(genders[index]);
  };

  const handleSalutationChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const value = event.target.value as string;
    setSalutation(value);
    switch (value) {
      case "Mr":
        setGender("Male");
        break;
      case "Ms":
        setGender("Female");
        break;
      case "Mrs":
        setGender("Female");
        break;
      case "Mx":
        setGender("Unspecified");
        break;
      default:
        setGender("Unspecified");
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          marginLeft: "16px",
          marginRight: "16px",
        }}
      >
        <Paper elevation={3} className={classes.paper}>
          <Grid container xs={12} className={classes.innerGrid}>
            <Grid xs={12} className={classes.margins}>
              <Typography variant="h6">Employee Information</Typography>
            </Grid>
            <Grid
              container
              item
              justifyContent={"flex-end"}
              xs={12}
              spacing={2}
              style={{ padding: "0px", marginRight: "24px" }}
            >
              <Button variant="contained" onClick={handleCancelClick}>
                Cancel
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: buttonColour,
                  color: "black",
                  marginLeft: "8px",
                }}
                onClick={handleSaveChange}
              >
                Save
              </Button>
            </Grid>
            <Grid container xs={12} spacing={2} className={classes.margins}>
              <GridControlInputLabel
                label="First Name(s)"
                xs={2}
                container
                item
                justifyContent="flex-start"
              />
              <Grid container item xs={3} justifyContent="flex-end">
                <TextField
                  fullWidth
                  className={classes.textField}
                  variant="outlined"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  type="text"
                  InputProps={{ className: classes.input }}
                />
              </Grid>
              <GridControlInputLabel
                label="Full Name(s)"
                xs={2}
                container
                item
                justifyContent="flex-start"
              />
              <Grid xs={3} container item justifyContent="flex-end">
                <TextField
                  fullWidth
                  className={classes.textField}
                  variant="outlined"
                  value={fullName != null ? fullName : ""}
                  disabled
                  InputProps={{ className: classes.input }}
                />
              </Grid>
            </Grid>
            <Grid container xs={12} spacing={2} className={classes.margins}>
              <GridControlInputLabel
                label="Last Name"
                xs={2}
                container
                item
                justifyContent="flex-start"
              />
              <Grid container item xs={3} justifyContent="flex-end">
                <TextField
                  fullWidth
                  className={classes.textField}
                  variant="outlined"
                  value={lastName}
                  type="text"
                  onChange={handleLastNameChange}
                  InputProps={{ className: classes.input }}
                />
              </Grid>
              <GridControlInputLabel
                label="Gross Salary $PY"
                xs={2}
                container
                item
                justifyContent="flex-start"
              />
              <Grid xs={3} container item justifyContent="flex-end">
                <TextField
                  fullWidth
                  className={classes.textField}
                  variant="outlined"
                  value={grossSalary.toLocaleString().replace(/,/g, " ")}
                  onChange={(e) =>
                    setGrossSalary(
                      Number(e.target.value.replace(/[^0-9]/g, ""))
                    )
                  }
                  InputProps={{ className: classes.input }}
                />
              </Grid>
            </Grid>
            <Grid container xs={12} spacing={2} className={classes.margins}>
              <GridControlInputLabel
                label="Salutations"
                xs={2}
                container
                item
                justifyContent="flex-start"
              />
              <Grid container item xs={3}>
                <Grid container item xs={2} justifyContent="flex-start">
                  <CustomSelect
                    value={salutation}
                    onChange={handleSalutationChange}
                    fullWidth
                    input={<OutlinedInput className={classes.input} />}
                    inputProps={{ className: classes.selectInput }}
                  >
                    {salutationsData!.map((x, index) => (
                      <MenuItem key={index} value={x}>
                        {x}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                </Grid>
              </Grid>
              <GridControlInputLabel
                label="Employee Profile Colour"
                container
                item
                justifyContent="flex-start"
                xs={2}
              />
              <Grid xs={3} container item justifyContent="flex-end">
                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    {colours.map((x, index) => (
                      <FormControlLabel
                        value={profileColour}
                        control={
                          <Checkbox
                            color="default"
                            checked={
                              colours[index].toLocaleLowerCase() ===
                              (profileColour !== null
                                ? profileColour.toLocaleLowerCase()
                                : "Default")
                            }
                            onChange={() => handleProfileColourChange(index)}
                            style={{ marginLeft: "12px" }}
                          />
                        }
                        label={x}
                        labelPlacement="end"
                        color="default"
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container xs={12} spacing={2} className={classes.margins}>
              <GridControlInputLabel
                label="Gender"
                container
                item
                justifyContent="flex-start"
                xs={2}
              />
              <Grid container item xs={3} justifyContent="flex-end">
                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    {genders.map((x, index) => (
                      <FormControlLabel
                        value={gender}
                        control={
                          <Checkbox
                            color="default"
                            checked={
                              genders[index].toLocaleLowerCase() ===
                              (gender !== null
                                ? gender.toLocaleLowerCase()
                                : "Unspecified")
                            }
                            onChange={() => handleGenderChange(index)}
                            icon={<RadioButtonUnchecked />}
                            style={{ marginLeft: "15px" }}
                          />
                        }
                        label={x}
                        labelPlacement="end"
                        color="default"
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container xs={12} spacing={2} className={classes.margins}>
              <GridControlInputLabel
                label="Employee #"
                container
                item
                justifyContent="flex-start"
                xs={2}
              />
              <Grid container item xs={3} justifyContent="flex-end">
                <TextField
                  fullWidth
                  className={classes.textField}
                  variant="outlined"
                  value={employeeNumber}
                  onChange={handleEmployeeNumberChange}
                  type="number"
                  InputProps={{ className: classes.input }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default EmployeeDetail;
