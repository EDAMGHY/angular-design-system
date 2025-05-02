import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.stories.html',
})
export class CheckboxStoryComponent {
  isCheckedDefault = false;
  isCheckedAligned = false;
  isCheckedError = false;
  hasError = false;

  onCheckboxChange() {
    this.isCheckedDefault = !this.isCheckedDefault;
  }

  onAlignedCheckboxChange() {
    this.isCheckedAligned = !this.isCheckedAligned;
  }

  onErrorCheckboxChange() {
    this.isCheckedError = !this.isCheckedError;
  }

  toggleError() {
    this.hasError = !this.hasError;
  }
}
