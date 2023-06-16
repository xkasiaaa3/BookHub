import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'search-bar-title',
  templateUrl: './search-bar-title.component.html',
  styleUrls: ['./search-bar-title.component.css']
})
export class SearchBarTitleComponent implements OnInit{
  public filterText: string = '';

  @Output() title = new EventEmitter<string>();

  constructor(private router: Router, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filterText = params['title'];
      this.sendFilter();
    });
  }



  sendFilter(): void {

    this.router.navigate(['/books'], {queryParams: {title:
        this.filterText}});
    this.title.emit(this.filterText);

  }

}
