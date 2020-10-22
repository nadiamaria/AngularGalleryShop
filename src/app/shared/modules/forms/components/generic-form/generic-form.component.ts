import { Component, Input, OnInit } from '@angular/core';

import { FormFieldTypeEnum, GenericFormConfiguration } from '../../models/forms.models';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {
  @Input() configuration: GenericFormConfiguration;
  public get fieldTypeEnum(): typeof FormFieldTypeEnum {
    return FormFieldTypeEnum;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
