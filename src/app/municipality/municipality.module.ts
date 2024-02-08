// municipality.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MunicipalityComponent } from './municipality.component';

@NgModule({
  declarations: [MunicipalityComponent],
  imports: [CommonModule],
  exports: [MunicipalityComponent]
})
export class MunicipalityModule { }
