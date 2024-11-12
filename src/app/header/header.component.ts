import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isSideMenuOpen = false;
  isDark: boolean = this.getThemeFromLocalStorage();

  constructor() {}

  /**
   * Retrieves the theme preference from local storage or the user's system settings.
   *
   * @returns {boolean} - `true` if the theme is dark, otherwise `false`.
   */
  getThemeFromLocalStorage(): boolean {
    if (localStorage.getItem('isDark') != null) {
      return localStorage.getItem('isDark') === true.toString();
    }

    // check user's system theme
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  /**
   * Toggles the state of the side menu.
   * If the side menu is currently open, it will be closed.
   * If the side menu is currently closed, it will be opened.
   */
  toggleSideMenu(): void {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    localStorage.setItem('isDark', this.isDark.toString());
  }

}
