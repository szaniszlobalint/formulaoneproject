package com.formulaone.demo.entities;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "formulateam")
public class FormulaOneTeam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false)
    @NotBlank(message = "Name is mandatory")
    @Pattern(regexp = "[a-zA-Z ]*", message = "Name should only contain letters and spaces")
    private String name;
    @Column(name="foundationyear", nullable = false)
    @Min(value = 1850, message = "Age should not be less than 1850")
    @Max(value = 2022, message = "Age should not be greater than 2022")
    private int foundationYear;
    @Column(name="worldchampionshipswon", nullable = false)
    @Min(value = 0, message = "Age should not be less than 0")
    @Max(value = 100, message = "Age should not be greater than 100")
    private int worldChampionshipsWon;
    @Column(name="paidtheentryfee",nullable = false)
    @Min(value = 0, message = "Age should not be less than 0")
    @Max(value = 1, message = "Age should not be greater than 1")
    private int paidTheEntryFee;

    public FormulaOneTeam(String name, int foundationYear, int worldChampionshipsWon, int paidTheEntryFee) {
        this.name = name;
        this.foundationYear = foundationYear;
        this.worldChampionshipsWon = worldChampionshipsWon;
        this.paidTheEntryFee = paidTheEntryFee;
    }

    public FormulaOneTeam() {

    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getFoundationYear() {
        return foundationYear;
    }

    public void setFoundationYear(int foundationYear) {
        this.foundationYear = foundationYear;
    }

    public int getWorldChampionshipsWon() {
        return worldChampionshipsWon;
    }

    public void setWorldChampionshipsWon(int worldChampionshipsWon) {
        this.worldChampionshipsWon = worldChampionshipsWon;
    }

    public int getPaidTheEntryFee() {
        return paidTheEntryFee;
    }

    public void setPaidTheEntryFee(int paidTheEntryFee) {
        this.paidTheEntryFee = paidTheEntryFee;
    }

}
