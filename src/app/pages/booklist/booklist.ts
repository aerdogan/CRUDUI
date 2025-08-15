import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Book } from '../../models/book';
import { BookService } from '../../services/book-service';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Toast, ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-booklist',
  imports: [
    Toast,
    ToastModule,
    RouterModule,
    TableModule,
    TagModule,
    RatingModule,
    ButtonModule,
    CommonModule,
    RouterModule,
    CardModule
  ],
  templateUrl: './booklist.html',
  styleUrl: './booklist.css',
  providers: [BookService, MessageService],
})
export class Booklist implements OnInit {
  books: Book[];
  dataLoaded = false;

  private router = inject(Router);
  private bookService = inject(BookService);
  private messageService = inject(MessageService);

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.list().subscribe((response) => {
      this.books = response;
      this.dataLoaded = true;
    });
  }

  showMessage(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Kütüphane',
      detail: message,
      life: 3000,
    });
  }

  showError(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Kütüphane',
      detail: message,
      life: 3000,
    });
  }

  deleteBook(id:number) {
    this.bookService.delete(id.toString()).subscribe({
      next: (data) => {
        this.showMessage(data.detail),
        this.books = this.books.filter(b => b.id !== id)
      },
      error: (e) => this.showError(e),
    });
  }
}
