import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { BookService } from '../../services/book-service';
import { CheckboxModule } from 'primeng/checkbox';
import { Toast, ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Message } from 'primeng/message';

@Component({
  selector: 'app-bookedit',
  imports: [
    RouterModule,
    CommonModule,
    CheckboxModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    SelectModule,
    Toast,
    ToastModule,
    ButtonModule,
    FloatLabelModule,
    Message
  ],
  providers: [MessageService],
  templateUrl: './bookedit.html',
  styleUrl: './bookedit.css',
})
export class Bookedit implements OnInit {
  id = signal('');
  isEditing: boolean = false;
  bookEditForm: FormGroup;

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);
  private bookService = inject(BookService);
  private messageService = inject(MessageService);

  ngOnInit(): void {
    this.createbookEditForm();
    this.activatedRoute.params.subscribe((params) => {
      this.id.set(params['id']);
    });

    this.isEditing = !!this.id() && this.id().trim() !== '';
    if (this.isEditing) this.getBook(this.id());
  }

  createbookEditForm() {
    this.bookEditForm = this.formBuilder.group({
      ad: ['', Validators.required],
      yayinevi: ['', Validators.required],
    });
  }

  getBook(id: string) {
    this.bookService.getBook(id).subscribe({
      next: (book) => {
        this.bookEditForm.patchValue({
          ad: book.ad,
          yayinevi: book.yayinevi,
        });
      },
    });
  }
  showMessageAndNavigate(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Kütüphane',
      detail: message,
      life: 1000,
    });
    setTimeout(() => {
      this.router.navigate(['/books']);
    }, 1000)
  }

  showError(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Kütüphane',
      detail: message,
      life: 3000,
    });
  }

  saveBook() {
    if (this.bookEditForm.valid) {
      let bookModel = Object.assign({}, this.bookEditForm.value);

      if (this.isEditing) {
        bookModel.id = this.id();
        this.bookService.update(bookModel).subscribe({
          next: () => this.showMessageAndNavigate('Kitap düzenlendi'),
          error: (e) => this.showError(e),
        });
      } else {
        this.bookService.add(bookModel).subscribe({
          next: () => this.showMessageAndNavigate('Kitap eklendi'),
          error: (e) => this.showError(e),
        });
      }
    } else {
      console.log('form hatalı');
    }
  }
}
