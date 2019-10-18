import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as fromComponents from './components';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [...fromComponents.components, NavbarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FormsModule, ...fromComponents.components]
})
export class SharedModule { }
