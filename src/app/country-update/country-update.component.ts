import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country-update.component.html',
  styleUrl: './country-update.component.scss'
})
export class CountryUpdateComponent implements OnInit {
  public name: string = '';
  public countryId: number | undefined;
  
  constructor(private countryService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.countryId = Number(params.get('id'));
    });
    this.updateCountry();
  }

  async updateCountry() {
    await this.countryService.updateCountry('countries/update', { name: this.name, id: this.countryId });
    this.router.navigate(['country']);
  }
}
