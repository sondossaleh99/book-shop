import { ApplicationRef, Component, EventEmitter } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
 
  constructor(private shoppingListService: ShoppingListService) {}

  ingredients = this.shoppingListService.ingredients;

  
}
