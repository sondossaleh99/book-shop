import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SelectRecipeComponent } from './recipes/select-recipe/select-recipe.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const appRouter: Routes = [
  {path: '' , redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes' , 
    component: RecipesComponent,
    children: [
      {path: '', component: SelectRecipeComponent, pathMatch: 'full'},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipesDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent},
    ]
  },
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
