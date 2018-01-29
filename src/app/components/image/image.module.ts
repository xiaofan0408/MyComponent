
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageComponent } from './image.component';
import { ImageDirective } from './image.directive';

@NgModule({
  declarations: [
    ImageComponent,
    ImageDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [ImageComponent]
})
export class ImageModule { }
