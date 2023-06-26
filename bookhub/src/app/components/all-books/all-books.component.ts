import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  @Input() filterTitle: string = '';
  @Input() filterAuthor: string = '';
  public items$: any;

constructor(private service: DataService) {
}

ngOnInit() {

  this.getAll();
}

  getAll(){
    this.service.getAll().subscribe(response => {
if (Array.isArray(response)){
      this.items$ = response.sort((a, b) => {
        if (a.author < b.author) {
          return -1; // a should come before b
        } else if (a.author > b.author) {
          return 1; // a should come after b
        } else {
          // Authors are the same, compare titles
          if (a.title < b.title) {
            return -1; // a should come before b
          } else if (a.title > b.title) {
            return 1; // a should come after b
          } else {
            return 0; // a and b are equal in sorting
          }
        }
      });}
    });
  }

}
