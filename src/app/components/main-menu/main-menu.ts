import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-main-menu',
  imports: [Menubar],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css'
})
export class MainMenu implements OnInit {
  
  items: MenuItem[];

  ngOnInit() {
        this.items = [
            {
                label: 'Ana Sayfa',
                icon: 'pi pi-home',
                routerLink: '/'
            },
            {
                label: 'Kitaplar',
                icon: 'pi pi-book',
                items: [
                    {
                        label: 'Kitap Ekle',
                        icon: 'pi pi-file-plus',
                        routerLink:'book/add'
                    },
                    {
                        label: 'Kitap Listele',
                        icon: 'pi pi-list',
                        routerLink:'books'
                    }
                ]
            },
                        {
                label: 'Kullanıcılar',
                icon: 'pi pi-users',
                items: [
                    {
                        label: 'Kullanıcı Ekle',
                        icon: 'pi pi-user-plus'
                    },
                    {
                        label: 'Kullanıcı Listele',
                        icon: 'pi pi-list'
                    }
                ]
            },
            {
                label: 'İletişim',
                icon: 'pi pi-envelope',
                routerLink: 'contact'
            }
        ]
    }

}
