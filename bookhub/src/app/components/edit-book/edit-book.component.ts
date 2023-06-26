import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{
  defaultGenres: string[] = ['fantasy','science fiction','horror','literatura piękna', 'literatura młodzieżowa','literatura obyczajowa', 'romans','reportaż','sensacja','kryminał','thriller','biografia', 'autobiografia','satyra','literatura dziecięca','komiks','poezja'].sort();
  maxGenres = 3;
  selectedGenres: string[] = [];

  public editBook = {
    title:'',
    author:'',
    description:'',
    cover:'',
    genres: this.selectedGenres,
    readBy: [],
    id: ''
  }
  constructor(private dataService: DataService, private router: Router,private route: ActivatedRoute){}
  onGenreChange(event: Event, genre: string): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      if (this.selectedGenres.length < this.maxGenres) {
        this.selectedGenres.push(genre);
      } else {
        checkbox.checked = false;
      }
    } else {
      const index = this.selectedGenres.indexOf(genre);
      if (index > -1) {
        this.selectedGenres.splice(index, 1);
      }
    }
  }

  onSubmit(): void {
    if (this.selectedGenres.length > this.maxGenres || this.selectedGenres.length == 0) {
      alert('Wybierz maksymalnie ' + this.maxGenres + ' gatunki.');
      return;
    }

    else if (this.editBook.description.length > 900) {
      alert('Twój opis jest za długi!');
      return;
    }

    this.editBook.genres=this.selectedGenres;
    console.log(this.editBook)
    this.dataService.createOrUpdate(this.editBook).subscribe(() =>{
      this.router.navigate(['/books'])
    })

  }

  deleteBook(): void{
this.dataService.deleteById(this.editBook.id).subscribe(() =>{
  this.router.navigate(['/books'])
})
  }

  ngOnInit(): void {this.route.paramMap
    .subscribe((params: any) => {
      this.editBook.id = params.get('id');
    });



    this.dataService.getById(this.editBook.id).subscribe((res: any) => {
      this.editBook.cover = res['cover'];
      this.editBook.title = res['title'];
      this.editBook.author = res['author'];
      this.editBook.description = res['description'];
      this.selectedGenres = res['genres'];
      this.editBook.readBy = res['readBy'];

      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox: Element) => {
        if (checkbox instanceof HTMLInputElement) {
          if (this.selectedGenres.includes(checkbox.value)) {
            checkbox.checked = true;
          }
        }
      });

  })};
}
