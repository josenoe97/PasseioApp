import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing.module';
import { GaleriaComponent } from './galeria/galeria.component';
import { ɵInternalFormsSharedModule } from "@angular/forms";


@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    ɵInternalFormsSharedModule
]
})
export class GaleriaModule { }
