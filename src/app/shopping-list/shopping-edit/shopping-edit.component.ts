import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {

  
  @ViewChild('name') name: ElementRef;
  @ViewChild('amount') amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService){}
  ingredient: Ingredients;
  addIngredient () {

  this.ingredient ={
    name: this.name.nativeElement.value,
    amount: this.amount.nativeElement.value
  }
    this.shoppingListService.addIngredient(this.ingredient)
  }
}
