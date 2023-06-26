import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'book-genres',
  templateUrl: './book-genres.component.html',
  styleUrls: ['./book-genres.component.css']
})
export class BookGenresComponent implements OnInit{
  @Input() genres?: Array<string>;

  ngOnInit(): void {

   this.genres?.sort();
  }


}
