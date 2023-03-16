import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent {

  @Input() recipe: Recipe = {
    name: '',
    imagePath: '',
    decreption: '',
    ingredients: []
  };


  constructor(private shoppingListService:ShoppingListService) {}
  
  ngOnInit() {}

  onAddToShoopingList (rec: Ingredients[]){
    rec.forEach(
      (element) => {
        this.shoppingListService.addIngredient(element)
      }
    )
  }
}
