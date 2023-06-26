import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'search-bar-author',
  templateUrl: './search-bar-author.component.html',
  styleUrls: ['./search-bar-author.component.css']
})
export class SearchBarAuthorComponent implements OnInit {
  public filterAuthor: string = '';

  @Output() filterChange = new EventEmitter<any>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filterAuthor = params['author'] || '';
    });
  }

  emitFilterChange(): void {
    this.filterChange.emit({ author: this.filterAuthor });
    this.updateFilterInUrl();
  }

  updateFilterInUrl(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { author: this.filterAuthor },
      queryParamsHandling: 'merge'
    });
  }

  onAuthorChange(event: any): void {
    this.filterAuthor = event.target.value;
    this.emitFilterChange();
  }
}
