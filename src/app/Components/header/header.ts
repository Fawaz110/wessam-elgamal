import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Input() title: string = '';
  @Input() slogan: string = '';
  @Input() invert:boolean = false;

}
