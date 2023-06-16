import {Component, Input} from '@angular/core';

@Component({
  selector: 'book-title',
  templateUrl: './book-title.component.html',
  styleUrls: ['./book-title.component.css']
})
export class BookTitleComponent {
  @Input() title?: string;
}
