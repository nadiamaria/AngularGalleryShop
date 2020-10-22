import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { DropdownComponent } from './components/dropdown/dropdown.component';
import { GenericFormComponent } from './components/generic-form/generic-form.component';

const ExportedComponents = [
  DropdownComponent,
  GenericFormComponent
];

@NgModule({
  declarations: [
    ...ExportedComponents,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports: [
    ...ExportedComponents
  ]
})
export class GenericFormsModule { }
