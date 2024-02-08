import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../service/api/api.service';
import { Country } from '../models/country.model';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { NbWindowService } from '@nebular/theme';

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

  constructor(private countryService: ApiService) { }

  ngOnInit() {
    this.getCountry();
  }

  async getCountry() {
    this.countryData = await this.countryService.getCountry('countries');
  }

  async createCountry() {
    console.log('Entra')
    this.countryService.createCountry('/countries/create', {name: this.name});
  }

  update(countryId: any){
    window.location.href = "country-update/"+countryId;
  }

  async deleteCountry(id: any){
    this.countryService.deleteCountry(id)
  }
}
