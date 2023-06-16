import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit{
  @Input() cover?: string;
  @Input() title?: string;
  @Input() author?: string;
  @Input() description?: string;
  @Input() id?: string;

  ngOnInit(): void {
  }

}
