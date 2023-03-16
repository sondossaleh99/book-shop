import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  
  recipe: Recipe;

  constructor (private recipeService: RecipeService) {}

  ngOnInit (){
    this.recipeService.selectRecipe.subscribe(
      (res: Recipe)=>{
        this.recipe = res;
      }
    )
  }
}
