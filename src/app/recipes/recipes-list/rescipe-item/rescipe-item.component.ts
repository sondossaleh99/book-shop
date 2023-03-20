import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-rescipe-item',
  templateUrl: './rescipe-item.component.html',
  styleUrls: ['./rescipe-item.component.scss']
})
export class RescipeItemComponent {

  @Input() recipe: Recipe = {
    id: 0,
    name: '',
    decreption: '',
    imagePath: '',
    ingredients: []
  };

}
