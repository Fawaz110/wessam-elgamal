import { NgClass } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-floating-btn',
  imports: [NgClass],
  templateUrl: './floating-btn.html',
  styleUrl: './floating-btn.scss'
})
export class FloatingBtn {
  scrolled = signal(false);

  goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  @HostListener("window:scroll")
  scrolling() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      this.scrolled = signal(true);
    } else {
      this.scrolled = signal(false);
    }
  }
}
