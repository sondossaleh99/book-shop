import { Ingredients } from "../shared/ingredients.model";

export class Recipe {
    public id: number;
    public name: string;
    public decreption: string;
    public imagePath: string;
    public ingredients: Ingredients[];

    constructor (id: number, name:string, desc: string, imgPath: string, ingredients: Ingredients[]) {
        this.id = id;
        this.name = name;
        this.decreption = desc;
        this.imagePath = imgPath;
        this.ingredients= ingredients;
    }
}

