import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServiceObject} from '../../models/serviceObject';
import { Country } from '../../models/country.model'; 
import { enviroment } from '../../../enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endpoint = enviroment.api;

  constructor(private httpClient: HttpClient) {}

  getCountry(entity: String): Promise<Country[]>{
    return this.httpClient.get(`${this.endpoint}${entity}`).toPromise().then((res) => {
      var service = <ServiceObject>res
      return <Country[]>service.data;
    })
  }
  createCountry(entity: String, country: Country): Promise<ServiceObject>{
    return this.httpClient.post(`${this.endpoint}${entity}`, country).toPromise().then((res) =>{
            return <ServiceObject>res;
    })
  }

  updateCountry(entity: String, country: Country): Promise<ServiceObject>{
    return this.httpClient.put(`${this.endpoint}${entity}/${country.id}`, country).toPromise().then((res) =>{
            return <ServiceObject>res;
    })
  }

  deleteCountry(id: number): Promise <ServiceObject> {
    return this.httpClient.delete(`${this.endpoint}countries/destroy/${id}`).toPromise().then((res) =>{
      return <ServiceObject>res;
    })
  }
  
  
}
