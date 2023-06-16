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
      this.items$ = response;
    });
  }

}
