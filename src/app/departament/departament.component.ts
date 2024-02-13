import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api/api.service';
import { Country } from '../models/country.model';
import { Departament } from '../models/departament.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departament',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './departament.component.html',
  styleUrl: './departament.component.scss'
})
export class DepartamentComponent implements OnInit {

  public departamentData: Departament[] = [];
  public countryData: Country[] = [];
  public name: string = '';
  public country_id: number = 0;
  public departament_id: number= 0;

  constructor(private service: ApiService, private router: Router) { }


  ngOnInit() {
    this.getDepartament();
    this.getCountry();

  }

  async getDepartament() {
    this.departamentData = await this.service.getDepartament('departaments');
    console.log('Departament data:', this.departamentData);
    
  }

  async getCountry() {
    this.countryData = await this.service.getCountry('countries');
  }

  async createDepartament() {
    console.log('entra');
    const newDepartament = { name: this.name, country_id: this.country_id};

    this.service.createDepartament('departaments/create', newDepartament).then((res) => {
      console.log('Departamento creado exitosamente:', res);
      this.name = '';
      this.country_id = 0;
      this.getDepartament();
    });
  }

  update(departamentId: any) {
    this.router.navigate(['departament-update', departamentId]);
  }

  async getDepartamentDetails() {
    const departamentoActual = this.departamentData.find(dep => dep.id === this.departament_id);
    console.log(departamentoActual);
    if (departamentoActual) {
      this.name = departamentoActual.name;
      this.country_id = departamentoActual.country_id;
    }
  }
  
}
