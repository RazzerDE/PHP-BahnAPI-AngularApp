import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isDark: boolean = this.getThemeFromLocalStorage();

  constructor() {
    this.toggleTheme();
  }

  /**
   * Retrieves the theme preference from local storage or the user's system settings.
   *
   * @returns {boolean} - `true` if the theme is dark, otherwise `false`.
   */
  getThemeFromLocalStorage(): boolean {
    if (localStorage.getItem('dark')) {
      return localStorage.getItem('dark') === true.toString();
    }

    // check user's system theme
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  /**
   * Toggles the theme between light and dark mode.
   */
  toggleTheme(change?: boolean): void {
    if (change) {
      this.isDark = !this.isDark;
      window.localStorage.setItem('dark', this.isDark.toString());
    }

    // change page theme
    if (this.isDark) {
      document.querySelector("html")!.classList.add('dark');
    } else {
      document.querySelector("html")!.classList.remove('dark');
    }
  }

}
