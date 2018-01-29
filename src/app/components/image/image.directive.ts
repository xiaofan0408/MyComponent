import {
    Directive,
    HostBinding,
    Input
} from '@angular/core';

@Directive({
    selector: '[img-style]'
})
export class ImageDirective {

    @Input()
    width: number;
    @Input()
    height: number;
    @HostBinding('style.width.px')
    get styleWidth() {
        return this.width * 200 / this.height;
    }

    @HostBinding('style.flex-grow')
    get styleFlexGrow() {
        return this.width * 200 / this.height;
    }

}