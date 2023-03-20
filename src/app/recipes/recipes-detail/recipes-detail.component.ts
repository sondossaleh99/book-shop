import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Data, Params, Route, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent {
  
   recipe: Recipe = {
    id: 0,
    name: '',
    imagePath: '',
    decreption: '',
    ingredients: []
  };


  constructor(private shoppingListService:ShoppingListService,
    private rout: ActivatedRoute,
    private router: Router,
    private recipesService: RecipeService ) {}
  
    id: number;
    ngOnInit() {
    this.rout.params.subscribe(
      (data: Params) => {
        this.id = +data['id']
        this.recipe =  this.recipesService.getRecpies()[this.id];
      })
      
  }

  onAddToShoopingList (rec: Ingredients[]){
    rec.forEach(
      (element) => {
        this.shoppingListService.addIngredient(element)
      }
    )
  }

  onEdit () {
    this.router.navigate(['edit'] , {relativeTo: this.rout})
  }
}
