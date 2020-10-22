import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { FormOptions } from './../../models/forms.models';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent implements OnInit {
  @Input() public options: FormOptions[];
  @Input() public dropdownFormControl: any;
  sortOptions = [];
  selected = 'relevance-0';

  constructor() {
  }

  ngOnInit(): void {
    this.sortOptions = this.options;
  }

}
