import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  private recipes: Recipe[] = [
    {
      name: "Pizza",
      decreption: "A super-tasty",
      imagePath: "https://i0.wp.com/www.mydaughtersapron.com/wp-content/uploads/2016/10/FullSizeRender-5.jpg",
      ingredients: [{name: 'Tomatos', amount: 5},{name: 'Cheese', amount: 2}],
    },
    {
      name: "Burger",
      decreption: "What else you need to say ?",
      imagePath: "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1288_1_1434099660.jpg?tr=w-800,h-600",
      ingredients: [{name: 'Buns', amount: 2},{name: 'Meat', amount: 1},{name: 'Cheese', amount: 2}],
    },
    {
      name: "Steak",
      decreption: "Just awesome!",
      imagePath: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1259679_8-2ab6a74.jpg?quality=90&resize=440,400",
      ingredients: [{name: 'Meat', amount: 1},{name: 'vegetables', amount: 5}],
    },
  ];

  selectRecipe = new EventEmitter <Recipe>(); 

  getRecpies () {
    return this.recipes.slice()
  }
}
