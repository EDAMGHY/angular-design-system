import { Component, Input } from '@angular/core';
import { ActionItem } from './theme';

/**
 * Actions-layoutComponent
 *
 * Live demo:
 * <example-url>/demo/ds-actions-layout.component.html</example-url>
 */
@Component({
  selector: 'ds-actions-layout',
  templateUrl: './actions-layout.component.html',
})
export class DsActionsLayoutComponent {
  @Input() items: ActionItem[] = [];
  @Input() className: string = '';
  @Input() selectedClass: string = '';
  selectedElement: number | null = null;

  onClick(item: ActionItem, index: number) {
    this.selectedElement = this.selectedElement === index ? null : index;
    item.handler();
  }

  isSelected(index: number): boolean {
    return this.selectedElement === index;
  }
}
