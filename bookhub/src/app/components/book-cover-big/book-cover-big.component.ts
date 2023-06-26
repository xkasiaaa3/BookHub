import {Component, Input} from '@angular/core';

@Component({
  selector: 'book-cover-big',
  templateUrl: './book-cover-big.component.html',
  styleUrls: ['./book-cover-big.component.css']
})
export class BookCoverBigComponent {
  @Input() cover?: string;
}
