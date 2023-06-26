import {Component, Input} from '@angular/core';

@Component({
  selector: 'book-genres-big',
  templateUrl: './book-genres-big.component.html',
  styleUrls: ['./book-genres-big.component.css']
})
export class BookGenresBigComponent {
  @Input() genres?: Array<string>;

  ngOnInit(): void {

    this.genres?.sort();
  }

}
