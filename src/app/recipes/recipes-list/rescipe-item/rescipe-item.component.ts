import { Component, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-rescipe-item',
  templateUrl: './rescipe-item.component.html',
  styleUrls: ['./rescipe-item.component.scss']
})
export class RescipeItemComponent {

  @Input() recipe: Recipe = {
    name: '',
    decreption: '',
    imagePath: '',
    ingredients: []
  };


  constructor (private recipeService:RecipeService ) {}

  selectRecipe () {
    this.recipeService.selectRecipe.emit(this.recipe);
  }
}
