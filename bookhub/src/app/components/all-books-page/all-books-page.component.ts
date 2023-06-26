import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'all-books-page',
  templateUrl: './all-books-page.component.html',
  styleUrls: ['./all-books-page.component.css']
})
export class AllBooksPageComponent implements OnInit{
  public filterTitle: string = '';
  public filterAuthor: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filterTitle = params['title'] || '';
      this.filterAuthor = params['author'] || '';
    });
  }

  updateFilter(filterData: any): void {
    this.filterTitle = filterData.title || '';
    this.filterAuthor = filterData.author || '';
    this.updateFilterInUrl();
  }

  updateFilterInUrl(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { title: this.filterTitle, author: this.filterAuthor },
      queryParamsHandling: 'merge'
    });
  }

}
