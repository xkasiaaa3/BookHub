import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3001';

    constructor(private http: HttpClient) {
}

getAll() {
  return this.http.get(this.url + '/api/books');
}

  getById(id: string) {
    return this.http.get(this.url + '/api/book/' + id);
  }

  createOrUpdate(book: any) {
      return this.http.post(this.url + '/api/book',book);
  }

  deleteById(id: string) {
    return this.http.delete(this.url + '/api/book/' + id);
  }
}

