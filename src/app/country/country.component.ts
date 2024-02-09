import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api/api.service';
import { Country } from '../models/country.model';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  public countryData!: Country[];
  public name: string = '';
  
  constructor(private countryService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getCountry();
  }

  async getCountry() {
    this.countryData = await this.countryService.getCountry('countries');
  }

  async createCountry() {
    // console.log('Entra')
    this.countryService.createCountry('countries/create', {name: this.name}).then((x) => {
      this.getCountry();
      this.name = '';
    });

  }

  update(countryId: any) {
    this.router.navigate(['country-update', countryId]);
  }

  async deleteCountry(id: any){
    await this.countryService.deleteCountry(id)
    this.getCountry();

  }
}
