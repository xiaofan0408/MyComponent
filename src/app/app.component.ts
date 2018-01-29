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
        'url': 'http://iph.href.lu/675x900',
        'width': 675,
        'height': 900
      },
      {
        'url': 'http://iph.href.lu/1170x780',
        'width': 1170,
        'height': 780
      },
      {
        'url': 'http://iph.href.lu/1170x780',
        'width': 1170,
        'height': 780
      },
      {
        'url': 'http://iph.href.lu/2048x1536',
        'width': 2048,
        'height': 1536
      },
      {
        'url': 'http://iph.href.lu/1333x2000',
        'width': 1333,
        'height': 2000
      },
      {
        'url': 'http://iph.href.lu/2000x1333',
        'width': 2000,
        'height': 1333
      },
      {
        'url': 'http://iph.href.lu/1170x780',
        'width': 1170,
        'height': 780
      },
      {
        'url': 'http://iph.href.lu/2000x1339',
        'width': 2000,
        'height': 1339
      },
      {
        'url': 'http://iph.href.lu/1080x1920',
        'width': 1080,
        'height': 1920
      },
      {
        'url': 'http://iph.href.lu/675x900',
        'width': 675,
        'height': 900
      },
      {
        'url': 'http://iph.href.lu/1170x780',
        'width': 1170,
        'height': 780
      },
      {
        'url': 'http://iph.href.lu/780x1170',
        'width': 780,
        'height': 1170
      },
      {
        'url': 'http://iph.href.lu/2048x1536',
        'width': 2048,
        'height': 1536
      },
      {
        'url': 'http://iph.href.lu/2000x1333',
        'width': 2000,
        'height': 1333
      },
      {
        'url': 'http://iph.href.lu/2000x1333',
        'width': 2000,
        'height': 1333
      },
      {
        'url': 'http://iph.href.lu/1170x780',
        'width': 1170,
        'height': 780
      },
      {
        'url': 'http://iph.href.lu/2000x1339',
        'width': 2000,
        'height': 1339
      },
      {
        'url': 'http://iph.href.lu/1920x1080',
        'width': 1920,
        'height': 1080
      },
      {
        'url': 'http://iph.href.lu/675x900',
        'width': 675,
        'height': 900
      },
      {
        'url': 'http://iph.href.lu/1170x780',
        'width': 1170,
        'height': 780
      },
      {
        'url': 'http://iph.href.lu/1170x780',
        'width': 1170,
        'height': 780
      },
      {
        'url': 'http://iph.href.lu/2048x1536',
        'width': 2048,
        'height': 1536
      },
      {
        'url': 'http://iph.href.lu/2000x1333',
        'width': 2000,
        'height': 1333
      },
      {
        'url': 'http://iph.href.lu/2000x1333',
        'width': 2000,
        'height': 1333
      },
      {
        'url': 'http://iph.href.lu/1170x780',
        'width': 1170,
        'height': 780
      },
      {
        'url': 'http://iph.href.lu/2000x1339',
        'width': 2000,
        'height': 1339
      },
      {
        'url': 'http://iph.href.lu/1920x1080',
        'width': 1920,
        'height': 1080
      }
    ];
  }


}
