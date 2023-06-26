import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  defaultGenres: string[] = ['fantasy','science fiction','horror','literatura piękna', 'literatura młodzieżowa','literatura obyczajowa', 'romans','reportaż','sensacja','kryminał','thriller','biografia', 'autobiografia','satyra','literatura dziecięca','komiks','poezja'].sort();
  maxGenres = 3;
  selectedGenres: string[] = [];

  public newBook = {
    title:'',
    author:'',
    description:'',
    cover:'',
    genres: this.selectedGenres,
    readBy: []
  }
constructor(private dataService: DataService, private router: Router){}
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

    else if (this.newBook.description.length > 900) {
      alert('Twój opis jest za długi!');
      return;
    }

console.log(this.newBook)
    this.dataService.createOrUpdate(this.newBook).subscribe(() =>{
      this.router.navigate(['/books'])
    })

  }

  ngOnInit(): void {
  }
}
