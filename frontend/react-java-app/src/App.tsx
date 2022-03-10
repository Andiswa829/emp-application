import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";
import EmployeeList from "./components/EmployeeListAll";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <EmployeeList />
      </div>
    </ThemeProvider>
  );
}
export default App;
