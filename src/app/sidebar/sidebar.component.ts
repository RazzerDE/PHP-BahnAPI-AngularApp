import {Component, OnInit} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    NgClass
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  isLoaded: boolean = false;

  constructor(protected router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = true; // show animation for sidebar active page
    }, 50); // Small delay to ensure DOM is ready and animation triggers
  }
}
