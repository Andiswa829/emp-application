package com.andiswa.app.rest.Controller;

import com.andiswa.app.rest.Models.Employee;
import com.andiswa.app.rest.Repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ApiController {

    @Autowired
    private EmployeeRepo employeeRepo;

    @GetMapping(value="/")
    public String getPage(){
        return "Welcome ";
    }

    @GetMapping(value = "/employees")
    public List<Employee> getEmployees(){
        return employeeRepo.findAll();
    }

    @GetMapping(value="/getEmployeeById/{id}")
    public Employee getEmployeeById(@PathVariable long id){
        Employee getEmployee = employeeRepo.findById(id).get();
        return getEmployee;
    }

    @PostMapping(value = "/save")
    public String saveEmployee(@RequestBody Employee employee){
        employeeRepo.save(employee);
        return "Saved...";
    }

    @PutMapping(value="update/{id}")
    public String updateEmployee(@PathVariable long id,@RequestBody Employee employee){
        Employee updateEmployee = employeeRepo.findById(id).get();
        updateEmployee.setEmployeeNumber(employee.getEmployeeNumber());
        updateEmployee.setFirstName(employee.getFirstName());
        updateEmployee.setLastName(employee.getLastName());
        updateEmployee.setGender(employee.getGender());
        updateEmployee.setGrossSalary(employee.getGrossSalary());
        updateEmployee.setProfileColour(employee.getProfileColour());
        updateEmployee.setSalutations(employee.getSalutations());
        employeeRepo.save(updateEmployee);

        return "updated";
    }

    @DeleteMapping(value="/delete/{id}")
    public String deleteEmployee(@PathVariable long id){
        Employee deleteEmployee = employeeRepo.findById(id).get();
        employeeRepo.delete(deleteEmployee);

        return "Delete user with user id "+id;
    }


}
