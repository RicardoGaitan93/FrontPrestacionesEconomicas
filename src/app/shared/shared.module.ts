import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as fromComponents from './components';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [...fromComponents.components, SidenavComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FormsModule, ...fromComponents.components]
})
export class SharedModule { }
