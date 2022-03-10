package com.andiswa.app.rest.Repo;

import com.andiswa.app.rest.Models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {
}
