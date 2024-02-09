import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Country } from '../models/country.model';


@Component({
  selector: 'app-departament-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './departament-update.component.html',
  styleUrl: './departament-update.component.scss'
})
export class DepartamentUpdateComponent {
  public name: string = '';
  public countryData: Country[] = [];
  public departamentId: number | undefined;
  public country_id: number = 0;


  constructor(private departamentService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.departamentId = Number(params.get('id'));
    });
    this.getCountry();
  }

  async getCountry() {
    this.countryData = await this.departamentService.getCountry('countries');
  }

  async updateDepartament() {
    await this.departamentService.updateDepartament('departaments/update', {
      name: this.name, id: this.departamentId,
      country_id: 0
    });
    this.router.navigate(['departament']);
  }
}
