import { Component } from '@angular/core';
import { MainMenu } from '../main-menu/main-menu';
import { Content } from '../content/content';

@Component({
  selector: 'app-layout',
  imports: [ MainMenu, Content ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
