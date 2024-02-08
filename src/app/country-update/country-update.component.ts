import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../service/api/api.service';
import { Country } from '../models/country.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-country-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country-update.component.html',
  styleUrl: './country-update.component.scss'
})
export class CountryUpdateComponent implements OnInit {
  public name: string = '';

  constructor(private countryService: ApiService){}

  ngOnInit() {
    this.updateCountry();
  }

  async updateCountry() {
    this.countryService.updateCountry('countries/update', { name: this.name, id: 1});
  }

}
