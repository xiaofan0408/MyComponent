import { Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { Image } from './image';



@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class ImageComponent implements OnInit {

  @Input()
  imgs: Image;

  @Output()
  ClickImage = new  EventEmitter<Image>();

  constructor() { }

  ngOnInit() {
  }

 onClickImage(img: Image) {
  this.ClickImage.emit(img);
 }

}
