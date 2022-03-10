package com.andiswa.app.rest.Models;

import javax.persistence.*;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private int employeeNumber;

    @Column
    private String profileColour;

    @Column
    private String gender;

    @Column
    private String salutations;

    @Column
    private double grossSalary;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public double getGrossSalary() {
        return grossSalary;
    }

    public void setGrossSalary(double grossSalary) {
        this.grossSalary = grossSalary;
    }

    public String getSalutations() {
        return salutations;
    }

    public void setSalutations(String salutations) {
        this.salutations = salutations;
    }

    public int getEmployeeNumber() {
        return employeeNumber;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getProfileColour() {
        return profileColour;
    }

    public void setProfileColour(String profileColour) {
        this.profileColour = profileColour;
    }

    public void setEmployeeNumber(int employeeNumber) {
        this.employeeNumber = employeeNumber;
    }
}
