export class Image {
    thumbUrl: string;
    realUrl: string;
    width: number;
    height: number;
    constructor(t: string, u: string, w: number, h: number) {
     this.thumbUrl = t;
     this.realUrl = u;
     this.width  = w;
     this.height = h;
    }
}
