import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  ingredients: Ingredients[] = [
    {
      name: "Apples",
      amount: 5
    },
    {
      name: "Tomatos",
      amount: 10,
    },
  ];

  addIngredient (ingredient: Ingredients){
    this.ingredients.push(ingredient)
  }
  
}
