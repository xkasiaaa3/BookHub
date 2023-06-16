import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'search-bar-author',
  templateUrl: './search-bar-author.component.html',
  styleUrls: ['./search-bar-author.component.css']
})
export class SearchBarAuthorComponent implements OnInit{
  public filterText: string = '';

  @Output() author = new EventEmitter<string>();

  constructor(private router: Router, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filterText = params['author'];
      this.sendFilter();
    });
  }



  sendFilter(): void {
    this.router.navigate(['/books'], {queryParams: {author:
        this.filterText}});
    this.author.emit(this.filterText);


  }
}
