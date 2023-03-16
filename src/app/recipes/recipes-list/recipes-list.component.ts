import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {


  constructor(private recipeService: RecipeService) {}

  recipes: Recipe[];

  ngOnInit(){
    this.recipes = this.recipeService.getRecpies();
  }

}
