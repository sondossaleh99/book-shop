import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {


  constructor(private recipeService: RecipeService,
    private router: Router,
    private rout: ActivatedRoute) {}

  recipes: Recipe[];

  ngOnInit(){
    this.recipes = this.recipeService.getRecpies();
  }
  
  onNewRecipe () {
    this.router.navigate(['new'], {relativeTo: this.rout})
  }
}
