import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Notfound } from './pages/notfound/notfound';
import { Booklist } from './pages/booklist/booklist';
import { Bookedit } from './pages/bookedit/bookedit';
import { Userlist } from './pages/userlist/userlist';
import { Useredit } from './pages/useredit/useredit';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },  
    { path: 'home', component: Home },
    { path: 'books', component: Booklist },
    { path: 'book/add', component: Bookedit },
    { path: 'book/edit/:id', component: Bookedit },
    { path: 'users', component: Userlist },
    { path: 'user/add', component: Useredit },
    { path: 'user/edit/:id', component: Useredit },
    { path: 'contact', component: Contact },
    { path: '**', component: Notfound }
];