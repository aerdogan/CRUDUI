import { inject, Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url = environment.apiUrl + 'kitap/';
  private http = inject(HttpClient);

  add(bookModel: Book) {
    let endpoint = this.url + 'kitapekle';
    return this.http.post(endpoint, bookModel);
  }

  update(bookModel: Book) {
    let endpoint = this.url + 'kitapguncelle/' + bookModel.id;
    return this.http.put(endpoint, bookModel);
  }

  delete(id: string) {
    let endpoint = this.url + 'kitapsil/' + id;
    return this.http.delete<{ detail: string }>(endpoint);
  }

  getBook(id: string): Observable<Book> {
    let endpoint = this.url + 'kitapgetir?id=' + id;
    return this.http.get<Book>(endpoint);
  }

  list(): Observable<Book[]> {
    let endpoint = this.url + 'kitaplistele';
    return this.http.get<Book[]>(endpoint);
  }
}
