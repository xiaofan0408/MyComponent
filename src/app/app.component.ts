import {
  Component ,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Image } from './components/image/image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  private imgs: Image[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.imgs = [
      {
        'thumbUrl': 'http://iph.href.lu/675x900',
        'realUrl': 'http://iph.href.lu/675x900',
        'width': 675,
        'height': 900
      },
      {
        'thumbUrl': 'http://iph.href.lu/1170x780',
        'realUrl': 'http://iph.href.lu/1170x780',
        'width': 1170,
        'height': 780
      },
      {
        'thumbUrl': 'http://iph.href.lu/1170x780',
        'realUrl': 'http://iph.href.lu/1170x780',
        'width': 1170,
        'height': 780
      },
      {
        'thumbUrl': 'http://iph.href.lu/2048x1536',
        'realUrl': 'http://iph.href.lu/2048x1536',
        'width': 2048,
        'height': 1536
      },
      {
        'thumbUrl': 'http://iph.href.lu/1333x2000',
        'realUrl': 'http://iph.href.lu/1333x2000',
        'width': 1333,
        'height': 2000
      },
      {
        'thumbUrl': 'http://iph.href.lu/400x2048',
        'realUrl': 'http://iph.href.lu/400x2048',
        'width': 400,
        'height': 2048
      },
      {
        'thumbUrl': 'http://iph.href.lu/1170x780',
        'realUrl': 'http://iph.href.lu/1170x780',
        'width': 1170,
        'height': 780
      },
      {
        'thumbUrl': 'http://iph.href.lu/2000x1339',
        'realUrl': 'http://iph.href.lu/2000x1339',
        'width': 2000,
        'height': 1339
      },
      {
        'thumbUrl': 'http://iph.href.lu/1080x1920',
        'realUrl': 'http://iph.href.lu/1080x1920',
        'width': 1080,
        'height': 1920
      },
      {
        'thumbUrl': 'http://iph.href.lu/675x900',
        'realUrl': 'http://iph.href.lu/675x900',
        'width': 675,
        'height': 900
      },
      {
        'thumbUrl': 'http://iph.href.lu/675x900',
        'realUrl': 'http://iph.href.lu/675x900',
        'width': 675,
        'height': 900
      },
      {
        'thumbUrl': 'http://iph.href.lu/1170x780',
        'realUrl': 'http://iph.href.lu/1170x780',
        'width': 1170,
        'height': 780
      },
      {
        'thumbUrl': 'http://iph.href.lu/1170x780',
        'realUrl': 'http://iph.href.lu/1170x780',
        'width': 1170,
        'height': 780
      },
      {
        'thumbUrl': 'http://iph.href.lu/2048x1536',
        'realUrl': 'http://iph.href.lu/2048x1536',
        'width': 2048,
        'height': 1536
      },
      {
        'thumbUrl': 'http://iph.href.lu/1333x2000',
        'realUrl': 'http://iph.href.lu/1333x2000',
        'width': 1333,
        'height': 2000
      },
      {
        'thumbUrl': 'http://iph.href.lu/2000x1333',
        'realUrl': 'http://iph.href.lu/2000x1333',
        'width': 2000,
        'height': 1333
      },
      {
        'thumbUrl': 'http://iph.href.lu/1170x780',
        'realUrl': 'http://iph.href.lu/1170x780',
        'width': 1170,
        'height': 780
      },
      {
        'thumbUrl': 'http://iph.href.lu/2000x1339',
        'realUrl': 'http://iph.href.lu/2000x1339',
        'width': 2000,
        'height': 1339
      },
      {
        'thumbUrl': 'http://iph.href.lu/1080x1920',
        'realUrl': 'http://iph.href.lu/1080x1920',
        'width': 1080,
        'height': 1920
      },
      {
        'thumbUrl': 'http://iph.href.lu/675x900',
        'realUrl': 'http://iph.href.lu/675x900',
        'width': 675,
        'height': 900
      }
    ];
  }

  select(img: Image): void {
    console.log(img.realUrl);
  }

}
