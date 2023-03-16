import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  collapsed = true;

  constructor (private router: Router) {}
  ngOnInit() {
  }

  selectRecipe () {
    this.router.navigate(['/recipes']);
  }

  selectShoppingList () {
    this.router.navigate(['/shopping-list']);
  }
}
