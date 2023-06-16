import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'all-books-page',
  templateUrl: './all-books-page.component.html',
  styleUrls: ['./all-books-page.component.css']
})
export class AllBooksPageComponent implements OnInit{
  public filterTitle: string = '';
  public filterAuthor: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  getTitle($event: string): void {
    this.filterTitle = $event;
  }

  getAuthor($event: string): void {
    this.filterAuthor = $event;
  }

}
