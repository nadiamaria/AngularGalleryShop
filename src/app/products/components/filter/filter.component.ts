import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { FormFieldTypeEnum, GenericFormConfiguration } from 'src/app/shared/modules/forms/models/forms.models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit,OnDestroy {

  private subscription: Subscription = new Subscription();

  public classObservable: Subject<boolean> = new Subject<boolean>();
  public sizeConfig: GenericFormConfiguration;
  public priceConfig: GenericFormConfiguration;
  public typeConfig: GenericFormConfiguration;
  public techniqueConfig: GenericFormConfiguration;
  public orderConfig: GenericFormConfiguration;

  public isOpen: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.classObservable.subscribe(val => {
      this.isOpen = val;
    });
  }

  public onClickFilter(): void {
    this.isOpen = !this.isOpen;
    this.classObservable.next(this.isOpen);
  }

  ngOnInit(): void {
    this.orderConfig = new GenericFormConfiguration(
      this.formBuilder,
      'MyOrder',
      [{
        formFieldId: 'myDropdown',
        type: FormFieldTypeEnum.Dropdown,
        inputType: 'text',
        validations: [],
        title: 'My Dropdown',
        classList: 'class1',
        options: [
          { value: 'relevance-0', viewValue: 'Relevance' },
          { value: 'popular-1', viewValue: 'The most popular' },
          { value: 'ascending-2', viewValue: 'Ascending Price' }
        ],
        value: ''
      }]);

    this.priceConfig = new GenericFormConfiguration(
      this.formBuilder,
      'MyPrice',
      [{
        formFieldId: 'minPrice',
        type: FormFieldTypeEnum.Input,
        inputType: 'text',
        validations: [],
        title: 'MinPrice',
        placeholder: 'minPrice',
        classList: 'class2',
        value: ''
      },
      {
        formFieldId: 'maxPrice',
        type: FormFieldTypeEnum.Input,
        inputType: 'text',
        validations: [],
        title: 'MaxPrice',
        placeholder: 'maxPrice',
        classList: 'class2',
        value: ''
      }]);


    this.sizeConfig = new GenericFormConfiguration(
      this.formBuilder,
      'MySize',
      [{
        formFieldId: 'myChecboxSmall',
        type: FormFieldTypeEnum.Checkbox,
        inputType: 'text',
        validations: [],
        title: 'Small 12x16',
        classList: 'class1',
        value: ''
      },
      {
        formFieldId: 'myChecboxMedium',
        type: FormFieldTypeEnum.Checkbox,
        inputType: 'text',
        validations: [],
        title: 'Medium 24x16',
        classList: 'class1',
        value: ''
      },
      {
        formFieldId: 'myChecboxLarge',
        type: FormFieldTypeEnum.Checkbox,
        inputType: 'text',
        validations: [],
        title: 'Large 40x30',
        classList: 'class1',
        value: ''
      },
      {
        formFieldId: 'myChecboxXLarge',
        type: FormFieldTypeEnum.Checkbox,
        inputType: 'text',
        validations: [],
        title: 'X-Large 60x40',
        classList: 'class1',
        value: ''
      }
      ]);

    this.typeConfig = new GenericFormConfiguration(
      this.formBuilder,
      'MyType',
      [{
        formFieldId: 'myChecboxLandscape',
        type: FormFieldTypeEnum.Checkbox,
        inputType: 'text',
        validations: [],
        title: 'landscape',
        classList: 'class1',
        value: ''
      },
      {
        formFieldId: 'myChecboxPortrait',
        type: FormFieldTypeEnum.Checkbox,
        inputType: 'text',
        validations: [],
        title: 'portrait',
        classList: 'class1',
        value: ''
      },
      {
        formFieldId: 'myChecboxAbstract',
        type: FormFieldTypeEnum.Checkbox,
        inputType: 'text',
        validations: [],
        title: 'abstract',
        classList: 'class1',
        value: ''
      },
      {
        formFieldId: 'myChecboxflowers',
        type: FormFieldTypeEnum.Checkbox,
        inputType: 'text',
        validations: [],
        title: 'flowers',
        classList: 'class1',
        value: ''
      },
      {
        formFieldId: 'myChecboxOthers',
        type: FormFieldTypeEnum.Checkbox,
        inputType: 'text',
        validations: [],
        title: 'others',
        classList: 'class1',
        value: ''
      }
      ]);

      // class AppLocalStorage {
      //   public static getItem(key: string): any {

      //     try {
      //       localStorage.setItem('typeConfig', JSON.stringify(this.typeConfig));

      //     } catch(exception ex) {

      //     }
      //   }
      // }
      localStorage.setItem('typeConfig', JSON.stringify({ceva: 'altceva'}));
      const item = JSON.parse(localStorage.getItem('typeConfig'));

    this.techniqueConfig = new GenericFormConfiguration(
      this.formBuilder,
      'MyOrder',
      [
        {
          formFieldId: 'myChecboxOil',
          type: FormFieldTypeEnum.Checkbox,
          inputType: 'text',
          validations: [],
          title: 'oil',
          classList: 'class1',
          value: ''
        },
        {
          formFieldId: 'myChecboxAcrylic',
          type: FormFieldTypeEnum.Checkbox,
          inputType: 'text',
          validations: [],
          title: 'acrylic',
          classList: 'class1',
          value: ''
        },
        {
          formFieldId: 'myChecboxPastel',
          type: FormFieldTypeEnum.Checkbox,
          inputType: 'text',
          validations: [],
          title: 'pastel',
          classList: 'class1',
          value: ''
        },
        {
          formFieldId: 'myChecboxTempera',
          type: FormFieldTypeEnum.Checkbox,
          inputType: 'text',
          validations: [],
          title: 'tempera',
          classList: 'class1',
          value: ''
        }
      ]);

    this.subscription.add(this.sizeConfig.formGroup.valueChanges.subscribe(value => {}));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.classObservable.unsubscribe();
  }
}
