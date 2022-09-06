import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes :Recipe[]=[new Recipe('Pizza','Make your own pizzas now','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=960,872?quality=90&webp=true&resize=375,341'),
  new Recipe('Samosa','Know more about Samosa','https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=509&height=340')]
  constructor() { }

  ngOnInit(): void {
  }
  onRecipe(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
