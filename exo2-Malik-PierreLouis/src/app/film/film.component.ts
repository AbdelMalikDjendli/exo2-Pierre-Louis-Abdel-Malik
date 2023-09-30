import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {
    @Output() event = new EventEmitter();
    @Input() imgPath: string = "";
    @Input() title:string = "";

    imgClass: string = "imgClass";

    public getFilm(title:string, pathName:string) {
        this.imgPath = "assets/" + pathName + ".jpg";
        this.title = title;
    }
}

class Film {
    title: string;
    imgPath: string;

    constructor(title: string, imgPath: string) {
        this.title = title;
        this.imgPath = imgPath;
    }
}
