import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRouter: Routes = [
  {path: '' , redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes' , component: RecipesComponent},
  {path: 'shopping-list' , component: ShoppingListComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouter)
  ],
  exports :[
    RouterModule
  ]
})

export class AppRoutingModule { }
