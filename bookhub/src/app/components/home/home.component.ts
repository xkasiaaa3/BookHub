import { Component } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public items$: any;
  public lastThree: any = [];
  public bestThree: any = [];

  constructor(private service: DataService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {

      if (Array.isArray(response)){

        this.lastThree.push(response[response.length-1])
        this.lastThree.push(response[response.length-2])
        this.lastThree.push(response[response.length-3])

        this.items$ = response.sort((a, b) => {
          if (a.readBy.length < b.readBy.length) {
            return -1; // a should come before b
          } else if (a.readBy.length > b.readBy.length) {
            return 1; // a should come after b
          } else
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
        })

        this.bestThree.push(this.items$[this.items$.length-1])
        this.bestThree.push(this.items$[this.items$.length-2])
        this.bestThree.push(this.items$[this.items$.length-3])
        ;}
    });
  }
}
