import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'search-bar-title',
  templateUrl: './search-bar-title.component.html',
  styleUrls: ['./search-bar-title.component.css']
})
export class SearchBarTitleComponent implements OnInit {
  public filterTitle: string = '';

  @Output() filterChange = new EventEmitter<any>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filterTitle = params['title'] || '';
    });
  }

  emitFilterChange(): void {
    this.filterChange.emit({ title: this.filterTitle });
    this.updateFilterInUrl();
  }

  updateFilterInUrl(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { title: this.filterTitle },
      queryParamsHandling: 'merge'
    });
  }

  onTitleChange(event: any): void {
    this.filterTitle = event.target.value;
    this.emitFilterChange();
  }
}
