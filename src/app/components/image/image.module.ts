
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageComponent } from './image.component';
import { ImageDirective } from './image.directive';


@NgModule({
  declarations: [
    ImageComponent,
    ImageDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [ImageComponent]
})
export class ImageModule { }
