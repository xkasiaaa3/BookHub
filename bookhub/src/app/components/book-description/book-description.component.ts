import {Component, Input} from '@angular/core';

@Component({
  selector: 'book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.css']
})
export class BookDescriptionComponent {
  @Input() description?: string;
}
