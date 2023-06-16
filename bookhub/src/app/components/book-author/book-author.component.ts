import {Component, Input} from '@angular/core';

@Component({
  selector: 'book-author',
  templateUrl: './book-author.component.html',
  styleUrls: ['./book-author.component.css']
})
export class BookAuthorComponent {
  @Input() author?: string;
}
