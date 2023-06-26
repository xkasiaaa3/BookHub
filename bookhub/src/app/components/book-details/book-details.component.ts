import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{

  public cover: string = '';
  public title: string = '';
  public author: string = '';
  public description: string = '';
  public genres: string[] = [];
  public readBy: string[] = [];
  public book: any;
  public id:string ='';


  constructor(private service: DataService, public authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: any) => {
        this.id = params.get('id');
      });

    this.service.getById(this.id).subscribe((res: any) => {
      this.cover = res['cover'];
      this.title = res['title'];
      this.author = res['author'];
      this.description = res['description'];
      this.genres = res['genres'];
      this.readBy = res['readBy'];
      this.book = res;
      console.log(res);
    });




  }
  addReader() {
    let reader = this.authService.getLogin();

    if (reader!=null) {
      this.readBy.push(reader);
      this.book.readBy = this.readBy;

      this.service.createOrUpdate(this.book).subscribe(() => {

      })
    }
  }

  ifReadByMe(){

    let reader = this.authService.getLogin();

    if (reader!=null) {
      if (this.readBy.indexOf(reader) > -1){
      return true;}
    }

    return false;

    }

}
