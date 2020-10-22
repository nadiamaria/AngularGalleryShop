import { FormBuilder, FormGroup } from '@angular/forms';

export interface FormDropdownOption {
  value: string;
  viewValue: string;
}

export class GenericFormConfiguration {
  id: string;
  formFields: GenericFormField[];
  formGroup: FormGroup;

  constructor(formBuilder: FormBuilder, _formId: string, _fields: GenericFormField[]) {

    if (!_formId || !_fields)
      throw new Error('GenericFormConfiguration error: missing data');

    this.id = _formId;

    this.formFields = _fields;

    let formControls = {};

    this.formFields.forEach((field, index) => {

      formControls[field.formFieldId] = ['', [...(field.validations.map(x => x.validator))]]

    });

    this.formGroup = formBuilder.group(formControls);
  }
}

export class GenericFormField {
  formFieldId: string;
  type: FormFieldTypeEnum;
  inputType: string;
  validations?: FormFieldValidation[];
  title?: string;
  placeholder?: string;
  options?: FormOptions[];
  classList?: string;
  value: string;
}

export enum FormFieldTypeEnum {
  Checkbox,
  Input,
  Dropdown
}

export class FormFieldValidation {
  errorCode: string;
  validator: any;
  errorMesssage?: string;
}

export class FormOptions {
  value: string;
  viewValue: string;
}
