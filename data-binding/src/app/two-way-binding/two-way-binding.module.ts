import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TwoWayBindingComponent } from './two-way-binding.component';

@NgModule({
  declarations: [TwoWayBindingComponent],
  imports: [CommonModule, FormsModule],
  exports: [TwoWayBindingComponent],
})
export class TwoWayBindingModule {}
