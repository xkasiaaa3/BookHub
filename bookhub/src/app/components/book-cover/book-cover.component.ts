import {Component, Input} from '@angular/core';

@Component({
  selector: 'book-cover',
  templateUrl: './book-cover.component.html',
  styleUrls: ['./book-cover.component.css']
})
export class BookCoverComponent {
  @Input() cover?: string;
}
