import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent {

  id: number;
  isEdit  = false;
  constructor(private rout: ActivatedRoute){}

  ngOnInit () {
    this.rout.params.subscribe(
      (params: Params) => {
        console.log("S" + params['id']);
        this.id = +params['id'];
        this.isEdit = params['id'] != null;        
      }
    )
  }
}
