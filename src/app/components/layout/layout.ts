import { Component } from '@angular/core';
import { MainMenu } from '../main-menu/main-menu';
import { Content } from '../content/content';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [ MainMenu, Content, Footer ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
